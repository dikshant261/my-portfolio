import React, { useEffect, useState } from 'react'

export const SignatureVisual: React.FC = () => {
  const [mousePosition, setMousePosition] = useState({ x: -1000, y: -1000 })

  useEffect(() => {
    // Check if user prefers reduced motion
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)')
    if (mediaQuery.matches) return

    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener('mousemove', handleMouseMove, { passive: true })
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  return (
    <div className="pointer-events-none fixed inset-0 z-30 overflow-hidden transition-opacity duration-500">
      {/* Interactive cursor glow light */}
      <div
        className="absolute w-[600px] h-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-0 lg:opacity-100 transition-opacity duration-300"
        style={{
          left: `${mousePosition.x}px`,
          top: `${mousePosition.y}px`,
          background:
            'radial-gradient(circle, rgba(99, 102, 241, 0.07) 0%, rgba(139, 92, 246, 0.03) 35%, transparent 70%)',
        }}
      />

      {/* Ambient background soft gradient orbs (fixed) */}
      <div className="absolute top-0 right-1/4 -z-10 w-[500px] h-[500px] rounded-full bg-gradient-to-br from-indigo-500/10 to-purple-500/5 blur-[120px] dark:from-indigo-600/15 dark:to-purple-900/10" />
      <div className="absolute top-1/3 left-[-100px] -z-10 w-[450px] h-[450px] rounded-full bg-gradient-to-tr from-cyan-500/8 to-blue-500/5 blur-[130px] dark:from-cyan-500/10 dark:to-blue-900/10" />
      <div className="absolute bottom-1/4 right-[-100px] -z-10 w-[550px] h-[550px] rounded-full bg-gradient-to-tl from-indigo-500/8 to-fuchsia-500/5 blur-[140px] dark:from-indigo-900/15 dark:to-fuchsia-950/10" />
    </div>
  )
}
