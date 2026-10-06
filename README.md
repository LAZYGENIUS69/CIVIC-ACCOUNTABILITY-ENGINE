# NagarAI

India's civic accountability engine for mapping local issues, analyzing citizen complaints, and turning civic friction into structured action.

NagarAI combines an interactive ward-level map, complaint intelligence workflows, public civic datasets, and AI-assisted drafting tools into a command-center interface for urban governance, citizen reporting, and civic operations.

## Overview

NagarAI is a Next.js application built for civic-tech workflows in India. It helps users explore local ward conditions, track civic complaints, identify department ownership, generate complaint or RTI drafts, and view issue density across map and dashboard views.

The interface is designed as a high-end civic control terminal: fast to scan, map-first, data-dense, and optimized for repeated operational use.

## Key Features

- Interactive civic map with Indian state, district, and Bangalore ward datasets
- Ward detail panels with local metrics, political context, and issue summaries
- Complaint capture flow with AI analysis and structured issue classification
- AI-generated complaint drafts and RTI drafts
- Dashboard view for civic categories, SLA pressure, and operational signals
- Complaint tracker modal for reviewing and inspecting issue records
- Light and dark theme support through CSS custom properties
- MapLibre-powered mapping with custom overlays and civic data layers
- Zustand-based client state for responsive map and complaint interactions

## Tech Stack

- Next.js 16
- React 19
- TypeScript
- Tailwind CSS 4
- MapLibre GL
- Zustand
- Framer Motion
- Google Gemini API
- Recharts
- Lucide React

## Project Structure

```text
src/
  app/
    api/                 API routes for AI analysis, civic insights, RTI generation, and data feeds
    complaints/          Complaints page route
    dashboard/           Dashboard page route
    page.tsx             Main app shell
  components/            Map, dashboard, complaint, navbar, theme, and panel components
  data/                  Seed civic data and department metadata
  lib/                   Gemini client and supporting utilities
  store/                 Zustand civic state
public/
  data/                  GeoJSON and static map datasets
```

## Technical Architecture

NagarAI is organized as a client-heavy geospatial intelligence interface backed by focused Next.js API routes. The browser owns the live interaction loop: map state, selected ward state, issue overlays, modal state, and complaint workflow state. Server routes are used where secrets, model calls, data normalization, or third-party feed aggregation belong.

```mermaid
flowchart TB
  subgraph Client["Client Application"]
    Shell["Next.js App Shell<br/>src/app/page.tsx"]
    Map["Map Command Surface<br/>NagarAIMap.tsx"]
    Complaints["Civic Rights Assistant<br/>ComplaintsTab.tsx"]
    Dashboard["Operations Dashboard<br/>DashboardTab.tsx"]
    WardPanel["Ward Detail Panel<br/>WardDetailPanel.tsx"]
    Store["Zustand Civic Store<br/>civicStore.ts"]
  end

  subgraph Server["Next.js Route Handlers"]
    Analyze["/api/analyze-issue"]
    Complaint["/api/generate-complaint"]
    RTI["/api/generate-rti"]
    Insights["/api/insights"]
    Feeds["Public Data APIs<br/>gdelt, fires, radar, markets, infra"]
  end

  subgraph Data["Data Layer"]
    GeoJSON["Static GeoJSON<br/>wards, districts, states"]
    Seeds["Seed Civic Records<br/>issues, wards, politicians"]
    Gemini["Google Gemini API"]
    PublicFeeds["Public Intelligence Feeds"]
  end

  Shell --> Map
  Shell --> Complaints
  Shell --> Dashboard
  Shell --> WardPanel
  Map <--> Store
  Complaints <--> Store
  Dashboard <--> Store
  WardPanel <--> Store
  Map --> GeoJSON
  Map --> Seeds
  Complaints --> Analyze
  Complaints --> Complaint
  Complaints --> RTI
  Dashboard --> Insights
  WardPanel --> RTI
  Analyze --> Gemini
  Complaint --> Gemini
  RTI --> Gemini
  Insights --> Gemini
  Feeds --> PublicFeeds
```

