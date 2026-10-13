import React, { useState, useMemo } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown, ChevronUp, ExternalLink, Sparkles } from 'lucide-react'
import type { Project } from '../types/portfolio'
import { GithubIcon } from './SocialIcons'

const WORD_LIMIT = 18

interface ProjectCardProps {
  project: Project
  index: number
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, index }) => {
  const [isExpanded, setIsExpanded] = useState(false)

  const words = useMemo(() => {
    return (project.description || '').trim().split(/\s+/).filter(Boolean)
  }, [project.description])

  const canTruncate = words.length > WORD_LIMIT

  const firstPart = useMemo(() => {
    if (!canTruncate) return project.description
    return words.slice(0, WORD_LIMIT).join(' ')
  }, [words, canTruncate, project.description])

  const remainingPart = useMemo(() => {
    if (!canTruncate) return ''
    return words.slice(WORD_LIMIT).join(' ')
  }, [words, canTruncate])

  const collapsedFirstPart = useMemo(() => {
    if (!canTruncate) return project.description
    return firstPart.replace(/[,;.\s]+$/, '')
  }, [firstPart, canTruncate, project.description])

  return (
    <motion.article
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      whileHover={{ y: -6, transition: { duration: 0.25 } }}
      onMouseLeave={() => setIsExpanded(false)}
      className="group flex flex-col rounded-2xl bg-white dark:bg-slate-900/90 border border-slate-200/80 dark:border-slate-800/80 overflow-hidden shadow-sm hover:shadow-2xl hover:shadow-indigo-500/10 transition-all duration-300"
    >
      {/* Project Image Container */}
      <div className="relative aspect-video w-full overflow-hidden bg-slate-900">
        <img
          src={project.image}
          alt={project.projectName}
          loading="lazy"
          className="w-full h-full object-cover object-top transition duration-500 ease-out group-hover:scale-105"
        />

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />

        {/* Featured Tag & Category */}
        <div className="absolute top-3 inset-x-3 flex items-center justify-between gap-2 pointer-events-none">
          {project.category && (
            <span className="px-2.5 py-1 rounded-lg text-[11px] font-semibold bg-slate-900/80 text-white backdrop-blur-md border border-white/10 shadow-sm">
              {project.category}
            </span>
          )}

          {project.featured && (
            <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg text-[11px] font-semibold bg-amber-500/90 text-white backdrop-blur-md shadow-sm">
              <Sparkles className="w-3 h-3" />
              <span>Featured</span>
            </span>
          )}
        </div>
      </div>

      {/* Project Details */}
      <div className="flex flex-col flex-grow p-6 sm:p-7">
        <h3 className="text-xl font-bold text-slate-900 dark:text-white tracking-tight group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
          {project.projectName}
        </h3>

        {/* Project Description with Smooth Animated Expand/Collapse */}
        <motion.div
          layout
          transition={{ duration: 0.35, ease: [0.25, 0.1, 0.25, 1.0] }}
          className="mt-2.5 flex-grow"
        >
          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300/90 leading-relaxed">
            {!canTruncate ? (
              <span>{project.description}</span>
            ) : (
              <>
                <span>{isExpanded ? firstPart : collapsedFirstPart}</span>
                {!isExpanded && <span>... </span>}
                <AnimatePresence initial={false}>
                  {isExpanded && (
                    <motion.span
                      initial={{ opacity: 0, filter: 'blur(3px)' }}
                      animate={{ opacity: 1, filter: 'blur(0px)' }}
                      exit={{ opacity: 0, filter: 'blur(3px)' }}
                      transition={{ duration: 0.25, ease: 'easeOut' }}
                    >
                      {' ' + remainingPart}{' '}
                    </motion.span>
                  )}
                </AnimatePresence>
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation()
                    setIsExpanded(prev => !prev)
                  }}
                  className="inline-flex items-center gap-0.5 ml-1.5 font-semibold text-xs sm:text-sm text-indigo-600 hover:text-indigo-500 dark:text-indigo-400 dark:hover:text-indigo-300 transition-colors cursor-pointer select-none focus:outline-none hover:underline align-baseline"
                  aria-expanded={isExpanded}
                  aria-label={
                    isExpanded
                      ? `Show less description for ${project.projectName}`
                      : `Read more description for ${project.projectName}`
                  }
                >
                  <span>{isExpanded ? 'Read less' : 'Read more'}</span>
                  {isExpanded ? (
                    <ChevronUp className="w-3.5 h-3.5" />
                  ) : (
                    <ChevronDown className="w-3.5 h-3.5" />
                  )}
                </button>
              </>
            )}
          </p>
        </motion.div>

        {/* Technologies Used */}
        <motion.div layout className="mt-5 flex flex-wrap items-center gap-1.5">
          {project.technologies.map(tech => (
            <span
              key={tech}
              className="px-2.5 py-1 rounded-lg text-xs font-mono font-medium bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200/60 dark:border-slate-700/60"
            >
              {tech}
            </span>
          ))}
        </motion.div>

        {/* Action Links */}
        <motion.div layout className="mt-6 pt-5 border-t border-slate-100 dark:border-slate-800/80 flex items-center gap-3">
          {project.projectLink && (
            <a
              href={project.projectLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-sm font-semibold text-white bg-indigo-600 hover:bg-indigo-700 shadow-sm shadow-indigo-600/20 transition-all duration-200 active:scale-95"
              aria-label={`View live demo for ${project.projectName}`}
            >
              <span>Live Demo</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          )}

          {project.githubLink && (
            <a
              href={project.githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-sm font-semibold text-slate-700 dark:text-slate-200 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700/80 transition-all duration-200 active:scale-95"
              aria-label={`View source code for ${project.projectName} on GitHub`}
            >
              <GithubIcon className="w-4 h-4" />
              <span>Source</span>
            </a>
          )}
        </motion.div>
      </div>
    </motion.article>
  )
}
