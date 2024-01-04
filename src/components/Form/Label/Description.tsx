import { ComponentProps } from 'react'

export type RootProps = ComponentProps<'span'>

export function Description(props: RootProps) {
  return <span {...props} className="mt-0.5 block font-normal text-zinc-500" />
}
