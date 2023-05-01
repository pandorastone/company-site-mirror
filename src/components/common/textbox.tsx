interface textBoxProps {
  title: string,
  desc: string
}

export default function TextBox({title, desc}: textBoxProps) {
  return (
    <div className={`w-[1200px] max-w-full m-auto px-4 py-16 text-center`}>
      <div className="mb-8 text-2xl uppercase">{title}</div>
      <div>{desc}</div>
    </div>
  )
}