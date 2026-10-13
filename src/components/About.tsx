import React from 'react'
import { motion } from 'framer-motion'
import { MapPin, Briefcase, Download, ArrowRight, CheckCircle2 } from 'lucide-react'
import type { PersonalInfo } from '../types/portfolio'
import { SectionHeading } from './SectionHeading'

interface AboutProps {
  personalInfo: PersonalInfo
}

export const About: React.FC<AboutProps> = ({ personalInfo }) => {
  return (
    <section id="about" className="py-20 md:py-28 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-6xl mx-auto">
        <SectionHeading
          badge="About Me"
          title="Who I Am"
          subtitle="A snapshot of my background, focus, and drive for engineering modern web applications."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Profile Image & Badges Column */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-5 flex flex-col items-center"
          >
            <div className="relative group w-full max-w-sm sm:max-w-md aspect-square">
              {/* Outer decorative gradient border */}
              <div className="absolute -inset-1.5 bg-gradient-to-tr from-indigo-600 via-violet-500 to-cyan-400 rounded-3xl blur-sm opacity-50 group-hover:opacity-80 transition duration-500 group-hover:duration-200" />

              {/* Main Image Container */}
              <div className="relative w-full h-full rounded-2xl overflow-hidden bg-slate-900 border border-slate-200/50 dark:border-slate-800 shadow-2xl">
                <img
                  src={personalInfo.profileImage}
                  alt={personalInfo.name}
                  className="w-full h-full object-cover object-top transition duration-500 group-hover:scale-105"
                  loading="lazy"
                />

                {/* Bottom glass overlay with quick tag */}
                <div className="absolute bottom-0 inset-x-0 p-4 bg-gradient-to-t from-slate-950/90 via-slate-950/50 to-transparent backdrop-blur-[2px] text-white">
                  <div className="font-bold text-lg">{personalInfo.name}</div>
                  <div className="text-xs text-indigo-300 font-medium flex items-center gap-1.5 mt-0.5">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 inline-block" />
                    <span>{personalInfo.profession}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Location & Profession Badges */}
            <div className="flex flex-wrap items-center justify-center gap-3 mt-6 text-sm text-slate-600 dark:text-slate-300">
              <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-100 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700/60 font-medium">
                <MapPin className="w-4 h-4 text-indigo-500" />
                <span>{personalInfo.location}</span>
              </div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-100 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700/60 font-medium">
                <Briefcase className="w-4 h-4 text-indigo-500" />
                <span>{personalInfo.profession}</span>
              </div>
            </div>
          </motion.div>

          {/* About Content & Stats Column */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="lg:col-span-7 space-y-6 text-left"
          >
            <div className="space-y-4">
              <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white leading-snug">
                {personalInfo.tagline}
              </h3>
              <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
                {personalInfo.about}
              </p>
            </div>

            {/* Key Strengths / Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              <div className="flex items-start gap-2.5 p-3 rounded-xl bg-slate-50 dark:bg-slate-900/50 border border-slate-200/60 dark:border-slate-800/80">
                <CheckCircle2 className="w-5 h-5 text-indigo-600 dark:text-indigo-400 mt-0.5 shrink-0" />
                <span className="text-sm font-medium text-slate-700 dark:text-slate-300">
                  Clean & Modular React / TypeScript Architecture
                </span>
              </div>
              <div className="flex items-start gap-2.5 p-3 rounded-xl bg-slate-50 dark:bg-slate-900/50 border border-slate-200/60 dark:border-slate-800/80">
                <CheckCircle2 className="w-5 h-5 text-indigo-600 dark:text-indigo-400 mt-0.5 shrink-0" />
                <span className="text-sm font-medium text-slate-700 dark:text-slate-300">
                  High Performance & Responsive Design Systems
                </span>
              </div>
              <div className="flex items-start gap-2.5 p-3 rounded-xl bg-slate-50 dark:bg-slate-900/50 border border-slate-200/60 dark:border-slate-800/80">
                <CheckCircle2 className="w-5 h-5 text-indigo-600 dark:text-indigo-400 mt-0.5 shrink-0" />
                <span className="text-sm font-medium text-slate-700 dark:text-slate-300">
                  Reliable REST APIs & Scalable Backend Services
                </span>
              </div>
              <div className="flex items-start gap-2.5 p-3 rounded-xl bg-slate-50 dark:bg-slate-900/50 border border-slate-200/60 dark:border-slate-800/80">
                <CheckCircle2 className="w-5 h-5 text-indigo-600 dark:text-indigo-400 mt-0.5 shrink-0" />
                <span className="text-sm font-medium text-slate-700 dark:text-slate-300">
                  Data-Driven & User-Centric Mindset
                </span>
              </div>
            </div>

            {/* Dynamic Stats Grid */}
            {personalInfo.stats && personalInfo.stats.length > 0 && (
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-4">
                {personalInfo.stats.map(stat => (
                  <div
                    key={stat.label}
                    className="p-4 rounded-2xl bg-white dark:bg-slate-900/80 border border-slate-200/80 dark:border-slate-800 shadow-sm text-center"
                  >
                    <div className="text-2xl sm:text-3xl font-extrabold text-indigo-600 dark:text-indigo-400">
                      {stat.value}
                    </div>
                    <div className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 font-medium mt-1">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* Actions */}
            <div className="flex flex-wrap items-center gap-4 pt-4">
              {personalInfo.resume && (
                <a
                  href={personalInfo.resume}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-xl font-semibold text-white bg-indigo-600 hover:bg-indigo-700 shadow-md shadow-indigo-600/20 transition-all duration-200"
                >
                  <Download className="w-4 h-4" />
                  <span>Download CV</span>
                </a>
              )}
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl font-semibold text-slate-700 dark:text-slate-200 hover:text-indigo-600 dark:hover:text-indigo-400 hover:bg-slate-100 dark:hover:bg-slate-800/80 border border-slate-200 dark:border-slate-700 transition-all duration-200"
              >
                <span>Let's Connect</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
