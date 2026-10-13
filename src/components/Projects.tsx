import React, { useState, useMemo } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import type { Project } from '../types/portfolio'
import { SectionHeading } from './SectionHeading'
import { ProjectCard } from './ProjectCard'
import { ProjectFilter } from './ProjectFilter'

interface ProjectsProps {
  projects: Project[]
}

export const Projects: React.FC<ProjectsProps> = ({ projects }) => {
  const [activeCategory, setActiveCategory] = useState<string>('All')

  // Compute available categories dynamically from project data
  const categories = useMemo(() => {
    const list = new Set<string>()
    projects.forEach(p => {
      if (p.category) list.add(p.category)
    })
    return ['All', ...Array.from(list)]
  }, [projects])

  // Filter projects by active category
  const filteredProjects = useMemo(() => {
    if (activeCategory === 'All') return projects
    return projects.filter(p => p.category === activeCategory)
  }, [projects, activeCategory])

  return (
    <section id="projects" className="py-20 md:py-28 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-6xl mx-auto">
        <SectionHeading
          badge="Featured Portfolio"
          title="Recent Projects"
          subtitle="A selection of full stack applications, interactive interfaces, and software architectures I've built."
        />

        {/* Dynamic Category Filtering */}
        {categories.length > 2 && (
          <ProjectFilter
            categories={categories}
            activeCategory={activeCategory}
            onSelectCategory={setActiveCategory}
          />
        )}

        {/* Projects Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 lg:gap-10"
        >
          <AnimatePresence>
            {filteredProjects.map((project, index) => (
              <ProjectCard
                key={`${project.projectName}-${index}`}
                project={project}
                index={index}
              />
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  )
}
