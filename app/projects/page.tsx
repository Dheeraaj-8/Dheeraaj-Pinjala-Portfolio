"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Github, ExternalLink, Calendar, Moon, Sun } from "lucide-react"
import Link from "next/link"

export default function Projects() {
  const [darkMode, setDarkMode] = useState(false)

  const projects = [
    {
      title: "Multi-Agent AI Researcher Agent",
      duration: "Feb 2025 - May 2025",
      techStack: ["Next.js", "Typescript", "React", "Agentic AI", "RAG"],
      description:
        "Built a comprehensive multi-agent AI system that automates paper analysis and generates literature reviews by orchestrating 5+ specialized agents, integrating 6+ academic APIs, and implementing RAG with vectorDB and a real-time LLM-powered chat interface for context-aware Q&A.",
      impact: "Reduced academic research synthesis time by 75% through automated paper analysis and literature review generation",
      github: "#",
      demo: "#",
      tags: ["#AgenticAI", "#RAG", "#ResearchAssistant"],
    },
    {
      title: "Indian LegalGPT",
      duration: "Aug 2024 - Oct 2024",
      techStack: ["React (Vite)", "FastAPI", "Groq", "Python", "ChromaDB", "Mistral-7B"],
      description:
        "Created a multilingual legal assistant by fine-tuning Mistral-7B with RAG using ChromaDB for semantic document retrieval, and engineering a low-latency LLM pipeline with FastAPI and Groq, supporting Hindi and English legal queries with accurate domain-specific reasoning.",
      impact: "Boosted user engagement by 40% through bilingual support and accurate legal domain reasoning",
      github: "#",
      demo: "#",
      tags: ["#RAG", "#VectorDB", "#AIchatbot"],
    },
    {
      title: "DeFi Security Suite",
      duration: "Jun 2024 - Aug 2024",
      techStack: ["Python", "Web3.py", "LLAMA2", "Slither"],
      description:
        "Designed a comprehensive DeFi security platform that detects smart contract vulnerabilities and assesses Ethereum transaction risks in real-time across 500+ contracts using GenAI and LLaMA 2, integrating Slither and Web3 monitoring, and generating AI-powered security reports with automated anomaly detection and proactive threat analysis.",
      impact: "Enhanced DeFi security by detecting vulnerabilities and assessing transaction risks across 500+ smart contracts",
      github: "#",
      demo: "#",
      tags: ["#Blockchain", "#Security", "#Web3"],
    },
    {
      title: "Credit Score Analysis using Machine Learning",
      duration: "Jan 2024 - May 2024",
      techStack: ["Python", "Google Colab", "TensorFlow", "Seaborn"],
      description:
        "Built and evaluated 10 stacked ensemble models using Logistic Regression, Decision Trees, and Random Forest, achieving high-precision multi-class credit risk prediction by classifying high and low-risk creditors and addressing class imbalance with CTGAN, SMOTE, and bootstrapping.",
      impact: "Achieved 98.6% accuracy in multi-class credit risk prediction using stacked ensemble models",
      github: "#",
      demo: "#",
      tags: ["#MachineLearning", "#DataScience", "#Analytics"],
    },
  ]

  return (
    <div
      className={`min-h-screen ${darkMode ? "dark bg-gray-900 text-white" : "bg-white text-gray-900"}`}
    >
      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 ${darkMode ? "bg-gray-900" : "bg-white"} border-b`}>
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex justify-between items-center py-4">
            <Link href="/about" className="text-xl font-bold text-blue-600">Dheeraaj Pinjala</Link>
            <div className="hidden md:flex space-x-6">
              {["About", "Skills", "Projects", "Experience", "Achievements", "Contact"].map((item) => (
                <Link
                  key={item}
                  href={item.toLowerCase()}
                  className="hover:text-blue-600 transition-colors"
                >
                  {item}
                </Link>
              ))}
            </div>
            <Button variant="ghost" size="icon" onClick={() => setDarkMode(!darkMode)}>
              {darkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </Button>
          </div>
        </div>
      </nav>

      {/* Projects Section */}
      <section className="pt-32 pb-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Featured Projects</h2>
          <div className="space-y-8">
            {projects.map((project, index) => (
              <Card key={index}>
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle className="text-xl">{project.title}</CardTitle>
                      <div className="flex items-center text-sm text-gray-500 mt-1">
                        <Calendar className="h-4 w-4 mr-1" />
                        {project.duration}
                      </div>
                    </div>
                    <div className="flex space-x-2">
                      <a href={project.github} className="text-gray-500 hover:text-blue-600">
                        <Github className="h-5 w-5" />
                      </a>
                      <a href={project.demo} className="text-gray-500 hover:text-blue-600">
                        <ExternalLink className="h-5 w-5" />
                      </a>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.techStack.map((tech) => (
                      <Badge key={tech} variant="secondary">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  <p className="text-sm text-green-600 dark:text-green-400 font-medium">
                    Impact: {project.impact}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 border-t bg-gray-50 dark:bg-gray-800">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <p className="text-2xl text-gray-800 dark:text-gray-200 tracking-wide">
            By Dheeraaj Pinjala
          </p>
          <Link href="/contact" className="text-2xl text-blue-600 hover:text-blue-700 transition-colors tracking-wide">
            Connect with me
          </Link>
        </div>
      </footer>
    </div>
  )
}
