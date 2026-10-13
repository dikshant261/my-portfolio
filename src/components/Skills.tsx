import React, { useState, useMemo } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import type { Skill } from '../types/portfolio'
import { SectionHeading } from './SectionHeading'
import { SkillCard } from './SkillCard'

interface SkillsProps {
  skills: Skill[]
}

export const Skills: React.FC<SkillsProps> = ({ skills }) => {
  const [activeCategory, setActiveCategory] = useState<string>('All')

  // Dynamically compute available categories from JSON data
  const categories = useMemo(() => {
    const unique = Array.from(new Set(skills.map(s => s.category)))
    return ['All', ...unique]
  }, [skills])

  // Filter skills based on selected category
  const filteredSkills = useMemo(() => {
    if (activeCategory === 'All') return skills
    return skills.filter(s => s.category === activeCategory)
  }, [skills, activeCategory])

  return (
    <section id="skills" className="py-20 md:py-28 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-6xl mx-auto">
        <SectionHeading
          badge="Technical Skills"
          title="Technologies & Tools"
          subtitle="A comprehensive toolkit I leverage to construct robust, high-performance web applications."
        />

        {/* Dynamic Category Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {categories.map(category => {
            const isSelected = activeCategory === category
            return (
              <button
                key={category}
                type="button"
                onClick={() => setActiveCategory(category)}
                className={`relative px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer ${
                  isSelected
                    ? 'text-white bg-indigo-600 shadow-md shadow-indigo-600/25'
                    : 'text-slate-600 dark:text-slate-300 bg-white/80 dark:bg-slate-900/80 hover:bg-slate-100 dark:hover:bg-slate-800 border border-slate-200/80 dark:border-slate-800'
                }`}
              >
                {category}
              </button>
            )
          })}
        </div>

        {/* Dynamic Skills Grid */}
        <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          <AnimatePresence>
            {filteredSkills.map((skill, index) => (
              <SkillCard key={`${skill.category}-${skill.name}`} skill={skill} index={index} />
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  )
}
