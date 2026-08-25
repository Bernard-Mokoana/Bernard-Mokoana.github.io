import type { ButtonProps } from "../types/types"

export const Button = ({ text, href, className, id }: ButtonProps) => {
  return (
    <a 
    onClick={(e) => {
      if (href !== "#counter") return

      const target = document.getElementById('counter')
      if (!target) return
      e.preventDefault()

      const offset = window.innerHeight * 0.15

      const top = target.getBoundingClientRect().top + window.scrollY - offset

      window.scrollTo({ top, behavior: 'smooth' })
    }}
    id={id} href={href} className={`${className ?? ''} cta-wrapper`}>
        <div className="cta-button group">
        <div className="bg-circle" />
        <p className="text">{text}</p>
        <div className="arrow-wrapper">
            <img src="/images/arrow-down.svg" alt="arrow" />
        </div>
        </div>
    </a>
  )
}
