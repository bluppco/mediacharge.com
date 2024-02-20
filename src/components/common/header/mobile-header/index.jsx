// IMPORTS FRAMER MOTION
import { motion, AnimatePresence } from "framer-motion"

// IMPORTS REACT
import { useState } from "react"

// IMPORTS COMPONENTS
import ListItem from "@/atoms/header/mobile/list-item/index.jsx"

// IMPORTS ATOMS
import Link from "@/atoms/link/jsx/index.jsx"
import PictureInternalContain from "@/atoms/picture/internal/jsx/contain/index.jsx"

const HeaderMobile = ( props ) => {

    const [ isOpen, updateOpen ] = useState( false )

    return (
        <header className="md:hidden bg-white px-4 z-[100] py-4 border-b border-gray-100">
            <div className="flex justify-between items-center relative">
                <Link href="/" aria_label="">
                    <div className="w-24 aspect-[5/2]">
                        <PictureInternalContain
                            alt=""
                            src="/logo/header-logo.svg"
                        />
                    </div>
                </Link>
                <div className="flex items-center gap-6">
                    <div>
                        <p className="text-xs text-mc_black">Sales Hotline (worldwide)</p>
                        <p className="text-sm font-graphik text-mc_black text-right">+498926200255</p>
                    </div>
                    <div onClick={ () => updateOpen( !isOpen ) }>
                        {

                            isOpen &&
                            <div className="w-6 aspect-square">
                                <PictureInternalContain
                                    alt=""
                                    src="/icons/close.svg"
                                />
                            </div>

                        }
                        {

                            !isOpen &&
                            <div className="w-5 aspect-square">
                                <PictureInternalContain
                                    alt=""
                                    src="/icons/menu.svg"
                                />
                            </div>

                        }
                    </div>
                </div>
            </div>
            <AnimatePresence initial={false}>
                {

                    <motion.div
                        key="content"
                        initial="collapsed"
                        animate={ isOpen ? "open" : "collapsed" }
                        exit="collapsed"
                        variants={{
                            open: { opacity: 1, height: "100vh" },
                            collapsed: { opacity: 0, height: "0px" }
                        }}
                        transition={{ duration: 0.3 }}
                        className="grow"
                    >
                        <div className={`flex flex-col gap-1 items-center justify-center h-full relative ${ isOpen ? "z-[100]" : "hidden"}`}>
                            <ul className="flex flex-col justify-center items-center gap-8">
                                <ListItem>Services</ListItem>
                                <ListItem>Industries</ListItem>
                                <ListItem>Publications</ListItem>
                                <ListItem href="/">Home</ListItem>
                                <ListItem href="/about-us">About Us</ListItem>
                            </ul>
                        </div>
                    </motion.div>

                }
            </AnimatePresence>
        </header>
    )

}

export default HeaderMobile
