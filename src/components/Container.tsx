function Container({ children }: { children: JSX.Element[] }) {
  return (
    <div className="bg-primary h-full text-bodyColor pb-5 px-5">
      { children }
    </div>
  )
}

export default Container