### Execution Model

The application separates fast UI state from slower intelligence workflows:

- Map rendering, selected ward context, user statistics, fly-to actions, and local complaint records are managed in the client store.
- AI calls are isolated behind server routes so the Gemini key never needs to be exposed to the browser.
- Static geospatial files are served from `public/data`, allowing MapLibre to draw civic boundaries without requiring a database for the current build.
- Dashboard and modal views derive their operational summaries from the same issue records used by the map, keeping the interface consistent across views.

```mermaid
sequenceDiagram
  actor User
  participant UI as Complaint UI
  participant Store as Zustand Store
  participant Analyze as /api/analyze-issue
  participant Draft as /api/generate-complaint
  participant RTI as /api/generate-rti
  participant Gemini as Gemini Model
  participant Map as MapLibre View

  User->>UI: Describe civic issue and add context
  UI->>Analyze: Send issue text, location, and category hints
  Analyze->>Gemini: Classify issue and infer civic ownership
  Gemini-->>Analyze: Structured analysis result
  Analyze-->>UI: Issue type, urgency, department, rights guidance
  UI->>Draft: Request complaint draft
  Draft->>Gemini: Generate civic complaint text
  Gemini-->>Draft: Complaint draft
  Draft-->>UI: Editable complaint output
  UI->>RTI: Optional RTI generation
  RTI->>Gemini: Generate RTI draft
  Gemini-->>RTI: RTI text
  RTI-->>UI: RTI output
  UI->>Store: Persist issue and user action stats
  Store->>Map: Update issue layer and fly-to target
  Map-->>User: Spatial confirmation and ward context
```

### Map Rendering Pipeline

The map is not a passive background. It is the primary interaction surface and acts as the shared spatial index for wards, issues, overlays, and civic drill-downs.

```mermaid
flowchart LR
  Init["Map Init<br/>Carto basemap + MapLibre"] --> Sources["Register GeoJSON Sources"]
  Sources --> Wards["Ward Boundaries Layer"]
  Sources --> Districts["India District Context"]
  Sources --> Issues["Civic Issue Points"]
  Sources --> Pulses["City Pulse / Status Layers"]
  Issues --> Events["Pointer, popup, click events"]
  Wards --> Events
  Events --> Selection["Selected ward / selected issue"]
  Selection --> Store["Zustand Store"]
  Store --> Panel["Ward Detail Panel"]
  Store --> Tracker["Complaint Tracker Modal"]
  Store --> FlyTo["Programmatic fly-to"]
  FlyTo --> Init
```

### State Ownership

NagarAI keeps state intentionally small and operational. The store coordinates shared civic state while leaving component-specific UI concerns local to the component.

```mermaid
classDiagram
  class CivicStore {
    issues
    userStats
    flyToLocation
    addIssue()
    updateIssueStatus()
    setFlyToLocation()
    incrementComplaintFiled()
    incrementRtiFiled()
    loadStatsFromLocalStorage()
  }

  class NagarAIMap {
    mapRef
    popupRef
    selectedWard
    heatmapEnabled
    basemapMode
  }

  class ComplaintsTab {
    issueDescription
    analysisResult
    generatedComplaint
    generatedRti
    photoUploadState
  }

  class DashboardTab {
    categoryBreakdown
    wardPressure
    civicStats
    generatedActions
  }

  class WardDetailPanel {
    wardProfile
    wardIssues
    politicianContext
    aiInsight
  }

  CivicStore <.. NagarAIMap
  CivicStore <.. ComplaintsTab
  CivicStore <.. DashboardTab
  CivicStore <.. WardDetailPanel
```

### API Boundary

The API layer is intentionally thin. Each route does one job: receive structured UI input, call a model or public data source when needed, normalize the response, and return a client-ready payload.

