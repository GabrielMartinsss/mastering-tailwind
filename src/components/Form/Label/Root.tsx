import { ComponentProps } from 'react'

export type RootProps = ComponentProps<'label'>

export function Root(props: RootProps) {
  return <label {...props} className="text-sm font-medium text-zinc-700" />
}
