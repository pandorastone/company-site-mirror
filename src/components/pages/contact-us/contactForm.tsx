import { useState } from "react"

export default function ContactForm() {
  const [form, setForm] = useState({
    subject: "",
    email: "",
    message: ""
  })

  function formSubmit(e: React.FormEvent) {
    e.preventDefault()
    window.location.href =`mailto:pandorastoneinc@gmail.com?&subject=${form.subject}&body=${form.message}`
  }

  return (
      <form className="flex flex-col gap-2" onSubmit={formSubmit}>
        <label htmlFor="subject">Subject</label>
        <input required type="text" name="subject" className="border border-gray-300 rounded p-1" value={form.subject} onChange={e => { setForm(prev => ({ ...prev, subject: e.target.value })) }} />
        <label htmlFor="email">Email</label>
        <input required type="email" name="email" className="border border-gray-300 rounded p-1" value={form.email} onChange={e => { setForm(prev => ({ ...prev, email: e.target.value })) }} />
        <label htmlFor="message">Message</label>
        <textarea name="message" className="border border-gray-300 rounded p-1" value={form.message} onChange={e => { setForm(prev => ({ ...prev, message: e.target.value })) }} />
        <button type="submit" className="bg-gray-600 p-2 rounded hover:bg-gray-500 text-white uppercase transition-[background-color]">send message</button>
      </form>
  )
}