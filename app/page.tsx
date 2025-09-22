"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Moon, Sun } from "lucide-react"
import Link from "next/link"

export default function Portfolio() {
  const [darkMode, setDarkMode] = useState(false)

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

      {/* Hero Section - Full Viewport */}
      <section className="h-screen flex justify-center px-4 relative pt-24">
        {/* Background Gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-blue-100 dark:from-gray-900 dark:via-gray-800 dark:to-blue-900"></div>
        
        {/* Subtle Pattern Overlay */}
        <div className="absolute inset-0 opacity-5 dark:opacity-10">
          <div className="absolute top-20 left-20 w-32 h-32 bg-blue-500 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-20 w-40 h-40 bg-purple-500 rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-cyan-500 rounded-full blur-2xl"></div>
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            {/* Left side - 70% (8 columns) */}
            <div className="lg:col-span-8 text-center lg:text-left space-y-4">
              {/* Name - Much Larger */}
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-black mb-2 bg-gradient-to-r from-blue-600 via-blue-700 to-purple-600 bg-clip-text text-transparent leading-tight">
                DHEERAAJ<br />PINJALA
              </h1>
              
              {/* Tagline - Enhanced */}
              <p className="text-base md:text-lg lg:text-xl font-semibold text-gray-700 dark:text-gray-200 mb-2 tracking-wide">
                AI Enthusiast • Cloud & DevOps Practitioner • Ex-Software Engineer
              </p>
              
              {/* Location & Experience - Larger */}
              <div className="flex items-center justify-center lg:justify-start text-gray-600 dark:text-gray-300 mb-4 text-base">
                <span className="font-medium">Boston, Massachusetts</span>
                <span className="mx-4 text-xl">•</span>
                <span className="font-medium">2 Years Experience</span>
              </div>

              {/* Description - Enhanced */}
              <p className="text-sm md:text-base text-gray-600 dark:text-gray-300 max-w-3xl mx-auto lg:mx-0 leading-relaxed text-justify">
                Currently pursuing MSCS at Northeastern University, combining enterprise software engineering experience with cutting-edge AI research to build ethical intelligent systems
              </p>

              {/* Call to Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mt-4">
                <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">
                  <button className="group relative px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-bold text-base rounded-xl shadow-2xl hover:shadow-blue-500/25 transform hover:-translate-y-1 transition-all duration-300">
                    <span className="relative z-10">My Resume</span>
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-700 to-purple-600 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </button>
                </a>
                <Link href="/contact">
                  <button className="group px-6 py-3 border-2 border-blue-600 text-blue-600 font-bold text-base rounded-xl hover:bg-blue-600 hover:text-white transform hover:-translate-y-1 transition-all duration-300">
                    Let's Connect
                  </button>
                </Link>
              </div>

              {/* Social Links - Enhanced */}
              <div className="flex space-x-4 justify-center lg:justify-start mt-4">
                <a href="https://github.com/Dheeraaj-8" target="_blank" rel="noopener noreferrer" className="group p-4 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-600 rounded-full shadow-lg hover:shadow-xl hover:shadow-blue-500/20 dark:hover:shadow-blue-400/20 transform hover:-translate-y-1 transition-all duration-300">
                  <svg className="w-6 h-6 text-gray-600 dark:text-gray-300 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0C5.374 0 0 5.373 0 12 0 17.302 3.438 21.8 8.207 23.387c.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
                  </svg>
                </a>
                <a href="https://linkedin.com/in/dheeraaj-pinjala" target="_blank" rel="noopener noreferrer" className="group p-4 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-600 rounded-full shadow-lg hover:shadow-xl hover:shadow-blue-500/20 dark:hover:shadow-blue-400/20 transform hover:-translate-y-1 transition-all duration-300">
                  <svg className="w-6 h-6 text-gray-600 dark:text-gray-300 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </a>
                <a href="mailto:dheeraajpinjala@gmail.com" className="group p-4 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-600 rounded-full shadow-lg hover:shadow-xl hover:shadow-blue-500/20 dark:hover:shadow-blue-400/20 transform hover:-translate-y-1 transition-all duration-300">
                  <svg className="w-6 h-6 text-gray-600 dark:text-gray-300 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </a>
              </div>
            </div>

            {/* Right side - 30% (4 columns) */}
            <div className="lg:col-span-4 flex justify-center">
              <div className="relative">
                {/* Enhanced Photo Container */}
                <div className="w-64 h-64 lg:w-80 lg:h-80 rounded-3xl overflow-hidden shadow-2xl transform hover:scale-105 transition-transform duration-500">
                  <img 
                    src="/profile-photo.jpeg" 
                    alt="Dheeraaj Pinjala" 
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.style.display = 'none';
                      const nextElement = target.nextElementSibling as HTMLElement;
                      if (nextElement) nextElement.style.display = 'flex';
                    }}
                  />
                  <div className="w-full h-full bg-gradient-to-br from-blue-100 to-purple-100 dark:from-gray-700 dark:to-blue-900 flex items-center justify-center" style={{display: 'none'}}>
                    <span className="text-6xl font-black text-blue-600 dark:text-blue-400">DP</span>
                  </div>
                </div>
                
                {/* Decorative Elements */}
                <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full opacity-20 animate-pulse"></div>
                <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full opacity-30 animate-pulse delay-1000"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 px-4 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">About Me</h2>
          <div className="max-w-3xl mx-auto">
            <p className="text-base text-gray-600 dark:text-gray-300 mb-6 text-justify">
              Hello! I'm Dheeraaj, currently pursuing my Master of Science in Computer Science at Northeastern University in Boston, Massachusetts. 
              My journey in tech began with a Bachelor's in Information Technology from SSN College of Engineering, where I discovered my passion for 
              solving real-world problems and creating meaningful impact through technology.
            </p>
            <p className="text-base text-gray-600 dark:text-gray-300 mb-6 text-justify">
              As a former Software Engineer at Hewlett Packard Enterprise, I spent 2 years building enterprise-scale solutions and honing my skills in 
              cloud infrastructure, DevOps practices, and collaborative leadership. This experience taught me the importance of building systems that 
              not only work well but also serve real human needs.
            </p>
            <p className="text-base text-gray-600 dark:text-gray-300 mb-6 text-justify">
              What truly drives me is the ethical application of AI to solve complex problems. I believe technology should enhance human capabilities 
              while maintaining transparency and fairness. This philosophy guides my approach to building solutions that make a meaningful difference.
            </p>
            <p className="text-base text-gray-600 dark:text-gray-300 text-justify">
              When I'm not immersed in code or AI research, you'll find me mentoring fellow developers, exploring Boston's vibrant tech scene, 
              or diving into the latest research papers on responsible AI development. I'm always excited to connect with like-minded individuals 
              who share a vision of technology that makes the world a better place.
            </p>
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