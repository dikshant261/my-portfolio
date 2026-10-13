import React from 'react'
import { motion } from 'framer-motion'
import { ArrowDown, Mail, Terminal } from 'lucide-react'
import type { Hero as HeroType, PersonalInfo } from '../types/portfolio'
import { GithubIcon, LinkedinIcon, TwitterIcon } from './SocialIcons'

interface HeroProps {
  hero: HeroType
  personalInfo: PersonalInfo
}

export const Hero: React.FC<HeroProps> = ({ hero, personalInfo }) => {
  return (
    <section
      id="home"
      className="relative min-h-[92vh] flex items-center justify-center pt-24 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden bg-grid-pattern"
    >
      <div className="max-w-5xl mx-auto w-full text-center relative z-10">
        {/* Availability Badge */}
        {hero.statusAvailable && hero.statusText && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full text-xs sm:text-sm font-medium bg-emerald-50 text-emerald-700 border border-emerald-200/80 dark:bg-emerald-950/40 dark:text-emerald-300 dark:border-emerald-800/40 mb-8 shadow-sm"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span>{hero.statusText}</span>
          </motion.div>
        )}

        {/* Greeting & Headline */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="space-y-3"
        >
          <div className="text-slate-500 dark:text-slate-400 font-medium tracking-wide text-lg sm:text-xl">
            {hero.greeting}
          </div>
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-[1.08]">
            <span className="bg-gradient-to-r from-slate-900 via-indigo-950 to-slate-800 dark:from-white dark:via-slate-100 dark:to-slate-300 bg-clip-text text-transparent">
              {hero.headline}
            </span>
          </h1>
          <div className="flex items-center justify-center gap-2 pt-1">
            <span className="text-xl sm:text-2xl md:text-3xl font-bold bg-gradient-to-r from-indigo-600 via-indigo-500 to-violet-600 dark:from-indigo-400 dark:via-indigo-300 dark:to-violet-400 bg-clip-text text-transparent">
              {hero.subHeadline}
            </span>
          </div>
        </motion.div>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-6 text-base sm:text-lg md:text-xl text-slate-600 dark:text-slate-300/90 max-w-2xl mx-auto leading-relaxed font-normal"
        >
          {hero.description}
        </motion.p>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-9 flex flex-wrap items-center justify-center gap-4"
        >
          <a
            href="#projects"
            className="group relative inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-white bg-indigo-600 hover:bg-indigo-700 shadow-lg shadow-indigo-600/25 hover:shadow-indigo-600/35 transition-all duration-200 active:scale-95"
          >
            <span>{hero.primaryButton}</span>
            <ArrowDown className="w-4 h-4 group-hover:translate-y-0.5 transition-transform" />
          </a>

          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-slate-800 dark:text-slate-100 bg-white/90 dark:bg-slate-900/90 hover:bg-slate-100 dark:hover:bg-slate-800 border border-slate-200 dark:border-slate-800 shadow-sm transition-all duration-200 active:scale-95"
          >
            <span>{hero.secondaryButton}</span>
          </a>
        </motion.div>

        {/* Social Icons Bar */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-12 flex items-center justify-center gap-4"
        >
          {personalInfo.github && (
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub profile"
              className="p-3 rounded-xl text-slate-600 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400 bg-white/80 dark:bg-slate-900/80 hover:bg-indigo-50 dark:hover:bg-indigo-950/30 border border-slate-200/80 dark:border-slate-800 transition-all duration-200 hover:-translate-y-1 shadow-sm"
            >
              <GithubIcon className="w-5 h-5" />
            </a>
          )}
          {personalInfo.linkedin && (
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn profile"
              className="p-3 rounded-xl text-slate-600 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400 bg-white/80 dark:bg-slate-900/80 hover:bg-indigo-50 dark:hover:bg-indigo-950/30 border border-slate-200/80 dark:border-slate-800 transition-all duration-200 hover:-translate-y-1 shadow-sm"
            >
              <LinkedinIcon className="w-5 h-5" />
            </a>
          )}
          {personalInfo.twitter && (
            <a
              href={personalInfo.twitter}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Twitter profile"
              className="p-3 rounded-xl text-slate-600 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400 bg-white/80 dark:bg-slate-900/80 hover:bg-indigo-50 dark:hover:bg-indigo-950/30 border border-slate-200/80 dark:border-slate-800 transition-all duration-200 hover:-translate-y-1 shadow-sm"
            >
              <TwitterIcon className="w-5 h-5" />
            </a>
          )}
          {personalInfo.email && (
            <a
              href={`mailto:${personalInfo.email}`}
              aria-label="Send Email"
              className="p-3 rounded-xl text-slate-600 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400 bg-white/80 dark:bg-slate-900/80 hover:bg-indigo-50 dark:hover:bg-indigo-950/30 border border-slate-200/80 dark:border-slate-800 transition-all duration-200 hover:-translate-y-1 shadow-sm"
            >
              <Mail className="w-5 h-5" />
            </a>
          )}
        </motion.div>

        {/* Minimal Developer Terminal Visual Strip */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-14 max-w-xl mx-auto rounded-2xl bg-white/70 dark:bg-slate-900/70 border border-slate-200/80 dark:border-slate-800/80 p-4 shadow-xl backdrop-blur-sm text-left"
        >
          <div className="flex items-center justify-between pb-3 mb-3 border-b border-slate-100 dark:border-slate-800">
            <div className="flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
              <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
            </div>
            <div className="flex items-center gap-1 text-[11px] font-mono text-slate-400 dark:text-slate-500">
              <Terminal className="w-3 h-3" />
              <span>developer.config.ts</span>
            </div>
          </div>
          <div className="font-mono text-xs sm:text-sm space-y-1 text-slate-600 dark:text-slate-300">
            <p>
              <span className="text-indigo-600 dark:text-indigo-400 font-semibold">const</span>{' '}
              <span className="text-violet-600 dark:text-violet-300">developer</span> = &#123;
            </p>
            <p className="pl-4">
              <span className="text-slate-500 dark:text-slate-400">role:</span>{' '}
              <span className="text-emerald-600 dark:text-emerald-400 font-medium">
                "{personalInfo.profession}"
              </span>
              ,
            </p>
            <p className="pl-4">
              <span className="text-slate-500 dark:text-slate-400">focus:</span>{' '}
              <span className="text-emerald-600 dark:text-emerald-400 font-medium">
                ["React", "TypeScript", "Node.js", "Full Stack"]
              </span>
              ,
            </p>
            <p className="pl-4">
              <span className="text-slate-500 dark:text-slate-400">mission:</span>{' '}
              <span className="text-emerald-600 dark:text-emerald-400 font-medium">
                "Build scalable & beautiful web software"
              </span>
            </p>
            <p>&#125;;</p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
