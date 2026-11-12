export const personalInfo = {
  fullName: "Nilakshi Tripathi",
  brandName: "NILAKSHI.EXE",
  title: "B.Tech Artificial Intelligence & Machine Learning Student",
  subtitle: "Aspiring AI Engineer",
  tagline: "Exploring Intelligence. Building Tomorrow.",
  college: "Buddha Institute of Technology, GIDA, Gorakhpur, India",
  degree: "B.Tech - Artificial Intelligence & Machine Learning",
  academicYear: "3rd Year",
  location: "India",
  email: "tripathinilakshi20@gmail.com",
  linkedin: "https://www.linkedin.com/in/nilakshi-tripathi/",
  github: "https://github.com/tripathinilakshi20",
  careerObjective: "Seeking AI/ML internship opportunities.",
  bio: "I'm a third-year B.Tech student specializing in Artificial Intelligence and Machine Learning. I enjoy exploring intelligent technologies and building practical projects.",
  extendedBio: [
    "Currently pursuing my B.Tech degree at Buddha Institute of Technology in Gorakhpur, I focus on the practical application of computer vision and intelligent systems to tackle real-world challenges.",
    "Driven by curiosity about how machines perceive and reason, I built AEGISNOVA — an automated animal detection and farm security system utilizing YOLO and FastAPI. I believe in honest engineering, learning the fundamentals thoroughly, and bridging theoretical concepts with hands-on development.",
    "I am actively seeking an AI/ML internship where I can contribute to meaningful engineering problems, learn from experienced mentors, and accelerate my journey as an AI engineer."
  ]
};

export const technicalSkills = [
  {
    category: "Programming Languages",
    description: "Core languages learned through academic curriculum and hands-on practice.",
    skills: [
      {
        name: "Python",
        level: "Intermediate / Core",
        experience: "Primary language used for AI/ML projects, computer vision scripts, and backend services.",
        levelBadge: "Core Focus",
        badgeColor: "cyan"
      },
      {
        name: "Java",
        level: "Basic",
        experience: "Academic coursework covering Object-Oriented Programming (OOP) principles and data structures.",
        levelBadge: "Basic / Academic",
        badgeColor: "purple"
      },
      {
        name: "C",
        level: "Basic",
        experience: "Academic foundation in procedural programming, memory management, and algorithmic thinking.",
        levelBadge: "Basic / Academic",
        badgeColor: "purple"
      },
      {
        name: "C++",
        level: "Basic",
        experience: "Foundational programming, standard library concepts, and problem solving fundamentals.",
        levelBadge: "Basic / Academic",
        badgeColor: "purple"
      }
    ]
  },
  {
    category: "AI & ML Learning",
    description: "Frameworks and technologies explored through hands-on student projects.",
    skills: [
      {
        name: "YOLO / Ultralytics",
        level: "Practical Application",
        experience: "Applied in AEGISNOVA for real-time animal detection, bounding box prediction, and threat identification.",
        levelBadge: "Applied in AegisNova",
        badgeColor: "cyan"
      },
      {
        name: "FastAPI",
        level: "Practical Application",
        experience: "Developed RESTful API endpoints for receiving detection data, routing alerts, and serving system status.",
        levelBadge: "Applied in AegisNova",
        badgeColor: "cyan"
      },
      {
        name: "SQLite",
        level: "Practical Application",
        experience: "Relational database used for logging animal intrusion events, timestamps, and detection metadata.",
        levelBadge: "Applied in AegisNova",
        badgeColor: "cyan"
      }
    ]
  },
  {
    category: "Development Tools",
    description: "Tools used for version control, code editing, and development workflows.",
    skills: [
      {
        name: "Git & GitHub",
        level: "Working Knowledge",
        experience: "Repository management, commit workflows, and version control for academic and project codebases.",
        levelBadge: "Version Control",
        badgeColor: "purple"
      },
      {
        name: "VS Code",
        level: "Daily Driver",
        experience: "Primary code editor with Python extensions, virtual environments, and debugging configurations.",
        levelBadge: "IDE / Editor",
        badgeColor: "purple"
      }
    ]
  }
];

