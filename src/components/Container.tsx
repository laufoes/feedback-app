function Container({ children }: { children: JSX.Element[] | JSX.Element }) {
  return (
    <div className="bg-primary h-screen text-bodyColor pb-5">
      { children }
    </div>
  )
}

export default Container
