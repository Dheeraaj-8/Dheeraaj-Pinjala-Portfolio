"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Briefcase, Download, Moon, Sun } from "lucide-react"
import Link from "next/link"

export default function Experience() {
  const [darkMode, setDarkMode] = useState(false)

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
      title: "Software Development Core Member",
      company: "SSN Coding Club",
      location: "Chennai, India",
      duration: "Jun 2022 - Feb 2023",
      achievements: [
        "Mentored 50+ students on Software Engineering principles and MERN stack fundamentals, guiding them in system design concepts, coding best practices, and providing hands-on experience with industry-relevant tools and frameworks.",
        "Led brainstorming sessions and organized 10+ SDE workshops and hackathons, increasing student participation by 150% and contributing to 5+ coding competition wins."
      ],
    },
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

      {/* Experience Section */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl font-bold text-center mb-12">Professional Experience</h1>
          <div className="space-y-8">
            {experience.map((exp, index) => (
              <Card key={index}>
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div>
                      <CardTitle className="flex items-center text-lg">
                        <Briefcase className="h-5 w-5 mr-2 text-blue-600" />
                        {exp.title}
                      </CardTitle>
                      <p className="text-lg font-medium mt-1 text-gray-600 dark:text-gray-300">{exp.company}</p>
                      <p className="text-sm text-gray-500 mt-1">{exp.location}</p>
                    </div>
                    <Badge variant="outline">{exp.duration}</Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {exp.achievements.map((achievement, i) => (
                      <li key={i} className="flex items-start">
                        <span className="text-blue-600 mr-2 mt-1">•</span>
                        <span className="text-gray-600 dark:text-gray-300">{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center mt-8">
            <Button variant="outline" size="lg">
              <Download className="h-4 w-4 mr-2" />
              Download Resume
            </Button>
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