export const aegisNovaProject = {
  name: "AEGISNOVA",
  tagline: "AI-Powered Animal Detection & Farm Security System",
  status: "Academic / Student Project",
  statusNote: "Developed as a practical student initiative for rural and agricultural safety. Not a commercial deployment.",
  description: "An AI-powered animal detection and farm security project designed to protect agricultural fields by detecting wildlife intrusions in real-time, classifying threat severity, and logging incidents for farm monitoring.",
  problemStatement: "In rural and agricultural areas, wild animals frequently enter crop fields and farmland, resulting in severe crop damage, economic hardship for farmers, and dangerous human-wildlife encounters. Traditional physical fencing is expensive and often easily breached, while manual patrolling at night is exhausting and hazardous.",
  solution: "AEGISNOVA combines computer vision object detection with lightweight backend services. Utilizing Ultralytics YOLO models, the system scans camera input streams, detects animal classes entering perimeter zones, evaluates risk levels, and automatically logs the event via a FastAPI backend into an SQLite database.",
  technologies: [
    { name: "Python", role: "Core logic & computer vision pipeline" },
    { name: "YOLO / Ultralytics", role: "Animal detection & bounding box inference" },
    { name: "FastAPI", role: "High-performance backend API & alert routing" },
    { name: "SQLite", role: "Detection event storage & audit logs" }
  ],
  keyFeatures: [
    {
      title: "Animal Detection",
      description: "Applies YOLO object detection model to accurately detect and localize animals within camera visual feeds.",
      icon: "Scan"
    },
    {
      title: "Threat Classification",
      description: "Classifies detected wildlife based on animal type, proximity to crop boundaries, and potential hazard level.",
      icon: "ShieldAlert"
    },
    {
      title: "Detection Event Management",
      description: "Logs timestamp, detected species, confidence score, and event status into an SQLite database for review.",
      icon: "Database"
    },
    {
      title: "Backend API Integration",
      description: "Built modular FastAPI endpoints enabling automated alerting triggers and system telemetry query.",
      icon: "Server"
    }
  ],
  architectureFlow: [
    { step: "01", name: "Surveillance Feed", desc: "Camera capture streams live footage of farm perimeter boundaries" },
    { step: "02", name: "YOLO Inference", desc: "Ultralytics model analyzes frames to detect animal presence & coordinates" },
    { step: "03", name: "Threat Evaluation", desc: "Logic evaluates animal category and assigns threat priority" },
    { step: "04", name: "FastAPI Dispatch", desc: "REST API receives detection payload and triggers alerts" },
    { step: "05", name: "SQLite Event Log", desc: "Timestamp, animal type, confidence & coordinates recorded securely" }
  ],
  // GitHub repository link note
  githubNotice: "Repository available upon request or can be linked once public.",
  githubUrl: "https://github.com/tripathinilakshi20"
};

export const educationData = {
  degree: "B.Tech in Artificial Intelligence & Machine Learning",
  institution: "Buddha Institute of Technology",
  location: "GIDA, Gorakhpur, Uttar Pradesh, India",
  currentStatus: "Currently in 3rd Year (Undergraduate)",
  focusAreas: [
    "Artificial Intelligence Fundamentals",
    "Object-Oriented Programming & Problem Solving",
    "Data Structures & Algorithms",
    "Database Management Systems (DBMS)",
    "Operating Systems & Computer Networks",
    "Applied Machine Learning Concepts"
  ],
  academicEthicsNote: "Academic credentials presented honestly without inflated metrics or fabricated awards."
};

export const internshipOpportunity = {
  title: "Open to AI/ML Internship Opportunities",
  subtitle: "Eager to contribute, learn, and build with engineering teams",
  availability: "Available for Summer / Semester Internships (Remote or On-site)",
  preferredRoles: [
    "AI / Machine Learning Intern",
    "Computer Vision Intern",
    "Python Developer Intern",
    "Data Science / AI Research Intern"
  ],
  valueProps: [
    {
      title: "Strong Foundations & Clean Code",
      description: "Grounded in Python, OOP principles, and clean algorithmic thinking with a focus on readable, maintainable code."
    },
    {
      title: "Practical Project Experience",
      description: "Proven ability to take an idea from concept to implementation, as demonstrated in the AEGISNOVA farm security system."
    },
    {
      title: "Honest, Growth-Oriented Mindset",
      description: "Transparent about current capabilities, eager to absorb best practices from senior engineers, and driven to learn continuously."
    },
    {
      title: "Collaborative & Disciplined",
      description: "Strong communication, academic discipline, and enthusiasm for working in team environments on impactful problems."
    }
  ]
};
