"use client"

import Navbar from "@/components/navbar"
import Hero from "@/components/hero"
import About from "@/components/about"
import Details from "@/components/details"
import Contact from "@/components/contact"
import Footer from "@/components/footer"
import Testimonials from "@/components/testimonials"
import { motion } from "motion/react"
import type { Variants } from "motion/react"

// Reusable animation variant
const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.1, 0.25, 1], 
    },
  },
}

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />

      {/* Hero */}
        <Hero />

      {/* About */}
      <motion.section
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <About />
      </motion.section>

      {/* Details */}
        <Details />

      {/* Testimonials */}
      <motion.section
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <Testimonials />
      </motion.section>

      {/* Contact */}
      <motion.section
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <Contact />
      </motion.section>

      {/* Footer */}
      <Footer />
    </main>
  )
}
