import Image from 'next/image'
import { motion } from 'framer-motion'

import img from '@/../public/tabs-img.png'

export function EmptyTab() {
  return (
    <motion.div
      layoutId="activeTabContent"
      className="mt-4 flex flex-col items-center justify-center gap-2"
    >
      <div className="space-y-1 text-center">
        <h2 className="text-lg font-medium text-zinc-900 dark:text-zinc-100">
          Nothing here!
        </h2>
        <span className="text-sm text-zinc-500 dark:text-zinc-400">
          It is just an example.
        </span>
      </div>

      <Image
        src={img}
        alt="tab img"
        width={300}
        height={300}
        className="h-48 w-48 drop-shadow-md lg:h-64 lg:w-64"
      />
    </motion.div>
  )
}