```mermaid
flowchart TD
  Browser["Browser Components"] --> CivicAI["Civic AI Routes"]
  Browser --> IntelRoutes["Intelligence Feed Routes"]
  Browser --> StaticAssets["Static Public Assets"]

  CivicAI --> AnalyzeIssue["analyze-issue<br/>issue classification"]
  CivicAI --> GenerateComplaint["generate-complaint<br/>formal complaint drafting"]
  CivicAI --> GenerateRTI["generate-rti<br/>RTI drafting"]
  CivicAI --> Insights["insights<br/>ward and dashboard analysis"]

  AnalyzeIssue --> Gemini["Gemini API"]
  GenerateComplaint --> Gemini
  GenerateRTI --> Gemini
  Insights --> Gemini

  IntelRoutes --> GDELT["GDELT"]
  IntelRoutes --> NASA["NASA / FIRMS"]
  IntelRoutes --> USGS["USGS"]
  IntelRoutes --> Markets["Market and risk feeds"]
  StaticAssets --> GeoJSON["GeoJSON Boundaries"]
```

### Design System Implementation

The visual system is implemented with theme-aware CSS custom properties and tactical UI primitives rather than one-off color usage. This allows the same components to operate across light and dark modes without duplicating component logic.

```mermaid
flowchart LR
  Tokens["CSS Custom Properties<br/>globals.css"] --> Theme["data-theme on documentElement"]
  Theme --> Components["Tailwind arbitrary values<br/>var(--token)"]
  Theme --> MapStyle["Theme-aware map style"]
  Components --> Navbar["Navbar"]
  Components --> Panels["Panels and Modals"]
  Components --> Cards["Cards and Metrics"]
  Components --> Controls["Map Controls"]
  MapStyle --> Voyager["Light: Carto Voyager"]
  MapStyle --> DarkMatter["Dark: Carto Dark Matter"]
```

## Getting Started

### Prerequisites

- Node.js 20 or newer
- npm
- A Google Gemini API key for AI-assisted complaint, RTI, and insight generation

### Installation

```bash
npm install
```

### Environment Variables

Create a local environment file:

```bash
cp .env.example .env.local
```

For the current NagarAI AI flows, add:

```env
GEMINI_API_KEY=your_gemini_api_key_here
```

Some legacy and optional data-source variables are documented in `.env.example`. The app can still render its core interface without all optional integrations, but AI drafting and analysis require `GEMINI_API_KEY`.

### Run Locally

```bash
npm run dev
```

Open `http://localhost:3000`.

### Production Build

```bash
npm run build
npm run start
```

### Lint

```bash
npm run lint
```

## Core Workflows

### Map Intelligence

Use the map view to inspect civic conditions spatially. NagarAI overlays civic issues, ward boundaries, district context, and operational controls into a single map-first workspace.

### Civic Rights Assistant

The complaint flow helps users describe a problem in plain language, analyze the issue type, identify likely civic ownership, and move toward a complaint or RTI draft.

### Dashboard

The dashboard view provides a higher-level operational picture across categories, issue load, severity, and civic service pressure.

## Data

The project includes local static datasets for map rendering and civic exploration:

- Bangalore ward boundaries
- India state boundaries
- India district boundaries
- Seed civic issues
- Department contact metadata
- Politician and ward context data

These datasets live under `public/data` and `src/data`.

## Deployment

NagarAI is a standard Next.js application and can be deployed to Vercel or any Node-compatible hosting environment.

Recommended production steps:

1. Set `GEMINI_API_KEY` in the hosting provider's environment settings.
2. Run `npm run build`.
3. Serve with `npm run start` or the platform's Next.js adapter.

## Design Direction

NagarAI is intentionally designed away from generic dashboard defaults. Its interface uses a civic command-center language: precise typography, dense information hierarchy, glass-like tactical panels, sharp map controls, and theme-aware design tokens.

The goal is to feel like a serious public-interest intelligence suite, not a marketing landing page.

## Security Notes

- Do not commit `.env.local` or real API keys.
- Keep `GEMINI_API_KEY` server-side only.
- Review any public data-source integrations before exposing new API routes.

## License

This repository is currently private. Add a license before distributing, reusing, or open-sourcing the project.
