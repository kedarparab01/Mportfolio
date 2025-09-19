'use client'
import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Github, Linkedin, Mail, ArrowRight, Download, GraduationCap, Briefcase, Award, BookOpen, Target, TrendingUp, Zap, Link as LinkIcon } from "lucide-react";

// ---- Simple data model so it's easy to maintain ----
const LINKS = {
  github: "https://github.com/meghashyam123",
  linkedin: "https://www.linkedin.com/in/meghashyam-parab-cspo%C2%AE-6898011a4/",
  email: "mailto:meghashyamparab24@gmail.com",
  // If you deploy the PDF somewhere public, update this:
  resume: "/resume.pdf", // place resume file at public/resume.pdf
};

const HIGHLIGHTS = [
  { 
    icon: Zap, 
    label: "25% faster resolution times", 
    blurb: "Led a cross-functional team to streamline enterprise network troubleshooting and cut incident resolution time by a quarter."
  },
  { 
    icon: TrendingUp, 
    label: "+20% customer satisfaction", 
    blurb: "Redesigned service workflows at Tata Communications, boosting client satisfaction scores year-over-year."
  },
  { 
    icon: Target, 
    label: "AI-powered health recommender", 
    blurb: "Built a system that maps user-reported symptoms to likely diagnoses and care resources, supporting faster clinical decisions."
  },
];

const SKILLS = {
  product: ["Product Strategy", "Competitive Strategy", "Roadmapping", "Agile/CSPO", "Stakeholder Management", "Storytelling"],
  data: ["Python", "SQL", "Power BI", "Excel", "Dash", "Forecasting"],
  ml: ["TensorFlow", "Keras", "PyTorch", "Scikit-learn", "NLP (spaCy, NLTK)", "OpenCV"],
  devops: ["Docker", "Kubernetes", "Git", "Flask", "MySQL", "AWS", "Azure"],
};

const EXPERIENCE = [
  {
    org: "Labmentix",
    role: "Business Analyst Intern",
    time: "Feb 2025 – May 2025 · Remote",
    bullets: [
      "Collected and analyzed insights from multiple sources to conduct market research and competitor analysis, driving product strategy and informed decision-making.",
      "Developed interactive dashboards and reports using Excel and Power BI, supporting client presentations and product demonstrations that drove a 15% increase in customer engagement during the internship.",
    ],
    certs: [
      
      { img: "/certs/thumbs/Labmentix.jpeg", href: "/certs/thumbs/Labmentix.jpeg" },
    ],
  },
  {
    org: "Tata Communications",
    role: "Senior Engineer (Full-time)",
    time: "Jul 2022 – Jan 2025 · Pune, India",
    bullets: [
      "Led a cross-functional team of 5 engineers to resolve complex enterprise network challenges using data-driven insights, reducing resolution time and improving client outcomes.",
      "Redesigned service workflows in collaboration with field operations, engineering, and support teams, driving a 20% increase in customer satisfaction within one year.",
      "Developed a knowledge-sharing framework for fault management, accelerating onboarding, improving collaboration, and achieving a 92% Customer Satisfaction Score.",
      "Managed projects using Jira and Trello, ensuring timely delivery and SLA/KPI compliance across internal teams and international clients.",
      "Implemented process automation with Python and ServiceNow, reducing repetitive tasks by 30% and enabling focus on high-value engineering initiatives.",
      "Automated ticketing processes on the ServiceNow API Bot team to streamline issue tracking and boost response efficiency.",
      "Created monthly team performance reports using Power BI, Excel and presented insights to stakeholders to support metric-driven decision-making.",
    ],
        certs: [
      
       { img: "/certs/thumbs/tata/tata-1.png", href: "/certs/tata.pdf" },
       { img: "/certs/thumbs/tata/tata-2.png", href: "/certs/tata.pdf" },
    ],
  },
  {
    org: "GetBoarded",
    role: "Machine Learning Intern",
    time: "May 2021 – Sep 2021 · Portugal",
    bullets: [
      "Built a health recommendation system using ML that suggests likely diseases from user-selected symptoms.",
      "Prototyped a web app to recommend possible diagnoses and guide users to nearby hospitals and doctors.",
      "Tech: TensorFlow, PyTorch, Python, CNN, NLP, SQL, Power BI.",
    ],
    certs: [
        { img: "/certs/thumbs/GetBoarded-1.png", href: "/certs/GetBoarded.pdf" }
    ],
  },
  {
    org: "ASDN Cybernetics Inc",
    role: "Business Development Intern (Sales)",
    time: "Feb 2021 – Mar 2021 · Kota, Rajasthan, India",
    bullets: [
      "Reached out to students to promote digital marketing and Python courses; qualified and nurtured leads.",
      "Converted interested audiences into successful registrations through targeted outreach.",
    ],
    certs: [
        { img: "/certs/thumbs/ASDN-1.png", href: "/certs/ASDN.pdf" }
    ],
  },
  {
    org: "GritFit — Fitness & Wellness Startup",
    role: "Business Strategy & Product Development Associate - Student Consultant",
    time: "Sept 2025 – Present · Remote",
    bullets: [
      "Collaborated with the founder to understand the startup vision, goals, and expectations, helping shape early-stage strategy and product planning.",
      "Assisted in market research and competitor analysis to identify opportunities for partnerships with local gyms and position the brand effectively.",
    ],
    certs: [
      
      { img: "/certs/thumbs/Labmentix.jpeg", href: "/certs/thumbs/Labmentix.jpeg" },
    ],
  },
];

