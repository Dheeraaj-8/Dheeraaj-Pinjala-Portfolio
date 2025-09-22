"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Trophy, Award, Users, Star, Moon, Sun } from "lucide-react"
import Link from "next/link"
import { useTheme } from "../../contexts/theme-context"

export default function Achievements() {
  const { theme, toggleTheme } = useTheme()

  const achievements = [
    {
      title: "2nd Place - CODERA Competition",
      organization: "College Technical Symposium 'INVENTE'",
      year: "2022",
      description: "Secured 2nd place in the coding competition at the college technical symposium, demonstrating strong problem-solving skills and algorithmic thinking.",
      icon: Trophy,
      category: "Competition"
    },
    {
      title: "HackWithIndia Semi-Finalist",
      organization: "Microsoft Sponsored Hackathon",
      year: "2022",
      description: "Achieved semi-finalist position (Top 1%) out of 20,000+ teams in the prestigious HackWithIndia hackathon sponsored by Microsoft.",
      icon: Award,
      category: "Hackathon"
    },
    {
      title: "Exceptional Mentorship Recognition",
      organization: "Hewlett Packard Enterprise",
      year: "2024",
      description: "Recognized for exceptional mentorship in technical skill development at HPE, achieving 95% satisfaction rate from junior engineer feedback evaluations.",
      icon: Users,
      category: "Professional"
    },
    {
      title: "ACE Employee Connect Leadership",
      organization: "Hewlett Packard Enterprise",
      year: "2024",
      description: "Led the planning and execution of quizzes and tech talks for the ACE Employee Connect program at HPE, fostering knowledge sharing and team collaboration.",
      icon: Star,
      category: "Leadership"
    }
  ]

  return (
    <div
      className={`min-h-screen ${theme === "dark" ? "dark bg-gray-900 text-white" : "bg-white text-gray-900"}`}
    >
      {/* Navigation */}
      <nav className={`${theme === "dark" ? "bg-gray-900" : "bg-white"} border-b flex-shrink-0`}>
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex justify-between items-center py-4">
            <Link href="/about" className="text-xl font-bold text-blue-600">Dheeraaj Pinjala</Link>
            <div className="hidden md:flex space-x-6">
              {["About", "Skills", "Projects", "Experience", "Achievements", "Contact"].map((item) => (
                <Link
                  key={item}
                  href={item.toLowerCase()}
                  className={`hover:text-blue-600 transition-colors ${item === "Achievements" ? "text-blue-600" : ""}`}
                >
                  {item}
                </Link>
              ))}
            </div>
            <Button variant="ghost" size="icon" onClick={toggleTheme}>
              {theme === "dark" ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </Button>
          </div>
        </div>
      </nav>

      {/* Achievements Section */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl font-bold text-center mb-12">Achievements & Recognition</h1>
          <div className="grid md:grid-cols-2 gap-8">
            {achievements.map((achievement, index) => {
              const IconComponent = achievement.icon
              return (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div className="flex items-center">
                        <div className="p-3 bg-blue-100 dark:bg-blue-900 rounded-full mr-4">
                          <IconComponent className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                        </div>
                        <div>
                          <CardTitle className="text-lg">{achievement.title}</CardTitle>
                          <p className="text-sm text-gray-600 dark:text-gray-300 mt-1">{achievement.organization}</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <Badge variant="outline" className="mb-2">{achievement.year}</Badge>
                        <Badge variant="secondary" className="text-xs">{achievement.category}</Badge>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 dark:text-gray-300">{achievement.description}</p>
                  </CardContent>
                </Card>
              )
            })}
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
