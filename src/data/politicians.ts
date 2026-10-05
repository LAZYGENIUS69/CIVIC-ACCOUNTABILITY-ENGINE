export interface Politician {
  wardId: string;
  name: string;
  party: 'INC' | 'BJP';
  constituency: string;
  criminalCases: number;
  assets: string;
  accountabilityScore: number;
  myNetaUrl: string;
}

export const POLITICIANS: Record<string, Politician> = {
  "ward-186": {
    "wardId": "ward-186",
    "name": "Ramalinga Reddy",
    "party": "INC",
    "constituency": "BTM Layout Constituency",
    "criminalCases": 3,
    "assets": "₹47 CR",
    "accountabilityScore": 22,
    "myNetaUrl": "https://www.myneta.info/Karnataka2023/candidate.php?candidate_id=2313"
  },
  "ward-110": {
    "wardId": "ward-110",
    "name": "Arvind Limbavali",
    "party": "BJP",
    "constituency": "Mahadevapura Constituency",
    "criminalCases": 2,
    "assets": "₹65 CR",
    "accountabilityScore": 18,
    "myNetaUrl": "https://www.myneta.info/karnataka2018/candidate.php?candidate_id=6091"
  },
  "ward-70": {
    "wardId": "ward-70",
    "name": "Byrathi Suresh",
    "party": "INC",
    "constituency": "Hebbal Constituency",
    "criminalCases": 5,
    "assets": "₹89 CR",
    "accountabilityScore": 67,
    "myNetaUrl": "https://www.myneta.info/Karnataka2023/candidate.php?candidate_id=7994"
  },
  "ward-228": {
    "wardId": "ward-228",
    "name": "Ramesh Kumar",
    "party": "INC",
    "constituency": "Srinivaspur Constituency",
    "criminalCases": 2,
    "assets": "₹53 CR",
    "accountabilityScore": 15,
    "myNetaUrl": "https://www.myneta.info/Karnataka2023/candidate.php?candidate_id=8344"
  },
  "ward-198": {
    "wardId": "ward-198",
    "name": "M. Krishnappa",
    "party": "BJP",
    "constituency": "Bangalore South Constituency",
    "criminalCases": 1,
    "assets": "₹24 CR",
    "accountabilityScore": 74,
    "myNetaUrl": "https://www.myneta.info/Karnataka2023/candidate.php?candidate_id=7121"
  },
  "ward-120": {
    "wardId": "ward-120",
    "name": "S. Raghu",
    "party": "BJP",
    "constituency": "C.V. Raman Nagar Constituency",
    "criminalCases": 0,
    "assets": "₹18 CR",
    "accountabilityScore": 58,
    "myNetaUrl": "https://www.myneta.info/Karnataka2023/candidate.php?candidate_id=7163"
  },
  "ward-232": {
    "wardId": "ward-232",
    "name": "Satish Reddy",
    "party": "BJP",
    "constituency": "Bommanahalli Constituency",
    "criminalCases": 4,
    "assets": "₹38 CR",
    "accountabilityScore": 45,
    "myNetaUrl": "https://www.myneta.info/Karnataka2023/candidate.php?candidate_id=8577"
  },
  "ward-196": {
    "wardId": "ward-196",
    "name": "C.K. Ramamurthy",
    "party": "BJP",
    "constituency": "Jayanagar Constituency",
    "criminalCases": 1,
    "assets": "₹12 CR",
    "accountabilityScore": 81,
    "myNetaUrl": "https://www.myneta.info/Karnataka2023/candidate.php?candidate_id=7401"
  },
  "ward-61": {
    "wardId": "ward-61",
    "name": "C.N. Ashwath Narayan",
    "party": "BJP",
    "constituency": "Malleshwaram Constituency",
    "criminalCases": 2,
    "assets": "₹29 CR",
    "accountabilityScore": 62,
    "myNetaUrl": "https://www.myneta.info/Karnataka2018/candidate.php?candidate_id=5813"
  },
  "ward-128": {
    "wardId": "ward-128",
    "name": "Rizwan Arshad",
    "party": "INC",
    "constituency": "Shivajinagar Constituency",
    "criminalCases": 1,
    "assets": "₹33 CR",
    "accountabilityScore": 53,
    "myNetaUrl": "https://www.myneta.info/Karnataka2023/candidate.php?candidate_id=7875"
  },
  "ward-mumbai-colaba": {
    "wardId": "ward-mumbai-colaba",
    "name": "Rajesh Gupta",
    "party": "INC",
    "constituency": "Colaba Constituency",
    "criminalCases": 0,
    "assets": "₹94 CR",
    "accountabilityScore": 28,
    "myNetaUrl": "https://www.myneta.info/"
  },
  "ward-mumbai-bandra": {
    "wardId": "ward-mumbai-bandra",
    "name": "Anil Deshmukh",
    "party": "INC",
    "constituency": "Bandra Constituency",
    "criminalCases": 0,
    "assets": "₹62 CR",
    "accountabilityScore": 64,
    "myNetaUrl": "https://www.myneta.info/"
  },
  "ward-mumbai-andheri": {
    "wardId": "ward-mumbai-andheri",
    "name": "Sunil Verma",
    "party": "BJP",
    "constituency": "Andheri Constituency",
    "criminalCases": 1,
    "assets": "₹73 CR",
    "accountabilityScore": 41,
    "myNetaUrl": "https://www.myneta.info/"
  },
  "ward-mumbai-juhu": {
    "wardId": "ward-mumbai-juhu",
    "name": "Karan Singh",
    "party": "INC",
    "constituency": "Juhu Constituency",
    "criminalCases": 0,
    "assets": "₹6 CR",
    "accountabilityScore": 72,
    "myNetaUrl": "https://www.myneta.info/"
  },
  "ward-mumbai-dadar": {
    "wardId": "ward-mumbai-dadar",
    "name": "Karan Pandey",
    "party": "INC",
    "constituency": "Dadar Constituency",
    "criminalCases": 0,
    "assets": "₹88 CR",
    "accountabilityScore": 76,
    "myNetaUrl": "https://www.myneta.info/"
  },
  "ward-mumbai-powai": {
    "wardId": "ward-mumbai-powai",
    "name": "Rajesh Gupta",
    "party": "INC",
    "constituency": "Powai Constituency",
    "criminalCases": 0,
    "assets": "₹54 CR",
    "accountabilityScore": 52,
    "myNetaUrl": "https://www.myneta.info/"
  },
  "ward-delhi-connaughtplace": {
    "wardId": "ward-delhi-connaughtplace",
    "name": "Manoj Sharma",
    "party": "INC",
    "constituency": "Connaught Place Constituency",
    "criminalCases": 2,
    "assets": "₹8 CR",
    "accountabilityScore": 26,
    "myNetaUrl": "https://www.myneta.info/"
  },
  "ward-delhi-karolbagh": {
    "wardId": "ward-delhi-karolbagh",
    "name": "Suresh Joshi",
    "party": "BJP",
    "constituency": "Karol Bagh Constituency",
    "criminalCases": 1,
    "assets": "₹23 CR",
    "accountabilityScore": 61,
    "myNetaUrl": "https://www.myneta.info/"
  },
  "ward-delhi-saket": {
    "wardId": "ward-delhi-saket",
    "name": "Vivek Singh",
    "party": "INC",
    "constituency": "Saket Constituency",
    "criminalCases": 0,
    "assets": "₹26 CR",
    "accountabilityScore": 44,
    "myNetaUrl": "https://www.myneta.info/"
  },
  "ward-delhi-vasantkunj": {
    "wardId": "ward-delhi-vasantkunj",
    "name": "Dinesh Mishra",
    "party": "BJP",
    "constituency": "Vasant Kunj Constituency",
    "criminalCases": 3,
    "assets": "₹27 CR",
    "accountabilityScore": 43,
    "myNetaUrl": "https://www.myneta.info/"
  },
  "ward-delhi-dwarka": {
    "wardId": "ward-delhi-dwarka",
    "name": "Manoj Sharma",
    "party": "INC",
    "constituency": "Dwarka Constituency",
    "criminalCases": 2,
    "assets": "₹64 CR",
    "accountabilityScore": 22,
    "myNetaUrl": "https://www.myneta.info/"
  },
  "ward-delhi-lajpatnagar": {
    "wardId": "ward-delhi-lajpatnagar",
    "name": "Harish Reddy",
    "party": "BJP",
    "constituency": "Lajpat Nagar Constituency",
    "criminalCases": 1,
    "assets": "₹11 CR",
    "accountabilityScore": 37,
    "myNetaUrl": "https://www.myneta.info/"
  },
  "ward-chennai-adyar": {
    "wardId": "ward-chennai-adyar",
    "name": "Dinesh Joshi",
    "party": "BJP",
    "constituency": "Adyar Constituency",
    "criminalCases": 3,
    "assets": "₹27 CR",
    "accountabilityScore": 67,
    "myNetaUrl": "https://www.myneta.info/"
  },
  "ward-chennai-tnagar": {
    "wardId": "ward-chennai-tnagar",
    "name": "Amit Choudhury",
    "party": "BJP",
    "constituency": "T. Nagar Constituency",
    "criminalCases": 1,
    "assets": "₹49 CR",
    "accountabilityScore": 37,
    "myNetaUrl": "https://www.myneta.info/"
  },
  "ward-chennai-mylapore": {
    "wardId": "ward-chennai-mylapore",
    "name": "Harish Reddy",
    "party": "BJP",
    "constituency": "Mylapore Constituency",
    "criminalCases": 1,
    "assets": "₹73 CR",
    "accountabilityScore": 29,
    "myNetaUrl": "https://www.myneta.info/"
  },
  "ward-chennai-velachery": {
    "wardId": "ward-chennai-velachery",
    "name": "Vijay Reddy",
    "party": "BJP",
    "constituency": "Velachery Constituency",
    "criminalCases": 3,
    "assets": "₹91 CR",
    "accountabilityScore": 79,
    "myNetaUrl": "https://www.myneta.info/"
  },
  "ward-chennai-annanagar": {
    "wardId": "ward-chennai-annanagar",
    "name": "Sunil Choudhury",
    "party": "BJP",
    "constituency": "Anna Nagar Constituency",
    "criminalCases": 1,
    "assets": "₹77 CR",
    "accountabilityScore": 49,
    "myNetaUrl": "https://www.myneta.info/"
  },
  "ward-chennai-nungambakkam": {
    "wardId": "ward-chennai-nungambakkam",
    "name": "Suresh Joshi",
    "party": "BJP",
    "constituency": "Nungambakkam Constituency",
    "criminalCases": 1,
    "assets": "₹85 CR",
    "accountabilityScore": 45,
    "myNetaUrl": "https://www.myneta.info/"
  },
  "ward-hyderabad-gachibowli": {
    "wardId": "ward-hyderabad-gachibowli",
    "name": "Vijay Mishra",
    "party": "BJP",
    "constituency": "Gachibowli Constituency",
    "criminalCases": 3,
    "assets": "₹73 CR",
    "accountabilityScore": 55,
    "myNetaUrl": "https://www.myneta.info/"
  },
  "ward-hyderabad-jubileehills": {
    "wardId": "ward-hyderabad-jubileehills",
    "name": "Vivek Pandey",
    "party": "INC",
    "constituency": "Jubilee Hills Constituency",
    "criminalCases": 0,
    "assets": "₹34 CR",
    "accountabilityScore": 36,
    "myNetaUrl": "https://www.myneta.info/"
  },
  "ward-hyderabad-banjarahills": {
    "wardId": "ward-hyderabad-banjarahills",
    "name": "Suresh Joshi",
    "party": "BJP",
    "constituency": "Banjara Hills Constituency",
    "criminalCases": 1,
    "assets": "₹27 CR",
    "accountabilityScore": 73,
    "myNetaUrl": "https://www.myneta.info/"
  },
  "ward-hyderabad-hiteccity": {
    "wardId": "ward-hyderabad-hiteccity",
    "name": "Manoj Sharma",
    "party": "INC",
    "constituency": "Hitec City Constituency",
    "criminalCases": 2,
    "assets": "₹20 CR",
    "accountabilityScore": 30,
    "myNetaUrl": "https://www.myneta.info/"
  },
  "ward-hyderabad-secunderabad": {
    "wardId": "ward-hyderabad-secunderabad",
    "name": "Arvind Patel",
    "party": "BJP",
    "constituency": "Secunderabad Constituency",
    "criminalCases": 3,
    "assets": "₹39 CR",
    "accountabilityScore": 47,
    "myNetaUrl": "https://www.myneta.info/"
  },
  "ward-hyderabad-begumpet": {
    "wardId": "ward-hyderabad-begumpet",
    "name": "Vijay Nair",
    "party": "BJP",
    "constituency": "Begumpet Constituency",
    "criminalCases": 3,
    "assets": "₹49 CR",
    "accountabilityScore": 71,
    "myNetaUrl": "https://www.myneta.info/"
  },
  "ward-kolkata-saltlake": {
    "wardId": "ward-kolkata-saltlake",
    "name": "Suresh Verma",
    "party": "BJP",
    "constituency": "Salt Lake Constituency",
    "criminalCases": 1,
    "assets": "₹31 CR",
    "accountabilityScore": 61,
    "myNetaUrl": "https://www.myneta.info/"
  },
  "ward-kolkata-parkstreet": {
    "wardId": "ward-kolkata-parkstreet",
    "name": "Dinesh Patel",
    "party": "BJP",
    "constituency": "Park Street Constituency",
    "criminalCases": 3,
    "assets": "₹73 CR",
    "accountabilityScore": 59,
    "myNetaUrl": "https://www.myneta.info/"
  },
  "ward-kolkata-howrah": {
    "wardId": "ward-kolkata-howrah",
    "name": "Dinesh Patel",
    "party": "BJP",
    "constituency": "Howrah Constituency",
    "criminalCases": 3,
    "assets": "₹21 CR",
    "accountabilityScore": 79,
    "myNetaUrl": "https://www.myneta.info/"
  },
  "ward-kolkata-ballygunge": {
    "wardId": "ward-kolkata-ballygunge",
    "name": "Anil Gupta",
    "party": "INC",
    "constituency": "Ballygunge Constituency",
    "criminalCases": 0,
    "assets": "₹92 CR",
    "accountabilityScore": 64,
    "myNetaUrl": "https://www.myneta.info/"
  },
  "ward-kolkata-newtown": {
    "wardId": "ward-kolkata-newtown",
    "name": "Prakash Rao",
    "party": "INC",
    "constituency": "New Town Constituency",
    "criminalCases": 2,
    "assets": "₹44 CR",
    "accountabilityScore": 58,
    "myNetaUrl": "https://www.myneta.info/"
  },
  "ward-kolkata-behala": {
    "wardId": "ward-kolkata-behala",
    "name": "Amit Reddy",
    "party": "BJP",
    "constituency": "Behala Constituency",
    "criminalCases": 1,
    "assets": "₹27 CR",
    "accountabilityScore": 53,
    "myNetaUrl": "https://www.myneta.info/"
  },
  "ward-pune-kothrud": {
    "wardId": "ward-pune-kothrud",
    "name": "Suresh Verma",
    "party": "BJP",
    "constituency": "Kothrud Constituency",
    "criminalCases": 1,
    "assets": "₹79 CR",
    "accountabilityScore": 21,
    "myNetaUrl": "https://www.myneta.info/"
  },
  "ward-pune-koregaonpark": {
    "wardId": "ward-pune-koregaonpark",
    "name": "Ramesh Sharma",
    "party": "INC",
    "constituency": "Koregaon Park Constituency",
    "criminalCases": 2,
    "assets": "₹26 CR",
    "accountabilityScore": 46,
    "myNetaUrl": "https://www.myneta.info/"
  },
  "ward-pune-hinjewadi": {
    "wardId": "ward-pune-hinjewadi",
    "name": "Dinesh Mishra",
    "party": "BJP",
    "constituency": "Hinjewadi Constituency",
    "criminalCases": 3,
    "assets": "₹39 CR",
    "accountabilityScore": 27,
    "myNetaUrl": "https://www.myneta.info/"
  },
  "ward-pune-vimannagar": {
    "wardId": "ward-pune-vimannagar",
    "name": "Vivek Singh",
    "party": "INC",
    "constituency": "Viman Nagar Constituency",
    "criminalCases": 0,
    "assets": "₹76 CR",
    "accountabilityScore": 60,
    "myNetaUrl": "https://www.myneta.info/"
  },
  "ward-pune-shivajinagar": {
    "wardId": "ward-pune-shivajinagar",
    "name": "Suresh Joshi",
    "party": "BJP",
    "constituency": "Shivajinagar Constituency",
    "criminalCases": 1,
    "assets": "₹45 CR",
    "accountabilityScore": 33,
    "myNetaUrl": "https://www.myneta.info/"
  },
  "ward-pune-aundh": {
    "wardId": "ward-pune-aundh",
    "name": "Prakash Mehta",
    "party": "INC",
    "constituency": "Aundh Constituency",
    "criminalCases": 2,
    "assets": "₹62 CR",
    "accountabilityScore": 66,
    "myNetaUrl": "https://www.myneta.info/"
  },
  "ward-ahmedabad-satellite": {
    "wardId": "ward-ahmedabad-satellite",
    "name": "Arvind Verma",
    "party": "BJP",
    "constituency": "Satellite Constituency",
    "criminalCases": 3,
    "assets": "₹45 CR",
    "accountabilityScore": 27,
    "myNetaUrl": "https://www.myneta.info/"
  },
  "ward-ahmedabad-vastrapur": {
    "wardId": "ward-ahmedabad-vastrapur",
    "name": "Sanjay Rao",
    "party": "INC",
    "constituency": "Vastrapur Constituency",
    "criminalCases": 2,
    "assets": "₹78 CR",
    "accountabilityScore": 50,
    "myNetaUrl": "https://www.myneta.info/"
  },
  "ward-ahmedabad-cgroad": {
    "wardId": "ward-ahmedabad-cgroad",
    "name": "Sanjay Mehta",
    "party": "INC",
    "constituency": "C.G. Road Constituency",
    "criminalCases": 2,
    "assets": "₹94 CR",
    "accountabilityScore": 54,
    "myNetaUrl": "https://www.myneta.info/"
  },
  "ward-ahmedabad-maninagar": {
    "wardId": "ward-ahmedabad-maninagar",
    "name": "Ramesh Mehta",
    "party": "INC",
    "constituency": "Maninagar Constituency",
    "criminalCases": 2,
    "assets": "₹12 CR",
    "accountabilityScore": 26,
    "myNetaUrl": "https://www.myneta.info/"
  },
  "ward-ahmedabad-navrangpura": {
    "wardId": "ward-ahmedabad-navrangpura",
    "name": "Subhash Yadav",
    "party": "BJP",
    "constituency": "Navrangpura Constituency",
    "criminalCases": 3,
    "assets": "₹87 CR",
    "accountabilityScore": 59,
    "myNetaUrl": "https://www.myneta.info/"
  },
  "ward-ahmedabad-bodakdev": {
    "wardId": "ward-ahmedabad-bodakdev",
    "name": "Anil Deshmukh",
    "party": "INC",
    "constituency": "Bodakdev Constituency",
    "criminalCases": 0,
    "assets": "₹52 CR",
    "accountabilityScore": 44,
    "myNetaUrl": "https://www.myneta.info/"
  },
  "ward-jaipur-cscheme": {
    "wardId": "ward-jaipur-cscheme",
    "name": "Subhash Yadav",
    "party": "BJP",
    "constituency": "C-Scheme Constituency",
    "criminalCases": 3,
    "assets": "₹15 CR",
    "accountabilityScore": 51,
    "myNetaUrl": "https://www.myneta.info/"
  },
  "ward-jaipur-malviyanagar": {
    "wardId": "ward-jaipur-malviyanagar",
    "name": "Karan Pandey",
    "party": "INC",
    "constituency": "Malviya Nagar Constituency",
    "criminalCases": 0,
    "assets": "₹56 CR",
    "accountabilityScore": 64,
    "myNetaUrl": "https://www.myneta.info/"
  },
  "ward-jaipur-vaishalinagar": {
    "wardId": "ward-jaipur-vaishalinagar",
    "name": "Rajesh Deshmukh",
    "party": "INC",
    "constituency": "Vaishali Nagar Constituency",
    "criminalCases": 0,
    "assets": "₹38 CR",
    "accountabilityScore": 68,
    "myNetaUrl": "https://www.myneta.info/"
  },
  "ward-jaipur-mansarovar": {
    "wardId": "ward-jaipur-mansarovar",
    "name": "Prakash Rao",
    "party": "INC",
    "constituency": "Mansarovar Constituency",
    "criminalCases": 2,
    "assets": "₹94 CR",
    "accountabilityScore": 70,
    "myNetaUrl": "https://www.myneta.info/"
  },
  "ward-jaipur-rajapark": {
    "wardId": "ward-jaipur-rajapark",
    "name": "Anil Deshmukh",
    "party": "INC",
    "constituency": "Raja Park Constituency",
    "criminalCases": 0,
    "assets": "₹18 CR",
    "accountabilityScore": 76,
    "myNetaUrl": "https://www.myneta.info/"
  },
  "ward-jaipur-banipark": {
    "wardId": "ward-jaipur-banipark",
    "name": "Rajesh Deshmukh",
    "party": "INC",
    "constituency": "Bani Park Constituency",
    "criminalCases": 0,
    "assets": "₹18 CR",
    "accountabilityScore": 64,
    "myNetaUrl": "https://www.myneta.info/"
  },
  "ward-lucknow-hazratganj": {
    "wardId": "ward-lucknow-hazratganj",
    "name": "Ramesh Sharma",
    "party": "INC",
    "constituency": "Hazratganj Constituency",
    "criminalCases": 2,
    "assets": "₹76 CR",
    "accountabilityScore": 74,
    "myNetaUrl": "https://www.myneta.info/"
  },
  "ward-lucknow-gomtinagar": {
    "wardId": "ward-lucknow-gomtinagar",
    "name": "Subhash Choudhury",
    "party": "BJP",
    "constituency": "Gomti Nagar Constituency",
    "criminalCases": 3,
    "assets": "₹15 CR",
    "accountabilityScore": 67,
    "myNetaUrl": "https://www.myneta.info/"
  },
  "ward-lucknow-aliganj": {
    "wardId": "ward-lucknow-aliganj",
    "name": "Vivek Deshmukh",
    "party": "INC",
    "constituency": "Aliganj Constituency",
    "criminalCases": 0,
    "assets": "₹60 CR",
    "accountabilityScore": 76,
    "myNetaUrl": "https://www.myneta.info/"
  },
  "ward-lucknow-indiranagar": {
    "wardId": "ward-lucknow-indiranagar",
    "name": "Sanjay Mehta",
    "party": "INC",
    "constituency": "Indira Nagar Constituency",
    "criminalCases": 2,
    "assets": "₹26 CR",
    "accountabilityScore": 50,
    "myNetaUrl": "https://www.myneta.info/"
  },
  "ward-lucknow-aminabad": {
    "wardId": "ward-lucknow-aminabad",
    "name": "Sunil Choudhury",
    "party": "BJP",
    "constituency": "Aminabad Constituency",
    "criminalCases": 1,
    "assets": "₹85 CR",
    "accountabilityScore": 77,
    "myNetaUrl": "https://www.myneta.info/"
  },
  "ward-lucknow-jankipuram": {
    "wardId": "ward-lucknow-jankipuram",
    "name": "Vivek Gupta",
    "party": "INC",
    "constituency": "Jankipuram Constituency",
    "criminalCases": 0,
    "assets": "₹38 CR",
    "accountabilityScore": 44,
    "myNetaUrl": "https://www.myneta.info/"
  }
};
