import { ReactNode } from 'react'

function PageContainer({ children }: { children: JSX.Element[] | JSX.Element | ReactNode}) {
  return (
    <div className="bg-primary h-screen text-bodyColor text-xl font-normal pb-5">
      { children }
    </div>
  )
}

export default PageContainer