const fs = require('fs');
const path = require('path');

const SEED_WARDS = [
  { wardId: "ward-150", wardNumber: 150, name: "Koramangala", civicScore: 31, totalIssues: 47, resolvedIssues: 11, coordinates: [77.6140, 12.9352] },
  { wardId: "ward-68", wardNumber: 68, name: "JP Nagar", civicScore: 74, totalIssues: 23, resolvedIssues: 17, coordinates: [77.5850, 12.9082] },
  { wardId: "ward-81", wardNumber: 81, name: "Indiranagar", civicScore: 58, totalIssues: 31, resolvedIssues: 18, coordinates: [77.6412, 12.9784] },
  { wardId: "ward-56", wardNumber: 56, name: "Whitefield", civicScore: 22, totalIssues: 54, resolvedIssues: 12, coordinates: [77.7480, 12.9698] },
  { wardId: "ward-34", wardNumber: 34, name: "Hebbal", civicScore: 67, totalIssues: 19, resolvedIssues: 13, coordinates: [77.5946, 13.0358] },
  { wardId: "ward-92", wardNumber: 92, name: "HSR Layout", civicScore: 45, totalIssues: 38, resolvedIssues: 17, coordinates: [77.6383, 12.9116] },
  { wardId: "ward-110", wardNumber: 110, name: "Jayanagar", civicScore: 81, totalIssues: 16, resolvedIssues: 13, coordinates: [77.5830, 12.9250] },
  { wardId: "ward-45", wardNumber: 45, name: "Malleshwaram", civicScore: 62, totalIssues: 27, resolvedIssues: 17, coordinates: [77.5650, 13.0030] },
  { wardId: "ward-73", wardNumber: 73, name: "Electronic City", civicScore: 18, totalIssues: 61, resolvedIssues: 11, coordinates: [77.6770, 12.8399] },
  { wardId: "ward-28", wardNumber: 28, name: "Shivajinagar", civicScore: 53, totalIssues: 29, resolvedIssues: 15, coordinates: [77.6012, 12.9850] }
];

function generateFallback() {
  console.log("Generating fallback approximate GeoJSON...");
  const features = SEED_WARDS.map(w => {
    const [lng, lat] = w.coordinates;
    const size = 0.015; // approximate size of a ward in degrees
    const coords = [
      [lng - size, lat - size],
      [lng + size, lat - size],
      [lng + size, lat + size],
      [lng - size, lat + size],
      [lng - size, lat - size]
    ];
    return {
      type: "Feature",
      properties: {
        ward_no: String(w.wardNumber),
        ward_name: w.name,
        wardId: w.wardId,
        civicScore: w.civicScore
      },
      geometry: {
        type: "Polygon",
        coordinates: [coords]
      }
    };
  });

  return {
    type: "FeatureCollection",
    features: features
  };
}

async function main() {
  const destDir = path.join(__dirname, '..', 'public', 'data');
  if (!fs.existsSync(destDir)) {
    fs.mkdirSync(destDir, { recursive: true });
  }
  const destPath = path.join(destDir, 'bangalore-wards.geojson');

  // Let's try downloading from different potential URLs
  const urls = [
    "https://raw.githubusercontent.com/datameet/Municipal_Spatial_Data/master/Bangalore/BBMP.GeoJSON",
    "https://raw.githubusercontent.com/datameet/Municipal_Spatial_Data/master/Bangalore/BBMP.geojson",
    "https://raw.githubusercontent.com/datameet/municipal-data/master/Ward%20Boundaries/BBMP.geojson"
  ];

  let downloaded = false;
  for (const url of urls) {
    console.log(`Trying to download from: ${url}`);
    try {
      const response = await fetch(url, { signal: AbortSignal.timeout(5000) });
      if (response.ok) {
        const text = await response.text();
        // Validate it is valid JSON
        const json = JSON.parse(text);
        if (json && json.type === 'FeatureCollection') {
          // If properties don't have ward_no or ward_name in expected cases, map them or normalize them
          // Let's print some sample properties
          if (json.features && json.features.length > 0) {
            console.log("Sample features keys:", Object.keys(json.features[0].properties || {}));
          }
          fs.writeFileSync(destPath, text, 'utf8');
          console.log(`Successfully downloaded and saved to ${destPath}`);
          downloaded = true;
          break;
        }
      } else {
        console.log(`Failed with status: ${response.status}`);
      }
    } catch (err) {
      console.log(`Failed to fetch: ${err.message}`);
    }
  }

  if (!downloaded) {
    const fallbackGeo = generateFallback();
    fs.writeFileSync(destPath, JSON.stringify(fallbackGeo, null, 2), 'utf8');
    console.log(`Saved fallback GeoJSON to ${destPath}`);
  }
}

main().catch(err => {
  console.error("Main execution failed:", err);
  process.exit(1);
});
