'use client'
import { MoonIcon, SunIcon } from 'lucide-react'
import { Button } from './Button'
import { useEffect, useState } from 'react'

export default function ButtonTheme() {
  const [theme, setTheme] = useState<string | null>(null)

  useEffect(() => {
    document.documentElement.classList.contains('dark')
      ? setTheme('dark')
      : setTheme(null)
  }, [])

  function toogleTheme() {
    document.documentElement.classList.toggle('dark')
    if (document.documentElement.classList.contains('dark')) {
      setTheme('dark')
    } else {
      setTheme('')
    }
  }
  return (
    <Button variant="outline" className="h-9 w-9 p-2" onClick={toogleTheme}>
      {theme === 'dark' ? <SunIcon size={16} /> : <MoonIcon size={16} />}
    </Button>
  )
}
