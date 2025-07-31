"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { useState, useEffect } from "react"

interface NavLink {
  href: string
  label: string
  id: string
}

export default function Navbar() {
  const [activeSection, setActiveSection] = useState<string>("")

  useEffect(() => {
    const sections: string[] = ["about", "goals", "details", "testimonials"]
    
    const observerOptions = {
      root: null,
      rootMargin: "-20% 0px -80% 0px", // Trigger when section is 20% from top
      threshold: 0
    }

    const observer = new IntersectionObserver((entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry: IntersectionObserverEntry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id)
        }
      })
    }, observerOptions)

    // Observe all sections
    sections.forEach((sectionId: string) => {
      const element: HTMLElement | null = document.getElementById(sectionId)
      if (element) {
        observer.observe(element)
      }
    })

    // Cleanup
    return () => {
      sections.forEach((sectionId: string) => {
        const element: HTMLElement | null = document.getElementById(sectionId)
        if (element) {
          observer.unobserve(element)
        }
      })
    }
  }, [])

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string): void => {
    e.preventDefault()
    const targetId: string = href.replace("#", "")
    const element: HTMLElement | null = document.getElementById(targetId)
    
    if (element) {
      const navbarHeight: number = 64 // Height of fixed navbar
      const elementPosition: number = element.offsetTop - navbarHeight
      
      window.scrollTo({
        top: elementPosition,
        behavior: "smooth"
      })
    }
  }

  const navLinks: NavLink[] = [
    { href: "#about", label: "Mission", id: "about" },
    { href: "#goals", label: "Process", id: "goals" },
    { href: "#details", label: "Work", id: "details" },
    { href: "#testimonials", label: "Reviews", id: "testimonials" }
  ]

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <div className="w-8 h-8 bg-black rounded-sm flex items-center justify-center">
                <div className="w-4 h-4 bg-white rounded-sm"></div>
              </div>
            </div>
            <span className="ml-3 text-xl font-bold text-gray-900">SKILLEM</span>
          </div>

          {/* Navigation Links */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navLinks.map((link: NavLink) => (
                <Link
                  key={link.id}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`px-3 py-2 text-sm font-medium transition-colors relative ${
                    activeSection === link.id
                      ? "text-gray-900 after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-black after:transition-all"
                      : "text-gray-700 hover:text-gray-900"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* CTA Button */}
          <div className="flex items-center space-x-4">
            <div className="w-8 h-8 bg-gray-200 rounded-full"></div>
            <Button asChild className="bg-black text-white hover:bg-gray-800">
              <Link href="#contact">Book a call</Link>
            </Button>
          </div>
        </div>
      </div>
    </nav>
  )
}