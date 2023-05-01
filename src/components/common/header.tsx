import { useState } from "react"
import { Link } from "react-router-dom"
import Accordion from "./accordion"
import { HiMenu, HiX } from "react-icons/hi";
import logo from "../../assets/logo.png"

interface MenuDropdownProps {
    children?: React.ReactNode,
}

const MenuDropdown = function ({ children }: MenuDropdownProps) {
    return (
        <div className="hidden group-hover:block absolute translate-y-6 bg-white shadow p-4">
            {children}
        </div>
    )
}

export default function Header() {
    const menu = [
        {
            name: "about us",
            link: "about"
        },
        {
            name: "collections",
            link: "collections",
            submenu: [
                {
                    name: "quartz collections",
                    link: "collections/quartz",
                },
                {
                    name: "porcelain collections",
                    link: "collections/porcelain",
                }
            ]
        },
        {
            name: "showcase",
            link: "showcase"
        },
        {
            name: "customer service",
            link: "services",
            submenu: [
                {
                    name: "warranty",
                    link: "warranty",
                },
                {
                    name: "maintenance",
                    link: "maintenance",
                },
                {
                    name: "faq",
                    link: "faq"
                }
            ]
        },
        {
            name: "contact us",
            link: "contacts"
        }
    ]
    const [menuOpen, setMenuOpen] = useState(false)

    return (
        <header className="sticky top-0 z-10 shadow bg-white">
            <div className="w-[1200px] max-w-full m-auto px-4 py-4 md:py-0 flex justify-between items-center">
                <Link to="/"><img src={logo} alt="logo" className="h-10" /></Link>
                <nav className="hidden md:block">
                    <div className="flex justify-between items-center gap-4">
                        {menu.map(i => (
                            <div key={i.link} className="group py-6">
                                <Link to={i.link} className="uppercase cursor-pointer"><h1>{i.name}</h1></Link>
                                {i.hasOwnProperty('submenu') ? <MenuDropdown>{i.submenu?.map(i => (<div key={i.name} className="uppercase mb-2"><Link to={i.link}>{i.name}</Link></div>))}</MenuDropdown> : null}
                            </div>
                        ))}
                    </div>
                </nav>
                <nav className="block md:hidden">
                    <HiMenu onClick={() => setMenuOpen(!menuOpen)} />
                    <div className={`fixed top-0 bottom-0 right-0 ${menuOpen ? "left-0" : 'left-full'} transition-all z-15 bg-black bg-opacity-20`} onClick={() => setMenuOpen(!menuOpen)}>
                        <div className={`w-2/3 h-full ml-auto mr-0 bg-white shadow px-4 py-6`} onClick={e => e.stopPropagation()}>
                            <div className="flex justify-end items-center mb-2"><HiX onClick={() => setMenuOpen(!menuOpen)} /></div>
                            <div className="flex flex-col gap-4">{menu.map(i => (i.hasOwnProperty('submenu') ? <Accordion key={i.link} title={i.name}>{i.submenu?.map(i => (<div key={i.name} className="uppercase mb-4 last:mb-0">
                                <Link to={i.link}>{i.name}</Link>
                            </div>))} </Accordion> : <div key={i.name}><Link to={i.link} className="uppercase">{i.name}</Link></div>))}</div>
                        </div>
                    </div>
                </nav>
            </div>
        </header>
    )
}