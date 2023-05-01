import { useState } from "react"
import { menuItem, menuItemList } from "../../types/interfaces"

interface accordionProps {
  title: string
  children: React.ReactNode
}

export default function Accordion({ title, children }: accordionProps) {
  const [expanded, setExpanded] = useState(false)
  const toggleExpanded = () => setExpanded((current) => !current)

  return (
    <div onClick={toggleExpanded}>
      <div className="uppercase select-none cursor-pointer">
        {title}
      </div>
      <div className={`overflow-hidden transition-all duration-500 ${expanded ? "max-h-[1000px]" : "max-h-0"}`}>
        <div className="pt-4 pb-2 border-b border-black">{children}</div>
      </div>
    </div>
  )
}