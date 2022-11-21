import { ReactNode } from 'react'

interface ButtonProps {
    children: ReactNode,
    version?: string,
    type?: 'submit' | 'reset' | 'button',
    disabled?: boolean
}

function Button({ children, version = 'primary',type = 'button', disabled = false }: ButtonProps) {

  return (
    <button className={`text-white border-none rounded-xl w-28 h-10 cursor-pointer text-xl ${ version === `primary` ? 'bg-primary' : 'bg-secondary'} ${disabled ? 'bg-disabled text-cardColor' : ''}`} >
      { children }
    </button>
  )
}

export default Button
