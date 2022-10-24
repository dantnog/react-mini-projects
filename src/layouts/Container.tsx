import { ReactNode } from "react"

type ContainerProps = {
  name: string
  children: ReactNode
}

export default function Container({ name, children }: ContainerProps) {
  return (
    <section className="max-w-3xl mx-auto px-2 md:px-0">
      <h1 className="text-5xl mt-2 mb-6 text-green-500 font-semibold text-center">
        { name }
      </h1>
      { children }
    </section>
  )
}