"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Moon, Sun } from "lucide-react"
import Link from "next/link"

export default function Skills() {
  const [darkMode, setDarkMode] = useState(false)

  const technicalSkills = {
    "Languages": ["TypeScript", "Python", "Bash", "JavaScript", "C", "C++", "SQL"],
    "Frameworks & Libraries": ["React", "Next.js", "FastAPI", "TensorFlow", "Scikit-learn", "Langchain"],
    "Cloud & DevOps": ["Azure DevOps", "Kubernetes", "Docker", "OpenStack", "Linux (RHEL)"],
    "AI & Other Technologies": ["Prompt Engineering", "Retrieval-Augmented Generation (RAG)", "Agentic AI", "ChromaDB", "MySQL"]
  }

  const professionalSkills = [
    "Leadership & Mentorship",
    "Problem Solving", 
    "Innovation & Research",
    "Cross-functional Collaboration",
    "Project Management",
    "Data-Driven Decision Making"
  ]

  return (
    <div
      className={`min-h-screen ${darkMode ? "dark bg-gray-900 text-white" : "bg-white text-gray-900"}`}
    >
      {/* Navigation */}
      <nav className={`${darkMode ? "bg-gray-900" : "bg-white"} border-b flex-shrink-0`}>
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

      {/* Skills Section */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl font-bold text-center mb-12">Skills & Expertise</h1>
          
          {/* Technical Skills */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-12">Technical Skills</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {Object.entries(technicalSkills).map(([category, skills]) => (
                <div key={category} className="bg-gray-50 dark:bg-gray-800 p-6 rounded-xl">
                  <h3 className="text-xl font-semibold mb-4 text-blue-600">{category}</h3>
                  <div className="flex flex-wrap gap-2">
                    {skills.map((skill) => (
                      <Badge key={skill} variant="secondary" className="text-sm">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Professional Skills */}
          <div>
            <h2 className="text-3xl font-bold text-center mb-12">Professional Skills</h2>
            <div className="max-w-4xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 justify-items-center">
                {professionalSkills.map((skill) => (
                  <Badge key={skill} variant="secondary" className="text-sm px-4 py-2">
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
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
