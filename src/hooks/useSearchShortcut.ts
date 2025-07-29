import { useEffect, useRef, useState } from 'react'

export function useSearchShortcut() {
  const searchRef = useRef<HTMLInputElement>(null)
  const [isMac, setIsMac] = useState(false)

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      const isMac = /Mac/i.test(navigator.userAgent)
      const isCmdOrCtrl = isMac ? e.metaKey : e.ctrlKey
      setIsMac(isMac)

      if (isCmdOrCtrl && e.key.toLowerCase() === 'k') {
        e.preventDefault()
        searchRef.current?.focus()
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [])

  return { searchRef, isMac }
}
