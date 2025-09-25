"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, Github, ExternalLink } from "lucide-react"
import Link from "next/link"
import { useTheme } from "../../contexts/theme-context"
import Navigation from "../../components/navigation"

export default function Projects() {
  const { theme } = useTheme()

  const projects = [
    {
      title: "Multi-Agent AI Researcher Agent",
      duration: "Feb 2025 - May 2025",
      techStack: ["Next.js", "Typescript", "React", "Agentic AI", "RAG"],
      description: "Reduced academic research synthesis time by 75% by building a multi-agent AI system that automates paper analysis, generates literature review by orchestrating 5+ specialized agents, integrating 6+ academic APIs, and implementing RAG with vectorDB and a real-time LLM-powered chat interface for context-aware Q&A.",
      impact: "75% reduction in research synthesis time, 6+ academic API integrations",
      github: "#",
      demo: "#",
      tags: ["#AgenticAI", "#RAG", "#ResearchAssistant"],
    },
    {
      title: "Indian LegalGPT",
      duration: "Aug 2024 - Oct 2024",
      techStack: ["React (Vite)", "FastAPI", "Groq", "Python", "ChromaDB", "Mistral-7B"],
      description: "Boosted user engagement by 40% by creating a multilingual legal assistant, fine-tuning Mistral-7B with RAG using ChromaDB for semantic document retrieval, and engineering a low-latency LLM pipeline with FastAPI and Groq, which supports Hindi and English legal queries with accurate domain-specific reasoning.",
      impact: "40% increase in user engagement, bilingual legal support",
      github: "#",
      demo: "#",
      tags: ["#RAG", "#VectorDB", "#AIchatbot"],
    },
    {
      title: "DeFi Security Suite",
      duration: "Jun 2024 - Aug 2024",
      techStack: ["Python", "Web3.py", "LLAMA2", "Slither"],
      description: "Enhanced DeFi security by detecting smart contract vulnerabilities and assessing Ethereum transaction risks in real-time across 500+ contracts by designing a platform that uses GenAI and LLaMA 2, integrates Slither and Web3 monitoring, and generates AI-powered security reports with automated anomaly detection and proactive threat analysis.",
      impact: "500+ contract analysis, real-time vulnerability detection",
      github: "#",
      demo: "#",
      tags: ["#Blockchain", "#Security", "#AI"],
    },
    {
      title: "Credit Score Analysis using Machine Learning",
      duration: "Jan 2024 - May 2024",
      techStack: ["Python", "Google Colab", "TensorFlow", "Seaborn"],
      description: "Built and evaluated 10 stacked ensemble models using Logistic Regression, Decision Trees, and Random Forest, achieving 98.6% accuracy in multi-class credit risk prediction by classifying high and low-risk creditors and addressing class imbalance with CTGAN, SMOTE, and bootstrapping.",
      impact: "98.6% accuracy achieved, 10 stacked ensemble models",
      github: "#",
      demo: "#",
      tags: ["#MachineLearning", "#DataScience", "#Analytics"],
    },
  ]

  return (
    <div
      className={`min-h-screen ${theme === "dark" ? "dark bg-gray-900 text-white" : "bg-white text-gray-900"}`}
    >
      {/* Navigation */}
      <Navigation currentPage="Projects" />

      {/* Projects Section */}
      <section className="py-12 sm:py-16 px-4 bg-white dark:bg-gray-900 dark:bg-gradient-to-br dark:from-gray-900 dark:via-purple-900/20 dark:to-gray-900">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-3xl sm:text-4xl font-bold text-center mb-8 sm:mb-12">Featured Projects</h1>
          <div className="space-y-6 sm:space-y-8">
            {projects.map((project, index) => (
              <Card key={index} className="border-gray-200 dark:border-purple-800/30">
                <CardHeader>
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start space-y-2 sm:space-y-0">
                    <div className="flex-1">
                      <CardTitle className="text-lg sm:text-xl">{project.title}</CardTitle>
                      <div className="flex items-center text-xs sm:text-sm text-gray-500 mt-1">
                        <Calendar className="h-3 w-3 sm:h-4 sm:w-4 mr-1" />
                        {project.duration}
                      </div>
                    </div>
                    <div className="flex space-x-2">
                      <a href={project.github} className="text-gray-500 hover:text-blue-600 dark:hover:text-purple-400">
                        <Github className="h-4 w-4 sm:h-5 sm:w-5" />
                      </a>
                      <a href={project.demo} className="text-gray-500 hover:text-blue-600 dark:hover:text-purple-400">
                        <ExternalLink className="h-4 w-4 sm:h-5 sm:w-5" />
                      </a>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 mb-3 sm:mb-4 text-justify">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-3 sm:mb-4">
                    {project.techStack.map((tech) => (
                      <Badge key={tech} variant="secondary" className="text-xs sm:text-sm">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  <p className="text-xs sm:text-sm text-green-600 dark:text-green-400 font-medium">
                    Impact: {project.impact}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 sm:py-12 px-4 border-t border-gray-200 dark:border-purple-800/30 bg-gray-50 dark:bg-card">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
          <p className="text-lg sm:text-2xl text-gray-800 dark:text-gray-200 tracking-wide text-center sm:text-left">
            By Dheeraaj Pinjala
          </p>
          <Link href="/contact" className="text-lg sm:text-2xl text-blue-600 hover:text-blue-700 dark:text-purple-400 dark:hover:text-purple-300 transition-colors tracking-wide text-center sm:text-right">
            Connect with me
          </Link>
        </div>
      </footer>
    </div>
  )
}