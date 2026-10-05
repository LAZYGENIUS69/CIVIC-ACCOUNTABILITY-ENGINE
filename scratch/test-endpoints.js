const http = require('http');

function post(path, body) {
  return new Promise((resolve, reject) => {
    const postData = JSON.stringify(body);
    const req = http.request({
      hostname: 'localhost',
      port: 3000,
      path: path,
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Content-Length': Buffer.byteLength(postData)
      }
    }, (res) => {
      let data = '';
      res.on('data', (chunk) => data += chunk);
      res.on('end', () => {
        resolve({ statusCode: res.statusCode, body: data });
      });
    });
    req.on('error', reject);
    req.write(postData);
    req.end();
  });
}

async function run() {
  console.log("=== TESTING /api/generate-complaint ===");
  try {
    const res = await post('/api/generate-complaint', {
      issue: {
        issueType: "pothole",
        severity: 4,
        responsibleDepartment: "BBMP",
        description: "Massive pothole at crossroad",
        estimatedSLADays: 7
      },
      wardName: "Koramangala",
      city: "Bangalore",
      reporterName: "Concerned Citizen"
    });
    console.log("Status:", res.statusCode);
    console.log("Body:", JSON.stringify(JSON.parse(res.body), null, 2));
  } catch (e) {
    console.error(e);
  }

  console.log("\n=== TESTING /api/generate-rti ===");
  try {
    const res = await post('/api/generate-rti', {
      issue: {
        issueType: "pothole",
        severity: 4,
        responsibleDepartment: "BBMP",
        description: "Massive pothole at crossroad"
      },
      wardName: "Koramangala",
      city: "Bangalore",
      reportedAt: "2026-06-15",
      slaDeadline: "2026-06-22"
    });
    console.log("Status:", res.statusCode);
    console.log("Body:", JSON.stringify(JSON.parse(res.body), null, 2));
  } catch (e) {
    console.error(e);
  }

  console.log("\n=== TESTING /api/insights ===");
  try {
    const res = await post('/api/insights', {
      wardName: "Koramangala",
      civicScore: 35,
      totalIssues: 10,
      resolvedIssues: 4,
      slaBreaches: 6,
      topCategories: "Roads, Garbage"
    });
    console.log("Status:", res.statusCode);
    console.log("Body:", JSON.stringify(JSON.parse(res.body), null, 2));
  } catch (e) {
    console.error(e);
  }
}

run();
