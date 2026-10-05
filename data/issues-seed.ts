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
