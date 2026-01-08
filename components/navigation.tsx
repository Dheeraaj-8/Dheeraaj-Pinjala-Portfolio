"use client"

import { Button } from "@/components/ui/button"
import { Moon, Sun, Menu, X } from "lucide-react"
import Link from "next/link"
import { useTheme } from "../contexts/theme-context"
import { useState } from "react"

interface NavigationProps {
  currentPage: string
}

export default function Navigation({ currentPage }: NavigationProps) {
  const { theme, toggleTheme } = useTheme()
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const navigationItems = ["About", "Skills", "Projects", "Experience", "Achievements", "Contact"]

  return (
    <nav className={`${theme === "dark" ? "bg-card border-purple-800/30" : "bg-white"} border-b flex-shrink-0`}>
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <Link href="/" className="text-2xl font-bold text-blue-600 dark:text-purple-400">
            Dheeraaj Pinjala
          </Link>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-6">
            {navigationItems.map((item) => (
              <Link
                key={item}
                href={item.toLowerCase()}
                className={`text-lg hover:text-blue-600 dark:hover:text-purple-400 transition-colors ${
                  item === currentPage ? "text-blue-600 dark:text-purple-400" : ""
                }`}
              >
                {item}
              </Link>
            ))}
          </div>

          {/* Desktop Theme Toggle */}
          <div className="hidden md:flex items-center space-x-4">
            <Button variant="ghost" size="icon" onClick={toggleTheme}>
              {theme === "dark" ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-2">
            <Button variant="ghost" size="icon" onClick={toggleTheme}>
              {theme === "dark" ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </Button>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden border-t py-4">
            <div className="flex flex-col space-y-4">
              {navigationItems.map((item) => (
                <Link
                  key={item}
                  href={item.toLowerCase()}
                  className={`text-lg py-2 px-4 rounded-lg hover:bg-gray-100 dark:hover:bg-purple-900/30 transition-colors ${
                    item === currentPage ? "text-blue-600 dark:text-purple-400 bg-blue-50 dark:bg-purple-900/20" : ""
                  }`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
