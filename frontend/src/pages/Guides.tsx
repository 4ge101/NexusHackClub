import type { FunctionalComponent } from "preact";
import { useState, useEffect } from "preact/hooks";
import { route } from "preact-router";
import "../styles/Guide.css";

type Guide = {
  id: string;
  category: string;
  title: string;
  description: string;
  duration: string;
  level: "BEGINNER" | "INTERMEDIATE" | "ADVANCED";
  steps: number;
  color: string;
};

const GUIDES: Guide[] = [
  {
    id: "g1",
    category: "GETTING STARTED",
    title: "Welcome to Kairo",
    description:
      "Everything you need to know to get started in the Kairo Hack Club community.",
    duration: "5 min read",
    level: "BEGINNER",
    steps: 4,
    color: "#f5a623",
  },
  {
    id: "g2",
    category: "GETTING STARTED",
    title: "Joining Our Discord",
    description:
      "How to find us, verify yourself, and navigate our Discord server like a pro.",
    duration: "3 min read",
    level: "BEGINNER",
    steps: 3,
    color: "#7ed321",
  },
  {
    id: "g3",
    category: "EVENTS",
    title: "Attending Your First Event",
    description:
      "What to expect, what to bring, and how to make the most of Kairo events.",
    duration: "6 min read",
    level: "BEGINNER",
    steps: 5,
    color: "#e8a0f0",
  },
  {
    id: "g4",
    category: "EVENTS",
    title: "Running a Workshop",
    description:
      "A step-by-step guide to pitching, planning, and running your own workshop at Kairo.",
    duration: "10 min read",
    level: "INTERMEDIATE",
    steps: 7,
    color: "#ffd166",
  },
  {
    id: "g5",
    category: "PROJECTS",
    title: "Starting a Project",
    description:
      "How to propose, scope, and kick off a project within the Kairo community.",
    duration: "8 min read",
    level: "INTERMEDIATE",
    steps: 6,
    color: "#ff6b6b",
  },
  {
    id: "g6",
    category: "PROJECTS",
    title: "Showcasing Your Work",
    description:
      "Best practices for presenting your project at demo days and online platforms.",
    duration: "5 min read",
    level: "INTERMEDIATE",
    steps: 4,
    color: "#f5a623",
  },
  {
    id: "g7",
    category: "ADVANCED",
    title: "Becoming a Organizer",
    description:
      "What it takes to step up, lead initiatives, and shape the direction of Kairo.",
    duration: "12 min read",
    level: "ADVANCED",
    steps: 8,
    color: "#1a1a1a",
  },
  {
    id: "g8",
    category: "ADVANCED",
    title: "Open Source Contributions",
    description:
      "How to find Kairo repos, make meaningful PRs, and collaborate with the core team.",
    duration: "9 min read",
    level: "ADVANCED",
    steps: 6,
    color: "#7ed321",
  },
];

const CATEGORIES = [
  "ALL",
  ...Array.from(new Set(GUIDES.map((g) => g.category))),
];

const LEVEL_COLORS: Record<string, string> = {
  BEGINNER: "#7ed321",
  INTERMEDIATE: "#f5a623",
  ADVANCED: "#ff6b6b",
};

