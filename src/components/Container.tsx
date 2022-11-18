function Container({ children }: { children: JSX.Element[] }) {
  return (
    <div className="bg-primary h-screen text-bodyColor">
      { children }
    </div>
  )
}

export default Container
