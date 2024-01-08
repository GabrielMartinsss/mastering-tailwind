import { ComponentProps } from 'react'
import { VariantProps, tv } from 'tailwind-variants'

const label = tv({
  base: 'text-sm font-medium text-zinc-700',

  variants: {
    variant: {
      primary: '',
      mobile: 'lg:sr-only',
    },
  },

  defaultVariants: {
    variant: 'primary',
  },
})

export type RootProps = ComponentProps<'label'> & VariantProps<typeof label>

export function Root({ variant, className, ...props }: RootProps) {
  return <label className={label({ variant, className })} {...props} />
}
