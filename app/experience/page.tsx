"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Briefcase, Moon, Sun } from "lucide-react"
import Link from "next/link"

export default function Experience() {
  const [darkMode, setDarkMode] = useState(false)

  const experience = [
    {
      title: "Software Engineer",
      company: "Hewlett Packard Enterprise - Aruba Networking",
      location: "Bengaluru, India",
      duration: "Sep 2023 - Aug 2025",
      achievements: [
        "Improved observability by 40% by developing and enhancing the NOC Dashboard in HPE Aruba Networking Central using React, FastAPI, and Prometheus, enabling a dynamic centralized view of network health, usage and events",
        "Deployed backend microservices as containers on OpenStack-provisioned VMs using Docker and Kubernetes, leveraging auto-scaling to ensure consistent delivery of new features across production environments",
        "Eliminated $300K in annual resource waste by optimizing resource allocation across production environments using Python-based predictive analytics and time-series forecasting on network telemetry",
        "Collaborated with cross-functional teams to integrate AI/ML models on telemetry data lakes as microservices, generating proactive alerts and recommendations for network health, device performance, and end-user experience",
      ],
    },
    {
      title: "Software Engineer Intern",
      company: "Hewlett Packard Enterprise - Global Technology Center",
      location: "Bengaluru, India", 
      duration: "Mar 2023 - Aug 2023",
      achievements: [
        "Supported deployment validations, design reviews, and incident response, contributing to quality standards and gaining hands-on experience with enterprise-scale system architecture",
        "Created automation scripts in Bash that reduced manual configuration time by 30%, improving efficiency for network function setup and validation tasks",
      ],
    },
    {
      title: "Software Development Core Member",
      company: "SSN Coding Club",
      location: "Chennai, India",
      duration: "Jun 2022 - Feb 2023",
      achievements: [
        "Mentored 50+ students on Software Engineering principles and MERN stack fundamentals, guiding them in system design concepts, coding best practices, and providing hands-on experience with industry-relevant tools and frameworks",
        "Led brainstorming sessions and organized 10+ SDE workshops and hackathons, increasing student participation by 150% and contributing to 5+ coding competition wins",
      ],
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

      {/* Experience Section */}
      <section className="pt-32 pb-16 px-4 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Professional Experience</h2>
          <div className="space-y-6">
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
                      {exp.location && <p className="text-sm text-gray-500 dark:text-gray-400">{exp.location}</p>}
                    </div>
                    <Badge variant="outline">{exp.duration}</Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {exp.achievements.map((achievement, i) => (
                      <li key={i} className="flex items-start">
                        <span className="text-blue-600 mr-2">•</span>
                        <span className="text-gray-600 dark:text-gray-300">{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Achievements & Recognition</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <Card>
              <CardContent className="pt-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-yellow-100 dark:bg-yellow-900 p-3 rounded-full">
                    <span className="text-2xl">🏆</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">2nd Place - CODERA Competition</h3>
                    <p className="text-gray-600 dark:text-gray-300 text-sm">
                      Secured 2nd place in the coding competition 'CODERA' at the college technical symposium 'INVENTE', showcasing problem-solving skills and algorithmic thinking.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-blue-100 dark:bg-blue-900 p-3 rounded-full">
                    <span className="text-2xl">🚀</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">HackWithIndia Semi-Finalist</h3>
                    <p className="text-gray-600 dark:text-gray-300 text-sm">
                      Achieved Semi-Finalist status (Top 1%) out of 20,000+ teams at HackWithIndia, sponsored by Microsoft, demonstrating exceptional innovation and technical prowess.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-green-100 dark:bg-green-900 p-3 rounded-full">
                    <span className="text-2xl">👥</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Exceptional Mentorship Recognition</h3>
                    <p className="text-gray-600 dark:text-gray-300 text-sm">
                      Recognized for exceptional mentorship in technical skill development at HPE, achieving 95% satisfaction rate from junior engineer feedback evaluations.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-purple-100 dark:bg-purple-900 p-3 rounded-full">
                    <span className="text-2xl">🎯</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">ACE Employee Connect Leadership</h3>
                    <p className="text-gray-600 dark:text-gray-300 text-sm">
                      Led the planning and execution of quizzes and tech talks for the ACE Employee Connect program at HPE, fostering knowledge sharing and team collaboration.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
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
