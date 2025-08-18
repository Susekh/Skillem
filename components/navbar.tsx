"use client"

import Link from "next/link"
import { useState, useEffect } from "react"
import { Menu, X } from "lucide-react"
import Image from "next/image"

interface NavLink {
  href: string
  label: string
  id: string
}

export default function Navbar() {
  const [activeSection, setActiveSection] = useState<string>("")
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false)

  useEffect(() => {
    // Sections to track in scroll spy
    const sections: string[] = ["about", "details", "testimonials", "contact"]

    const observerOptions = {
      root: null,
      rootMargin: "-30% 0px -70% 0px", // Better accuracy
      threshold: 0,
    }

    const observer = new IntersectionObserver((entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry: IntersectionObserverEntry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id)
        }
      })
    }, observerOptions)

    sections.forEach((sectionId: string) => {
      const element: HTMLElement | null = document.getElementById(sectionId)
      if (element) observer.observe(element)
    })

    return () => {
      sections.forEach((sectionId: string) => {
        const element: HTMLElement | null = document.getElementById(sectionId)
        if (element) observer.unobserve(element)
      })
    }
  }, [])

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string): void => {
    e.preventDefault()
    const targetId: string = href.replace("#", "")
    const element: HTMLElement | null = document.getElementById(targetId)

    if (element) {
      const navbarHeight: number = 64 // adjust if navbar height changes
      const elementPosition: number = element.offsetTop - navbarHeight

      window.scrollTo({
        top: elementPosition,
        behavior: "smooth",
      })
      setIsMobileMenuOpen(false)
    }
  }

  const navLinks: NavLink[] = [
    { href: "#about", label: "About", id: "about" },
    { href: "#details", label: "Details", id: "details" },
    { href: "#testimonials", label: "Reviews", id: "testimonials" },
    { href: "#contact", label: "Contact", id: "contact" },
  ]

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <div className="w-10 h-10 rounded-sm flex items-center justify-center">
              <Image
                height={100}
                width={100}
                alt="SKILLEM SERVICES icon"
                src={'/favicon.png'}
              />
            </div>
            <span className="ml-3 text-xl font-bold text-gray-900">
              SKILLEM SERVICES
            </span>
          </div>

          {/* Desktop Nav */}
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

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 rounded-md text-gray-700 hover:text-gray-900 focus:outline-none"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-sm border-t border-gray-100 shadow-sm">
          <div className="px-4 py-4 space-y-2">
            {navLinks.map((link: NavLink) => (
              <Link
                key={link.id}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className={`block px-3 py-2 rounded-md text-base font-medium transition-colors ${
                  activeSection === link.id
                    ? "text-gray-900 bg-gray-100"
                    : "text-gray-700 hover:text-gray-900 hover:bg-gray-50"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  )
}
