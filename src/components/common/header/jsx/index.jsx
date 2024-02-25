// IMPORTS COMPONENTS
import HeaderMobile from "@/components/common/header/mobile-header/index.jsx"
import UnorderedList from "@/components/common/header/unordered-list/index.jsx"

// IMPORTS ATOMS
import Link from "@/atoms/link/jsx/index.jsx"
import PictureInternalContain from "@/atoms/picture/internal/jsx/contain/index.jsx"
import SecondaryButton from "@/atoms/button/primary/jsx/index.jsx"

// IMPORTS REACT
import { useState, useEffect } from "react"

// IMPORTS HEADER COLLECTION
import { getCollection } from "astro:content"

let header_data = await getCollection("header")
header_data = header_data.sort((a, b) => a.data.order - b.data.order)

const Header = ( props ) => {

    const [ isScrolled, setIsScrolled ] = useState( false )

    useEffect(() => {

        const handleScroll = () => {

          setIsScrolled( window.scrollY > 20 )

        }

        window.addEventListener("scroll", handleScroll)

        return () => window.removeEventListener("scroll", handleScroll)

      }, [])

    return(
        <>
            <header className={` ${ isScrolled ? "shadow-2xl border-b border-gray-50" : "" } h-16 hidden md:flex items-center fixed z-[100] w-full bg-white top-10 `}>
                <nav className="flex items-center justify-between h-full w-full container max-w-8xl mx-auto">
                    <section className="flex items-center gap-12">
                        <Link href="/" aria-label="logo">
                            <div className="w-32 aspect-[3/1]">
                                <PictureInternalContain
                                    alternative_text="header logo"
                                    source="/logo/header-logo.svg"
                                />
                            </div>
                        </Link>
                        <div className="flex gap-10 items-center">
                            <UnorderedList header_data={ header_data } />
                        </div>
                    </section>
                    <section className="flex items-center gap-8 relative z-50">
                        <div>
                            <p className="text-xs text-mc_black">Sales Hotline (worldwide)</p>
                            <p className="font-graphik text-mc_black">+498926200255</p>
                        </div>
                        <div className="flex justify-self-end w-fit">
                            <SecondaryButton>Let's Talk</SecondaryButton>
                        </div>
                    </section>
                </nav>
            </header>
            <HeaderMobile />
        </>
    )

}

export default Header
