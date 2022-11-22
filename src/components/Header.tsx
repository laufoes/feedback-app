import React from 'react'

interface HeaderProps {
    title?: string
}

function Header ({ title = 'Feedback UI' }: HeaderProps) {
    return (
        <header className="box w-full h-20 mb-7 bg-bgHeader flex justify-center items-center">
            <h1 className="text-2xl text-secondary font-bold tracking-wide leading-5">{title}</h1>
        </header>
    )
}

export default Header
