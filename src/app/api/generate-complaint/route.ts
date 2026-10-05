import { GoogleGenerativeAI } from '@google/generative-ai';
import { NextRequest } from 'next/server';
import dns from 'dns';
import { getContact } from '@/data/department-contacts';

dns.setDefaultResultOrder('ipv4first');

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY!);

export async function POST(req: NextRequest) {
  try {
    const { issue, wardName, city, reporterName } = await req.json();
    const model = genAI.getGenerativeModel({ model: 'gemini-2.5-flash' });
    const contact = getContact(city, issue.issueType);

    const prompt = `Generate a formal complaint letter for this civic issue in India.

Issue Type: ${issue.issueType}
Location: ${wardName}, ${city}
Severity: ${issue.severity}/5
Target Department: ${contact.department}
Department Address: ${contact.address}
Department Email: ${contact.email || 'N/A'}
Department Phone: ${contact.phone}
Description: ${issue.description}
Date: ${new Date().toLocaleDateString('en-IN')}
Reporter: ${reporterName || 'Concerned Citizen'}

Write an official Indian government complaint letter with:
- Proper salutation to department head at ${contact.department}
- Clear subject line referencing location and issue
- Formal complaint body with specific details
- Prayer clause requesting resolution in ${issue.estimatedSLADays} days
- Reference to citizen rights under Municipal Corporation Act
- Signature block

Return plain text only. No markdown. No backticks.`;

    const result = await model.generateContent(prompt);
    return Response.json({ 
      success: true, 
      complaint: result.response.text().trim() 
    });
  } catch (error: any) {
    return Response.json({ success: false, error: error.message || String(error) }, { status: 500 });
  }
}