const PROJECTS = [
  {
    title: "Automated Detection of Lung Diseases — Web App",
    tags: ["TensorFlow", "CNN", "Flask", "OpenCV"],
    description:
      "Deep-learning model that reads chest X-rays to flag likely conditions; deployed as a Flask app to enable instant feedback and support clinical decision-making.",
    link: "https://github.com/meghashyam123/Lung-Disease-Detection-using-Deep-Neural-Networks"
    },
  {
    title: "Cancer Donation Portal",
    tags: ["Python", "Flask", "SQLite", "Bootstrap"],
    description:
      "Secure donation platform with registration, donor history, and transparent tracking. Co-designed accessible, responsive UI/UX.",
    link: "https://github.com/meghashyam123/Cancer-Donation-Portal-using-Python-Flask-app"
  },
  {
    title: "FBI Crime Analysis & Forecasting",
    tags: ["Python", "Power BI", "ARIMA", "Prophet"],
    description:
      "Exploratory analysis and time-series forecasting to uncover trends & hotspots; interactive dashboards for public-safety insights.",
    link: "https://github.com/meghashyam123/FBI-Crime-Analysis"
  },
  {
    title: "Netflix TV Shows & Movies EDA",
    tags: ["Python", "Pandas", "NumPy", "Matplotlib", "Seaborn", "Plotly", "Scikit-learn"],
    description:
      "Cleaned and analyzed 7,700+ Netflix titles, visualizing release trends, mapping content distribution, and performing clustering to group similar titles for smarter recommendations.",
    link: "https://github.com/meghashyam123/-Netflix-TV-Shows-Movies-EDA-"
  },
  {
    title: "Ford GoBike Trips Analysis",
    tags: ["Python", "Pandas", "Matplotlib", "Seaborn", "Plotly", "Tableau", "Power BI"],
    description:
      "Explored bike trip trends in San Francisco, analyzing peak hours, popular routes, and rider demographics with geospatial mapping and seasonal usage patterns.",
    link: "https://github.com/meghashyam123/Ford-GoBikes-Trips-Analysis"
  },
  {
    title: "Airbnb Data Analysis",
    tags: ["Python", "Pandas", "NumPy", "Matplotlib", "Seaborn", "Scikit-learn", "Folium"],
    description:
      "Performed EDA and geospatial mapping on Airbnb listings, built a price prediction model, and uncovered trends in booking patterns, reviews, and neighborhood pricing.",
    link: "https://github.com/meghashyam123/Airbnb-Data-Analysis"
  },
  {
    title: "ServiceNow Ticket Rate Reduction",
    tags: ["Python", "Pandas", "NumPy", "Matplotlib", "Seaborn", "Scikit-learn", "Folium"],
    description:
      "Applied machine learning on historical datasets and built Power BI dashboards to identify root causes of recurring ServiceNow tickets, collaborating with Tata Communications support teams to implement workflow improvements that reduced ticket volume, improved efficiency, and enhanced customer satisfaction.",
    link: "https://github.com/meghashyam123/Airbnb-Data-Analysis"
  },
];


const EDUCATION = [
  {
    school: "Duke University — Pratt School of Engineering / Fuqua",
    detail: "Master of Engineering Management (Aug 2025 – Present)",
    bullets: ["Competitive Strategy", "Product Management in High‑Tech Companies", "Business Law"],
  },
  {
    school: "KJ Somaiya College of Engineering",
    detail: "B.Tech, Electronics Engineering (Jul 2018 – Jun 2022) · GPA 8.13/10",
    bullets: [
      "Business Analytics, Engineering Economics & Financial Management",
      "RTOS, Speech Processing, Embedded Systems, Big Data, DSP, Org Behaviour",
    ],
  },
];

