export interface Ward {
  wardId: string;
  wardNumber: number;
  name: string;
  civicScore: number;
  totalIssues: number;
  resolvedIssues: number;
  coordinates: [number, number];
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
    ]
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
    ]
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
    ]
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
    ]
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
    ]
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
    ]
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
    ]
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
    ]
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
    ]
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
    ]
  }
];
