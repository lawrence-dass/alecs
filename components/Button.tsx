import clsx from 'clsx'

const Button = ({
  children,
  as: Component = 'button',
  className,
  ...rest
}: {
  children: React.ReactNode
  as?: React.ElementType
  className?: string
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [key: string]: any
}) => {
  return (
    <Component
      className={clsx([
        'bg-gray-200 text-white hover:opacity-80 dark:bg-primary-600',
        '!text-black hover:!text-black dark:!text-white dark:hover:!text-white',
        'transition-colors duration-150',
        'text-sm font-medium leading-5',
        'inline rounded-lg px-4 py-2',
        'inline-flex items-center gap-1 no-underline',
        '-ml-2 text-sm font-semibold text-gray-600 dark:text-gray-300',
        className,
      ])}
      {...rest}
    >
      {children}
    </Component>
  )
}

export default Button
