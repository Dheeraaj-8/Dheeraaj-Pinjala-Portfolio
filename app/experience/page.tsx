"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Briefcase, Download } from "lucide-react"
import Link from "next/link"
import { useTheme } from "../../contexts/theme-context"
import Navigation from "../../components/navigation"

export default function Experience() {
  const { theme } = useTheme()

  const experience = [
    {
      title: "Software Engineer",
      company: "Hewlett Packard Enterprise (HPE) - Aruba Networking",
      location: "Bengaluru, India",
      duration: "Sep 2023 - Aug 2025",
      achievements: [
        "Improved observability by 40% by developing and enhancing the NOC Dashboard in HPE Aruba Networking Central using React, FastAPI, and Prometheus, enabling a dynamic centralized view of network health, usage and events.",
        "Deployed backend microservices as containers on OpenStack-provisioned VMs using Docker and Kubernetes, leveraging auto-scaling to ensure consistent delivery of new features across production environments.",
        "Eliminated $300K in annual resource waste by optimizing resource allocation across production environments using Python-based predictive analytics and time-series forecasting on network telemetry.",
        "Collaborated with cross-functional teams to integrate AI/ML models on telemetry data lakes as microservices, generating proactive alerts and recommendations for network health, device performance, and end-user experience."
      ],
    },
    {
      title: "Software Engineer Intern",
      company: "Hewlett Packard Enterprise (HPE) - Global Technology Center",
      location: "Bengaluru, India",
      duration: "Mar 2023 - Aug 2023",
      achievements: [
        "Supported deployment validations, design reviews, and incident response, contributing to quality standards and gaining hands-on experience with enterprise-scale system architecture.",
        "Created automation scripts in Bash that reduced manual configuration time by 30%, improving efficiency for network function setup and validation tasks."
      ],
    },
    {
      title: "AI/ML Core Member",
      company: "SSN Coding Club",
      location: "Chennai, India",
      duration: "Jun 2022 - Feb 2023",
      achievements: [
        "Mentored 50+ students on machine learning fundamentals, guiding them in data science techniques and providing hands-on experience with relevant frameworks and libraries.",
        "Led brainstorming sessions and organized 10+ AI/ML workshops and hackathons, increasing student participation by 150% and contributing to 5+ coding competition wins."
      ],
    },
  ]

  return (
    <div
      className={`min-h-screen ${theme === "dark" ? "dark bg-gray-900 text-white" : "bg-white text-gray-900"}`}
    >
      {/* Navigation */}
      <Navigation currentPage="Experience" />

      {/* Experience Section */}
      <section className="py-12 sm:py-16 px-4 bg-white dark:bg-gray-900 dark:bg-gradient-to-br dark:from-gray-900 dark:via-purple-900/20 dark:to-gray-900">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-3xl sm:text-4xl font-bold text-center mb-8 sm:mb-12">Professional Experience</h1>
          <div className="space-y-6 sm:space-y-8">
            {experience.map((exp, index) => (
              <Card key={index} className="border-gray-200 dark:border-purple-800/30">
                <CardHeader>
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between space-y-2 sm:space-y-0">
                    <div className="flex-1">
                      <CardTitle className="flex items-center text-base sm:text-lg">
                        <Briefcase className="h-4 w-4 sm:h-5 sm:w-5 mr-2 text-blue-600 dark:text-purple-400" />
                        {exp.title}
                      </CardTitle>
                      <p className="text-base sm:text-lg font-medium mt-1 text-gray-600 dark:text-gray-300">{exp.company}</p>
                      <p className="text-xs sm:text-sm text-gray-500 mt-1">{exp.location}</p>
                    </div>
                    <Badge variant="outline" className="text-xs sm:text-sm">{exp.duration}</Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 sm:space-y-3">
                    {exp.achievements.map((achievement, i) => (
                      <li key={i} className="flex items-start">
                        <span className="text-blue-600 dark:text-purple-400 mr-2 mt-1 text-sm">•</span>
                        <span className="text-sm sm:text-base text-gray-600 dark:text-gray-300 text-justify">{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center mt-6 sm:mt-8">
            <Button variant="outline" size="lg" className="text-sm sm:text-base">
              <Download className="h-4 w-4 mr-2" />
              Download Resume
            </Button>
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