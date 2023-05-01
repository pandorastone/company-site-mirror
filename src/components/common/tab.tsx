import { useState } from "react"

interface TabProps {
  list: {
    title: string,
    content: React.ReactNode
  }[]
}

export default function Tab({ list }: TabProps) {
  const [current, setCurrent] = useState(0)

  return (
    <div className="w-[1200px] max-w-full m-auto px-4 py-4 md:py-16 text-center">
      <div className="relative flex capitalize m-auto">
        {list.map((i, idx) => (<span className="cursor-pointer px-10 py-4 text-lg md:hover:shadow-md transition-all flex-1" key={i.title} onClick={() => setCurrent(idx)}>{i.title}</span>))}
        <div style={{left: `${current / list.length * 100}%`, width: `${1 / list.length * 100}%`}} className={`absolute bottom-0  h-1 bg-gray-400 transition-all`}></div>
      </div>
      <div className="py-4">
        {list[current].content}
      </div>
    </div>
  )
}