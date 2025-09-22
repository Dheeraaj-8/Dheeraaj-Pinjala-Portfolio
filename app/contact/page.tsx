"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, MapPin, Phone, Github, Linkedin, Send, Moon, Sun } from "lucide-react"
import Link from "next/link"
import { useTheme } from "../../contexts/theme-context"

export default function Contact() {
  const { theme, toggleTheme } = useTheme()

  return (
    <div
      className={`min-h-screen flex flex-col ${theme === "dark" ? "dark bg-gray-900 text-white" : "bg-white text-gray-900"}`}
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
                  className={`hover:text-blue-600 transition-colors ${item === "Contact" ? "text-blue-600" : ""}`}
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

      {/* Contact Section */}
      <section className="py-12 px-4 flex-1 min-h-[calc(100vh-40px)]">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl font-bold text-center mb-8">Let's Connect</h1>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h2 className="text-2xl font-semibold mb-6">Get in Touch</h2>
              <p className="text-gray-600 dark:text-gray-300 mb-6 text-lg">
                I'm always interested in discussing new opportunities, innovative projects, or just having a
                conversation about technology. Feel free to reach out!
              </p>

              <div className="space-y-4">
                <div className="flex items-center">
                  <Mail className="h-6 w-6 text-blue-600 mr-4" />
                  <div>
                    <p className="font-medium">Email</p>
                    <a href="mailto:dheeraajpinjala@gmail.com" className="text-blue-600 hover:text-blue-700 transition-colors">
                      dheeraajpinjala@gmail.com
                    </a>
                  </div>
                </div>
                <div className="flex items-center">
                  <Phone className="h-6 w-6 text-blue-600 mr-4" />
                  <div>
                    <p className="font-medium">Phone</p>
                    <a href="tel:+18574230842" className="text-blue-600 hover:text-blue-700 transition-colors">
                      (857) 423-0842
                    </a>
                  </div>
                </div>
                <div className="flex items-center">
                  <MapPin className="h-6 w-6 text-blue-600 mr-4" />
                  <div>
                    <p className="font-medium">Location</p>
                    <span className="text-gray-600 dark:text-gray-300">Boston, Massachusetts</span>
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <h3 className="text-xl font-semibold mb-4">Connect with me</h3>
                <div className="flex space-x-4">
                  <a href="https://linkedin.com/in/dheeraaj-pinjala" target="_blank" rel="noopener noreferrer" className="p-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors">
                    <Linkedin className="h-6 w-6" />
                  </a>
                  <a href="https://github.com/Dheeraaj-8" target="_blank" rel="noopener noreferrer" className="p-3 bg-gray-800 text-white rounded-full hover:bg-gray-900 transition-colors">
                    <Github className="h-6 w-6" />
                  </a>
                  <a href="mailto:dheeraajpinjala@gmail.com" className="p-3 bg-green-600 text-white rounded-full hover:bg-green-700 transition-colors">
                    <Mail className="h-6 w-6" />
                  </a>
                </div>
              </div>
            </div>

            <Card>
              <CardHeader>
                <CardTitle>Send a Message</CardTitle>
                <CardDescription>I'll get back to you within 24 hours</CardDescription>
              </CardHeader>
              <CardContent>
                <form className="space-y-4">
                  <div>
                    <Input placeholder="Your Name" />
                  </div>
                  <div>
                    <Input type="email" placeholder="Your Email" />
                  </div>
                  <div>
                    <Input placeholder="Subject" />
                  </div>
                  <div>
                    <Textarea placeholder="Your Message" rows={6} />
                  </div>
                  <Button className="w-full">
                    <Send className="h-4 w-4 mr-2" />
                    Send Message
                  </Button>
                </form>
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