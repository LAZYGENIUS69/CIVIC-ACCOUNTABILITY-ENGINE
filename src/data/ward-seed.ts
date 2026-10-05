export interface Ward {
  wardId: string;
  wardNumber: number;
  name: string;
  civicScore: number;
  totalIssues: number;
  resolvedIssues: number;
  coordinates: [number, number];
  city?: string;
}

export const WARDS: Ward[] = [
  {
    "wardId": "ward-186",
    "wardNumber": 186,
    "name": "Koramangala",
    "civicScore": 31,
    "totalIssues": 47,
    "resolvedIssues": 11,
    "coordinates": [
      77.62780761041661,
      12.93463464583334
    ],
    "city": "Bangalore"
  },
  {
    "wardId": "ward-198",
    "wardNumber": 198,
    "name": "JP Nagar",
    "civicScore": 74,
    "totalIssues": 23,
    "resolvedIssues": 17,
    "coordinates": [
      77.59556745840709,
      12.910463866371671
    ],
    "city": "Bangalore"
  },
  {
    "wardId": "ward-120",
    "wardNumber": 120,
    "name": "Indiranagar",
    "civicScore": 58,
    "totalIssues": 31,
    "resolvedIssues": 18,
    "coordinates": [
      77.63451600285715,
      12.97939786971428
    ],
    "city": "Bangalore"
  },
  {
    "wardId": "ward-110",
    "wardNumber": 110,
    "name": "Whitefield",
    "civicScore": 22,
    "totalIssues": 54,
    "resolvedIssues": 12,
    "coordinates": [
      77.73298989845566,
      12.969979536100386
    ],
    "city": "Bangalore"
  },
  {
    "wardId": "ward-70",
    "wardNumber": 70,
    "name": "Hebbal",
    "civicScore": 67,
    "totalIssues": 19,
    "resolvedIssues": 13,
    "coordinates": [
      77.59371117252253,
      13.033911973423425
    ],
    "city": "Bangalore"
  },
  {
    "wardId": "ward-232",
    "wardNumber": 232,
    "name": "HSR Layout",
    "civicScore": 45,
    "totalIssues": 38,
    "resolvedIssues": 17,
    "coordinates": [
      77.64316356988502,
      12.890386011724145
    ],
    "city": "Bangalore"
  },
  {
    "wardId": "ward-196",
    "wardNumber": 196,
    "name": "Jayanagar",
    "civicScore": 81,
    "totalIssues": 16,
    "resolvedIssues": 13,
    "coordinates": [
      77.58972587186307,
      12.929202480228142
    ],
    "city": "Bangalore"
  },
  {
    "wardId": "ward-61",
    "wardNumber": 61,
    "name": "Malleshwaram",
    "civicScore": 62,
    "totalIssues": 27,
    "resolvedIssues": 17,
    "coordinates": [
      77.56043815179486,
      13.017899307692302
    ],
    "city": "Bangalore"
  },
  {
    "wardId": "ward-228",
    "wardNumber": 228,
    "name": "Electronic City",
    "civicScore": 18,
    "totalIssues": 61,
    "resolvedIssues": 11,
    "coordinates": [
      77.66109548055556,
      12.872323308641985
    ],
    "city": "Bangalore"
  },
  {
    "wardId": "ward-128",
    "wardNumber": 128,
    "name": "Shivajinagar",
    "civicScore": 53,
    "totalIssues": 29,
    "resolvedIssues": 15,
    "coordinates": [
      77.58766402000002,
      12.989194337142854
    ],
    "city": "Bangalore"
  },
  {
    "wardId": "ward-mumbai-colaba",
    "wardNumber": 300,
    "name": "Colaba",
    "civicScore": 28,
    "totalIssues": 28,
    "resolvedIssues": 8,
    "coordinates": [
      72.8258,
      18.9067
    ],
    "city": "Mumbai"
  },
  {
    "wardId": "ward-mumbai-bandra",
    "wardNumber": 301,
    "name": "Bandra",
    "civicScore": 64,
    "totalIssues": 34,
    "resolvedIssues": 22,
    "coordinates": [
      72.84,
      19.0544
    ],
    "city": "Mumbai"
  },
  {
    "wardId": "ward-mumbai-andheri",
    "wardNumber": 302,
    "name": "Andheri",
    "civicScore": 41,
    "totalIssues": 41,
    "resolvedIssues": 17,
    "coordinates": [
      72.86,
      19.12
    ],
    "city": "Mumbai"
  },
  {
    "wardId": "ward-mumbai-juhu",
    "wardNumber": 303,
    "name": "Juhu",
    "civicScore": 72,
    "totalIssues": 42,
    "resolvedIssues": 30,
    "coordinates": [
      72.8275,
      19.1
    ],
    "city": "Mumbai"
  },
  {
    "wardId": "ward-mumbai-dadar",
    "wardNumber": 304,
    "name": "Dadar",
    "civicScore": 76,
    "totalIssues": 46,
    "resolvedIssues": 35,
    "coordinates": [
      72.8422,
      19.0178
    ],
    "city": "Mumbai"
  },
  {
    "wardId": "ward-mumbai-powai",
    "wardNumber": 305,
    "name": "Powai",
    "civicScore": 52,
    "totalIssues": 22,
    "resolvedIssues": 11,
    "coordinates": [
      72.908,
      19.1176
    ],
    "city": "Mumbai"
  },
  {
    "wardId": "ward-delhi-connaughtplace",
    "wardNumber": 306,
    "name": "Connaught Place",
    "civicScore": 26,
    "totalIssues": 26,
    "resolvedIssues": 7,
    "coordinates": [
      77.2167,
      28.63
    ],
    "city": "Delhi"
  },
  {
    "wardId": "ward-delhi-karolbagh",
    "wardNumber": 307,
    "name": "Karol Bagh",
    "civicScore": 61,
    "totalIssues": 31,
    "resolvedIssues": 19,
    "coordinates": [
      77.19,
      28.65
    ],
    "city": "Delhi"
  },
  {
    "wardId": "ward-delhi-saket",
    "wardNumber": 308,
    "name": "Saket",
    "civicScore": 44,
    "totalIssues": 44,
    "resolvedIssues": 19,
    "coordinates": [
      77.2089,
      28.5244
    ],
    "city": "Delhi"
  },
  {
    "wardId": "ward-delhi-vasantkunj",
    "wardNumber": 309,
    "name": "Vasant Kunj",
    "civicScore": 43,
    "totalIssues": 43,
    "resolvedIssues": 18,
    "coordinates": [
      77.15,
      28.54
    ],
    "city": "Delhi"
  },
  {
    "wardId": "ward-delhi-dwarka",
    "wardNumber": 310,
    "name": "Dwarka",
    "civicScore": 22,
    "totalIssues": 22,
    "resolvedIssues": 5,
    "coordinates": [
      77.06,
      28.59
    ],
    "city": "Delhi"
  },
  {
    "wardId": "ward-delhi-lajpatnagar",
    "wardNumber": 311,
    "name": "Lajpat Nagar",
    "civicScore": 37,
    "totalIssues": 37,
    "resolvedIssues": 14,
    "coordinates": [
      77.24,
      28.57
    ],
    "city": "Delhi"
  },
  {
    "wardId": "ward-chennai-adyar",
    "wardNumber": 312,
    "name": "Adyar",
    "civicScore": 67,
    "totalIssues": 37,
    "resolvedIssues": 25,
    "coordinates": [
      80.25,
      13
    ],
    "city": "Chennai"
  },
  {
    "wardId": "ward-chennai-tnagar",
    "wardNumber": 313,
    "name": "T. Nagar",
    "civicScore": 37,
    "totalIssues": 37,
    "resolvedIssues": 14,
    "coordinates": [
      80.23,
      13.04
    ],
    "city": "Chennai"
  },
  {
    "wardId": "ward-chennai-mylapore",
    "wardNumber": 314,
    "name": "Mylapore",
    "civicScore": 29,
    "totalIssues": 29,
    "resolvedIssues": 8,
    "coordinates": [
      80.26,
      13.02
    ],
    "city": "Chennai"
  },
  {
    "wardId": "ward-chennai-velachery",
    "wardNumber": 315,
    "name": "Velachery",
    "civicScore": 79,
    "totalIssues": 49,
    "resolvedIssues": 39,
    "coordinates": [
      80.22,
      12.98
    ],
    "city": "Chennai"
  },
  {
    "wardId": "ward-chennai-annanagar",
    "wardNumber": 316,
    "name": "Anna Nagar",
    "civicScore": 49,
    "totalIssues": 49,
    "resolvedIssues": 24,
    "coordinates": [
      80.21,
      13.08
    ],
    "city": "Chennai"
  },
  {
    "wardId": "ward-chennai-nungambakkam",
    "wardNumber": 317,
    "name": "Nungambakkam",
    "civicScore": 45,
    "totalIssues": 45,
    "resolvedIssues": 20,
    "coordinates": [
      80.24,
      13.06
    ],
    "city": "Chennai"
  },
  {
    "wardId": "ward-hyderabad-gachibowli",
    "wardNumber": 318,
    "name": "Gachibowli",
    "civicScore": 55,
    "totalIssues": 25,
    "resolvedIssues": 14,
    "coordinates": [
      78.3489,
      17.44
    ],
    "city": "Hyderabad"
  },
  {
    "wardId": "ward-hyderabad-jubileehills",
    "wardNumber": 319,
    "name": "Jubilee Hills",
    "civicScore": 36,
    "totalIssues": 36,
    "resolvedIssues": 13,
    "coordinates": [
      78.4,
      17.43
    ],
    "city": "Hyderabad"
  },
  {
    "wardId": "ward-hyderabad-banjarahills",
    "wardNumber": 320,
    "name": "Banjara Hills",
    "civicScore": 73,
    "totalIssues": 43,
    "resolvedIssues": 31,
    "coordinates": [
      78.43,
      17.42
    ],
    "city": "Hyderabad"
  },
  {
    "wardId": "ward-hyderabad-hiteccity",
    "wardNumber": 321,
    "name": "Hitec City",
    "civicScore": 30,
    "totalIssues": 30,
    "resolvedIssues": 9,
    "coordinates": [
      78.37,
      17.45
    ],
    "city": "Hyderabad"
  },
  {
    "wardId": "ward-hyderabad-secunderabad",
    "wardNumber": 322,
    "name": "Secunderabad",
    "civicScore": 47,
    "totalIssues": 47,
    "resolvedIssues": 22,
    "coordinates": [
      78.5,
      17.45
    ],
    "city": "Hyderabad"
  },
  {
    "wardId": "ward-hyderabad-begumpet",
    "wardNumber": 323,
    "name": "Begumpet",
    "civicScore": 71,
    "totalIssues": 41,
    "resolvedIssues": 29,
    "coordinates": [
      78.46,
      17.44
    ],
    "city": "Hyderabad"
  },
  {
    "wardId": "ward-kolkata-saltlake",
    "wardNumber": 324,
    "name": "Salt Lake",
    "civicScore": 61,
    "totalIssues": 31,
    "resolvedIssues": 19,
    "coordinates": [
      88.42,
      22.58
    ],
    "city": "Kolkata"
  },
  {
    "wardId": "ward-kolkata-parkstreet",
    "wardNumber": 325,
    "name": "Park Street",
    "civicScore": 59,
    "totalIssues": 29,
    "resolvedIssues": 17,
    "coordinates": [
      88.35,
      22.55
    ],
    "city": "Kolkata"
  },
  {
    "wardId": "ward-kolkata-howrah",
    "wardNumber": 326,
    "name": "Howrah",
    "civicScore": 79,
    "totalIssues": 49,
    "resolvedIssues": 39,
    "coordinates": [
      88.33,
      22.6
    ],
    "city": "Kolkata"
  },
  {
    "wardId": "ward-kolkata-ballygunge",
    "wardNumber": 327,
    "name": "Ballygunge",
    "civicScore": 64,
    "totalIssues": 34,
    "resolvedIssues": 22,
    "coordinates": [
      88.37,
      22.53
    ],
    "city": "Kolkata"
  },
  {
    "wardId": "ward-kolkata-newtown",
    "wardNumber": 328,
    "name": "New Town",
    "civicScore": 58,
    "totalIssues": 28,
    "resolvedIssues": 16,
    "coordinates": [
      88.47,
      22.58
    ],
    "city": "Kolkata"
  },
  {
    "wardId": "ward-kolkata-behala",
    "wardNumber": 329,
    "name": "Behala",
    "civicScore": 53,
    "totalIssues": 23,
    "resolvedIssues": 12,
    "coordinates": [
      88.31,
      22.5
    ],
    "city": "Kolkata"
  },
  {
    "wardId": "ward-pune-kothrud",
    "wardNumber": 330,
    "name": "Kothrud",
    "civicScore": 21,
    "totalIssues": 21,
    "resolvedIssues": 4,
    "coordinates": [
      73.81,
      18.5
    ],
    "city": "Pune"
  },
  {
    "wardId": "ward-pune-koregaonpark",
    "wardNumber": 331,
    "name": "Koregaon Park",
    "civicScore": 46,
    "totalIssues": 46,
    "resolvedIssues": 21,
    "coordinates": [
      73.89,
      18.54
    ],
    "city": "Pune"
  },
  {
    "wardId": "ward-pune-hinjewadi",
    "wardNumber": 332,
    "name": "Hinjewadi",
    "civicScore": 27,
    "totalIssues": 27,
    "resolvedIssues": 7,
    "coordinates": [
      73.72,
      18.59
    ],
    "city": "Pune"
  },
  {
    "wardId": "ward-pune-vimannagar",
    "wardNumber": 333,
    "name": "Viman Nagar",
    "civicScore": 60,
    "totalIssues": 30,
    "resolvedIssues": 18,
    "coordinates": [
      73.91,
      18.56
    ],
    "city": "Pune"
  },
  {
    "wardId": "ward-pune-shivajinagar",
    "wardNumber": 334,
    "name": "Shivajinagar",
    "civicScore": 33,
    "totalIssues": 33,
    "resolvedIssues": 11,
    "coordinates": [
      73.84,
      18.53
    ],
    "city": "Pune"
  },
  {
    "wardId": "ward-pune-aundh",
    "wardNumber": 335,
    "name": "Aundh",
    "civicScore": 66,
    "totalIssues": 36,
    "resolvedIssues": 24,
    "coordinates": [
      73.8,
      18.56
    ],
    "city": "Pune"
  },
  {
    "wardId": "ward-ahmedabad-satellite",
    "wardNumber": 336,
    "name": "Satellite",
    "civicScore": 27,
    "totalIssues": 27,
    "resolvedIssues": 7,
    "coordinates": [
      72.52,
      23.03
    ],
    "city": "Ahmedabad"
  },
  {
    "wardId": "ward-ahmedabad-vastrapur",
    "wardNumber": 337,
    "name": "Vastrapur",
    "civicScore": 50,
    "totalIssues": 20,
    "resolvedIssues": 10,
    "coordinates": [
      72.53,
      23.04
    ],
    "city": "Ahmedabad"
  },
  {
    "wardId": "ward-ahmedabad-cgroad",
    "wardNumber": 338,
    "name": "C.G. Road",
    "civicScore": 54,
    "totalIssues": 24,
    "resolvedIssues": 13,
    "coordinates": [
      72.56,
      23.03
    ],
    "city": "Ahmedabad"
  },
  {
    "wardId": "ward-ahmedabad-maninagar",
    "wardNumber": 339,
    "name": "Maninagar",
    "civicScore": 26,
    "totalIssues": 26,
    "resolvedIssues": 7,
    "coordinates": [
      72.6,
      22.99
    ],
    "city": "Ahmedabad"
  },
  {
    "wardId": "ward-ahmedabad-navrangpura",
    "wardNumber": 340,
    "name": "Navrangpura",
    "civicScore": 59,
    "totalIssues": 29,
    "resolvedIssues": 17,
    "coordinates": [
      72.55,
      23.04
    ],
    "city": "Ahmedabad"
  },
  {
    "wardId": "ward-ahmedabad-bodakdev",
    "wardNumber": 341,
    "name": "Bodakdev",
    "civicScore": 44,
    "totalIssues": 44,
    "resolvedIssues": 19,
    "coordinates": [
      72.51,
      23.04
    ],
    "city": "Ahmedabad"
  },
  {
    "wardId": "ward-jaipur-cscheme",
    "wardNumber": 342,
    "name": "C-Scheme",
    "civicScore": 51,
    "totalIssues": 21,
    "resolvedIssues": 11,
    "coordinates": [
      75.8,
      26.91
    ],
    "city": "Jaipur"
  },
  {
    "wardId": "ward-jaipur-malviyanagar",
    "wardNumber": 343,
    "name": "Malviya Nagar",
    "civicScore": 64,
    "totalIssues": 34,
    "resolvedIssues": 22,
    "coordinates": [
      75.82,
      26.85
    ],
    "city": "Jaipur"
  },
  {
    "wardId": "ward-jaipur-vaishalinagar",
    "wardNumber": 344,
    "name": "Vaishali Nagar",
    "civicScore": 68,
    "totalIssues": 38,
    "resolvedIssues": 26,
    "coordinates": [
      75.74,
      26.92
    ],
    "city": "Jaipur"
  },
  {
    "wardId": "ward-jaipur-mansarovar",
    "wardNumber": 345,
    "name": "Mansarovar",
    "civicScore": 70,
    "totalIssues": 40,
    "resolvedIssues": 28,
    "coordinates": [
      75.75,
      26.85
    ],
    "city": "Jaipur"
  },
  {
    "wardId": "ward-jaipur-rajapark",
    "wardNumber": 346,
    "name": "Raja Park",
    "civicScore": 76,
    "totalIssues": 46,
    "resolvedIssues": 35,
    "coordinates": [
      75.83,
      26.9
    ],
    "city": "Jaipur"
  },
  {
    "wardId": "ward-jaipur-banipark",
    "wardNumber": 347,
    "name": "Bani Park",
    "civicScore": 64,
    "totalIssues": 34,
    "resolvedIssues": 22,
    "coordinates": [
      75.79,
      26.93
    ],
    "city": "Jaipur"
  },
  {
    "wardId": "ward-lucknow-hazratganj",
    "wardNumber": 348,
    "name": "Hazratganj",
    "civicScore": 74,
    "totalIssues": 44,
    "resolvedIssues": 33,
    "coordinates": [
      80.9462,
      26.8467
    ],
    "city": "Lucknow"
  },
  {
    "wardId": "ward-lucknow-gomtinagar",
    "wardNumber": 349,
    "name": "Gomti Nagar",
    "civicScore": 67,
    "totalIssues": 37,
    "resolvedIssues": 25,
    "coordinates": [
      80.9984,
      26.8617
    ],
    "city": "Lucknow"
  },
  {
    "wardId": "ward-lucknow-aliganj",
    "wardNumber": 350,
    "name": "Aliganj",
    "civicScore": 76,
    "totalIssues": 46,
    "resolvedIssues": 35,
    "coordinates": [
      80.9388,
      26.8908
    ],
    "city": "Lucknow"
  },
  {
    "wardId": "ward-lucknow-indiranagar",
    "wardNumber": 351,
    "name": "Indira Nagar",
    "civicScore": 50,
    "totalIssues": 20,
    "resolvedIssues": 10,
    "coordinates": [
      80.9888,
      26.8808
    ],
    "city": "Lucknow"
  },
  {
    "wardId": "ward-lucknow-aminabad",
    "wardNumber": 352,
    "name": "Aminabad",
    "civicScore": 77,
    "totalIssues": 47,
    "resolvedIssues": 36,
    "coordinates": [
      80.925,
      26.845
    ],
    "city": "Lucknow"
  },
  {
    "wardId": "ward-lucknow-jankipuram",
    "wardNumber": 353,
    "name": "Jankipuram",
    "civicScore": 44,
    "totalIssues": 44,
    "resolvedIssues": 19,
    "coordinates": [
      80.95,
      26.92
    ],
    "city": "Lucknow"
  }
];
