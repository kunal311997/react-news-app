import Header from './Header'
import HomeContent from './HomeContent'
import { useState } from 'react'


export default function Home() {
    const [openNav, setOpenNav] = useState(false)

    const onToggleChange = () => {
        console.log("open toggle")
        setOpenNav(!openNav)
    }

    return (
        <div>
            <Header onToggleChange={onToggleChange} />
            <HomeContent openNav={openNav} />
        </div>

    )
}