const CERTS = [
  { name: "Certified Scrum Product Owner (CSPO®)", issuer: "Scrum Alliance", date: "Issued Aug 2025 · Expires Aug 2027" },
  { name: "AWS Certified AI Practitioner", issuer: "Amazon Web Services (AWS)", date: "Issued Apr 2025 · Expires Apr 2028" },
  { name: "BCG – Data Science Job Simulation", issuer: "BCG X", date: "Issued Mar 2025 · Credential ID QKxNk8mGRNmbGQ44z" },
  { name: "Cisco Certified Network Associate (CCNA)", issuer: "Cisco", date: "Issued Oct 2022 · Expires Oct 2025" },
];

// ---- UI helpers ----
const Section: React.FC<{ id: string; title: string; icon?: React.ReactNode; children: React.ReactNode }>=({ id, title, icon, children })=> (
  <section id={id} className="max-w-6xl mx-auto px-6 md:px-10 py-14 md:py-20">
    <div className="flex items-center gap-3 mb-8">
      {icon}
      <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">{title}</h2>
    </div>
    {children}
  </section>
);

const Chip: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <Badge className="rounded-full px-3 py-1 text-sm">{children}</Badge>
);

// ---- Page component ----
export default function Portfolio() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-slate-50 to-white text-slate-900">
      {/* Header */}
        <header className="sticky top-0 z-40 backdrop-blur bg-sky-700 border-b">
        <nav className="max-w-6xl mx-auto px-6 md:px-10 h-16 flex items-center justify-between">
            <a href="#home" className="font-semibold tracking-tight text-white">Meghashyam Parab</a>
            <div className="hidden md:flex items-center gap-6 text-sm">
            <a href="#experience" className="hover:opacity-80 text-white">Experience</a>
            <a href="#projects" className="hover:opacity-80 text-white">Projects</a>
            <a href="#skills" className="hover:opacity-80 text-white">Skills</a>
            <a href="#education" className="hover:opacity-80 text-white">Education</a>
            <a href="#certs" className="hover:opacity-80 text-white">Certificates</a>
            <a href="#contact" className="hover:opacity-80 text-white">Contact</a>
            </div>
            <div className="flex items-center gap-2">
            <a href={LINKS.linkedin} target="_blank" rel="noreferrer">
                <Button variant="ghost" size="icon" aria-label="LinkedIn" className="text-white hover:bg-sky-600">
                <Linkedin className="h-5 w-5" />
                </Button>
            </a>
            <a href={LINKS.github} target="_blank" rel="noreferrer">
                <Button variant="ghost" size="icon" aria-label="GitHub" className="text-white hover:bg-sky-600">
                <Github className="h-5 w-5" />
                </Button>
            </a>
            <a href={LINKS.email}>
                <Button variant="ghost" size="icon" aria-label="Email" className="text-white hover:bg-sky-600">
                <Mail className="h-5 w-5" />
                </Button>
            </a>
            </div>
        </nav>
        </header>
      {/* Hero */}
<section id="home" className="max-w-6xl mx-auto px-6 md:px-10 pt-16 md:pt-24 pb-8">
  <motion.div
    initial={{ opacity: 0, y: 12 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6 }}
    className="grid md:grid-cols-2 gap-10 items-center"
  >
    {/* LEFT: copy */}
    <div className="text-center md:text-left">
      <p className="text-sky-700 font-medium">Driven. Strategic. Impact-oriented.</p>

      <h1 className="mt-2 text-3xl md:text-5xl font-semibold leading-tight">
        Aspiring Product Manager & Strategy Consultant
      </h1>

      <p className="mt-4 text-slate-700 md:max-w-xl md:pr-4 mx-auto md:mx-0">
        Aspiring Product Manager and Strategy Consultant with 2 years at Tata Communications, where I worked on automation and customer experience projects using ServiceNow APIs. Skilled in product strategy, market analysis, and data-driven decision making with a background in engineering and machine learning. Passionate about building scalable digital products and helping organizations unlock growth through technology and strategy.
      </p>

      <div className="mt-6 flex flex-wrap gap-3 justify-center md:justify-start">
        <a href="#projects">
          <Button>View Projects <ArrowRight className="ml-2 h-4 w-4" /></Button>
        </a>
        <a href={LINKS.resume} download>
          <Button variant="outline">
            <Download className="mr-2 h-4 w-4" />Download Resume
          </Button>
        </a>
      </div>
    </div>

    {/* RIGHT: photo */}
    <div className="flex justify-center md:justify-end">
      <img
        src="/images/profile.jpg"
        alt="Professional headshot"
        className="rounded-full w-56 h-56 md:w-96 md:h-96 object-cover shadow-md border"
      />
    </div>
  </motion.div>
