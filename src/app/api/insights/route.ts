import { GoogleGenerativeAI } from '@google/generative-ai';
import { NextRequest } from 'next/server';
import dns from 'dns';

dns.setDefaultResultOrder('ipv4first');

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY!);

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const model = genAI.getGenerativeModel({ model: 'gemini-2.5-flash' });

    if (body.description) {
      const prompt = `You are a civic rights analyst for Indian municipal governance.
Analyze this civic issue description and return ONLY valid JSON. No markdown. No backticks.
{
  "responsibleDepartment": "Name of the government body responsible (e.g. BBMP, BESCOM, BWSSB, PWD, Police, or other)",
  "relevantAct": "Specific law or act protecting citizens (e.g., Karnataka Municipal Corporations Act 1976, Section 58)",
  "helpline": "Helpline number (e.g. BBMP: 1533 | BESCOM: 1912 | BWSSB: 1916 | Police: 100)",
  "slaDays": 7,
  "rtiEligibility": "Summary of eligibility to file RTI under Section 6(1) if unresolved within SLA"
}

Issue: ${body.description}`;

      const result = await model.generateContent(prompt);
      const text = result.response.text();
      const clean = text.replace(/```json|```/g, '').trim();
      try {
        return Response.json({ success: true, data: JSON.parse(clean) });
      } catch {
        return Response.json({ success: false, error: 'Parse failed', raw: clean });
      }
    }

    const { wardName, civicScore, totalIssues, 
            resolvedIssues, slaBreaches, topCategories } = body;

    const prompt = `You are a civic intelligence analyst for Indian municipal governance.
Analyze this ward data and return ONLY valid JSON. No markdown. No backticks.
{
  "summary": "2 sentence ward performance summary",
  "prediction": "specific infrastructure failure prediction for next 30 days with location details",
  "priorityAction": "single most important action for ward officer this week",
  "riskLevel": "low|medium|high|critical",
  "estimatedImpact": "estimated number of citizens affected",
  "trend": "improving|stable|declining"
}

Ward: ${wardName}
Civic Score: ${civicScore}/100
Total Issues: ${totalIssues}
Resolved: ${resolvedIssues}
SLA Breaches: ${slaBreaches}
Top Issue Categories: ${topCategories}`;

    const result = await model.generateContent(prompt);
    const text = result.response.text();
    const clean = text.replace(/```json|```/g, '').trim();
    
    try {
      return Response.json({ success: true, data: JSON.parse(clean) });
    } catch (e: any) {
      return Response.json({ success: false, error: 'Parse failed', raw: clean });
    }
  } catch (error: any) {
    return Response.json({ success: false, error: error.message || String(error) }, { status: 500 });
  }
}
