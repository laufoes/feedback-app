import { ReactNode } from 'react'

function PageContainer({ children }: { children: JSX.Element[] | JSX.Element | ReactNode}) {
  return (
    <div className="bg-primary h-full w-full overflow-x-hidden text-bodyColor text-xl font-normal pb-10">
      { children }
    </div>
  )
}

export default PageContainer