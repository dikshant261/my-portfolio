import React from 'react'
import type { Experience as ExperienceType } from '../types/portfolio'
import { SectionHeading } from './SectionHeading'
import { ExperienceItem } from './ExperienceItem'

interface ExperienceProps {
  experience: ExperienceType[]
}

export const Experience: React.FC<ExperienceProps> = ({ experience }) => {
  return (
    <section id="experience" className="py-20 md:py-28 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-4xl mx-auto">
        <SectionHeading
          badge="Work History"
          title="Professional Experience"
          subtitle="My professional path delivering robust web solutions, collaborative engineering, and client-focused projects."
        />

        <div className="space-y-8 sm:space-y-10 relative">
          {experience.map((item, index) => (
            <ExperienceItem
              key={`${item.companyName}-${item.startDate}`}
              experience={item}
              index={index}
              isLast={index === experience.length - 1}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
