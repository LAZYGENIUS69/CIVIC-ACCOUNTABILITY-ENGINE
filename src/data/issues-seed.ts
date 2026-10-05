export interface Issue {
  id: string;
  wardId: string;
  category: 'Roads' | 'Streetlights' | 'Water' | 'Garbage' | 'Drainage';
  title: string;
  description: string;
  status: 'open' | 'in-progress' | 'resolved';
  createdAt: string;
  coordinates: [number, number];
}

export const ISSUES: Issue[] = [
  {
    "id": "issue-gen-1000",
    "wardId": "ward-none-mumbai",
    "title": "Hazardous Potholes on Main Road (Colaba, Mumbai)",
    "description": "Multiple deep craters causing accidents and traffic bottle-necks during peak hours.",
    "status": "open",
    "category": "Roads",
    "coordinates": [
        72.82214293339592,
        18.906282099346434
    ],
    "createdAt": "2026-06-10"
},
  {
    "id": "issue-gen-1001",
    "wardId": "ward-none-mumbai",
    "title": "Flickering and Damaged Pole Lamp (Bandra, Mumbai)",
    "description": "The lamp head is broken and sparks intermittently when it rains.",
    "status": "in-progress",
    "category": "Streetlights",
    "coordinates": [
        72.84341795404637,
        19.050982942535526
    ],
    "createdAt": "2026-06-11"
},
  {
    "id": "issue-gen-1002",
    "wardId": "ward-none-mumbai",
    "title": "Sewage-Contaminated Tap Water Supply (Andheri, Mumbai)",
    "description": "Drinking water smells strongly of sewage and has a blackish hue since the pipe repair.",
    "status": "resolved",
    "category": "Water",
    "coordinates": [
        72.86136788876443,
        19.122130573739522
    ],
    "createdAt": "2026-06-12"
},
  {
    "id": "issue-gen-1003",
    "wardId": "ward-none-mumbai",
    "title": "Uncollected Waste Pile Burning (Juhu, Mumbai)",
    "description": "Local sweepers are burning dry leaves and plastic trash, causing toxic smoke columns.",
    "status": "open",
    "category": "Garbage",
    "coordinates": [
        72.82792707622893,
        19.09617778997204
    ],
    "createdAt": "2026-06-13"
},
  {
    "id": "issue-gen-1004",
    "wardId": "ward-none-mumbai",
    "title": "Overflowing Stormwater Drain Blockage (Dadar, Mumbai)",
    "description": "Silt and plastic refuse blocking the drain entrance, flooding the lane with mud during minor showers.",
    "status": "in-progress",
    "category": "Drainage",
    "coordinates": [
        72.8459894176891,
        19.019100972302727
    ],
    "createdAt": "2026-06-14"
},
  {
    "id": "issue-gen-1005",
    "wardId": "ward-none-mumbai",
    "title": "Incomplete Road Surfacing Work (Powai, Mumbai)",
    "description": "Contractor left the road scraped and unpaved, causing massive dust suspension and vehicle damage.",
    "status": "resolved",
    "category": "Roads",
    "coordinates": [
        72.90987476722566,
        19.115980694741168
    ],
    "createdAt": "2026-06-15"
},
  {
    "id": "issue-gen-1006",
    "wardId": "ward-none-mumbai",
    "title": "Complete Dark Stretch on Sector Road (Borivali, Mumbai)",
    "description": "None of the streetlights are functional for a 500m stretch, raising serious safety concerns.",
    "status": "open",
    "category": "Streetlights",
    "coordinates": [
        72.85501063021842,
        19.233991896464552
    ],
    "createdAt": "2026-06-16"
},
  {
    "id": "issue-gen-1007",
    "wardId": "ward-none-mumbai",
    "title": "No Water Supply for 3 Consecutive Days (Chembur, Mumbai)",
    "description": "Municipal supply line is dry, forcing residents to rely heavily on expensive private tankers.",
    "status": "in-progress",
    "category": "Water",
    "coordinates": [
        72.89949317200283,
        19.06515950157921
    ],
    "createdAt": "2026-06-17"
},
  {
    "id": "issue-gen-1008",
    "wardId": "ward-none-mumbai",
    "title": "Overflowing Garbage Dumpster on Corner (Kurla, Mumbai)",
    "description": "Garbage is piled high on the street, attracting stray dogs and generating a terrible stench.",
    "status": "resolved",
    "category": "Garbage",
    "coordinates": [
        72.87656199144462,
        19.069760949816878
    ],
    "createdAt": "2026-06-18"
},
  {
    "id": "issue-gen-1009",
    "wardId": "ward-none-mumbai",
    "title": "Bubbling Sewage from Open Manhole (Malad, Mumbai)",
    "description": "Main sewer line blocked, black sewage water flooding the sidewalk.",
    "status": "open",
    "category": "Drainage",
    "coordinates": [
        72.84396607359977,
        19.180348306706506
    ],
    "createdAt": "2026-06-19"
},
  {
    "id": "issue-gen-1010",
    "wardId": "ward-none-mumbai",
    "title": "Hazardous Potholes on Main Road (Colaba, Mumbai)",
    "description": "Multiple deep craters causing accidents and traffic bottle-necks during peak hours.",
    "status": "in-progress",
    "category": "Roads",
    "coordinates": [
        72.82735576969695,
        18.903430488946864
    ],
    "createdAt": "2026-06-20"
},
  {
    "id": "issue-gen-1011",
    "wardId": "ward-none-mumbai",
    "title": "Flickering and Damaged Pole Lamp (Bandra, Mumbai)",
    "description": "The lamp head is broken and sparks intermittently when it rains.",
    "status": "resolved",
    "category": "Streetlights",
    "coordinates": [
        72.83914781165895,
        19.052239336667228
    ],
    "createdAt": "2026-06-21"
},
  {
    "id": "issue-gen-1012",
    "wardId": "ward-none-mumbai",
    "title": "Sewage-Contaminated Tap Water Supply (Andheri, Mumbai)",
    "description": "Drinking water smells strongly of sewage and has a blackish hue since the pipe repair.",
    "status": "open",
    "category": "Water",
    "coordinates": [
        72.85687932897456,
        19.118273133688685
    ],
    "createdAt": "2026-06-22"
},
  {
    "id": "issue-gen-1013",
    "wardId": "ward-none-mumbai",
    "title": "Uncollected Waste Pile Burning (Juhu, Mumbai)",
    "description": "Local sweepers are burning dry leaves and plastic trash, causing toxic smoke columns.",
    "status": "in-progress",
    "category": "Garbage",
    "coordinates": [
        72.82639942076929,
        19.099409828638322
    ],
    "createdAt": "2026-06-23"
},
  {
    "id": "issue-gen-1014",
    "wardId": "ward-none-mumbai",
    "title": "Overflowing Stormwater Drain Blockage (Dadar, Mumbai)",
    "description": "Silt and plastic refuse blocking the drain entrance, flooding the lane with mud during minor showers.",
    "status": "resolved",
    "category": "Drainage",
    "coordinates": [
        72.84042808023766,
        19.021476827311425
    ],
    "createdAt": "2026-06-24"
},
  {
    "id": "issue-gen-1015",
    "wardId": "ward-none-mumbai",
    "title": "Incomplete Road Surfacing Work (Powai, Mumbai)",
    "description": "Contractor left the road scraped and unpaved, causing massive dust suspension and vehicle damage.",
    "status": "open",
    "category": "Roads",
    "coordinates": [
        72.90534672603752,
        19.114881842200845
    ],
    "createdAt": "2026-06-10"
},
  {
    "id": "issue-gen-1016",
    "wardId": "ward-none-mumbai",
    "title": "Complete Dark Stretch on Sector Road (Borivali, Mumbai)",
    "description": "None of the streetlights are functional for a 500m stretch, raising serious safety concerns.",
    "status": "in-progress",
    "category": "Streetlights",
    "coordinates": [
        72.85946122257735,
        19.231734339180306
    ],
    "createdAt": "2026-06-11"
},
  {
    "id": "issue-gen-1017",
    "wardId": "ward-none-mumbai",
    "title": "No Water Supply for 3 Consecutive Days (Chembur, Mumbai)",
    "description": "Municipal supply line is dry, forcing residents to rely heavily on expensive private tankers.",
    "status": "resolved",
    "category": "Water",
    "coordinates": [
        72.8962659661488,
        19.05942623215603
    ],
    "createdAt": "2026-06-12"
},
  {
    "id": "issue-gen-1018",
    "wardId": "ward-none-delhi",
    "title": "Hazardous Potholes on Main Road (Connaught Place, Delhi)",
    "description": "Multiple deep craters causing accidents and traffic bottle-necks during peak hours.",
    "status": "open",
    "category": "Roads",
    "coordinates": [
        77.21674837863527,
        28.628659231139945
    ],
    "createdAt": "2026-06-10"
},
  {
    "id": "issue-gen-1019",
    "wardId": "ward-none-delhi",
    "title": "Flickering and Damaged Pole Lamp (Karol Bagh, Delhi)",
    "description": "The lamp head is broken and sparks intermittently when it rains.",
    "status": "in-progress",
    "category": "Streetlights",
    "coordinates": [
        77.18919719953409,
        28.64878218213586
    ],
    "createdAt": "2026-06-11"
},
  {
    "id": "issue-gen-1020",
    "wardId": "ward-none-delhi",
    "title": "Sewage-Contaminated Tap Water Supply (Saket, Delhi)",
    "description": "Drinking water smells strongly of sewage and has a blackish hue since the pipe repair.",
    "status": "resolved",
    "category": "Water",
    "coordinates": [
        77.20703061378671,
        28.526422197595323
    ],
    "createdAt": "2026-06-12"
},
  {
    "id": "issue-gen-1021",
    "wardId": "ward-none-delhi",
    "title": "Uncollected Waste Pile Burning (Vasant Kunj, Delhi)",
    "description": "Local sweepers are burning dry leaves and plastic trash, causing toxic smoke columns.",
    "status": "open",
    "category": "Garbage",
    "coordinates": [
        77.15143889443046,
        28.540060366568387
    ],
    "createdAt": "2026-06-13"
},
  {
    "id": "issue-gen-1022",
    "wardId": "ward-none-delhi",
    "title": "Overflowing Stormwater Drain Blockage (Dwarka, Delhi)",
    "description": "Silt and plastic refuse blocking the drain entrance, flooding the lane with mud during minor showers.",
    "status": "in-progress",
    "category": "Drainage",
    "coordinates": [
        77.05945406556646,
        28.589934760639455
    ],
    "createdAt": "2026-06-14"
},
  {
    "id": "issue-gen-1023",
    "wardId": "ward-none-delhi",
    "title": "Incomplete Road Surfacing Work (Chandni Chowk, Delhi)",
    "description": "Contractor left the road scraped and unpaved, causing massive dust suspension and vehicle damage.",
    "status": "resolved",
    "category": "Roads",
    "coordinates": [
        77.23065448143939,
        28.660650581828463
    ],
    "createdAt": "2026-06-15"
},
  {
    "id": "issue-gen-1024",
    "wardId": "ward-none-delhi",
    "title": "Complete Dark Stretch on Sector Road (Lajpat Nagar, Delhi)",
    "description": "None of the streetlights are functional for a 500m stretch, raising serious safety concerns.",
    "status": "open",
    "category": "Streetlights",
    "coordinates": [
        77.23904459035882,
        28.568865054779017
    ],
    "createdAt": "2026-06-16"
},
  {
    "id": "issue-gen-1025",
    "wardId": "ward-none-delhi",
    "title": "No Water Supply for 3 Consecutive Days (Rohini, Delhi)",
    "description": "Municipal supply line is dry, forcing residents to rely heavily on expensive private tankers.",
    "status": "in-progress",
    "category": "Water",
    "coordinates": [
        77.11888437213958,
        28.709577174624815
    ],
    "createdAt": "2026-06-17"
},
  {
    "id": "issue-gen-1026",
    "wardId": "ward-none-delhi",
    "title": "Overflowing Garbage Dumpster on Corner (Greater Kailash, Delhi)",
    "description": "Garbage is piled high on the street, attracting stray dogs and generating a terrible stench.",
    "status": "resolved",
    "category": "Garbage",
    "coordinates": [
        77.24063290856202,
        28.53073048729206
    ],
    "createdAt": "2026-06-18"
},
  {
    "id": "issue-gen-1027",
    "wardId": "ward-none-delhi",
    "title": "Bubbling Sewage from Open Manhole (Dwarka Sector 10, Delhi)",
    "description": "Main sewer line blocked, black sewage water flooding the sidewalk.",
    "status": "open",
    "category": "Drainage",
    "coordinates": [
        77.04631941512635,
        28.57714568302759
    ],
    "createdAt": "2026-06-19"
},
  {
    "id": "issue-gen-1028",
    "wardId": "ward-none-delhi",
    "title": "Hazardous Potholes on Main Road (Connaught Place, Delhi)",
    "description": "Multiple deep craters causing accidents and traffic bottle-necks during peak hours.",
    "status": "in-progress",
    "category": "Roads",
    "coordinates": [
        77.2148661466798,
        28.62721891048168
    ],
    "createdAt": "2026-06-20"
},
  {
    "id": "issue-gen-1029",
    "wardId": "ward-none-delhi",
    "title": "Flickering and Damaged Pole Lamp (Karol Bagh, Delhi)",
    "description": "The lamp head is broken and sparks intermittently when it rains.",
    "status": "resolved",
    "category": "Streetlights",
    "coordinates": [
        77.18799140488323,
        28.653714062625095
    ],
    "createdAt": "2026-06-21"
},
  {
    "id": "issue-gen-1030",
    "wardId": "ward-none-delhi",
    "title": "Sewage-Contaminated Tap Water Supply (Saket, Delhi)",
    "description": "Drinking water smells strongly of sewage and has a blackish hue since the pipe repair.",
    "status": "open",
    "category": "Water",
    "coordinates": [
        77.21137290995068,
        28.520943666990913
    ],
    "createdAt": "2026-06-22"
},
  {
    "id": "issue-gen-1031",
    "wardId": "ward-none-delhi",
    "title": "Uncollected Waste Pile Burning (Vasant Kunj, Delhi)",
    "description": "Local sweepers are burning dry leaves and plastic trash, causing toxic smoke columns.",
    "status": "in-progress",
    "category": "Garbage",
    "coordinates": [
        77.15359155099343,
        28.543542465280098
    ],
    "createdAt": "2026-06-23"
},
  {
    "id": "issue-gen-1032",
    "wardId": "ward-none-delhi",
    "title": "Overflowing Stormwater Drain Blockage (Dwarka, Delhi)",
    "description": "Silt and plastic refuse blocking the drain entrance, flooding the lane with mud during minor showers.",
    "status": "resolved",
    "category": "Drainage",
    "coordinates": [
        77.06160857245924,
        28.58798173031928
    ],
    "createdAt": "2026-06-24"
},
  {
    "id": "issue-gen-1033",
    "wardId": "ward-none-delhi",
    "title": "Incomplete Road Surfacing Work (Chandni Chowk, Delhi)",
    "description": "Contractor left the road scraped and unpaved, causing massive dust suspension and vehicle damage.",
    "status": "open",
    "category": "Roads",
    "coordinates": [
        77.22749357093814,
        28.657706766270987
    ],
    "createdAt": "2026-06-10"
},
  {
    "id": "issue-gen-1034",
    "wardId": "ward-none-delhi",
    "title": "Complete Dark Stretch on Sector Road (Lajpat Nagar, Delhi)",
    "description": "None of the streetlights are functional for a 500m stretch, raising serious safety concerns.",
    "status": "in-progress",
    "category": "Streetlights",
    "coordinates": [
        77.23897310378572,
        28.567370913752832
    ],
    "createdAt": "2026-06-11"
},
  {
    "id": "issue-gen-1035",
    "wardId": "ward-none-delhi",
    "title": "No Water Supply for 3 Consecutive Days (Rohini, Delhi)",
    "description": "Municipal supply line is dry, forcing residents to rely heavily on expensive private tankers.",
    "status": "resolved",
    "category": "Water",
    "coordinates": [
        77.11996257881145,
        28.71283771949956
    ],
    "createdAt": "2026-06-12"
},
  {
    "id": "issue-gen-1036",
    "wardId": "ward-none-chennai",
    "title": "Hazardous Potholes on Main Road (Adyar, Chennai)",
    "description": "Multiple deep craters causing accidents and traffic bottle-necks during peak hours.",
    "status": "open",
    "category": "Roads",
    "coordinates": [
        80.25017837823076,
        12.99901313042292
    ],
    "createdAt": "2026-06-10"
},
  {
    "id": "issue-gen-1037",
    "wardId": "ward-none-chennai",
    "title": "Flickering and Damaged Pole Lamp (T. Nagar, Chennai)",
    "description": "The lamp head is broken and sparks intermittently when it rains.",
    "status": "in-progress",
    "category": "Streetlights",
    "coordinates": [
        80.22722909332268,
        13.040932859282576
    ],
    "createdAt": "2026-06-11"
},
  {
    "id": "issue-gen-1038",
    "wardId": "ward-none-chennai",
    "title": "Sewage-Contaminated Tap Water Supply (Mylapore, Chennai)",
    "description": "Drinking water smells strongly of sewage and has a blackish hue since the pipe repair.",
    "status": "resolved",
    "category": "Water",
    "coordinates": [
        80.26221049259675,
        13.019615997466547
    ],
    "createdAt": "2026-06-12"
},
  {
    "id": "issue-gen-1039",
    "wardId": "ward-none-chennai",
    "title": "Uncollected Waste Pile Burning (Velachery, Chennai)",
    "description": "Local sweepers are burning dry leaves and plastic trash, causing toxic smoke columns.",
    "status": "open",
    "category": "Garbage",
    "coordinates": [
        80.21756525376108,
        12.982431837605102
    ],
    "createdAt": "2026-06-13"
},
  {
    "id": "issue-gen-1040",
    "wardId": "ward-none-chennai",
    "title": "Overflowing Stormwater Drain Blockage (Anna Nagar, Chennai)",
    "description": "Silt and plastic refuse blocking the drain entrance, flooding the lane with mud during minor showers.",
    "status": "in-progress",
    "category": "Drainage",
    "coordinates": [
        80.21289521135161,
        13.077516241200051
    ],
    "createdAt": "2026-06-14"
},
  {
    "id": "issue-gen-1041",
    "wardId": "ward-none-chennai",
    "title": "Incomplete Road Surfacing Work (Nungambakkam, Chennai)",
    "description": "Contractor left the road scraped and unpaved, causing massive dust suspension and vehicle damage.",
    "status": "resolved",
    "category": "Roads",
    "coordinates": [
        80.2360911540344,
        13.062573095203282
    ],
    "createdAt": "2026-06-15"
},
  {
    "id": "issue-gen-1042",
    "wardId": "ward-none-chennai",
    "title": "Complete Dark Stretch on Sector Road (Guindy, Chennai)",
    "description": "None of the streetlights are functional for a 500m stretch, raising serious safety concerns.",
    "status": "open",
    "category": "Streetlights",
    "coordinates": [
        80.22344527172488,
        13.011863396196764
    ],
    "createdAt": "2026-06-16"
},
  {
    "id": "issue-gen-1043",
    "wardId": "ward-none-chennai",
    "title": "No Water Supply for 3 Consecutive Days (Royapettah, Chennai)",
    "description": "Municipal supply line is dry, forcing residents to rely heavily on expensive private tankers.",
    "status": "in-progress",
    "category": "Water",
    "coordinates": [
        80.26149251935767,
        13.048290486682816
    ],
    "createdAt": "2026-06-17"
},
  {
    "id": "issue-gen-1044",
    "wardId": "ward-none-chennai",
    "title": "Overflowing Garbage Dumpster on Corner (Besant Nagar, Chennai)",
    "description": "Garbage is piled high on the street, attracting stray dogs and generating a terrible stench.",
    "status": "resolved",
    "category": "Garbage",
    "coordinates": [
        80.2689676806647,
        12.997598609107012
    ],
    "createdAt": "2026-06-18"
},
  {
    "id": "issue-gen-1045",
    "wardId": "ward-none-chennai",
    "title": "Bubbling Sewage from Open Manhole (Tambaram East, Chennai)",
    "description": "Main sewer line blocked, black sewage water flooding the sidewalk.",
    "status": "open",
    "category": "Drainage",
    "coordinates": [
        80.12883170053102,
        12.912496307039095
    ],
    "createdAt": "2026-06-19"
},
  {
    "id": "issue-gen-1046",
    "wardId": "ward-none-chennai",
    "title": "Hazardous Potholes on Main Road (Adyar, Chennai)",
    "description": "Multiple deep craters causing accidents and traffic bottle-necks during peak hours.",
    "status": "in-progress",
    "category": "Roads",
    "coordinates": [
        80.24845836053728,
        13.003219787978619
    ],
    "createdAt": "2026-06-20"
},
  {
    "id": "issue-gen-1047",
    "wardId": "ward-none-chennai",
    "title": "Flickering and Damaged Pole Lamp (T. Nagar, Chennai)",
    "description": "The lamp head is broken and sparks intermittently when it rains.",
    "status": "resolved",
    "category": "Streetlights",
    "coordinates": [
        80.22893966862449,
        13.037762100702068
    ],
    "createdAt": "2026-06-21"
},
  {
    "id": "issue-gen-1048",
    "wardId": "ward-none-chennai",
    "title": "Sewage-Contaminated Tap Water Supply (Mylapore, Chennai)",
    "description": "Drinking water smells strongly of sewage and has a blackish hue since the pipe repair.",
    "status": "open",
    "category": "Water",
    "coordinates": [
        80.2611287887187,
        13.016930544382825
    ],
    "createdAt": "2026-06-22"
},
  {
    "id": "issue-gen-1049",
    "wardId": "ward-none-chennai",
    "title": "Uncollected Waste Pile Burning (Velachery, Chennai)",
    "description": "Local sweepers are burning dry leaves and plastic trash, causing toxic smoke columns.",
    "status": "in-progress",
    "category": "Garbage",
    "coordinates": [
        80.22122455608461,
        12.976492706973755
    ],
    "createdAt": "2026-06-23"
},
  {
    "id": "issue-gen-1050",
    "wardId": "ward-none-chennai",
    "title": "Overflowing Stormwater Drain Blockage (Anna Nagar, Chennai)",
    "description": "Silt and plastic refuse blocking the drain entrance, flooding the lane with mud during minor showers.",
    "status": "resolved",
    "category": "Drainage",
    "coordinates": [
        80.21156500826402,
        13.08252504198669
    ],
    "createdAt": "2026-06-24"
},
  {
    "id": "issue-gen-1051",
    "wardId": "ward-none-chennai",
    "title": "Incomplete Road Surfacing Work (Nungambakkam, Chennai)",
    "description": "Contractor left the road scraped and unpaved, causing massive dust suspension and vehicle damage.",
    "status": "open",
    "category": "Roads",
    "coordinates": [
        80.23778704009936,
        13.057855037520616
    ],
    "createdAt": "2026-06-10"
},
  {
    "id": "issue-gen-1052",
    "wardId": "ward-none-chennai",
    "title": "Complete Dark Stretch on Sector Road (Guindy, Chennai)",
    "description": "None of the streetlights are functional for a 500m stretch, raising serious safety concerns.",
    "status": "in-progress",
    "category": "Streetlights",
    "coordinates": [
        80.22225334242883,
        13.009839337861584
    ],
    "createdAt": "2026-06-11"
},
  {
    "id": "issue-gen-1053",
    "wardId": "ward-none-chennai",
    "title": "No Water Supply for 3 Consecutive Days (Royapettah, Chennai)",
    "description": "Municipal supply line is dry, forcing residents to rely heavily on expensive private tankers.",
    "status": "resolved",
    "category": "Water",
    "coordinates": [
        80.25886443129708,
        13.047409413383972
    ],
    "createdAt": "2026-06-12"
},
  {
    "id": "issue-gen-1054",
    "wardId": "ward-none-hyderabad",
    "title": "Hazardous Potholes on Main Road (Gachibowli, Hyderabad)",
    "description": "Multiple deep craters causing accidents and traffic bottle-necks during peak hours.",
    "status": "open",
    "category": "Roads",
    "coordinates": [
        78.34961403682387,
        17.441177084082426
    ],
    "createdAt": "2026-06-10"
},
  {
    "id": "issue-gen-1055",
    "wardId": "ward-none-hyderabad",
    "title": "Flickering and Damaged Pole Lamp (Jubilee Hills, Hyderabad)",
    "description": "The lamp head is broken and sparks intermittently when it rains.",
    "status": "in-progress",
    "category": "Streetlights",
    "coordinates": [
        78.40332110295151,
        17.428029782351558
    ],
    "createdAt": "2026-06-11"
},
  {
    "id": "issue-gen-1056",
    "wardId": "ward-none-hyderabad",
    "title": "Sewage-Contaminated Tap Water Supply (Banjara Hills, Hyderabad)",
    "description": "Drinking water smells strongly of sewage and has a blackish hue since the pipe repair.",
    "status": "resolved",
    "category": "Water",
    "coordinates": [
        78.42928289390997,
        17.423795227827682
    ],
    "createdAt": "2026-06-12"
},
  {
    "id": "issue-gen-1057",
    "wardId": "ward-none-hyderabad",
    "title": "Uncollected Waste Pile Burning (Hitec City, Hyderabad)",
    "description": "Local sweepers are burning dry leaves and plastic trash, causing toxic smoke columns.",
    "status": "open",
    "category": "Garbage",
    "coordinates": [
        78.37183091656459,
        17.453474040675196
    ],
    "createdAt": "2026-06-13"
},
  {
    "id": "issue-gen-1058",
    "wardId": "ward-none-hyderabad",
    "title": "Overflowing Stormwater Drain Blockage (Secunderabad, Hyderabad)",
    "description": "Silt and plastic refuse blocking the drain entrance, flooding the lane with mud during minor showers.",
    "status": "in-progress",
    "category": "Drainage",
    "coordinates": [
        78.4999847385073,
        17.447460370771857
    ],
    "createdAt": "2026-06-14"
},
  {
    "id": "issue-gen-1059",
    "wardId": "ward-none-hyderabad",
    "title": "Incomplete Road Surfacing Work (Begumpet, Hyderabad)",
    "description": "Contractor left the road scraped and unpaved, causing massive dust suspension and vehicle damage.",
    "status": "resolved",
    "category": "Roads",
    "coordinates": [
        78.45689510088269,
        17.440857373868823
    ],
    "createdAt": "2026-06-15"
},
  {
    "id": "issue-gen-1060",
    "wardId": "ward-none-hyderabad",
    "title": "Complete Dark Stretch on Sector Road (Charminar, Hyderabad)",
    "description": "None of the streetlights are functional for a 500m stretch, raising serious safety concerns.",
    "status": "open",
    "category": "Streetlights",
    "coordinates": [
        78.4717795868603,
        17.359729925680842
    ],
    "createdAt": "2026-06-16"
},
  {
    "id": "issue-gen-1061",
    "wardId": "ward-none-hyderabad",
    "title": "No Water Supply for 3 Consecutive Days (Kukatpally, Hyderabad)",
    "description": "Municipal supply line is dry, forcing residents to rely heavily on expensive private tankers.",
    "status": "in-progress",
    "category": "Water",
    "coordinates": [
        78.40352682075216,
        17.477605944184823
    ],
    "createdAt": "2026-06-17"
},
  {
    "id": "issue-gen-1062",
    "wardId": "ward-none-hyderabad",
    "title": "Overflowing Garbage Dumpster on Corner (Mehdipatnam, Hyderabad)",
    "description": "Garbage is piled high on the street, attracting stray dogs and generating a terrible stench.",
    "status": "resolved",
    "category": "Garbage",
    "coordinates": [
        78.43127260438727,
        17.40208436999251
    ],
    "createdAt": "2026-06-18"
},
  {
    "id": "issue-gen-1063",
    "wardId": "ward-none-hyderabad",
    "title": "Bubbling Sewage from Open Manhole (Dilsukhnagar, Hyderabad)",
    "description": "Main sewer line blocked, black sewage water flooding the sidewalk.",
    "status": "open",
    "category": "Drainage",
    "coordinates": [
        78.52148003556331,
        17.36697350544776
    ],
    "createdAt": "2026-06-19"
},
  {
    "id": "issue-gen-1064",
    "wardId": "ward-none-hyderabad",
    "title": "Hazardous Potholes on Main Road (Gachibowli, Hyderabad)",
    "description": "Multiple deep craters causing accidents and traffic bottle-necks during peak hours.",
    "status": "in-progress",
    "category": "Roads",
    "coordinates": [
        78.35011105719894,
        17.438319904855785
    ],
    "createdAt": "2026-06-20"
},
  {
    "id": "issue-gen-1065",
    "wardId": "ward-none-hyderabad",
    "title": "Flickering and Damaged Pole Lamp (Jubilee Hills, Hyderabad)",
    "description": "The lamp head is broken and sparks intermittently when it rains.",
    "status": "resolved",
    "category": "Streetlights",
    "coordinates": [
        78.39707018070952,
        17.431908373672794
    ],
    "createdAt": "2026-06-21"
},
  {
    "id": "issue-gen-1066",
    "wardId": "ward-none-hyderabad",
    "title": "Sewage-Contaminated Tap Water Supply (Banjara Hills, Hyderabad)",
    "description": "Drinking water smells strongly of sewage and has a blackish hue since the pipe repair.",
    "status": "open",
    "category": "Water",
    "coordinates": [
        78.43019092664571,
        17.421173450106778
    ],
    "createdAt": "2026-06-22"
},
  {
    "id": "issue-gen-1067",
    "wardId": "ward-none-hyderabad",
    "title": "Uncollected Waste Pile Burning (Hitec City, Hyderabad)",
    "description": "Local sweepers are burning dry leaves and plastic trash, causing toxic smoke columns.",
    "status": "in-progress",
    "category": "Garbage",
    "coordinates": [
        78.37169682177105,
        17.447033108900527
    ],
    "createdAt": "2026-06-23"
},
  {
    "id": "issue-gen-1068",
    "wardId": "ward-none-hyderabad",
    "title": "Overflowing Stormwater Drain Blockage (Secunderabad, Hyderabad)",
    "description": "Silt and plastic refuse blocking the drain entrance, flooding the lane with mud during minor showers.",
    "status": "resolved",
    "category": "Drainage",
    "coordinates": [
        78.50003234966952,
        17.448080439457968
    ],
    "createdAt": "2026-06-24"
},
  {
    "id": "issue-gen-1069",
    "wardId": "ward-none-hyderabad",
    "title": "Incomplete Road Surfacing Work (Begumpet, Hyderabad)",
    "description": "Contractor left the road scraped and unpaved, causing massive dust suspension and vehicle damage.",
    "status": "open",
    "category": "Roads",
    "coordinates": [
        78.46143380301623,
        17.4361075276584
    ],
    "createdAt": "2026-06-10"
},
  {
    "id": "issue-gen-1070",
    "wardId": "ward-none-hyderabad",
    "title": "Complete Dark Stretch on Sector Road (Charminar, Hyderabad)",
    "description": "None of the streetlights are functional for a 500m stretch, raising serious safety concerns.",
    "status": "in-progress",
    "category": "Streetlights",
    "coordinates": [
        78.471367650117,
        17.359795651396247
    ],
    "createdAt": "2026-06-11"
},
  {
    "id": "issue-gen-1071",
    "wardId": "ward-none-hyderabad",
    "title": "No Water Supply for 3 Consecutive Days (Kukatpally, Hyderabad)",
    "description": "Municipal supply line is dry, forcing residents to rely heavily on expensive private tankers.",
    "status": "resolved",
    "category": "Water",
    "coordinates": [
        78.40068127517951,
        17.477526124847497
    ],
    "createdAt": "2026-06-12"
},
  {
    "id": "issue-gen-1072",
    "wardId": "ward-none-kolkata",
    "title": "Hazardous Potholes on Main Road (Salt Lake, Kolkata)",
    "description": "Multiple deep craters causing accidents and traffic bottle-necks during peak hours.",
    "status": "open",
    "category": "Roads",
    "coordinates": [
        88.42236485141038,
        22.579647368013124
    ],
    "createdAt": "2026-06-10"
},
  {
    "id": "issue-gen-1073",
    "wardId": "ward-none-kolkata",
    "title": "Flickering and Damaged Pole Lamp (Park Street, Kolkata)",
    "description": "The lamp head is broken and sparks intermittently when it rains.",
    "status": "in-progress",
    "category": "Streetlights",
    "coordinates": [
        88.3520818018821,
        22.551807550489876
    ],
    "createdAt": "2026-06-11"
},
  {
    "id": "issue-gen-1074",
    "wardId": "ward-none-kolkata",
    "title": "Sewage-Contaminated Tap Water Supply (Gariahat, Kolkata)",
    "description": "Drinking water smells strongly of sewage and has a blackish hue since the pipe repair.",
    "status": "resolved",
    "category": "Water",
    "coordinates": [
        88.3596163702344,
        22.52257771787075
    ],
    "createdAt": "2026-06-12"
},
  {
    "id": "issue-gen-1075",
    "wardId": "ward-none-kolkata",
    "title": "Uncollected Waste Pile Burning (Howrah, Kolkata)",
    "description": "Local sweepers are burning dry leaves and plastic trash, causing toxic smoke columns.",
    "status": "open",
    "category": "Garbage",
    "coordinates": [
        88.33187673198356,
        22.601600081314356
    ],
    "createdAt": "2026-06-13"
},
  {
    "id": "issue-gen-1076",
    "wardId": "ward-none-kolkata",
    "title": "Overflowing Stormwater Drain Blockage (Ballygunge, Kolkata)",
    "description": "Silt and plastic refuse blocking the drain entrance, flooding the lane with mud during minor showers.",
    "status": "in-progress",
    "category": "Drainage",
    "coordinates": [
        88.3709133802132,
        22.526772393430566
    ],
    "createdAt": "2026-06-14"
},
  {
    "id": "issue-gen-1077",
    "wardId": "ward-none-kolkata",
    "title": "Incomplete Road Surfacing Work (Tollygunge, Kolkata)",
    "description": "Contractor left the road scraped and unpaved, causing massive dust suspension and vehicle damage.",
    "status": "resolved",
    "category": "Roads",
    "coordinates": [
        88.33782651114464,
        22.48702925682874
    ],
    "createdAt": "2026-06-15"
},
  {
    "id": "issue-gen-1078",
    "wardId": "ward-none-kolkata",
    "title": "Complete Dark Stretch on Sector Road (New Town, Kolkata)",
    "description": "None of the streetlights are functional for a 500m stretch, raising serious safety concerns.",
    "status": "open",
    "category": "Streetlights",
    "coordinates": [
        88.46720221446789,
        22.58261189254006
    ],
    "createdAt": "2026-06-16"
},
  {
    "id": "issue-gen-1079",
    "wardId": "ward-none-kolkata",
    "title": "No Water Supply for 3 Consecutive Days (Dum Dum, Kolkata)",
    "description": "Municipal supply line is dry, forcing residents to rely heavily on expensive private tankers.",
    "status": "in-progress",
    "category": "Water",
    "coordinates": [
        88.42239812395468,
        22.622564357568145
    ],
    "createdAt": "2026-06-17"
},
  {
    "id": "issue-gen-1080",
    "wardId": "ward-none-kolkata",
    "title": "Overflowing Garbage Dumpster on Corner (Behala, Kolkata)",
    "description": "Garbage is piled high on the street, attracting stray dogs and generating a terrible stench.",
    "status": "resolved",
    "category": "Garbage",
    "coordinates": [
        88.31244001466278,
        22.49845629341345
    ],
    "createdAt": "2026-06-18"
},
  {
    "id": "issue-gen-1081",
    "wardId": "ward-none-kolkata",
    "title": "Bubbling Sewage from Open Manhole (Shyambazar, Kolkata)",
    "description": "Main sewer line blocked, black sewage water flooding the sidewalk.",
    "status": "open",
    "category": "Drainage",
    "coordinates": [
        88.37048246580359,
        22.599791197511262
    ],
    "createdAt": "2026-06-19"
},
  {
    "id": "issue-gen-1082",
    "wardId": "ward-none-kolkata",
    "title": "Hazardous Potholes on Main Road (Salt Lake, Kolkata)",
    "description": "Multiple deep craters causing accidents and traffic bottle-necks during peak hours.",
    "status": "in-progress",
    "category": "Roads",
    "coordinates": [
        88.41769652247581,
        22.57688523323571
    ],
    "createdAt": "2026-06-20"
},
  {
    "id": "issue-gen-1083",
    "wardId": "ward-none-kolkata",
    "title": "Flickering and Damaged Pole Lamp (Park Street, Kolkata)",
    "description": "The lamp head is broken and sparks intermittently when it rains.",
    "status": "resolved",
    "category": "Streetlights",
    "coordinates": [
        88.35317465859484,
        22.551273654285886
    ],
    "createdAt": "2026-06-21"
},
  {
    "id": "issue-gen-1084",
    "wardId": "ward-none-kolkata",
    "title": "Sewage-Contaminated Tap Water Supply (Gariahat, Kolkata)",
    "description": "Drinking water smells strongly of sewage and has a blackish hue since the pipe repair.",
    "status": "open",
    "category": "Water",
    "coordinates": [
        88.35670107875474,
        22.517182999236358
    ],
    "createdAt": "2026-06-22"
},
  {
    "id": "issue-gen-1085",
    "wardId": "ward-none-kolkata",
    "title": "Uncollected Waste Pile Burning (Howrah, Kolkata)",
    "description": "Local sweepers are burning dry leaves and plastic trash, causing toxic smoke columns.",
    "status": "in-progress",
    "category": "Garbage",
    "coordinates": [
        88.33230012605407,
        22.59967449531641
    ],
    "createdAt": "2026-06-23"
},
  {
    "id": "issue-gen-1086",
    "wardId": "ward-none-kolkata",
    "title": "Overflowing Stormwater Drain Blockage (Ballygunge, Kolkata)",
    "description": "Silt and plastic refuse blocking the drain entrance, flooding the lane with mud during minor showers.",
    "status": "resolved",
    "category": "Drainage",
    "coordinates": [
        88.36728624971641,
        22.530424361054465
    ],
    "createdAt": "2026-06-24"
},
  {
    "id": "issue-gen-1087",
    "wardId": "ward-none-kolkata",
    "title": "Incomplete Road Surfacing Work (Tollygunge, Kolkata)",
    "description": "Contractor left the road scraped and unpaved, causing massive dust suspension and vehicle damage.",
    "status": "open",
    "category": "Roads",
    "coordinates": [
        88.3412709961387,
        22.491384921585805
    ],
    "createdAt": "2026-06-10"
},
  {
    "id": "issue-gen-1088",
    "wardId": "ward-none-kolkata",
    "title": "Complete Dark Stretch on Sector Road (New Town, Kolkata)",
    "description": "None of the streetlights are functional for a 500m stretch, raising serious safety concerns.",
    "status": "in-progress",
    "category": "Streetlights",
    "coordinates": [
        88.4683463786241,
        22.577389529985197
    ],
    "createdAt": "2026-06-11"
},
  {
    "id": "issue-gen-1089",
    "wardId": "ward-none-kolkata",
    "title": "No Water Supply for 3 Consecutive Days (Dum Dum, Kolkata)",
    "description": "Municipal supply line is dry, forcing residents to rely heavily on expensive private tankers.",
    "status": "resolved",
    "category": "Water",
    "coordinates": [
        88.41640298788074,
        22.618030087830096
    ],
    "createdAt": "2026-06-12"
},
  {
    "id": "issue-gen-1090",
    "wardId": "ward-none-pune",
    "title": "Hazardous Potholes on Main Road (Kothrud, Pune)",
    "description": "Multiple deep craters causing accidents and traffic bottle-necks during peak hours.",
    "status": "open",
    "category": "Roads",
    "coordinates": [
        73.81395001573287,
        18.500399650761295
    ],
    "createdAt": "2026-06-10"
},
  {
    "id": "issue-gen-1091",
    "wardId": "ward-none-pune",
    "title": "Flickering and Damaged Pole Lamp (Koregaon Park, Pune)",
    "description": "The lamp head is broken and sparks intermittently when it rains.",
    "status": "in-progress",
    "category": "Streetlights",
    "coordinates": [
        73.88781196717669,
        18.537258130660057
    ],
    "createdAt": "2026-06-11"
},
  {
    "id": "issue-gen-1092",
    "wardId": "ward-none-pune",
    "title": "Sewage-Contaminated Tap Water Supply (Hinjewadi, Pune)",
    "description": "Drinking water smells strongly of sewage and has a blackish hue since the pipe repair.",
    "status": "resolved",
    "category": "Water",
    "coordinates": [
        73.7207999282186,
        18.588441678047094
    ],
    "createdAt": "2026-06-12"
},
  {
    "id": "issue-gen-1093",
    "wardId": "ward-none-pune",
    "title": "Uncollected Waste Pile Burning (Viman Nagar, Pune)",
    "description": "Local sweepers are burning dry leaves and plastic trash, causing toxic smoke columns.",
    "status": "open",
    "category": "Garbage",
    "coordinates": [
        73.90852619412328,
        18.563529714517408
    ],
    "createdAt": "2026-06-13"
},
  {
    "id": "issue-gen-1094",
    "wardId": "ward-none-pune",
    "title": "Overflowing Stormwater Drain Blockage (Shivajinagar, Pune)",
    "description": "Silt and plastic refuse blocking the drain entrance, flooding the lane with mud during minor showers.",
    "status": "in-progress",
    "category": "Drainage",
    "coordinates": [
        73.84256359142877,
        18.52687126085574
    ],
    "createdAt": "2026-06-14"
},
  {
    "id": "issue-gen-1095",
    "wardId": "ward-none-pune",
    "title": "Incomplete Road Surfacing Work (Kalyani Nagar, Pune)",
    "description": "Contractor left the road scraped and unpaved, causing massive dust suspension and vehicle damage.",
    "status": "resolved",
    "category": "Roads",
    "coordinates": [
        73.9009722836873,
        18.548687468353695
    ],
    "createdAt": "2026-06-15"
},
  {
    "id": "issue-gen-1096",
    "wardId": "ward-none-pune",
    "title": "Complete Dark Stretch on Sector Road (Baner, Pune)",
    "description": "None of the streetlights are functional for a 500m stretch, raising serious safety concerns.",
    "status": "open",
    "category": "Streetlights",
    "coordinates": [
        73.79022445761133,
        18.55611578103475
    ],
    "createdAt": "2026-06-16"
},
  {
    "id": "issue-gen-1097",
    "wardId": "ward-none-pune",
    "title": "No Water Supply for 3 Consecutive Days (Aundh, Pune)",
    "description": "Municipal supply line is dry, forcing residents to rely heavily on expensive private tankers.",
    "status": "in-progress",
    "category": "Water",
    "coordinates": [
        73.7998266887625,
        18.562084241611682
    ],
    "createdAt": "2026-06-17"
},
  {
    "id": "issue-gen-1098",
    "wardId": "ward-none-pune",
    "title": "Overflowing Garbage Dumpster on Corner (Hadapsar, Pune)",
    "description": "Garbage is piled high on the street, attracting stray dogs and generating a terrible stench.",
    "status": "resolved",
    "category": "Garbage",
    "coordinates": [
        73.92829262441995,
        18.49986111349009
    ],
    "createdAt": "2026-06-18"
},
  {
    "id": "issue-gen-1099",
    "wardId": "ward-none-pune",
    "title": "Bubbling Sewage from Open Manhole (Camp, Pune)",
    "description": "Main sewer line blocked, black sewage water flooding the sidewalk.",
    "status": "open",
    "category": "Drainage",
    "coordinates": [
        73.87653983129405,
        18.523489284058574
    ],
    "createdAt": "2026-06-19"
},
  {
    "id": "issue-gen-1100",
    "wardId": "ward-none-pune",
    "title": "Hazardous Potholes on Main Road (Kothrud, Pune)",
    "description": "Multiple deep craters causing accidents and traffic bottle-necks during peak hours.",
    "status": "in-progress",
    "category": "Roads",
    "coordinates": [
        73.81256231134782,
        18.503043886062482
    ],
    "createdAt": "2026-06-20"
},
  {
    "id": "issue-gen-1101",
    "wardId": "ward-none-pune",
    "title": "Flickering and Damaged Pole Lamp (Koregaon Park, Pune)",
    "description": "The lamp head is broken and sparks intermittently when it rains.",
    "status": "resolved",
    "category": "Streetlights",
    "coordinates": [
        73.8903085429418,
        18.541943737829268
    ],
    "createdAt": "2026-06-21"
},
  {
    "id": "issue-gen-1102",
    "wardId": "ward-none-pune",
    "title": "Sewage-Contaminated Tap Water Supply (Hinjewadi, Pune)",
    "description": "Drinking water smells strongly of sewage and has a blackish hue since the pipe repair.",
    "status": "open",
    "category": "Water",
    "coordinates": [
        73.71679162042857,
        18.588985646221523
    ],
    "createdAt": "2026-06-22"
},
  {
    "id": "issue-gen-1103",
    "wardId": "ward-none-pune",
    "title": "Uncollected Waste Pile Burning (Viman Nagar, Pune)",
    "description": "Local sweepers are burning dry leaves and plastic trash, causing toxic smoke columns.",
    "status": "in-progress",
    "category": "Garbage",
    "coordinates": [
        73.90820586490737,
        18.56308552263538
    ],
    "createdAt": "2026-06-23"
},
  {
    "id": "issue-gen-1104",
    "wardId": "ward-none-pune",
    "title": "Overflowing Stormwater Drain Blockage (Shivajinagar, Pune)",
    "description": "Silt and plastic refuse blocking the drain entrance, flooding the lane with mud during minor showers.",
    "status": "resolved",
    "category": "Drainage",
    "coordinates": [
        73.84164744478693,
        18.531195038736662
    ],
    "createdAt": "2026-06-24"
},
  {
    "id": "issue-gen-1105",
    "wardId": "ward-none-pune",
    "title": "Incomplete Road Surfacing Work (Kalyani Nagar, Pune)",
    "description": "Contractor left the road scraped and unpaved, causing massive dust suspension and vehicle damage.",
    "status": "open",
    "category": "Roads",
    "coordinates": [
        73.90058899641159,
        18.5461552030447
    ],
    "createdAt": "2026-06-10"
},
  {
    "id": "issue-gen-1106",
    "wardId": "ward-none-pune",
    "title": "Complete Dark Stretch on Sector Road (Baner, Pune)",
    "description": "None of the streetlights are functional for a 500m stretch, raising serious safety concerns.",
    "status": "in-progress",
    "category": "Streetlights",
    "coordinates": [
        73.78611898478076,
        18.56212556339517
    ],
    "createdAt": "2026-06-11"
},
  {
    "id": "issue-gen-1107",
    "wardId": "ward-none-pune",
    "title": "No Water Supply for 3 Consecutive Days (Aundh, Pune)",
    "description": "Municipal supply line is dry, forcing residents to rely heavily on expensive private tankers.",
    "status": "resolved",
    "category": "Water",
    "coordinates": [
        73.80069364196795,
        18.559961115050935
    ],
    "createdAt": "2026-06-12"
},
  {
    "id": "issue-gen-1108",
    "wardId": "ward-none-ahmedabad",
    "title": "Hazardous Potholes on Main Road (Satellite, Ahmedabad)",
    "description": "Multiple deep craters causing accidents and traffic bottle-necks during peak hours.",
    "status": "open",
    "category": "Roads",
    "coordinates": [
        72.52149861076113,
        23.03379392543555
    ],
    "createdAt": "2026-06-10"
},
  {
    "id": "issue-gen-1109",
    "wardId": "ward-none-ahmedabad",
    "title": "Flickering and Damaged Pole Lamp (Vastrapur, Ahmedabad)",
    "description": "The lamp head is broken and sparks intermittently when it rains.",
    "status": "in-progress",
    "category": "Streetlights",
    "coordinates": [
        72.53291826300301,
        23.03654304619653
    ],
    "createdAt": "2026-06-11"
},
  {
    "id": "issue-gen-1110",
    "wardId": "ward-none-ahmedabad",
    "title": "Sewage-Contaminated Tap Water Supply (C.G. Road, Ahmedabad)",
    "description": "Drinking water smells strongly of sewage and has a blackish hue since the pipe repair.",
    "status": "resolved",
    "category": "Water",
    "coordinates": [
        72.56003898744748,
        23.028876722143288
    ],
    "createdAt": "2026-06-12"
},
  {
    "id": "issue-gen-1111",
    "wardId": "ward-none-ahmedabad",
    "title": "Uncollected Waste Pile Burning (Ashram Road, Ahmedabad)",
    "description": "Local sweepers are burning dry leaves and plastic trash, causing toxic smoke columns.",
    "status": "open",
    "category": "Garbage",
    "coordinates": [
        72.56834160384487,
        23.036971700705475
    ],
    "createdAt": "2026-06-13"
},
  {
    "id": "issue-gen-1112",
    "wardId": "ward-none-ahmedabad",
    "title": "Overflowing Stormwater Drain Blockage (Maninagar, Ahmedabad)",
    "description": "Silt and plastic refuse blocking the drain entrance, flooding the lane with mud during minor showers.",
    "status": "in-progress",
    "category": "Drainage",
    "coordinates": [
        72.6025316405481,
        22.986630966045595
    ],
    "createdAt": "2026-06-14"
},
  {
    "id": "issue-gen-1113",
    "wardId": "ward-none-ahmedabad",
    "title": "Incomplete Road Surfacing Work (Bopal, Ahmedabad)",
    "description": "Contractor left the road scraped and unpaved, causing massive dust suspension and vehicle damage.",
    "status": "resolved",
    "category": "Roads",
    "coordinates": [
        72.46148118821657,
        23.026181754821994
    ],
    "createdAt": "2026-06-15"
},
  {
    "id": "issue-gen-1114",
    "wardId": "ward-none-ahmedabad",
    "title": "Complete Dark Stretch on Sector Road (Gota, Ahmedabad)",
    "description": "None of the streetlights are functional for a 500m stretch, raising serious safety concerns.",
    "status": "open",
    "category": "Streetlights",
    "coordinates": [
        72.53298185583155,
        23.097772889025517
    ],
    "createdAt": "2026-06-16"
},
  {
    "id": "issue-gen-1115",
    "wardId": "ward-none-ahmedabad",
    "title": "No Water Supply for 3 Consecutive Days (Navrangpura, Ahmedabad)",
    "description": "Municipal supply line is dry, forcing residents to rely heavily on expensive private tankers.",
    "status": "in-progress",
    "category": "Water",
    "coordinates": [
        72.54773299485683,
        23.036862092093934
    ],
    "createdAt": "2026-06-17"
},
  {
    "id": "issue-gen-1116",
    "wardId": "ward-none-ahmedabad",
    "title": "Overflowing Garbage Dumpster on Corner (Sabarmati, Ahmedabad)",
    "description": "Garbage is piled high on the street, attracting stray dogs and generating a terrible stench.",
    "status": "resolved",
    "category": "Garbage",
    "coordinates": [
        72.57885751005847,
        23.080018561126646
    ],
    "createdAt": "2026-06-18"
},
  {
    "id": "issue-gen-1117",
    "wardId": "ward-none-ahmedabad",
    "title": "Bubbling Sewage from Open Manhole (Bodakdev, Ahmedabad)",
    "description": "Main sewer line blocked, black sewage water flooding the sidewalk.",
    "status": "open",
    "category": "Drainage",
    "coordinates": [
        72.50767361348272,
        23.03937440955239
    ],
    "createdAt": "2026-06-19"
},
  {
    "id": "issue-gen-1118",
    "wardId": "ward-none-ahmedabad",
    "title": "Hazardous Potholes on Main Road (Satellite, Ahmedabad)",
    "description": "Multiple deep craters causing accidents and traffic bottle-necks during peak hours.",
    "status": "in-progress",
    "category": "Roads",
    "coordinates": [
        72.51837196739602,
        23.02702078533438
    ],
    "createdAt": "2026-06-20"
},
  {
    "id": "issue-gen-1119",
    "wardId": "ward-none-ahmedabad",
    "title": "Flickering and Damaged Pole Lamp (Vastrapur, Ahmedabad)",
    "description": "The lamp head is broken and sparks intermittently when it rains.",
    "status": "resolved",
    "category": "Streetlights",
    "coordinates": [
        72.52701156167342,
        23.043604021979974
    ],
    "createdAt": "2026-06-21"
},
  {
    "id": "issue-gen-1120",
    "wardId": "ward-none-ahmedabad",
    "title": "Sewage-Contaminated Tap Water Supply (C.G. Road, Ahmedabad)",
    "description": "Drinking water smells strongly of sewage and has a blackish hue since the pipe repair.",
    "status": "open",
    "category": "Water",
    "coordinates": [
        72.56376915947939,
        23.03354663656173
    ],
    "createdAt": "2026-06-22"
},
  {
    "id": "issue-gen-1121",
    "wardId": "ward-none-ahmedabad",
    "title": "Uncollected Waste Pile Burning (Ashram Road, Ahmedabad)",
    "description": "Local sweepers are burning dry leaves and plastic trash, causing toxic smoke columns.",
    "status": "in-progress",
    "category": "Garbage",
    "coordinates": [
        72.56941024054869,
        23.036595514831372
    ],
    "createdAt": "2026-06-23"
},
  {
    "id": "issue-gen-1122",
    "wardId": "ward-none-ahmedabad",
    "title": "Overflowing Stormwater Drain Blockage (Maninagar, Ahmedabad)",
    "description": "Silt and plastic refuse blocking the drain entrance, flooding the lane with mud during minor showers.",
    "status": "resolved",
    "category": "Drainage",
    "coordinates": [
        72.59620832011296,
        22.99381342881783
    ],
    "createdAt": "2026-06-24"
},
  {
    "id": "issue-gen-1123",
    "wardId": "ward-none-ahmedabad",
    "title": "Incomplete Road Surfacing Work (Bopal, Ahmedabad)",
    "description": "Contractor left the road scraped and unpaved, causing massive dust suspension and vehicle damage.",
    "status": "open",
    "category": "Roads",
    "coordinates": [
        72.4582026784227,
        23.027697898425842
    ],
    "createdAt": "2026-06-10"
},
  {
    "id": "issue-gen-1124",
    "wardId": "ward-none-ahmedabad",
    "title": "Complete Dark Stretch on Sector Road (Gota, Ahmedabad)",
    "description": "None of the streetlights are functional for a 500m stretch, raising serious safety concerns.",
    "status": "in-progress",
    "category": "Streetlights",
    "coordinates": [
        72.52965197469652,
        23.10195898340698
    ],
    "createdAt": "2026-06-11"
},
  {
    "id": "issue-gen-1125",
    "wardId": "ward-none-ahmedabad",
    "title": "No Water Supply for 3 Consecutive Days (Navrangpura, Ahmedabad)",
    "description": "Municipal supply line is dry, forcing residents to rely heavily on expensive private tankers.",
    "status": "resolved",
    "category": "Water",
    "coordinates": [
        72.54972254537576,
        23.039491913460388
    ],
    "createdAt": "2026-06-12"
},
  {
    "id": "issue-gen-1126",
    "wardId": "ward-none-jaipur",
    "title": "Hazardous Potholes on Main Road (C-Scheme, Jaipur)",
    "description": "Multiple deep craters causing accidents and traffic bottle-necks during peak hours.",
    "status": "open",
    "category": "Roads",
    "coordinates": [
        75.80354513923014,
        26.913371896226582
    ],
    "createdAt": "2026-06-10"
},
  {
    "id": "issue-gen-1127",
    "wardId": "ward-none-jaipur",
    "title": "Flickering and Damaged Pole Lamp (Malviya Nagar, Jaipur)",
    "description": "The lamp head is broken and sparks intermittently when it rains.",
    "status": "in-progress",
    "category": "Streetlights",
    "coordinates": [
        75.81814396607147,
        26.849036447340026
    ],
    "createdAt": "2026-06-11"
},
  {
    "id": "issue-gen-1128",
    "wardId": "ward-none-jaipur",
    "title": "Sewage-Contaminated Tap Water Supply (Vaishali Nagar, Jaipur)",
    "description": "Drinking water smells strongly of sewage and has a blackish hue since the pipe repair.",
    "status": "resolved",
    "category": "Water",
    "coordinates": [
        75.73648868125646,
        26.920764477377425
    ],
    "createdAt": "2026-06-12"
},
  {
    "id": "issue-gen-1129",
    "wardId": "ward-none-jaipur",
    "title": "Uncollected Waste Pile Burning (Mansarovar, Jaipur)",
    "description": "Local sweepers are burning dry leaves and plastic trash, causing toxic smoke columns.",
    "status": "open",
    "category": "Garbage",
    "coordinates": [
        75.74899643591127,
        26.849795723672532
    ],
    "createdAt": "2026-06-13"
},
  {
    "id": "issue-gen-1130",
    "wardId": "ward-none-jaipur",
    "title": "Overflowing Stormwater Drain Blockage (Raja Park, Jaipur)",
    "description": "Silt and plastic refuse blocking the drain entrance, flooding the lane with mud during minor showers.",
    "status": "in-progress",
    "category": "Drainage",
    "coordinates": [
        75.82643796363693,
        26.900453994728426
    ],
    "createdAt": "2026-06-14"
},
  {
    "id": "issue-gen-1131",
    "wardId": "ward-none-jaipur",
    "title": "Incomplete Road Surfacing Work (Bani Park, Jaipur)",
    "description": "Contractor left the road scraped and unpaved, causing massive dust suspension and vehicle damage.",
    "status": "resolved",
    "category": "Roads",
    "coordinates": [
        75.79191219829659,
        26.928215227564166
    ],
    "createdAt": "2026-06-15"
},
  {
    "id": "issue-gen-1132",
    "wardId": "ward-none-jaipur",
    "title": "Complete Dark Stretch on Sector Road (Johri Bazar, Jaipur)",
    "description": "None of the streetlights are functional for a 500m stretch, raising serious safety concerns.",
    "status": "open",
    "category": "Streetlights",
    "coordinates": [
        75.82624226985901,
        26.921377289105926
    ],
    "createdAt": "2026-06-16"
},
  {
    "id": "issue-gen-1133",
    "wardId": "ward-none-jaipur",
    "title": "No Water Supply for 3 Consecutive Days (Sanganer, Jaipur)",
    "description": "Municipal supply line is dry, forcing residents to rely heavily on expensive private tankers.",
    "status": "in-progress",
    "category": "Water",
    "coordinates": [
        75.77739019694805,
        26.802627703027696
    ],
    "createdAt": "2026-06-17"
},
  {
    "id": "issue-gen-1134",
    "wardId": "ward-none-jaipur",
    "title": "Overflowing Garbage Dumpster on Corner (Sodala, Jaipur)",
    "description": "Garbage is piled high on the street, attracting stray dogs and generating a terrible stench.",
    "status": "resolved",
    "category": "Garbage",
    "coordinates": [
        75.77203406832176,
        26.899732961067773
    ],
    "createdAt": "2026-06-18"
},
  {
    "id": "issue-gen-1135",
    "wardId": "ward-none-jaipur",
    "title": "Bubbling Sewage from Open Manhole (Tonk Road, Jaipur)",
    "description": "Main sewer line blocked, black sewage water flooding the sidewalk.",
    "status": "open",
    "category": "Drainage",
    "coordinates": [
        75.8000464088586,
        26.831250336997368
    ],
    "createdAt": "2026-06-19"
},
  {
    "id": "issue-gen-1136",
    "wardId": "ward-none-jaipur",
    "title": "Hazardous Potholes on Main Road (C-Scheme, Jaipur)",
    "description": "Multiple deep craters causing accidents and traffic bottle-necks during peak hours.",
    "status": "in-progress",
    "category": "Roads",
    "coordinates": [
        75.80126703120007,
        26.911401338265723
    ],
    "createdAt": "2026-06-20"
},
  {
    "id": "issue-gen-1137",
    "wardId": "ward-none-jaipur",
    "title": "Flickering and Damaged Pole Lamp (Malviya Nagar, Jaipur)",
    "description": "The lamp head is broken and sparks intermittently when it rains.",
    "status": "resolved",
    "category": "Streetlights",
    "coordinates": [
        75.81750943870867,
        26.84903915213739
    ],
    "createdAt": "2026-06-21"
},
  {
    "id": "issue-gen-1138",
    "wardId": "ward-none-jaipur",
    "title": "Sewage-Contaminated Tap Water Supply (Vaishali Nagar, Jaipur)",
    "description": "Drinking water smells strongly of sewage and has a blackish hue since the pipe repair.",
    "status": "open",
    "category": "Water",
    "coordinates": [
        75.74059260918193,
        26.917617410423116
    ],
    "createdAt": "2026-06-22"
},
  {
    "id": "issue-gen-1139",
    "wardId": "ward-none-jaipur",
    "title": "Uncollected Waste Pile Burning (Mansarovar, Jaipur)",
    "description": "Local sweepers are burning dry leaves and plastic trash, causing toxic smoke columns.",
    "status": "in-progress",
    "category": "Garbage",
    "coordinates": [
        75.75082994578676,
        26.846698191400982
    ],
    "createdAt": "2026-06-23"
},
  {
    "id": "issue-gen-1140",
    "wardId": "ward-none-jaipur",
    "title": "Overflowing Stormwater Drain Blockage (Raja Park, Jaipur)",
    "description": "Silt and plastic refuse blocking the drain entrance, flooding the lane with mud during minor showers.",
    "status": "resolved",
    "category": "Drainage",
    "coordinates": [
        75.82667586002303,
        26.903078879242546
    ],
    "createdAt": "2026-06-24"
},
  {
    "id": "issue-gen-1141",
    "wardId": "ward-none-jaipur",
    "title": "Incomplete Road Surfacing Work (Bani Park, Jaipur)",
    "description": "Contractor left the road scraped and unpaved, causing massive dust suspension and vehicle damage.",
    "status": "open",
    "category": "Roads",
    "coordinates": [
        75.79346833810901,
        26.930415121559783
    ],
    "createdAt": "2026-06-10"
},
  {
    "id": "issue-gen-1142",
    "wardId": "ward-none-jaipur",
    "title": "Complete Dark Stretch on Sector Road (Johri Bazar, Jaipur)",
    "description": "None of the streetlights are functional for a 500m stretch, raising serious safety concerns.",
    "status": "in-progress",
    "category": "Streetlights",
    "coordinates": [
        75.82133037510943,
        26.923846919524536
    ],
    "createdAt": "2026-06-11"
},
  {
    "id": "issue-gen-1143",
    "wardId": "ward-none-jaipur",
    "title": "No Water Supply for 3 Consecutive Days (Sanganer, Jaipur)",
    "description": "Municipal supply line is dry, forcing residents to rely heavily on expensive private tankers.",
    "status": "resolved",
    "category": "Water",
    "coordinates": [
        75.7802396616568,
        26.7996387844412
    ],
    "createdAt": "2026-06-12"
},
  {
    "id": "issue-gen-1144",
    "wardId": "ward-none-lucknow",
    "title": "Hazardous Potholes on Main Road (Hazratganj, Lucknow)",
    "description": "Multiple deep craters causing accidents and traffic bottle-necks during peak hours.",
    "status": "open",
    "category": "Roads",
    "coordinates": [
        80.93759237742864,
        26.853180428159455
    ],
    "createdAt": "2026-06-10"
},
  {
    "id": "issue-gen-1145",
    "wardId": "ward-none-lucknow",
    "title": "Flickering and Damaged Pole Lamp (Gomti Nagar, Lucknow)",
    "description": "The lamp head is broken and sparks intermittently when it rains.",
    "status": "in-progress",
    "category": "Streetlights",
    "coordinates": [
        80.9891759211517,
        26.857554513640146
    ],
    "createdAt": "2026-06-11"
},
  {
    "id": "issue-gen-1146",
    "wardId": "ward-none-lucknow",
    "title": "Sewage-Contaminated Tap Water Supply (Alambagh, Lucknow)",
    "description": "Drinking water smells strongly of sewage and has a blackish hue since the pipe repair.",
    "status": "resolved",
    "category": "Water",
    "coordinates": [
        80.88961297145303,
        26.800503166028214
    ],
    "createdAt": "2026-06-12"
},
  {
    "id": "issue-gen-1147",
    "wardId": "ward-none-lucknow",
    "title": "Uncollected Waste Pile Burning (Indira Nagar, Lucknow)",
    "description": "Local sweepers are burning dry leaves and plastic trash, causing toxic smoke columns.",
    "status": "open",
    "category": "Garbage",
    "coordinates": [
        80.97877421162748,
        26.89352699682121
    ],
    "createdAt": "2026-06-13"
},
  {
    "id": "issue-gen-1148",
    "wardId": "ward-none-lucknow",
    "title": "Overflowing Stormwater Drain Blockage (Aminabad, Lucknow)",
    "description": "Silt and plastic refuse blocking the drain entrance, flooding the lane with mud during minor showers.",
    "status": "in-progress",
    "category": "Drainage",
    "coordinates": [
        80.92001810088962,
        26.840355415325945
    ],
    "createdAt": "2026-06-14"
},
  {
    "id": "issue-gen-1149",
    "wardId": "ward-none-lucknow",
    "title": "Incomplete Road Surfacing Work (Mahanagar, Lucknow)",
    "description": "Contractor left the road scraped and unpaved, causing massive dust suspension and vehicle damage.",
    "status": "resolved",
    "category": "Roads",
    "coordinates": [
        80.95096449239958,
        26.883308531747634
    ],
    "createdAt": "2026-06-15"
},
  {
    "id": "issue-gen-1150",
    "wardId": "ward-none-lucknow",
    "title": "Complete Dark Stretch on Sector Road (Jankipuram, Lucknow)",
    "description": "None of the streetlights are functional for a 500m stretch, raising serious safety concerns.",
    "status": "open",
    "category": "Streetlights",
    "coordinates": [
        80.93906156453109,
        26.940695584410413
    ],
    "createdAt": "2026-06-16"
},
  {
    "id": "issue-gen-1151",
    "wardId": "ward-none-lucknow",
    "title": "No Water Supply for 3 Consecutive Days (Ashiyana, Lucknow)",
    "description": "Municipal supply line is dry, forcing residents to rely heavily on expensive private tankers.",
    "status": "in-progress",
    "category": "Water",
    "coordinates": [
        80.91222356432905,
        26.782882999945972
    ],
    "createdAt": "2026-06-17"
},
  {
    "id": "issue-gen-1152",
    "wardId": "ward-none-lucknow",
    "title": "Overflowing Garbage Dumpster on Corner (Chowk, Lucknow)",
    "description": "Garbage is piled high on the street, attracting stray dogs and generating a terrible stench.",
    "status": "resolved",
    "category": "Garbage",
    "coordinates": [
        80.89750799099787,
        26.87068006846966
    ],
    "createdAt": "2026-06-18"
},
  {
    "id": "issue-gen-1153",
    "wardId": "ward-none-lucknow",
    "title": "Bubbling Sewage from Open Manhole (Charbagh, Lucknow)",
    "description": "Main sewer line blocked, black sewage water flooding the sidewalk.",
    "status": "open",
    "category": "Drainage",
    "coordinates": [
        80.93261140295147,
        26.832629975864595
    ],
    "createdAt": "2026-06-19"
},
  {
    "id": "issue-gen-1154",
    "wardId": "ward-none-lucknow",
    "title": "Hazardous Potholes on Main Road (Hazratganj, Lucknow)",
    "description": "Multiple deep craters causing accidents and traffic bottle-necks during peak hours.",
    "status": "in-progress",
    "category": "Roads",
    "coordinates": [
        80.9389386638168,
        26.846036856215637
    ],
    "createdAt": "2026-06-20"
},
  {
    "id": "issue-gen-1155",
    "wardId": "ward-none-lucknow",
    "title": "Flickering and Damaged Pole Lamp (Gomti Nagar, Lucknow)",
    "description": "The lamp head is broken and sparks intermittently when it rains.",
    "status": "resolved",
    "category": "Streetlights",
    "coordinates": [
        80.99391416037973,
        26.856840662861416
    ],
    "createdAt": "2026-06-21"
},
  {
    "id": "issue-gen-1156",
    "wardId": "ward-none-lucknow",
    "title": "Sewage-Contaminated Tap Water Supply (Alambagh, Lucknow)",
    "description": "Drinking water smells strongly of sewage and has a blackish hue since the pipe repair.",
    "status": "open",
    "category": "Water",
    "coordinates": [
        80.89337303452301,
        26.79754218077777
    ],
    "createdAt": "2026-06-22"
},
  {
    "id": "issue-gen-1157",
    "wardId": "ward-none-lucknow",
    "title": "Uncollected Waste Pile Burning (Indira Nagar, Lucknow)",
    "description": "Local sweepers are burning dry leaves and plastic trash, causing toxic smoke columns.",
    "status": "in-progress",
    "category": "Garbage",
    "coordinates": [
        80.97794538106383,
        26.891374427455975
    ],
    "createdAt": "2026-06-23"
},
  {
    "id": "issue-gen-1158",
    "wardId": "ward-none-lucknow",
    "title": "Overflowing Stormwater Drain Blockage (Aminabad, Lucknow)",
    "description": "Silt and plastic refuse blocking the drain entrance, flooding the lane with mud during minor showers.",
    "status": "resolved",
    "category": "Drainage",
    "coordinates": [
        80.91982562154463,
        26.84111808724083
    ],
    "createdAt": "2026-06-24"
},
  {
    "id": "issue-gen-1159",
    "wardId": "ward-none-lucknow",
    "title": "Incomplete Road Surfacing Work (Mahanagar, Lucknow)",
    "description": "Contractor left the road scraped and unpaved, causing massive dust suspension and vehicle damage.",
    "status": "open",
    "category": "Roads",
    "coordinates": [
        80.95326069945837,
        26.881571118331838
    ],
    "createdAt": "2026-06-10"
},
  {
    "id": "issue-gen-1160",
    "wardId": "ward-none-lucknow",
    "title": "Complete Dark Stretch on Sector Road (Jankipuram, Lucknow)",
    "description": "None of the streetlights are functional for a 500m stretch, raising serious safety concerns.",
    "status": "in-progress",
    "category": "Streetlights",
    "coordinates": [
        80.93814000215296,
        26.939469063824582
    ],
    "createdAt": "2026-06-11"
},
  {
    "id": "issue-gen-1161",
    "wardId": "ward-none-lucknow",
    "title": "No Water Supply for 3 Consecutive Days (Ashiyana, Lucknow)",
    "description": "Municipal supply line is dry, forcing residents to rely heavily on expensive private tankers.",
    "status": "resolved",
    "category": "Water",
    "coordinates": [
        80.90873249100162,
        26.778531065376658
    ],
    "createdAt": "2026-06-12"
},

  {
    "id": "issue-1",
    "wardId": "ward-186",
    "title": "Contaminated Drinking Water Supply (Koramangala)",
    "description": "Tap water has a yellowish tint and foul chemical smell since yesterday.",
    "status": "in-progress",
    "category": "Water",
    "coordinates": [
      77.62362404670903,
      12.932281393890904
    ],
    "createdAt": "2026-05-28"
  },
  {
    "id": "issue-2",
    "wardId": "ward-186",
    "title": "Contaminated Drinking Water Supply (Koramangala)",
    "description": "Tap water has a yellowish tint and foul chemical smell since yesterday.",
    "status": "resolved",
    "category": "Water",
    "coordinates": [
      77.62516431981214,
      12.938641267200568
    ],
    "createdAt": "2026-06-07"
  },
  {
    "id": "issue-3",
    "wardId": "ward-186",
    "title": "Clogged Stormwater Drain Overflow (Koramangala)",
    "description": "Plastic bottles and silt clogging the grating, causing street flooding during showers.",
    "status": "open",
    "category": "Drainage",
    "coordinates": [
      77.6316172161631,
      12.937554732143095
    ],
    "createdAt": "2026-05-28"
  },
  {
    "id": "issue-4",
    "wardId": "ward-186",
    "title": "Sewage Backflow in Residential Lane (Koramangala)",
    "description": "Underground sewer blocked, dirty black water bubbling up from manhole.",
    "status": "resolved",
    "category": "Drainage",
    "coordinates": [
      77.63098986272101,
      12.931041141934472
    ],
    "createdAt": "2026-06-25"
  },
  {
    "id": "issue-5",
    "wardId": "ward-186",
    "title": "Sewage Backflow in Residential Lane (Koramangala)",
    "description": "Underground sewer blocked, dirty black water bubbling up from manhole.",
    "status": "resolved",
    "category": "Drainage",
    "coordinates": [
      77.62444821191616,
      12.931206170703609
    ],
    "createdAt": "2026-05-28"
  },
  {
    "id": "issue-6",
    "wardId": "ward-186",
    "title": "Low Pressure in Kaveri Water Pipe (Koramangala)",
    "description": "Water pressure is extremely low, barely filling ground floor sumps.",
    "status": "open",
    "category": "Water",
    "coordinates": [
      77.6241500892138,
      12.937743108258879
    ],
    "createdAt": "2026-06-18"
  },
  {
    "id": "issue-7",
    "wardId": "ward-186",
    "title": "Open Manhole Cover on Busiest Cross (Koramangala)",
    "description": "Cover broken and missing, leaving a highly dangerous 4-foot deep trap.",
    "status": "open",
    "category": "Drainage",
    "coordinates": [
      77.63064956328721,
      12.938502888830014
    ],
    "createdAt": "2026-05-31"
  },
  {
    "id": "issue-8",
    "wardId": "ward-186",
    "title": "Open Manhole Cover on Busiest Cross (Koramangala)",
    "description": "Cover broken and missing, leaving a highly dangerous 4-foot deep trap.",
    "status": "in-progress",
    "category": "Drainage",
    "coordinates": [
      77.6318671952061,
      12.932073440777712
    ],
    "createdAt": "2026-06-11"
  },
  {
    "id": "issue-9",
    "wardId": "ward-186",
    "title": "Delay in Door-to-Door Garbage Collection (Koramangala)",
    "description": "BBMP auto-tippers not showing up regularly, leading to household dumping.",
    "status": "open",
    "category": "Garbage",
    "coordinates": [
      77.6255399848819,
      12.930404057879601
    ],
    "createdAt": "2026-06-08"
  },
  {
    "id": "issue-10",
    "wardId": "ward-186",
    "title": "Contaminated Drinking Water Supply (Koramangala)",
    "description": "Tap water has a yellowish tint and foul chemical smell since yesterday.",
    "status": "resolved",
    "category": "Water",
    "coordinates": [
      77.62342721465761,
      12.936597330982455
    ],
    "createdAt": "2026-06-23"
  },
  {
    "id": "issue-11",
    "wardId": "ward-186",
    "title": "Severe Potholes on Main Cross Road (Koramangala)",
    "description": "Large potholes causing major traffic slow-downs and danger to two-wheelers.",
    "status": "in-progress",
    "category": "Roads",
    "coordinates": [
      77.62945552207495,
      12.939142903497485
    ],
    "createdAt": "2026-06-25"
  },
  {
    "id": "issue-12",
    "wardId": "ward-186",
    "title": "Sewage Backflow in Residential Lane (Koramangala)",
    "description": "Underground sewer blocked, dirty black water bubbling up from manhole.",
    "status": "open",
    "category": "Drainage",
    "coordinates": [
      77.63242114349423,
      12.933309763747342
    ],
    "createdAt": "2026-06-03"
  },
  {
    "id": "issue-13",
    "wardId": "ward-186",
    "title": "Non-Functional Streetlights on Dark Stretch (Koramangala)",
    "description": "Entire row of streetlights is dead, making the lane unsafe at night.",
    "status": "open",
    "category": "Streetlights",
    "coordinates": [
      77.6268123955977,
      12.929938951266589
    ],
    "createdAt": "2026-06-20"
  },
  {
    "id": "issue-14",
    "wardId": "ward-186",
    "title": "Delay in Door-to-Door Garbage Collection (Koramangala)",
    "description": "BBMP auto-tippers not showing up regularly, leading to household dumping.",
    "status": "in-progress",
    "category": "Garbage",
    "coordinates": [
      77.6230532799163,
      12.93529520733226
    ],
    "createdAt": "2026-05-29"
  },
  {
    "id": "issue-15",
    "wardId": "ward-186",
    "title": "Illegal Black Spot Dump site (Koramangala)",
    "description": "Commercial waste piled up on the corner of the residential street. Heavy stench.",
    "status": "in-progress",
    "category": "Garbage",
    "coordinates": [
      77.62813020916474,
      12.939423792944018
    ],
    "createdAt": "2026-06-08"
  },
  {
    "id": "issue-16",
    "wardId": "ward-110",
    "title": "Contaminated Drinking Water Supply (Whitefield)",
    "description": "Tap water has a yellowish tint and foul chemical smell since yesterday.",
    "status": "in-progress",
    "category": "Water",
    "coordinates": [
      77.73778986842137,
      12.969996516331433
    ],
    "createdAt": "2026-06-03"
  },
  {
    "id": "issue-17",
    "wardId": "ward-110",
    "title": "Low Pressure in Kaveri Water Pipe (Whitefield)",
    "description": "Water pressure is extremely low, barely filling ground floor sumps.",
    "status": "open",
    "category": "Water",
    "coordinates": [
      77.73334637259447,
      12.965192791257765
    ],
    "createdAt": "2026-06-14"
  },
  {
    "id": "issue-18",
    "wardId": "ward-110",
    "title": "Sewage Backflow in Residential Lane (Whitefield)",
    "description": "Underground sewer blocked, dirty black water bubbling up from manhole.",
    "status": "in-progress",
    "category": "Drainage",
    "coordinates": [
      77.72824036045604,
      12.96928535399881
    ],
    "createdAt": "2026-06-05"
  },
  {
    "id": "issue-19",
    "wardId": "ward-110",
    "title": "Open Manhole Cover on Busiest Cross (Whitefield)",
    "description": "Cover broken and missing, leaving a highly dangerous 4-foot deep trap.",
    "status": "in-progress",
    "category": "Drainage",
    "coordinates": [
      77.73196148626224,
      12.97466807194438
    ],
    "createdAt": "2026-05-31"
  },
  {
    "id": "issue-20",
    "wardId": "ward-110",
    "title": "Non-Functional Streetlights on Dark Stretch (Whitefield)",
    "description": "Entire row of streetlights is dead, making the lane unsafe at night.",
    "status": "resolved",
    "category": "Streetlights",
    "coordinates": [
      77.73759394245383,
      12.971337026013009
    ],
    "createdAt": "2026-06-24"
  },
  {
    "id": "issue-21",
    "wardId": "ward-110",
    "title": "Severe Potholes on Main Cross Road (Whitefield)",
    "description": "Large potholes causing major traffic slow-downs and danger to two-wheelers.",
    "status": "open",
    "category": "Roads",
    "coordinates": [
      77.73466966502664,
      12.965483050331812
    ],
    "createdAt": "2026-06-03"
  },
  {
    "id": "issue-22",
    "wardId": "ward-110",
    "title": "Clogged Stormwater Drain Overflow (Whitefield)",
    "description": "Plastic bottles and silt clogging the grating, causing street flooding during showers.",
    "status": "open",
    "category": "Drainage",
    "coordinates": [
      77.72862349843085,
      12.967985908546549
    ],
    "createdAt": "2026-06-16"
  },
  {
    "id": "issue-23",
    "wardId": "ward-110",
    "title": "Low Pressure in Kaveri Water Pipe (Whitefield)",
    "description": "Water pressure is extremely low, barely filling ground floor sumps.",
    "status": "in-progress",
    "category": "Water",
    "coordinates": [
      77.73069239804643,
      12.974193974600306
    ],
    "createdAt": "2026-06-22"
  },
  {
    "id": "issue-24",
    "wardId": "ward-110",
    "title": "Unfinished Road Laying and Debris (Whitefield)",
    "description": "Asphalt scraped off but road work left incomplete for over two weeks.",
    "status": "open",
    "category": "Roads",
    "coordinates": [
      77.7370312609809,
      12.972569398826392
    ],
    "createdAt": "2026-06-06"
  },
  {
    "id": "issue-25",
    "wardId": "ward-110",
    "title": "Severe Potholes on Main Cross Road (Whitefield)",
    "description": "Large potholes causing major traffic slow-downs and danger to two-wheelers.",
    "status": "in-progress",
    "category": "Roads",
    "coordinates": [
      77.7358591482168,
      12.966131496884348
    ],
    "createdAt": "2026-05-30"
  },
  {
    "id": "issue-26",
    "wardId": "ward-110",
    "title": "Severe Potholes on Main Cross Road (Whitefield)",
    "description": "Large potholes causing major traffic slow-downs and danger to two-wheelers.",
    "status": "open",
    "category": "Roads",
    "coordinates": [
      77.7293544613284,
      12.966845274322278
    ],
    "createdAt": "2026-06-17"
  },
  {
    "id": "issue-27",
    "wardId": "ward-110",
    "title": "Delay in Door-to-Door Garbage Collection (Whitefield)",
    "description": "BBMP auto-tippers not showing up regularly, leading to household dumping.",
    "status": "in-progress",
    "category": "Garbage",
    "coordinates": [
      77.72960632739607,
      12.973384157501469
    ],
    "createdAt": "2026-06-05"
  },
  {
    "id": "issue-28",
    "wardId": "ward-110",
    "title": "Daylight Streetlight Burning (Whitefield)",
    "description": "Streetlights remain on throughout the day, wasting public energy.",
    "status": "open",
    "category": "Streetlights",
    "coordinates": [
      77.73614664688613,
      12.973595464659795
    ],
    "createdAt": "2026-06-18"
  },
  {
    "id": "issue-29",
    "wardId": "ward-110",
    "title": "Non-Functional Streetlights on Dark Stretch (Whitefield)",
    "description": "Entire row of streetlights is dead, making the lane unsafe at night.",
    "status": "in-progress",
    "category": "Streetlights",
    "coordinates": [
      77.73682006861593,
      12.967086476034748
    ],
    "createdAt": "2026-06-05"
  },
  {
    "id": "issue-30",
    "wardId": "ward-110",
    "title": "Sewage Backflow in Residential Lane (Whitefield)",
    "description": "Underground sewer blocked, dirty black water bubbling up from manhole.",
    "status": "resolved",
    "category": "Drainage",
    "coordinates": [
      77.73037502106328,
      12.965954313594377
    ],
    "createdAt": "2026-05-29"
  },
  {
    "id": "issue-31",
    "wardId": "ward-110",
    "title": "Sewage Backflow in Residential Lane (Whitefield)",
    "description": "Underground sewer blocked, dirty black water bubbling up from manhole.",
    "status": "open",
    "category": "Drainage",
    "coordinates": [
      77.7287897900765,
      12.972303130213694
    ],
    "createdAt": "2026-06-24"
  },
  {
    "id": "issue-32",
    "wardId": "ward-110",
    "title": "Sewage Backflow in Residential Lane (Whitefield)",
    "description": "Underground sewer blocked, dirty black water bubbling up from manhole.",
    "status": "resolved",
    "category": "Drainage",
    "coordinates": [
      77.73501056802114,
      12.974333487697168
    ],
    "createdAt": "2026-05-28"
  },
  {
    "id": "issue-33",
    "wardId": "ward-110",
    "title": "Unfinished Road Laying and Debris (Whitefield)",
    "description": "Asphalt scraped off but road work left incomplete for over two weeks.",
    "status": "open",
    "category": "Roads",
    "coordinates": [
      77.73747587985592,
      12.968271914691384
    ],
    "createdAt": "2026-06-14"
  },
  {
    "id": "issue-34",
    "wardId": "ward-228",
    "title": "Delay in Door-to-Door Garbage Collection (Electronic City)",
    "description": "BBMP auto-tippers not showing up regularly, leading to household dumping.",
    "status": "open",
    "category": "Garbage",
    "coordinates": [
      77.65970946253205,
      12.86772777232524
    ],
    "createdAt": "2026-06-03"
  },
  {
    "id": "issue-35",
    "wardId": "ward-228",
    "title": "Low Pressure in Kaveri Water Pipe (Electronic City)",
    "description": "Water pressure is extremely low, barely filling ground floor sumps.",
    "status": "in-progress",
    "category": "Water",
    "coordinates": [
      77.6564134130824,
      12.87338077929257
    ],
    "createdAt": "2026-06-17"
  },
  {
    "id": "issue-36",
    "wardId": "ward-228",
    "title": "Clogged Stormwater Drain Overflow (Electronic City)",
    "description": "Plastic bottles and silt clogging the grating, causing street flooding during showers.",
    "status": "in-progress",
    "category": "Drainage",
    "coordinates": [
      77.66181910587693,
      12.877068449988064
    ],
    "createdAt": "2026-06-04"
  },
  {
    "id": "issue-37",
    "wardId": "ward-228",
    "title": "Illegal Black Spot Dump site (Electronic City)",
    "description": "Commercial waste piled up on the corner of the residential street. Heavy stench.",
    "status": "in-progress",
    "category": "Garbage",
    "coordinates": [
      77.6658799224893,
      12.871937154032079
    ],
    "createdAt": "2026-06-19"
  },
  {
    "id": "issue-38",
    "wardId": "ward-228",
    "title": "Borewell Water Leakage in Supply Pipeline (Electronic City)",
    "description": "Main water pipe ruptured, clean water pooling on the asphalt.",
    "status": "resolved",
    "category": "Water",
    "coordinates": [
      77.66104873130206,
      12.867523536302873
    ],
    "createdAt": "2026-06-25"
  },
  {
    "id": "issue-39",
    "wardId": "ward-228",
    "title": "Public Dustbin Overflowing (Electronic City)",
    "description": "The large community bin hasn't been cleared in three days and is spilling onto the road.",
    "status": "open",
    "category": "Garbage",
    "coordinates": [
      77.65630442479909,
      12.87203041832407
    ],
    "createdAt": "2026-06-15"
  },
  {
    "id": "issue-40",
    "wardId": "ward-228",
    "title": "Non-Functional Streetlights on Dark Stretch (Electronic City)",
    "description": "Entire row of streetlights is dead, making the lane unsafe at night.",
    "status": "open",
    "category": "Streetlights",
    "coordinates": [
      77.66046441805457,
      12.877081644498126
    ],
    "createdAt": "2026-06-01"
  },
  {
    "id": "issue-41",
    "wardId": "ward-228",
    "title": "Severe Potholes on Main Cross Road (Electronic City)",
    "description": "Large potholes causing major traffic slow-downs and danger to two-wheelers.",
    "status": "in-progress",
    "category": "Roads",
    "coordinates": [
      77.66579725712124,
      12.873289381686018
    ],
    "createdAt": "2026-05-31"
  },
  {
    "id": "issue-42",
    "wardId": "ward-228",
    "title": "Contaminated Drinking Water Supply (Electronic City)",
    "description": "Tap water has a yellowish tint and foul chemical smell since yesterday.",
    "status": "in-progress",
    "category": "Water",
    "coordinates": [
      77.6623917240908,
      12.867701647393327
    ],
    "createdAt": "2026-06-06"
  },
  {
    "id": "issue-43",
    "wardId": "ward-228",
    "title": "Borewell Water Leakage in Supply Pipeline (Electronic City)",
    "description": "Main water pipe ruptured, clean water pooling on the asphalt.",
    "status": "open",
    "category": "Water",
    "coordinates": [
      77.6565770892706,
      12.87070338883038
    ],
    "createdAt": "2026-06-23"
  },
  {
    "id": "issue-44",
    "wardId": "ward-228",
    "title": "Non-Functional Streetlights on Dark Stretch (Electronic City)",
    "description": "Entire row of streetlights is dead, making the lane unsafe at night.",
    "status": "open",
    "category": "Streetlights",
    "coordinates": [
      77.65916000030924,
      12.876715792701845
    ],
    "createdAt": "2026-06-09"
  },
  {
    "id": "issue-45",
    "wardId": "ward-228",
    "title": "Non-Functional Streetlights on Dark Stretch (Electronic City)",
    "description": "Entire row of streetlights is dead, making the lane unsafe at night.",
    "status": "open",
    "category": "Streetlights",
    "coordinates": [
      77.6653400509275,
      12.874564652515119
    ],
    "createdAt": "2026-06-17"
  },
  {
    "id": "issue-46",
    "wardId": "ward-228",
    "title": "Clogged Stormwater Drain Overflow (Electronic City)",
    "description": "Plastic bottles and silt clogging the grating, causing street flooding during showers.",
    "status": "resolved",
    "category": "Drainage",
    "coordinates": [
      77.66363145886265,
      12.868247917369246
    ],
    "createdAt": "2026-06-16"
  },
  {
    "id": "issue-47",
    "wardId": "ward-228",
    "title": "Illegal Black Spot Dump site (Electronic City)",
    "description": "Commercial waste piled up on the corner of the residential street. Heavy stench.",
    "status": "open",
    "category": "Garbage",
    "coordinates": [
      77.65720968620148,
      12.86950540122018
    ],
    "createdAt": "2026-06-16"
  },
  {
    "id": "issue-48",
    "wardId": "ward-228",
    "title": "Severe Potholes on Main Cross Road (Electronic City)",
    "description": "Large potholes causing major traffic slow-downs and danger to two-wheelers.",
    "status": "in-progress",
    "category": "Roads",
    "coordinates": [
      77.65800976181073,
      12.87600003814357
    ],
    "createdAt": "2026-06-25"
  },
  {
    "id": "issue-49",
    "wardId": "ward-228",
    "title": "Broken Footpath Slabs (Electronic City)",
    "description": "Pedestrians forced to walk on the busy street due to collapsing footpath structures.",
    "status": "resolved",
    "category": "Roads",
    "coordinates": [
      77.66454472469135,
      12.87566137917625
    ],
    "createdAt": "2026-06-08"
  },
  {
    "id": "issue-50",
    "wardId": "ward-228",
    "title": "Sewage Backflow in Residential Lane (Electronic City)",
    "description": "Underground sewer blocked, dirty black water bubbling up from manhole.",
    "status": "in-progress",
    "category": "Drainage",
    "coordinates": [
      77.66466917905646,
      12.869118830677527
    ],
    "createdAt": "2026-06-03"
  },
  {
    "id": "issue-51",
    "wardId": "ward-70",
    "title": "Unfinished Road Laying and Debris (Hebbal)",
    "description": "Asphalt scraped off but road work left incomplete for over two weeks.",
    "status": "in-progress",
    "category": "Roads",
    "coordinates": [
      77.59076751524987,
      13.030120551281136
    ],
    "createdAt": "2026-06-19"
  },
  {
    "id": "issue-52",
    "wardId": "ward-70",
    "title": "Flickering Streetlight Near Main Junction (Hebbal)",
    "description": "Continuous flashing is a major distraction for drivers and local houses.",
    "status": "resolved",
    "category": "Streetlights",
    "coordinates": [
      77.58972102186536,
      13.03658006220251
    ],
    "createdAt": "2026-05-31"
  },
  {
    "id": "issue-53",
    "wardId": "ward-70",
    "title": "Daylight Streetlight Burning (Hebbal)",
    "description": "Streetlights remain on throughout the day, wasting public energy.",
    "status": "resolved",
    "category": "Streetlights",
    "coordinates": [
      77.59609032561177,
      13.038080861833782
    ],
    "createdAt": "2026-06-06"
  },
  {
    "id": "issue-54",
    "wardId": "ward-70",
    "title": "Contaminated Drinking Water Supply (Hebbal)",
    "description": "Tap water has a yellowish tint and foul chemical smell since yesterday.",
    "status": "open",
    "category": "Water",
    "coordinates": [
      77.59803791244344,
      13.031833675644767
    ],
    "createdAt": "2026-06-19"
  },
  {
    "id": "issue-55",
    "wardId": "ward-70",
    "title": "Unfinished Road Laying and Debris (Hebbal)",
    "description": "Asphalt scraped off but road work left incomplete for over two weeks.",
    "status": "resolved",
    "category": "Roads",
    "coordinates": [
      77.591944142382,
      13.02944905907488
    ],
    "createdAt": "2026-06-16"
  },
  {
    "id": "issue-56",
    "wardId": "ward-70",
    "title": "Illegal Black Spot Dump site (Hebbal)",
    "description": "Commercial waste piled up on the corner of the residential street. Heavy stench.",
    "status": "resolved",
    "category": "Garbage",
    "coordinates": [
      77.58913444306681,
      13.035358883057487
    ],
    "createdAt": "2026-06-13"
  },
  {
    "id": "issue-57",
    "wardId": "ward-70",
    "title": "Non-Functional Streetlights on Dark Stretch (Hebbal)",
    "description": "Entire row of streetlights is dead, making the lane unsafe at night.",
    "status": "open",
    "category": "Streetlights",
    "coordinates": [
      77.59483071259409,
      13.03857958844913
    ],
    "createdAt": "2026-06-20"
  },
  {
    "id": "issue-58",
    "wardId": "ward-70",
    "title": "Non-Functional Streetlights on Dark Stretch (Hebbal)",
    "description": "Entire row of streetlights is dead, making the lane unsafe at night.",
    "status": "resolved",
    "category": "Streetlights",
    "coordinates": [
      77.59844628824189,
      13.033125411840125
    ],
    "createdAt": "2026-06-07"
  },
  {
    "id": "issue-59",
    "wardId": "ward-232",
    "title": "Borewell Water Leakage in Supply Pipeline (HSR Layout)",
    "description": "Main water pipe ruptured, clean water pooling on the asphalt.",
    "status": "in-progress",
    "category": "Water",
    "coordinates": [
      77.64271392748458,
      12.885607118367757
    ],
    "createdAt": "2026-06-14"
  },
  {
    "id": "issue-60",
    "wardId": "ward-232",
    "title": "Sewage Backflow in Residential Lane (HSR Layout)",
    "description": "Underground sewer blocked, dirty black water bubbling up from manhole.",
    "status": "resolved",
    "category": "Drainage",
    "coordinates": [
      77.63836484127535,
      12.890496482221247
    ],
    "createdAt": "2026-06-17"
  },
  {
    "id": "issue-61",
    "wardId": "ward-232",
    "title": "Flickering Streetlight Near Main Junction (HSR Layout)",
    "description": "Continuous flashing is a major distraction for drivers and local houses.",
    "status": "in-progress",
    "category": "Streetlights",
    "coordinates": [
      77.64293431501864,
      12.895180533828196
    ],
    "createdAt": "2026-06-13"
  },
  {
    "id": "issue-62",
    "wardId": "ward-232",
    "title": "Daylight Streetlight Burning (HSR Layout)",
    "description": "Streetlights remain on throughout the day, wasting public energy.",
    "status": "resolved",
    "category": "Streetlights",
    "coordinates": [
      77.64792986479925,
      12.890953843380991
    ],
    "createdAt": "2026-06-07"
  },
  {
    "id": "issue-63",
    "wardId": "ward-232",
    "title": "Public Dustbin Overflowing (HSR Layout)",
    "description": "The large community bin hasn't been cleared in three days and is spilling onto the road.",
    "status": "open",
    "category": "Garbage",
    "coordinates": [
      77.64406713348052,
      12.885671823264941
    ],
    "createdAt": "2026-06-20"
  },
  {
    "id": "issue-64",
    "wardId": "ward-232",
    "title": "Sewage Backflow in Residential Lane (HSR Layout)",
    "description": "Underground sewer blocked, dirty black water bubbling up from manhole.",
    "status": "resolved",
    "category": "Drainage",
    "coordinates": [
      77.63852510609134,
      12.88915124306782
    ],
    "createdAt": "2026-06-24"
  },
  {
    "id": "issue-65",
    "wardId": "ward-232",
    "title": "Illegal Black Spot Dump site (HSR Layout)",
    "description": "Commercial waste piled up on the corner of the residential street. Heavy stench.",
    "status": "resolved",
    "category": "Garbage",
    "coordinates": [
      77.64160378239191,
      12.894925512024438
    ],
    "createdAt": "2026-06-04"
  },
  {
    "id": "issue-66",
    "wardId": "ward-232",
    "title": "Sewage Backflow in Residential Lane (HSR Layout)",
    "description": "Underground sewer blocked, dirty black water bubbling up from manhole.",
    "status": "open",
    "category": "Drainage",
    "coordinates": [
      77.6475813636738,
      12.892263003476893
    ],
    "createdAt": "2026-06-06"
  },
  {
    "id": "issue-67",
    "wardId": "ward-232",
    "title": "Illegal Black Spot Dump site (HSR Layout)",
    "description": "Commercial waste piled up on the corner of the residential street. Heavy stench.",
    "status": "open",
    "category": "Garbage",
    "coordinates": [
      77.64534836211844,
      12.886112057712136
    ],
    "createdAt": "2026-06-25"
  },
  {
    "id": "issue-68",
    "wardId": "ward-232",
    "title": "Illegal Black Spot Dump site (HSR Layout)",
    "description": "Commercial waste piled up on the corner of the residential street. Heavy stench.",
    "status": "open",
    "category": "Garbage",
    "coordinates": [
      77.63905486827389,
      12.887904364877665
    ],
    "createdAt": "2026-06-13"
  },
  {
    "id": "issue-69",
    "wardId": "ward-232",
    "title": "Sewage Backflow in Residential Lane (HSR Layout)",
    "description": "Underground sewer blocked, dirty black water bubbling up from manhole.",
    "status": "resolved",
    "category": "Drainage",
    "coordinates": [
      77.64039750154268,
      12.894308876229257
    ],
    "createdAt": "2026-06-25"
  },
  {
    "id": "issue-70",
    "wardId": "ward-232",
    "title": "Delay in Door-to-Door Garbage Collection (HSR Layout)",
    "description": "BBMP auto-tippers not showing up regularly, leading to household dumping.",
    "status": "in-progress",
    "category": "Garbage",
    "coordinates": [
      77.64688094362783,
      12.893422643485852
    ],
    "createdAt": "2026-06-19"
  },
  {
    "id": "issue-71",
    "wardId": "ward-120",
    "title": "Public Dustbin Overflowing (Indiranagar)",
    "description": "The large community bin hasn't been cleared in three days and is spilling onto the road.",
    "status": "open",
    "category": "Garbage",
    "coordinates": [
      77.63780798443175,
      12.975904610875803
    ],
    "createdAt": "2026-06-13"
  },
  {
    "id": "issue-72",
    "wardId": "ward-120",
    "title": "Broken Footpath Slabs (Indiranagar)",
    "description": "Pedestrians forced to walk on the busy street due to collapsing footpath structures.",
    "status": "resolved",
    "category": "Roads",
    "coordinates": [
      77.63126436024339,
      12.975867031242704
    ],
    "createdAt": "2026-06-11"
  },
  {
    "id": "issue-73",
    "wardId": "ward-120",
    "title": "Open Manhole Cover on Busiest Cross (Indiranagar)",
    "description": "Cover broken and missing, leaving a highly dangerous 4-foot deep trap.",
    "status": "in-progress",
    "category": "Drainage",
    "coordinates": [
      77.63076399708393,
      12.982391605286717
    ],
    "createdAt": "2026-05-30"
  },
  {
    "id": "issue-74",
    "wardId": "ward-120",
    "title": "Borewell Water Leakage in Supply Pipeline (Indiranagar)",
    "description": "Main water pipe ruptured, clean water pooling on the asphalt.",
    "status": "in-progress",
    "category": "Water",
    "coordinates": [
      77.63723683269284,
      12.983352245139711
    ],
    "createdAt": "2026-06-20"
  },
  {
    "id": "issue-75",
    "wardId": "ward-120",
    "title": "Public Dustbin Overflowing (Indiranagar)",
    "description": "The large community bin hasn't been cleared in three days and is spilling onto the road.",
    "status": "resolved",
    "category": "Garbage",
    "coordinates": [
      77.63865293640796,
      12.976963577045721
    ],
    "createdAt": "2026-06-09"
  },
  {
    "id": "issue-76",
    "wardId": "ward-120",
    "title": "Broken Footpath Slabs (Indiranagar)",
    "description": "Pedestrians forced to walk on the busy street due to collapsing footpath structures.",
    "status": "resolved",
    "category": "Roads",
    "coordinates": [
      77.6323804432272,
      12.97509910418602
    ],
    "createdAt": "2026-06-21"
  },
  {
    "id": "issue-77",
    "wardId": "ward-120",
    "title": "Sewage Backflow in Residential Lane (Indiranagar)",
    "description": "Underground sewer blocked, dirty black water bubbling up from manhole.",
    "status": "open",
    "category": "Drainage",
    "coordinates": [
      77.63007694228192,
      12.981223997094649
    ],
    "createdAt": "2026-06-11"
  },
  {
    "id": "issue-78",
    "wardId": "ward-120",
    "title": "Daylight Streetlight Burning (Indiranagar)",
    "description": "Streetlights remain on throughout the day, wasting public energy.",
    "status": "resolved",
    "category": "Streetlights",
    "coordinates": [
      77.63602354904084,
      12.983954985524091
    ],
    "createdAt": "2026-06-06"
  },
  {
    "id": "issue-79",
    "wardId": "ward-120",
    "title": "Public Dustbin Overflowing (Indiranagar)",
    "description": "The large community bin hasn't been cleared in three days and is spilling onto the road.",
    "status": "resolved",
    "category": "Garbage",
    "coordinates": [
      77.63916834262923,
      12.978216457574034
    ],
    "createdAt": "2026-05-29"
  },
  {
    "id": "issue-80",
    "wardId": "ward-61",
    "title": "Daylight Streetlight Burning (Malleshwaram)",
    "description": "Streetlights remain on throughout the day, wasting public energy.",
    "status": "open",
    "category": "Streetlights",
    "coordinates": [
      77.55958879260453,
      13.013175052304856
    ],
    "createdAt": "2026-06-22"
  },
  {
    "id": "issue-81",
    "wardId": "ward-61",
    "title": "Flickering Streetlight Near Main Junction (Malleshwaram)",
    "description": "Continuous flashing is a major distraction for drivers and local houses.",
    "status": "in-progress",
    "category": "Streetlights",
    "coordinates": [
      77.55566564943811,
      13.018412358620404
    ],
    "createdAt": "2026-06-14"
  },
  {
    "id": "issue-82",
    "wardId": "ward-61",
    "title": "Flickering Streetlight Near Main Junction (Malleshwaram)",
    "description": "Continuous flashing is a major distraction for drivers and local houses.",
    "status": "resolved",
    "category": "Streetlights",
    "coordinates": [
      77.56061232406184,
      13.022696146653681
    ],
    "createdAt": "2026-06-13"
  },
  {
    "id": "issue-83",
    "wardId": "ward-61",
    "title": "Unfinished Road Laying and Debris (Malleshwaram)",
    "description": "Asphalt scraped off but road work left incomplete for over two weeks.",
    "status": "resolved",
    "category": "Roads",
    "coordinates": [
      77.56523529506916,
      13.018064886694155
    ],
    "createdAt": "2026-06-20"
  },
  {
    "id": "issue-84",
    "wardId": "ward-61",
    "title": "Broken Footpath Slabs (Malleshwaram)",
    "description": "Pedestrians forced to walk on the busy street due to collapsing footpath structures.",
    "status": "resolved",
    "category": "Roads",
    "coordinates": [
      77.56094265251032,
      13.013125893921414
    ],
    "createdAt": "2026-06-13"
  },
  {
    "id": "issue-85",
    "wardId": "ward-61",
    "title": "Public Dustbin Overflowing (Malleshwaram)",
    "description": "The large community bin hasn't been cleared in three days and is spilling onto the road.",
    "status": "open",
    "category": "Garbage",
    "coordinates": [
      77.55571238245825,
      13.017058412825339
    ],
    "createdAt": "2026-06-24"
  },
  {
    "id": "issue-86",
    "wardId": "ward-61",
    "title": "Severe Potholes on Main Cross Road (Malleshwaram)",
    "description": "Large potholes causing major traffic slow-downs and danger to two-wheelers.",
    "status": "resolved",
    "category": "Roads",
    "coordinates": [
      77.5592650756822,
      13.022553756363617
    ],
    "createdAt": "2026-06-21"
  },
  {
    "id": "issue-87",
    "wardId": "ward-128",
    "title": "Unfinished Road Laying and Debris (Shivajinagar)",
    "description": "Asphalt scraped off but road work left incomplete for over two weeks.",
    "status": "open",
    "category": "Roads",
    "coordinates": [
      77.59222382909351,
      12.990693717358447
    ],
    "createdAt": "2026-06-18"
  },
  {
    "id": "issue-88",
    "wardId": "ward-128",
    "title": "Broken Footpath Slabs (Shivajinagar)",
    "description": "Pedestrians forced to walk on the busy street due to collapsing footpath structures.",
    "status": "resolved",
    "category": "Roads",
    "coordinates": [
      77.5894821923835,
      12.984752012392912
    ],
    "createdAt": "2026-06-22"
  },
  {
    "id": "issue-89",
    "wardId": "ward-128",
    "title": "Severe Potholes on Main Cross Road (Shivajinagar)",
    "description": "Large potholes causing major traffic slow-downs and danger to two-wheelers.",
    "status": "in-progress",
    "category": "Roads",
    "coordinates": [
      77.58336143575964,
      12.98706648168384
    ],
    "createdAt": "2026-06-17"
  },
  {
    "id": "issue-90",
    "wardId": "ward-128",
    "title": "Broken Footpath Slabs (Shivajinagar)",
    "description": "Pedestrians forced to walk on the busy street due to collapsing footpath structures.",
    "status": "resolved",
    "category": "Roads",
    "coordinates": [
      77.58523714207833,
      12.993335624811348
    ],
    "createdAt": "2026-06-13"
  },
  {
    "id": "issue-91",
    "wardId": "ward-128",
    "title": "Clogged Stormwater Drain Overflow (Shivajinagar)",
    "description": "Plastic bottles and silt clogging the grating, causing street flooding during showers.",
    "status": "open",
    "category": "Drainage",
    "coordinates": [
      77.59162326313447,
      12.991908078803808
    ],
    "createdAt": "2026-06-09"
  },
  {
    "id": "issue-92",
    "wardId": "ward-128",
    "title": "Clogged Stormwater Drain Overflow (Shivajinagar)",
    "description": "Plastic bottles and silt clogging the grating, causing street flooding during showers.",
    "status": "resolved",
    "category": "Drainage",
    "coordinates": [
      77.59065102948182,
      12.985436974456649
    ],
    "createdAt": "2026-06-11"
  },
  {
    "id": "issue-93",
    "wardId": "ward-198",
    "title": "Daylight Streetlight Burning (JP Nagar)",
    "description": "Streetlights remain on throughout the day, wasting public energy.",
    "status": "resolved",
    "category": "Streetlights",
    "coordinates": [
      77.59203080065684,
      12.907218554066572
    ],
    "createdAt": "2026-06-02"
  },
  {
    "id": "issue-94",
    "wardId": "ward-198",
    "title": "Flickering Streetlight Near Main Junction (JP Nagar)",
    "description": "Continuous flashing is a major distraction for drivers and local houses.",
    "status": "open",
    "category": "Streetlights",
    "coordinates": [
      77.59208010238028,
      12.913762100435875
    ],
    "createdAt": "2026-05-30"
  },
  {
    "id": "issue-95",
    "wardId": "ward-198",
    "title": "Sewage Backflow in Residential Lane (JP Nagar)",
    "description": "Underground sewer blocked, dirty black water bubbling up from manhole.",
    "status": "resolved",
    "category": "Drainage",
    "coordinates": [
      77.59861074454422,
      12.914175794373065
    ],
    "createdAt": "2026-06-18"
  },
  {
    "id": "issue-96",
    "wardId": "ward-198",
    "title": "Flickering Streetlight Near Main Junction (JP Nagar)",
    "description": "Continuous flashing is a major distraction for drivers and local houses.",
    "status": "resolved",
    "category": "Streetlights",
    "coordinates": [
      77.59948536152433,
      12.907690775106689
    ],
    "createdAt": "2026-06-01"
  },
  {
    "id": "issue-97",
    "wardId": "ward-198",
    "title": "Contaminated Drinking Water Supply (JP Nagar)",
    "description": "Tap water has a yellowish tint and foul chemical smell since yesterday.",
    "status": "resolved",
    "category": "Water",
    "coordinates": [
      77.59307845527579,
      12.90635961693817
    ],
    "createdAt": "2026-05-31"
  },
  {
    "id": "issue-98",
    "wardId": "ward-196",
    "title": "Contaminated Drinking Water Supply (Jayanagar)",
    "description": "Tap water has a yellowish tint and foul chemical smell since yesterday.",
    "status": "resolved",
    "category": "Water",
    "coordinates": [
      77.58545583851293,
      12.93139492525338
    ],
    "createdAt": "2026-06-19"
  },
  {
    "id": "issue-99",
    "wardId": "ward-196",
    "title": "Borewell Water Leakage in Supply Pipeline (Jayanagar)",
    "description": "Main water pipe ruptured, clean water pooling on the asphalt.",
    "status": "resolved",
    "category": "Water",
    "coordinates": [
      77.59161077457394,
      12.933616904513434
    ],
    "createdAt": "2026-06-25"
  },
  {
    "id": "issue-100",
    "wardId": "ward-196",
    "title": "Public Dustbin Overflowing (Jayanagar)",
    "description": "The large community bin hasn't been cleared in three days and is spilling onto the road.",
    "status": "resolved",
    "category": "Garbage",
    "coordinates": [
      77.59426257069957,
      12.927634563244734
    ],
    "createdAt": "2026-06-10"
  }
];
