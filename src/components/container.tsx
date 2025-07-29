interface Props {
  children: React.ReactNode
  width?: 'xl' | 'md'
}

export default function Container({ children, width = 'xl' }: Props) {
  return (
    <main
      className={`container flex-grow pt-8 mx-auto px-2.5 md:px-6 xl:px-0 ${
        width === 'md' ? 'max-w-5xl' : 'max-w-7xl'
      }`}
    >
      {children}
    </main>
  )
}
