import { ChevronDown } from 'lucide-react'
import Link from 'next/link'
import { ElementType } from 'react'
import { twMerge } from 'tailwind-merge'

interface NavItemProps {
  title: string
  icon: ElementType
}

export function NavItem({ title, icon: Icon }: NavItemProps) {
  return (
    <Link
      href=""
      className={twMerge(
        'group flex items-center gap-3 rounded px-3 py-2',
        'outline-none hover:bg-violet-50 focus:border dark:hover:bg-zinc-800',
        'focus-visible:border-violet-300 focus-visible:ring-2 focus-visible:ring-violet-100 ',
        'dark:focus-within:border-violet-500 dark:focus-within:ring-violet-500/20',
      )}
    >
      <Icon className="h-5 w-5 text-zinc-500 dark:text-zinc-600" />
      <span className="font-medium text-zinc-700 group-hover:text-violet-500 dark:text-zinc-100 dark:group-hover:text-violet-300">
        {title}
      </span>
      <ChevronDown className="ml-auto h-5 w-5 text-zinc-400 group-hover:text-violet-300 dark:text-zinc-600" />
    </Link>
  )
}
