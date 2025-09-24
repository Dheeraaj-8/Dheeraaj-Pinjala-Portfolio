"use client"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { useTheme } from "../../contexts/theme-context"
import Navigation from "../../components/navigation"

export default function Skills() {
  const { theme } = useTheme()

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
      className={`min-h-screen ${theme === "dark" ? "dark bg-gray-900 text-white" : "bg-white text-gray-900"}`}
    >
      {/* Navigation */}
      <Navigation currentPage="Skills" />

      {/* Skills Section */}
      <section className="py-12 sm:py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-3xl sm:text-4xl font-bold text-center mb-8 sm:mb-12">Skills & Expertise</h1>
          
          {/* Technical Skills */}
          <div className="mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl font-bold text-center mb-8 sm:mb-12">Technical Skills</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
              {Object.entries(technicalSkills).map(([category, skills]) => (
                <div key={category} className="bg-gray-50 dark:bg-gray-800 p-4 sm:p-6 rounded-xl">
                  <h3 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4 text-blue-600">{category}</h3>
                  <div className="flex flex-wrap gap-2">
                    {skills.map((skill) => (
                      <Badge key={skill} variant="secondary" className="text-xs sm:text-sm">
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
            <h2 className="text-2xl sm:text-3xl font-bold text-center mb-8 sm:mb-12">Professional Skills</h2>
            <div className="max-w-4xl mx-auto">
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4 justify-items-center">
                {professionalSkills.map((skill) => (
                  <Badge key={skill} variant="secondary" className="text-xs sm:text-sm px-3 sm:px-4 py-2">
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 sm:py-12 px-4 border-t bg-gray-50 dark:bg-gray-800">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
          <p className="text-lg sm:text-2xl text-gray-800 dark:text-gray-200 tracking-wide text-center sm:text-left">
            By Dheeraaj Pinjala
          </p>
          <Link href="/contact" className="text-lg sm:text-2xl text-blue-600 hover:text-blue-700 transition-colors tracking-wide text-center sm:text-right">
            Connect with me
          </Link>
        </div>
      </footer>
    </div>
  )
}
