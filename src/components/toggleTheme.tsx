'use client'
import { useState, useEffect } from 'react'
import { Skeleton } from '@heroui/skeleton'
import { useTheme } from 'next-themes'
import { Sun, Moon } from 'lucide-react'

export default function ToggleTheme() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  const isSelected = theme === 'light'
  const onChange = () => {
    theme === 'light' ? setTheme('dark') : setTheme('light')
  }

  useEffect(() => setMounted(true), [])

  if (!mounted) {
    return (
      <div className="grid place-items-center cursor-pointer leading-none rounded-full group">
        <Skeleton className="size-6 rounded-full" />
      </div>
    )
  }

  return (
    <label
      htmlFor="theme-switch"
      className="grid place-items-center cursor-pointer leading-none rounded-full"
    >
      <input
        type="checkbox"
        className="hidden"
        id="theme-switch"
        checked={isSelected}
        onChange={onChange}
        aria-label="Toggle dark mode"
      />
      <div className="col-span-1 row-span-1 group">
        {!isSelected ? (
          <Sun className="text-gray-400 group-hover:text-white group-hover:scale-[103%] transition-colors duration-200 animate-fade-in animate-duration-100" />
        ) : (
          <Moon className="text-gray-700 group-hover:text-black group-hover:scale-[103%] transition-colors duration-100 animate-fade-in animate-duration-100" />
        )}
      </div>
    </label>
  )
}
