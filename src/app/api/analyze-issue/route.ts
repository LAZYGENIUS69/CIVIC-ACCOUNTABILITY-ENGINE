import { GoogleGenerativeAI } from '@google/generative-ai';
import { NextRequest } from 'next/server';
import dns from 'dns';

dns.setDefaultResultOrder('ipv4first');

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY!);

export async function POST(req: NextRequest) {
  try {
    const { imageBase64, mimeType } = await req.json();
    
    // Strip data url prefix if present
    let cleanBase64 = imageBase64;
    if (imageBase64 && imageBase64.includes(';base64,')) {
      cleanBase64 = imageBase64.split(';base64,')[1];
    }

    const model = genAI.getGenerativeModel({ 
      model: 'gemini-2.5-flash'
    });

    const prompt = `You are a civic infrastructure analyst for Indian cities.
Analyze this photo of a civic issue carefully.
Return ONLY a valid JSON object. No markdown. No backticks. No explanation.
{
  "issueType": "pothole|streetlight|water|garbage|encroachment|other",
  "severity": 1,
  "description": "2 sentence formal description of the visible issue",
  "responsibleDepartment": "BBMP|BESCOM|BWSSB|PWD|other",
  "estimatedSLADays": 7,
  "urgencyReason": "one sentence explaining why this needs urgent attention",
  "suggestedAction": "one sentence recommended immediate action"
}`;

    const result = await model.generateContent([
      { inlineData: { data: cleanBase64, mimeType: mimeType || 'image/jpeg' } },
      prompt
    ]);

    const text = result.response.text();
    const clean = text.replace(/```json|```/g, '').trim();
    
    try {
      const parsed = JSON.parse(clean);
      return Response.json({ success: true, data: parsed });
    } catch {
      return Response.json({ 
        success: false, 
        error: 'Parse failed',
        raw: clean 
      });
    }
  } catch (error: any) {
    return Response.json({ success: false, error: error.message || String(error) }, { status: 500 });
  }
}