</section>

      {/* What I bring */}
      <Section id="value" title="What I bring" icon={<BookOpen className="h-6 w-6"/>}>
        <div className="grid md:grid-cols-2 gap-6">
          <Card className="shadow-sm">
            <CardHeader>
              <CardTitle>Product strategy rooted in market realities</CardTitle>
            </CardHeader>
            <CardContent className="text-slate-700">Turning insights into actionable roadmaps that ship.</CardContent>
          </Card>
          <Card className="shadow-sm">
            <CardHeader>
              <CardTitle>Agile execution with a human touch</CardTitle>
            </CardHeader>
            <CardContent className="text-slate-700">CSPO®—structured collaboration, clear priorities, steady delivery.</CardContent>
          </Card>
          <Card className="shadow-sm">
            <CardHeader>
              <CardTitle>Data‑driven decision‑making & storytelling</CardTitle>
            </CardHeader>
            <CardContent className="text-slate-700">From dashboards to narratives that move metrics and people.</CardContent>
          </Card>
          <Card className="shadow-sm">
            <CardHeader>
              <CardTitle>Relentless focus on customer impact</CardTitle>
            </CardHeader>
            <CardContent className="text-slate-700">Designing products that win markets and improve lives.</CardContent>
          </Card>
        </div>
      </Section>

      {/* Experience */}
      <Section id="experience" title="Experience" icon={<Briefcase className="h-6 w-6"/>}>
        <div className="grid gap-6">
          {EXPERIENCE.map((exp) => (
            <Card key={exp.org} className="shadow-sm">
              <CardHeader className="pb-2">
                <CardTitle className="text-xl">{exp.role} · {exp.org}</CardTitle>
                <div className="text-sm text-slate-600">{exp.time}</div>
              </CardHeader>
              <CardContent>
                <ul className="list-disc pl-6 space-y-2 text-slate-700">
                  {exp.bullets.map((b, i) => (<li key={i}>{b}</li>))}
                </ul>
                {exp.certs?.length ? (
                    <>
                        <div className="text-xs uppercase tracking-wide text-slate-500 mt-4">Completion certificate{exp.certs.length > 1 ? "s" : ""}</div>
                        <div className="mt-2 flex flex-wrap gap-3">
                        {exp.certs.map((c, idx) => (
                            <a
                            key={idx}
                            href={c.href ?? c.img}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="block"
                            >
                            <img
                                src={c.img}
                                alt={`${exp.org} certificate ${idx + 1}`}
                                className="h-28 w-auto rounded border shadow-sm hover:shadow-md hover:scale-[1.02] transition-transform duration-200 bg-white"
                            />
                            </a>
                        ))}
                        </div>
                    </>
                    ) : null}
              </CardContent>
            </Card>
          ))}
        </div>
      </Section>

      {/* Projects */}
      <Section id="projects" title="Selected Projects" icon={<Award className="h-6 w-6"/>}>
        <div className="grid md:grid-cols-3 gap-6">
          {PROJECTS.map((p) => (
            <Card key={p.title} className="shadow-sm h-full">
            <CardHeader>
                {p.link ? (
                <a href={p.link} target="_blank" rel="noreferrer" className="hover:underline">
                    <CardTitle className="text-lg">{p.title}</CardTitle>
                </a>
                ) : (
                <CardTitle className="text-lg">{p.title}</CardTitle>
                )}
            </CardHeader>
            <CardContent className="space-y-3">
                <p className="text-slate-700">{p.description}</p>
                <div className="flex flex-wrap gap-2">
                {p.tags.map((t) => (<Chip key={t}>{t}</Chip>))}
                </div>
            </CardContent>
            </Card>
          ))}
        </div>
        <div className="mt-6">
          <a href={LINKS.github} target="_blank" rel="noreferrer">
            <Button variant="outline"><Github className="mr-2 h-4 w-4"/>Explore on GitHub</Button>
          </a>
        </div>
      </Section>

      {/* Skills */}
      <Section id="skills" title="Skills" icon={<Target className="h-6 w-6"/>}>
        <div className="grid md:grid-cols-2 gap-6">
          <Card className="shadow-sm">
            <CardHeader><CardTitle>Product & Strategy</CardTitle></CardHeader>
            <CardContent className="flex flex-wrap gap-2">{SKILLS.product.map((s)=>(<Chip key={s}>{s}</Chip>))}</CardContent>
          </Card>
          <Card className="shadow-sm">
            <CardHeader><CardTitle>Data & Analytics</CardTitle></CardHeader>
            <CardContent className="flex flex-wrap gap-2">{SKILLS.data.map((s)=>(<Chip key={s}>{s}</Chip>))}</CardContent>
          </Card>
          <Card className="shadow-sm">
            <CardHeader><CardTitle>ML / AI</CardTitle></CardHeader>
            <CardContent className="flex flex-wrap gap-2">{SKILLS.ml.map((s)=>(<Chip key={s}>{s}</Chip>))}</CardContent>
          </Card>
          <Card className="shadow-sm">
            <CardHeader><CardTitle>Dev / DevOps</CardTitle></CardHeader>
            <CardContent className="flex flex-wrap gap-2">{SKILLS.devops.map((s)=>(<Chip key={s}>{s}</Chip>))}</CardContent>
          </Card>
        </div>
      </Section>

      {/* Education */}
      <Section id="education" title="Education" icon={<GraduationCap className="h-6 w-6"/>}>
        <div className="grid gap-6">
          {EDUCATION.map((e) => (
            <Card key={e.school} className="shadow-sm">
              <CardHeader className="pb-2">
                <CardTitle className="text-lg">{e.school}</CardTitle>
                <div className="text-sm text-slate-600">{e.detail}</div>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {e.bullets.map((b) => (<Chip key={b}>{b}</Chip>))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </Section>

      {/* Certificates */}
      <Section id="certs" title="Certificates & Achievements" icon={<Award className="h-6 w-6"/>}>
        <div className="grid md:grid-cols-2 gap-6">
          {CERTS.map((c) => (
            <Card key={c.name} className="shadow-sm">
              <CardHeader>
                <CardTitle className="text-lg">{c.name}</CardTitle>
                <div className="text-sm text-slate-600">{c.issuer}</div>
              </CardHeader>
            </Card>
          ))}
          <Card className="shadow-sm">
            <CardHeader>
              <CardTitle className="text-lg">92% Customer Satisfaction</CardTitle>
              <div className="text-sm text-slate-600">Service quality impact at Tata Communications</div>
            </CardHeader>
          </Card>
        </div>
      </Section>

      {/* Contact */}
      <Section id="contact" title="Let’s connect" icon={<Mail className="h-6 w-6"/>}>
        <div className="grid md:grid-cols-3 gap-4">
          <a href={LINKS.linkedin} target="_blank" rel="noreferrer" className="block">
            <Card className="h-full hover:shadow-md transition">
              <CardContent className="p-6 flex items-center justify-between">
                <div>
                  <div className="font-medium">LinkedIn</div>
                  <div className="text-sm text-slate-600">Connect and say hello</div>
                </div>
                <Linkedin className="h-5 w-5"/>
              </CardContent>
            </Card>
          </a>
          <a href={LINKS.github} target="_blank" rel="noreferrer" className="block">
            <Card className="h-full hover:shadow-md transition">
              <CardContent className="p-6 flex items-center justify-between">
                <div>
                  <div className="font-medium">GitHub</div>
                  <div className="text-sm text-slate-600">Code, experiments, projects</div>
                </div>
                <Github className="h-5 w-5"/>
              </CardContent>
            </Card>
          </a>
          <a href={LINKS.email} className="block">
            <Card className="h-full hover:shadow-md transition">
              <CardContent className="p-6 flex items-center justify-between">
                <div>
                  <div className="font-medium">Email</div>
                  <div className="text-sm text-slate-600">meghashyamparab24@gmail.com</div>
                </div>
                <Mail className="h-5 w-5"/>
              </CardContent>
            </Card>
          </a>
        </div>
        <p className="mt-6 text-slate-600 max-w-3xl">
          Looking for someone who can see the big picture, act with precision, and deliver with purpose? Let’s talk.
        </p>
      </Section>

      {/* Footer */}
      <footer className="py-10 text-center text-sm text-slate-500">
        <div className="flex items-center justify-center gap-4 mb-2">
          <a className="inline-flex items-center gap-1 hover:underline" href={LINKS.linkedin} target="_blank" rel="noreferrer"><Linkedin className="h-4 w-4"/>LinkedIn</a>
          <a className="inline-flex items-center gap-1 hover:underline" href={LINKS.github} target="_blank" rel="noreferrer"><Github className="h-4 w-4"/>GitHub</a>
          <a className="inline-flex items-center gap-1 hover:underline" href={LINKS.email}><Mail className="h-4 w-4"/>Email</a>
        </div>
        <div>© {new Date().getFullYear()} Meghashyam Parab</div>
      </footer>
    </div>
  );
}
