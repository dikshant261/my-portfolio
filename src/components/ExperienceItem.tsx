import React from 'react'
import { motion } from 'framer-motion'
import { Calendar, MapPin, Briefcase, CheckCircle2 } from 'lucide-react'
import type { Experience } from '../types/portfolio'

interface ExperienceItemProps {
  experience: Experience
  index: number
  isLast: boolean
}

export const ExperienceItem: React.FC<ExperienceItemProps> = ({ experience, index, isLast }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="relative pl-8 sm:pl-10 md:pl-12 group"
    >
      {/* Timeline vertical connector line */}
      {!isLast && (
        <div className="absolute left-[15px] sm:left-[19px] md:left-[23px] top-6 bottom-[-24px] w-[2px] bg-gradient-to-b from-indigo-500 via-indigo-300 to-slate-200 dark:from-indigo-500 dark:via-indigo-800 dark:to-slate-800" />
      )}

      {/* Timeline Node Dot */}
      <div className="absolute left-1 sm:left-2 md:left-3 top-1.5 w-6 h-6 rounded-full bg-white dark:bg-slate-900 border-2 border-indigo-600 dark:border-indigo-400 flex items-center justify-center shadow-md shadow-indigo-500/20 group-hover:scale-125 transition-transform duration-300">
        <div className="w-2 h-2 rounded-full bg-indigo-600 dark:bg-indigo-400" />
      </div>

      {/* Main Experience Card */}
      <div className="p-6 sm:p-7 rounded-2xl bg-white dark:bg-slate-900/90 border border-slate-200/80 dark:border-slate-800/80 shadow-sm hover:shadow-xl hover:shadow-indigo-500/5 transition-all duration-300">
        {/* Header: Role & Period */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-4 border-b border-slate-100 dark:border-slate-800/80">
          <div>
            <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white tracking-tight">
              {experience.jobProfile}
            </h3>
            <div className="flex items-center gap-2 text-indigo-600 dark:text-indigo-400 font-semibold text-base mt-1">
              <Briefcase className="w-4 h-4" />
              <span>{experience.companyName}</span>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-3 text-xs sm:text-sm font-medium text-slate-500 dark:text-slate-400">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300">
              <Calendar className="w-3.5 h-3.5 text-indigo-500" />
              {experience.startDate} — {experience.endDate}
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300">
              <MapPin className="w-3.5 h-3.5 text-indigo-500" />
              {experience.location}
            </span>
          </div>
        </div>

        {/* Bullet points description */}
        <div className="mt-4 space-y-2.5">
          {experience.description.map((bullet, idx) => (
            <div key={idx} className="flex items-start gap-2.5 text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed">
              <CheckCircle2 className="w-4 h-4 text-indigo-500 shrink-0 mt-1" />
              <span>{bullet}</span>
            </div>
          ))}
        </div>

        {/* Technologies Pills */}
        {experience.technologies && experience.technologies.length > 0 && (
          <div className="mt-5 pt-4 border-t border-slate-100 dark:border-slate-800 flex flex-wrap items-center gap-2">
            {experience.technologies.map(tech => (
              <span
                key={tech}
                className="px-2.5 py-1 rounded-lg text-xs font-mono font-medium bg-indigo-50/80 dark:bg-indigo-950/40 text-indigo-600 dark:text-indigo-300 border border-indigo-200/50 dark:border-indigo-800/40"
              >
                {tech}
              </span>
            ))}
          </div>
        )}
      </div>
    </motion.div>
  )
}
