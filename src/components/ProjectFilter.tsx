import React from 'react'

interface ProjectFilterProps {
  categories: string[]
  activeCategory: string
  onSelectCategory: (category: string) => void
}

export const ProjectFilter: React.FC<ProjectFilterProps> = ({
  categories,
  activeCategory,
  onSelectCategory,
}) => {
  return (
    <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
      {categories.map(category => {
        const isSelected = activeCategory === category
        return (
          <button
            key={category}
            type="button"
            onClick={() => onSelectCategory(category)}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer ${
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
  )
}
