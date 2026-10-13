import React from 'react'
import { motion } from 'framer-motion'
import type { Skill } from '../types/portfolio'
import { SkillIcon } from './SkillIcon'

interface SkillCardProps {
  skill: Skill
  index: number
}

const LEVEL_CONFIG: Record<string, { label: string; width: string; color: string }> = {
  Beginner: { label: 'Beginner', width: '35%', color: 'bg-slate-400' },
  Intermediate: { label: 'Intermediate', width: '65%', color: 'bg-blue-500' },
  Advanced: { label: 'Advanced', width: '90%', color: 'bg-indigo-500' },
  Expert: { label: 'Expert', width: '98%', color: 'bg-emerald-500' },
}

export const SkillCard: React.FC<SkillCardProps> = ({ skill, index }) => {
  const levelInfo = LEVEL_CONFIG[skill.level] || LEVEL_CONFIG.Advanced

  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.35, delay: index * 0.04 }}
      whileHover={{ y: -4, transition: { duration: 0.2 } }}
      className="group relative p-5 rounded-2xl bg-white dark:bg-slate-900/90 border border-slate-200/80 dark:border-slate-800/80 hover:border-indigo-500/50 dark:hover:border-indigo-500/50 shadow-sm hover:shadow-xl hover:shadow-indigo-500/5 transition-all duration-300"
    >
      <div className="flex items-start justify-between gap-3 mb-3">
        <div className="w-11 h-11 rounded-xl bg-slate-100 dark:bg-slate-800 flex items-center justify-center p-2.5 group-hover:scale-110 group-hover:bg-indigo-50 dark:group-hover:bg-indigo-950/40 transition-all duration-300">
          <SkillIcon name={skill.name} iconName={skill.icon} className="w-6 h-6" />
        </div>
        <span className="text-[11px] font-semibold px-2.5 py-0.5 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400">
          {skill.category}
        </span>
      </div>

      <div className="space-y-2">
        <div className="flex items-baseline justify-between">
          <h4 className="text-base font-bold text-slate-900 dark:text-white tracking-tight group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
            {skill.name}
          </h4>
          <span className="text-xs font-medium text-slate-500 dark:text-slate-400">
            {skill.level}
          </span>
        </div>

        {/* Level bar */}
        <div className="w-full h-1.5 bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
          <div
            className={`h-full rounded-full ${levelInfo.color} transition-all duration-500`}
            style={{ width: levelInfo.width }}
          />
        </div>
      </div>
    </motion.div>
  )
}
