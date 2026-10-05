const fs = require('fs');
const path = require('path');

const WARD_DISTRIBUTION = [
  { wardId: "ward-150", name: "Koramangala", total: 15, resolved: 4, coords: [77.6140, 12.9352] },
  { wardId: "ward-56", name: "Whitefield", total: 18, resolved: 3, coords: [77.7480, 12.9698] },
  { wardId: "ward-73", name: "Electronic City", total: 17, resolved: 3, coords: [77.6770, 12.8399] },
  { wardId: "ward-34", name: "Hebbal", total: 8, resolved: 5, coords: [77.5946, 13.0358] },
  { wardId: "ward-92", name: "HSR Layout", total: 12, resolved: 5, coords: [77.6383, 12.9116] },
  { wardId: "ward-81", name: "Indiranagar", total: 9, resolved: 5, coords: [77.6412, 12.9784] },
  { wardId: "ward-45", name: "Malleshwaram", total: 7, resolved: 4, coords: [77.5650, 13.0030] },
  { wardId: "ward-28", name: "Shivajinagar", total: 6, resolved: 3, coords: [77.6012, 12.9850] },
  { wardId: "ward-68", name: "JP Nagar", total: 5, resolved: 4, coords: [77.5850, 12.9082] },
  { wardId: "ward-110", name: "Jayanagar", total: 3, resolved: 3, coords: [77.5830, 12.9250] },
];

const CATEGORIES = ['Roads', 'Garbage', 'Water', 'Streetlights', 'Drainage'];

const ISSUE_TEMPLATES = {
  Roads: [
    { title: 'Severe Potholes on Main Cross Road', desc: 'Large potholes causing major traffic slow-downs and danger to two-wheelers.' },
    { title: 'Unfinished Road Laying and Debris', desc: 'Asphalt scraped off but road work left incomplete for over two weeks.' },
    { title: 'Broken Footpath Slabs', desc: 'Pedestrians forced to walk on the busy street due to collapsing footpath structures.' }
  ],
  Garbage: [
    { title: 'Illegal Black Spot Dump site', desc: 'Commercial waste piled up on the corner of the residential street. Heavy stench.' },
    { title: 'Delay in Door-to-Door Garbage Collection', desc: 'BBMP auto-tippers not showing up regularly, leading to household dumping.' },
    { title: 'Public Dustbin Overflowing', desc: 'The large community bin hasn\'t been cleared in three days and is spilling onto the road.' }
  ],
  Water: [
    { title: 'Contaminated Drinking Water Supply', desc: 'Tap water has a yellowish tint and foul chemical smell since yesterday.' },
    { title: 'Borewell Water Leakage in Supply Pipeline', desc: 'Main water pipe ruptured, clean water pooling on the asphalt.' },
    { title: 'Low Pressure in Kaveri Water Pipe', desc: 'Water pressure is extremely low, barely filling ground floor sumps.' }
  ],
  Streetlights: [
    { title: 'Non-Functional Streetlights on Dark Stretch', desc: 'Entire row of streetlights is dead, making the lane unsafe at night.' },
    { title: 'Flickering Streetlight Near Main Junction', desc: 'Continuous flashing is a major distraction for drivers and local houses.' },
    { title: 'Daylight Streetlight Burning', desc: 'Streetlights remain on throughout the day, wasting public energy.' }
  ],
  Drainage: [
    { title: 'Clogged Stormwater Drain Overflow', desc: 'Plastic bottles and silt clogging the grating, causing street flooding during showers.' },
    { title: 'Sewage Backflow in Residential Lane', desc: 'Underground sewer blocked, dirty black water bubbling up from manhole.' },
    { title: 'Open Manhole Cover on Busiest Cross', desc: 'Cover broken and missing, leaving a highly dangerous 4-foot deep trap.' }
  ]
};

function randomInRange(min, max) {
  return Math.random() * (max - min) + min;
}

function generateIssues() {
  const issues = [];
  let globalCount = 1;

  for (const ward of WARD_DISTRIBUTION) {
    const { wardId, name, total, resolved, coords } = ward;
    const [lng, lat] = coords;

    // Remaining issues are split between open and in-progress
    const openCount = Math.ceil((total - resolved) / 2);
    const inProgressCount = total - resolved - openCount;

    const statuses = [
      ...Array(resolved).fill('resolved'),
      ...Array(openCount).fill('open'),
      ...Array(inProgressCount).fill('in-progress')
    ];

    // Shuffle statuses to spread them randomly
    statuses.sort(() => Math.random() - 0.5);

    for (let i = 0; i < total; i++) {
      const status = statuses[i];
      const category = CATEGORIES[Math.floor(Math.random() * CATEGORIES.length)];
      const templates = ISSUE_TEMPLATES[category];
      const template = templates[Math.floor(Math.random() * templates.length)];

      // Scatter within ~0.008 degrees (approx 800m) of ward center
      const scatLng = lng + randomInRange(-0.007, 0.007);
      const scatLat = lat + randomInRange(-0.007, 0.007);

      const daysAgo = Math.floor(randomInRange(1, 30));
      const date = new Date();
      date.setDate(date.getDate() - daysAgo);

      issues.push({
        id: `issue-${globalCount++}`,
        wardId,
        title: `${template.title} (${name})`,
        description: template.desc,
        status,
        category,
        coordinates: [parseFloat(scatLng.toFixed(6)), parseFloat(scatLat.toFixed(6))],
        createdAt: date.toISOString().split('T')[0]
      });
    }
  }

  // Final double-check counts
  console.log(`Generated total issues: ${issues.length}`);
  const statusCounts = issues.reduce((acc, iss) => {
    acc[iss.status] = (acc[iss.status] || 0) + 1;
    return acc;
  }, {});
  console.log('Status breakdown:', statusCounts);

  return issues;
}

const generatedIssues = generateIssues();

const fileContent = `export interface Issue {
  id: string;
  wardId: string;
  title: string;
  description: string;
  status: 'open' | 'in-progress' | 'resolved';
  category: 'Roads' | 'Garbage' | 'Water' | 'Streetlights' | 'Drainage';
  coordinates: [number, number];
  createdAt: string;
}

export const ISSUES: Issue[] = ${JSON.stringify(generatedIssues, null, 2)};
`;

// Save to src/data/issues-seed.ts
const srcPath = path.join(__dirname, '..', 'src', 'data', 'issues-seed.ts');
fs.writeFileSync(srcPath, fileContent, 'utf8');
console.log(`Saved seed issues to ${srcPath}`);

// Save to data/issues-seed.ts
const rootDataDir = path.join(__dirname, '..', 'data');
if (!fs.existsSync(rootDataDir)) {
  fs.mkdirSync(rootDataDir, { recursive: true });
}
const rootPath = path.join(rootDataDir, 'issues-seed.ts');
fs.writeFileSync(rootPath, fileContent, 'utf8');
console.log(`Saved seed issues to ${rootPath}`);
