import React from 'react'
import {
  Code2,
  Database,
  Server,
  Boxes,
  FileCode,
  Layout,
  GitBranch,
  Container,
  Zap
} from 'lucide-react'

interface SkillIconProps {
  name: string
  iconName: string
  className?: string
}

export const SkillIcon: React.FC<SkillIconProps> = ({ name, iconName, className = 'w-6 h-6' }) => {
  const normalized = (iconName || name).toLowerCase()

  if (normalized.includes('react')) {
    return (
      <svg className={className} viewBox="-11.5 -10.23174 23 20.46348" fill="#06B6D4">
        <circle cx="0" cy="0" r="2.05" fill="#06B6D4" />
        <g stroke="#06B6D4" strokeWidth="1" fill="none">
          <ellipse rx="11" ry="4.2" />
          <ellipse rx="11" ry="4.2" transform="rotate(60)" />
          <ellipse rx="11" ry="4.2" transform="rotate(120)" />
        </g>
      </svg>
    )
  }

  if (normalized.includes('typescript') || normalized === 'ts') {
    return (
      <svg className={className} viewBox="0 0 128 128">
        <path fill="#3178C6" d="M1.5 63.5C1.5 28.5 28.5 1.5 63.5 1.5s62 27 62 62-27 62-62 62-62-27-62-62z" />
        <path fill="#fff" d="M38.5 48.5h48v12h-18v44h-12v-44h-18v-12zm48 24c4-2 9-3 14-3 12 0 18 6 18 15 0 9-6 15-18 15-5 0-10-1-14-3v-10c4 2 8 3 12 3 6 0 9-3 9-6s-3-6-9-6c-4 0-8-1-12-3v-5z" />
      </svg>
    )
  }

  if (normalized.includes('javascript') || normalized === 'js') {
    return (
      <svg className={className} viewBox="0 0 128 128">
        <path fill="#F7DF1E" d="M1.5 63.5C1.5 28.5 28.5 1.5 63.5 1.5s62 27 62 62-27 62-62 62-62-27-62-62z" />
        <path fill="#000" d="M38 95c0-11 5-18 16-18 4 0 7 1 10 3l-3 9c-2-1-4-2-7-2-5 0-7 3-7 8v16H38V95zm35-18h11v23c0 5 3 7 7 7s7-2 7-7V77h11v23c0 12-8 17-18 17s-18-5-18-17V77z" />
      </svg>
    )
  }

  if (normalized.includes('tailwind')) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="#38BDF8">
        <path d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.336 6.182 14.975 4.8 12.001 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624 1.177 1.194 2.538 2.576 5.512 2.576 3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.336 13.382 8.975 12 6.001 12z" />
      </svg>
    )
  }

  if (normalized.includes('node')) {
    return (
      <svg className={className} viewBox="0 0 32 32" fill="#22C55E">
        <path d="M16 2.5L3.5 9.7v14.6L16 31.5l12.5-7.2V9.7L16 2.5zm0 3.3l9.6 5.5v11.4L16 28.2 6.4 22.7V11.3L16 5.8z" />
      </svg>
    )
  }

  if (normalized.includes('express')) {
    return <Server className={`${className} text-slate-700 dark:text-slate-300`} />
  }

  if (normalized.includes('mongo')) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="#10B981">
        <path d="M12 1.5C11.5 3 7 8 7 14c0 4 2.5 7.5 5 8.5 2.5-1 5-4.5 5-8.5 0-6-4.5-11-5-12.5z" />
      </svg>
    )
  }

  if (normalized.includes('postgres') || normalized.includes('sql')) {
    return <Database className={`${className} text-sky-500`} />
  }

  if (normalized.includes('prisma')) {
    return <Boxes className={`${className} text-indigo-500`} />
  }

  if (normalized.includes('docker')) {
    return <Container className={`${className} text-blue-500`} />
  }

  if (normalized.includes('git')) {
    return <GitBranch className={`${className} text-orange-500`} />
  }

  if (normalized.includes('postman') || normalized.includes('api')) {
    return <Zap className={`${className} text-amber-500`} />
  }

  if (normalized.includes('html')) {
    return <FileCode className={`${className} text-orange-600`} />
  }

  if (normalized.includes('css')) {
    return <Layout className={`${className} text-blue-600`} />
  }

  return <Code2 className={`${className} text-indigo-500`} />
}
