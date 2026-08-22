import type { ButtonProps } from "../types/types"

export const Button = ({ text, href, className, id }: ButtonProps) => {
  return (
    <a id={id} href={href} className={`${className ?? ''} cta-wrapper`}>
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
