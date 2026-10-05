import dns from 'dns';
dns.setDefaultResultOrder('ipv4first');

import { GoogleGenerativeAI } from '@google/generative-ai';

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY!);

export async function GET() {
  try {
    const model = genAI.getGenerativeModel({ model: 'gemini-2.5-flash' });
    const result = await model.generateContent('Say "NagarAI Gemini connected" and nothing else');
    return Response.json({ 
      success: true, 
      message: result.response.text() 
    });
  } catch (error) {
    return Response.json({ 
      success: false, 
      error: String(error) 
    });
  }
}
