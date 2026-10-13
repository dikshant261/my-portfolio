import React from 'react'
import { motion } from 'framer-motion'
import { Trophy, Award, Medal, Calendar } from 'lucide-react'
import type { Achievement } from '../types/portfolio'
import { SectionHeading } from './SectionHeading'

interface AchievementsProps {
  achievements: Achievement[]
}

export const Achievements: React.FC<AchievementsProps> = ({ achievements }) => {
  return (
    <section id="achievements" className="py-20 md:py-28 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-6xl mx-auto">
        <SectionHeading
          badge="Milestones"
          title="Honors & Achievements"
          subtitle="Recognition, competitive hackathons, and milestones from my journey in software engineering."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {achievements.map((item, index) => (
            <motion.div
              key={`${item.title}-${index}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
              className="group p-6 sm:p-7 rounded-2xl bg-white dark:bg-slate-900/90 border border-slate-200/80 dark:border-slate-800/80 shadow-sm hover:shadow-xl hover:shadow-indigo-500/5 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between gap-3 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-amber-50 dark:bg-amber-950/40 border border-amber-200/60 dark:border-amber-800/40 flex items-center justify-center text-amber-500 group-hover:scale-110 transition-transform">
                    {index === 0 ? (
                      <Trophy className="w-6 h-6" />
                    ) : index === 1 ? (
                      <Award className="w-6 h-6" />
                    ) : (
                      <Medal className="w-6 h-6" />
                    )}
                  </div>

                  <div className="flex items-center gap-1 text-xs font-semibold px-2.5 py-1 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400">
                    <Calendar className="w-3 h-3 text-indigo-500" />
                    <span>{item.date}</span>
                  </div>
                </div>

                {item.awardType && (
                  <span className="inline-block text-xs font-bold uppercase tracking-wider text-indigo-600 dark:text-indigo-400 mb-1.5">
                    {item.awardType}
                  </span>
                )}

                <h3 className="text-xl font-bold text-slate-900 dark:text-white tracking-tight group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                  {item.title}
                </h3>

                <p className="text-sm font-semibold text-slate-600 dark:text-slate-400 mt-1">
                  {item.organization}
                </p>

                <p className="mt-3 text-sm text-slate-600 dark:text-slate-300/90 leading-relaxed">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
