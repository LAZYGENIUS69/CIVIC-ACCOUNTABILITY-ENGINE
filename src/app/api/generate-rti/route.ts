import { GoogleGenerativeAI } from '@google/generative-ai';
import { NextRequest } from 'next/server';
import dns from 'dns';

dns.setDefaultResultOrder('ipv4first');

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY!);

export async function POST(req: NextRequest) {
  try {
    const {
      issueType,
      wardName,
      city,
      address,
      coordinates,
      reportedAt,
      slaDeadline,
      department,
      description,
      severity,
      reporterName,
      issueId
    } = await req.json();

    const model = genAI.getGenerativeModel({ model: 'gemini-2.5-flash' });
    
    // Parse coordinates safely
    const lat = Array.isArray(coordinates) ? coordinates[1] : (coordinates as any)?.lat ?? 0;
    const lng = Array.isArray(coordinates) ? coordinates[0] : (coordinates as any)?.lng ?? 0;
    const today = new Date().toLocaleDateString('en-IN');

    const prompt = `Generate a formal RTI application using this exact template. Make sure to fill in all brackets correctly.

To,
The Public Information Officer,
${department},
${city}

Subject: RTI Application under Section 6(1) of Right to Information Act, 2005

Respected Sir/Madam,

I, ${reporterName || 'Concerned Citizen'}, a citizen of India, hereby request the following information under Section 6(1) of the RTI Act, 2005:

1. Current status of civic complaint regarding ${issueType} at ${address}, ${wardName}, ${city} filed on ${reportedAt} (Complaint Reference: ${issueId})

2. Name and designation of the officer assigned to resolve this complaint

3. Specific action taken by ${department} from ${reportedAt} to present date

4. Reason for non-resolution beyond stipulated SLA of 7 days (Deadline was: ${slaDeadline})

5. Budget allocated for ${issueType} maintenance in ${wardName} ward for current fiscal year 2025-26

6. Number of similar complaints received in ${wardName} ward in last 6 months and their resolution status

The issue was reported at coordinates:
Latitude: ${lat}, Longitude: ${lng}
Severity: ${severity}/5
Description: ${description}

I am enclosing an application fee of Rs. 10/- as required under the RTI Act.

This information may be provided within 30 days as mandated under Section 7(1) of the RTI Act, 2005.

Yours faithfully,
${reporterName || 'Concerned Citizen'}
Date: ${today}
Contact: [Applicant to fill]

Return plain text only. No markdown formatting. No extra comments outside the letter.`;

    const result = await model.generateContent(prompt);
    return Response.json({ 
      success: true, 
      rti: result.response.text().trim() 
    });
  } catch (error: any) {
    return Response.json({ success: false, error: error.message || String(error) }, { status: 500 });
  }
}
