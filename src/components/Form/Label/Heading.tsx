import { ComponentProps } from 'react'

export type RootProps = ComponentProps<'span'>

export function Heading(props: RootProps) {
  return <span {...props} />
}