const GuideCard: FunctionalComponent<{ guide: Guide; index: number }> = ({
  guide,
  index,
}) => {
  const [hovered, setHovered] = useState(false);
  const isDark = guide.color === "#1a1a1a";

  return (
    <div
      class={`gd-card${hovered ? " gd-card--hovered" : ""}`}
      style={{ backgroundColor: guide.color }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div class="gd-card-top">
        <span
          class="gd-card-index"
          style={{ color: isDark ? "#f0ebe0" : "#1a1a1a", opacity: 0.2 }}
        >
          {String(index + 1).padStart(2, "0")}
        </span>
        <span
          class="gd-card-level"
          style={{
            backgroundColor: LEVEL_COLORS[guide.level],
            color: "#1a1a1a",
          }}
        >
          {guide.level}
        </span>
      </div>

      <div class="gd-card-body">
        <span
          class="gd-card-cat"
          style={{ color: isDark ? "#f0ebe047" : "#1a1a1a47" }}
        >
          {guide.category}
        </span>
        <h3
          class="gd-card-title"
          style={{ color: isDark ? "#f0ebe0" : "#1a1a1a" }}
        >
          {guide.title}
        </h3>
        <p
          class="gd-card-desc"
          style={{ color: isDark ? "#f0ebe0" : "#1a1a1a" }}
        >
          {guide.description}
        </p>
      </div>

      <div class="gd-card-footer">
        <div class="gd-card-meta">
          <span
            class="gd-meta-pill"
            style={{
              borderColor: isDark ? "#f0ebe040" : "#1a1a1a40",
              color: isDark ? "#f0ebe0" : "#1a1a1a",
            }}
          >
            {guide.steps} STEPS
          </span>
          <span
            class="gd-meta-pill"
            style={{
              borderColor: isDark ? "#f0ebe040" : "#1a1a1a40",
              color: isDark ? "#f0ebe0" : "#1a1a1a",
            }}
          >
            {guide.duration}
          </span>
        </div>
        <button
          class="gd-card-btn"
          style={{
            backgroundColor: isDark ? "#f0ebe0" : "#1a1a1a",
            color: isDark ? "#1a1a1a" : "#f0ebe0",
            boxShadow: `3px 3px 0 ${isDark ? "#f0ebe040" : "#1a1a1a40"}`,
          }}
        >
          READ →
        </button>
      </div>
    </div>
  );
};

const Guides: FunctionalComponent = () => {
  const [activeCategory, setActiveCategory] = useState("ALL");

  const filtered =
    activeCategory === "ALL"
      ? GUIDES
      : GUIDES.filter((g) => g.category === activeCategory);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") route("/");
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <div class="gd-viewport">
      <div class="gd-topbar">
        <button class="gd-back-btn" onClick={() => route("/")}>
          <span class="gd-back-key">ESC</span>
          <span class="gd-back-label">BACK</span>
        </button>
        <span class="gd-topbar-tag">NEW TO Kairo?</span>
      </div>

      <div class="gd-body">
        <div class="gd-left">
          <h1 class="gd-title">GUIDES</h1>
          <p class="gd-subtitle">
            Everything you need to find your footing and start building.
          </p>

          <div class="gd-stat-grid">
            <div class="gd-stat gd-stat--dark">
              <span class="gd-stat-num">{GUIDES.length}</span>
              <span class="gd-stat-label">GUIDES</span>
            </div>
            <div class="gd-stat gd-stat--green">
              <span class="gd-stat-num">{CATEGORIES.length - 1}</span>
              <span class="gd-stat-label">TOPICS</span>
            </div>
          </div>

          <div class="gd-filters">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                class={`gd-filter-btn${activeCategory === cat ? " gd-filter-btn--active" : ""}`}
                onClick={() => setActiveCategory(cat)}
              >
                {cat}
                <span class="gd-filter-count">
                  {cat === "ALL"
                    ? GUIDES.length
                    : GUIDES.filter((g) => g.category === cat).length}
                </span>
              </button>
            ))}
          </div>

          <div class="gd-level-legend">
            <span class="gd-legend-title">LEVELS</span>
            {Object.entries(LEVEL_COLORS).map(([level, color]) => (
              <div key={level} class="gd-legend-item">
                <span
                  class="gd-legend-dot"
                  style={{ backgroundColor: color }}
                />
                <span class="gd-legend-label">{level}</span>
              </div>
            ))}
          </div>
        </div>

        <div class="gd-right">
          <div class="gd-grid">
            {filtered.map((guide, idx) => (
              <GuideCard key={guide.id} guide={guide} index={idx} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Guides;
