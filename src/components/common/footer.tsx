import { HiOutlineMail, HiOutlinePhone } from "react-icons/hi"
import { AiFillInstagram, AiFillYoutube, AiOutlineTwitter } from "react-icons/ai"
import { Link } from "react-router-dom"
import logo from "../../assets/logo.png"
import { info } from "../../constants/data"

export default function Footer() {
  const list = [
    {
      name: "Collections",
      list: [
        {
          name: "quartz collections",
          link: "collections/quartz"
        },
        {
          name: "porcelain collections",
          link: "collections/porcelain"
        },
        {
          name: "product showcase",
          link: "showcase"
        }
      ]
    },
    {
      name: "Company",
      list: [
        {
          name: "about us",
          link: "about"
        },
        {
          name: "contact us",
          link: "contacts"
        }
      ]
    },
    {
      name: "Services",
      list: [
        {
          name: "warranty",
          link: "warranty"
        },
        {
          name: "maintenance",
          link: "maintenance"
        },
        {
          name: "FAQ",
          link: "faq"
        }
      ]
    }
  ]

  const media = [
    {
      icon: <AiFillYoutube />,
      link: "https://www.youtube.com/channel/UCZvjaCxW2OvxY6y7lVXm2hg"
    },
    {
      icon: <AiFillInstagram />,
      link: "https://www.instagram.com/pandorastoneca/"
    },
    {
      icon: <AiOutlineTwitter />,
      link: "https://twitter.com/pandorastoneca"
    }
  ]

  return (
    <footer className="bg-gray-200">
      <div className="w-[1200px] max-w-full m-auto px-4 py-12 md:py-16">
        <div className="flex gap-8 flex-col-reverse md:flex-row mb-8">
          <div className="basis-[30%]">
            <div className="mb-2"><img src={logo} alt="logo" /></div>
            <div className="mb-2 uppercase">Providing excellent and stylish material for building renovation at affordable prices.</div>
            <div className="flex justify-start items-center gap-2">
              <HiOutlineMail />
              <div>{info.email}</div>
            </div>
            <div className="mb-2 flex justify-start items-center gap-2">
              <HiOutlinePhone />
              <div>{info.phone}</div>
            </div>
            <div className="flex justify-start items-center gap-2">
              {media.map(i => (
                <a key={i.link} href={i.link} target="_blank">{i.icon}</a>
              ))}
            </div>
          </div>
          <div className="basis-[70%] grid md:grid-cols-3 gap-4">
            {list.map(i => (
              <div key={i.name}>
                <h1 className="mb-2 text-xl">{i.name}</h1>
                <div>{i.list.map(i => (
                  <div key={i.name} className="capitalize mb-2 last:mb-0">
                    <Link to={i.link}>{i.name}</Link>
                  </div>))}</div>
              </div>
            ))}
          </div>
        </div>
        <p>Copyright © 2023 Pandora Stone. All rights reserved.</p>
      </div>
    </footer>
  )
}