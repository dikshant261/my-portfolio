import React from 'react'
import { motion } from 'framer-motion'
import { Layout, Server, Layers, Database, Sparkles } from 'lucide-react'
import type { Service } from '../types/portfolio'
import { SectionHeading } from './SectionHeading'

interface ServicesProps {
  services: Service[]
}

const getServiceIcon = (iconName?: string) => {
  const norm = (iconName || '').toLowerCase()
  if (norm.includes('layout') || norm.includes('front')) {
    return <Layout className="w-6 h-6 text-indigo-500" />
  }
  if (norm.includes('server') || norm.includes('back')) {
    return <Server className="w-6 h-6 text-violet-500" />
  }
  if (norm.includes('layers') || norm.includes('full')) {
    return <Layers className="w-6 h-6 text-cyan-500" />
  }
  if (norm.includes('database') || norm.includes('data')) {
    return <Database className="w-6 h-6 text-emerald-500" />
  }
  return <Sparkles className="w-6 h-6 text-indigo-500" />
}

export const Services: React.FC<ServicesProps> = ({ services }) => {
  return (
    <section id="services" className="py-20 md:py-28 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-6xl mx-auto">
        <SectionHeading
          badge="Specializations"
          title="What I Can Build For You"
          subtitle="Comprehensive engineering solutions tailored to deliver robust digital experiences and business value."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={`${service.title}-${index}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              whileHover={{ y: -6, transition: { duration: 0.2 } }}
              className="group p-6 rounded-2xl bg-white dark:bg-slate-900/90 border border-slate-200/80 dark:border-slate-800/80 shadow-sm hover:shadow-xl hover:shadow-indigo-500/5 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="w-12 h-12 rounded-xl bg-slate-100 dark:bg-slate-800 flex items-center justify-center mb-5 group-hover:scale-110 group-hover:bg-indigo-50 dark:group-hover:bg-indigo-950/40 transition-all duration-300">
                  {getServiceIcon(service.icon)}
                </div>

                <h3 className="text-lg font-bold text-slate-900 dark:text-white tracking-tight group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                  {service.title}
                </h3>

                <p className="mt-2.5 text-sm text-slate-600 dark:text-slate-300/90 leading-relaxed">
                  {service.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100 dark:border-slate-800/80 flex items-center gap-1.5 text-xs font-semibold text-indigo-600 dark:text-indigo-400">
                <span>Production Ready</span>
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
