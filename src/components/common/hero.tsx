interface HeroProps {
  // title?: string
  children: React.ReactNode
  img?: string
  isFullScreen?: boolean,
  isBackdrop?: boolean
}

export default function Hero({children, img, isFullScreen, isBackdrop}: HeroProps) {
  return (
    <div style={{}} className={`${isFullScreen ? "h-[90vh]": "h-[40vh]"} relative flex justify-center items-center bg-center bg-no-repeat bg-cover`}>
      <img src={`${img ? img : "https://djvisualsbuilder.com/wp-content/uploads/2018/09/Rectangle-1920x1080-Placeholder.png"}`} alt="hero-image" className={`absolute top-0 left-0 bottom-0 right-0 w-full h-full object-cover z-[-1] ${isBackdrop ? "brightness-75" : null}`}/>
      <div className="text-3xl uppercase text-white text-center mx-4">{children}</div>
    </div>
  )
}