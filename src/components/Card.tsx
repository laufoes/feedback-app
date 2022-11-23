interface CardProps {
    children: JSX.Element[] | JSX.Element,
    reverse?: boolean
}

function Card({ children, reverse = false }: CardProps) {
  return (
    <div className={`box ${ reverse ? 'bg-white' : 'bg-bgHeader'} rounded-2xl border-none px-6 py-10 my-10 relative text-2xl font-semibold ${ reverse ? 'text-primary' : 'text-white'} w-5/6 m-auto md:px-12 lg:w-full`}>
      { children }
    </div>
  )
}

export default Card