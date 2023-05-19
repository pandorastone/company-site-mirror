import { useState } from "react"
import { send } from "@emailjs/browser"
import { TiTick } from "react-icons/ti"
import { RxCross2 } from "react-icons/rx"

export default function ContactForm() {
  const [form, setForm] = useState({
    subject: "",
    email: "",
    message: ""
  })
  const [isSent, setIsSent] = useState(0)

  function formSubmit(e: React.FormEvent) {
    e.preventDefault()
    send(import.meta.env.VITE_EMAIL_SERVICE_KEY, import.meta.env.VITE_EMAIL_TEMPLATE_KEY, {
      from_name: form.email,
      subject: form.subject,
      message: form.message
    }, import.meta.env.VITE_EMAIL_PUBLIC_KEY).then(
       (res) => {
        setIsSent(res.status)
    }, (err) => {
      setIsSent(err.status)
    });
  }

  return (
    <form className="flex flex-col gap-2" onSubmit={formSubmit}>
      <label htmlFor="subject">Subject</label>
      <input required type="text" name="subject" className="border border-gray-300 rounded p-1" value={form.subject} onChange={e => { setForm(prev => ({ ...prev, subject: e.target.value })) }} />
      <label htmlFor="email">Email</label>
      <input required type="email" name="email" className="border border-gray-300 rounded p-1" value={form.email} onChange={e => { setForm(prev => ({ ...prev, email: e.target.value })) }} />
      <label htmlFor="message">Message</label>
      <textarea required name="message" className="border border-gray-300 rounded p-1" value={form.message} onChange={e => { setForm(prev => ({ ...prev, message: e.target.value })) }} />
      <button type="submit" className="bg-gray-600 p-2 rounded hover:bg-gray-500 text-white uppercase transition-[background-color]">send message</button>
      {isSent === 200 ? (<div className="flex justify-start items-start gap-2">
        <TiTick size={25}/>
        <p>Your message has been sent! We will look into it as soon as possible.</p>
      </div>) : null}
      {isSent === 400 ? (<div className="flex justify-start items-start gap-2">
        <RxCross2 size={25}/>
        <p>Error! Message cannot be sent. Please try again later.</p>
      </div>) : null}
    </form>
  )
}