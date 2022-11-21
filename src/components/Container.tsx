function Container({ children }: { children: JSX.Element[] | JSX.Element }) {
  return (
    <div className="bg-primary h-screen text-bodyColor text-xl font-normal pb-5">
      { children }
    </div>
  )
}

export default Container
