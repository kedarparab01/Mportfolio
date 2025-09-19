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
  { icon: Zap, label: "25% faster resolution", blurb: "for enterprise network incidents" },
  { icon: TrendingUp, label: "+20% CSAT", blurb: "via workflow redesign at Tata Communications" },
  { icon: Target, label: "AI health recommender", blurb: "mapped symptoms to possible diagnoses & care" },
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
      "Led market & competitor research to inform product positioning and strategy.",
      "Built interactive dashboards in Excel & Power BI; boosted stakeholder insight and engagement.",
      "Supported client demos & presentations, contributing to a ~15% rise in customer engagement.",
    ],
  },
  {
    org: "Tata Communications",
    role: "Senior Engineer (Full-time)",
    time: "Jul 2022 – Aug 2024 · Pune, India",
    bullets: [
      "Led a cross‑functional team of 5 to resolve complex enterprise network challenges.",
      "Redesigned service workflows with ops & engineering; raised customer satisfaction by ~20% in a year.",
      "Built a fault‑management knowledge framework; enabled faster onboarding and collaboration (92% CSAT).",
      "Used analytics to proactively monitor performance; improved uptime/responsiveness by ~15%.",
      "Primary point of contact across teams & clients; aligned delivery to SLAs and strategic KPIs.",
    ],
  },
];

const PROJECTS = [
  {
    title: "Automated Detection of Lung Diseases — Web App",
    tags: ["TensorFlow", "CNN", "Flask", "OpenCV"],
    description:
      "Deep‑learning model that reads chest X‑rays to flag likely conditions; deployed as a Flask app to enable instant feedback and support clinical decision‑making.",
  },
  {
    title: "Cancer Donation Portal",
    tags: ["Python", "Flask", "SQLite", "Bootstrap"],
    description:
      "Secure donation platform with registration, donor history, and transparent tracking. Co‑designed accessible, responsive UI/UX.",
  },
  {
    title: "FBI Crime Analysis & Forecasting",
    tags: ["Python", "Power BI", "ARIMA", "Prophet"],
    description:
      "Exploratory analysis and time‑series forecasting to uncover trends & hotspots; interactive dashboards for public‑safety insights.",
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
  { name: "Certified Scrum Product Owner (CSPO®)", issuer: "Scrum Alliance" },
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
      <header className="sticky top-0 z-40 backdrop-blur bg-white/70 border-b">
        <nav className="max-w-6xl mx-auto px-6 md:px-10 h-16 flex items-center justify-between">
          <a href="#home" className="font-semibold tracking-tight">Meghashyam Parab</a>
          <div className="hidden md:flex items-center gap-6 text-sm">
            <a href="#experience" className="hover:opacity-80">Experience</a>
            <a href="#projects" className="hover:opacity-80">Projects</a>
            <a href="#skills" className="hover:opacity-80">Skills</a>
            <a href="#education" className="hover:opacity-80">Education</a>
            <a href="#certs" className="hover:opacity-80">Certificates</a>
            <a href="#contact" className="hover:opacity-80">Contact</a>
          </div>
          <div className="flex items-center gap-2">
            <a href={LINKS.linkedin} target="_blank" rel="noreferrer">
              <Button variant="ghost" size="icon" aria-label="LinkedIn"><Linkedin className="h-5 w-5"/></Button>
            </a>
            <a href={LINKS.github} target="_blank" rel="noreferrer">
              <Button variant="ghost" size="icon" aria-label="GitHub"><Github className="h-5 w-5"/></Button>
            </a>
            <a href={LINKS.email}>
              <Button variant="ghost" size="icon" aria-label="Email"><Mail className="h-5 w-5"/></Button>
            </a>
          </div>
        </nav>
      </header>

      {/* Hero */}
      <section id="home" className="max-w-6xl mx-auto px-6 md:px-10 pt-16 md:pt-24 pb-8">
        <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <p className="text-sky-700 font-medium">Driven. Strategic. Impact‑oriented.</p>
          <h1 className="mt-2 text-3xl md:text-5xl font-semibold leading-tight">
            Aspiring Product Manager & Strategy Consultant
          </h1>
          <p className="mt-4 text-slate-700 max-w-3xl">
            Aspiring Product Manager and Strategy Consultant with 2 years at Tata Communications, where I worked on automation and customer experience projects using ServiceNow APIs. Skilled in product strategy, market analysis, and data-driven decision making with a background in engineering and machine learning. Passionate about building scalable digital products and helping organizations unlock growth through technology and strategy.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a href="#projects"><Button>View Projects <ArrowRight className="ml-2 h-4 w-4"/></Button></a>
            <a href={LINKS.resume} download><Button variant="outline"><Download className="mr-2 h-4 w-4\"/>Download Resume</Button></a>
          </div>
          <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-4">
            {HIGHLIGHTS.map((h) => (
              <Card key={h.label} className="shadow-sm">
                <CardContent className="flex items-start gap-3 p-4">
                  <h.icon className="h-5 w-5 mt-1"/>
                  <div>
                    <div className="font-medium">{h.label}</div>
                    <div className="text-sm text-slate-600">{h.blurb}</div>
                  </div>
                </CardContent>
              </Card>
            ))}
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
                <CardTitle className="text-lg">{p.title}</CardTitle>
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
          <Button asChild variant="outline">
            <a href={LINKS.resume} download>
                <Download className="mr-2 h-4 w-4" />
                Download Resume
            </a>
        </Button>
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
