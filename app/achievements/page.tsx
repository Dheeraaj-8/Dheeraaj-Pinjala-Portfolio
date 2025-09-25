"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Trophy, Award, Users, Star } from "lucide-react"
import Link from "next/link"
import { useTheme } from "../../contexts/theme-context"
import Navigation from "../../components/navigation"

export default function Achievements() {
  const { theme } = useTheme()

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
      <Navigation currentPage="Achievements" />

      {/* Achievements Section */}
      <section className="py-12 sm:py-16 px-4 bg-white dark:bg-gray-900 dark:bg-gradient-to-br dark:from-gray-900 dark:via-purple-900/20 dark:to-gray-900">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-3xl sm:text-4xl font-bold text-center mb-8 sm:mb-12">Achievements & Recognition</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            {achievements.map((achievement, index) => {
              const IconComponent = achievement.icon
              return (
                <Card key={index} className="hover:shadow-lg transition-shadow border-gray-200 dark:border-purple-800/30">
                  <CardHeader>
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between space-y-3 sm:space-y-0">
                      <div className="flex items-start space-x-3 sm:space-x-4">
                        <div className="p-2 sm:p-3 bg-blue-100 dark:bg-purple-900/30 rounded-full flex-shrink-0">
                          <IconComponent className="h-5 w-5 sm:h-6 sm:w-6 text-blue-600 dark:text-purple-400" />
                        </div>
                        <div className="flex-1">
                          <CardTitle className="text-base sm:text-lg">{achievement.title}</CardTitle>
                          <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-300 mt-1">{achievement.organization}</p>
                        </div>
                      </div>
                      <div className="flex flex-col sm:items-end space-y-1 sm:space-y-2">
                        <Badge variant="outline" className="text-xs sm:text-sm">{achievement.year}</Badge>
                        <Badge variant="secondary" className="text-xs">{achievement.category}</Badge>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300">{achievement.description}</p>
                  </CardContent>
                </Card>
              )
            })}
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
