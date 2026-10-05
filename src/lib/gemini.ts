import https from 'https';
import dns from 'dns';

// Force DNS to use IPv4 first to prevent Next.js IPv6 routing timeouts
const ipv4Agent = new https.Agent({
  keepAlive: true,
  lookup: (hostname, opts, callback) => {
    const lookupOpts = typeof opts === 'object' ? { ...opts, family: 4 } : { family: 4 };
    dns.lookup(hostname, lookupOpts, callback);
  }
});

export function callGeminiAPI(payload: {
  contents: any[];
  systemInstruction?: any;
}): Promise<any> {
  return new Promise((resolve, reject) => {
    const key = process.env.GEMINI_API_KEY;
    if (!key) {
      reject(new Error('GEMINI_API_KEY environment variable is not defined'));
      return;
    }

    const urlPath = `/v1beta/models/gemini-2.5-flash:generateContent?key=${key}`;
    const postData = JSON.stringify(payload);

    const options = {
      hostname: 'generativelanguage.googleapis.com',
      port: 443,
      path: urlPath,
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Content-Length': Buffer.byteLength(postData)
      },
      agent: ipv4Agent
    };

    const req = https.request(options, (res) => {
      let data = '';
      res.on('data', (chunk) => { data += chunk; });
      res.on('end', () => {
        if (res.statusCode && res.statusCode >= 200 && res.statusCode < 300) {
          try {
            resolve(JSON.parse(data));
          } catch (e: any) {
            reject(new Error(`Failed to parse JSON response: ${e.message}`));
          }
        } else {
          reject(new Error(`Gemini API returned status ${res.statusCode}: ${data}`));
        }
      });
    });

    req.on('error', (err) => {
      reject(err);
    });

    req.write(postData);
    req.end();
  });
}
