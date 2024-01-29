// IMPORTS FRAMER MOTION
import { motion, AnimatePresence } from "framer-motion"

// IMPORTS REACT
import { useState } from "react"

// IMPORTS COMPONENTS
import HeaderMobileItem from "./li/index"

const HeaderMobile = ( props ) => {

    const [ isOpen, updateOpen ] = useState( false )

    return (
        <header className="md:hidden bg-white px-6 h-14 py-3 z-20 w-full">
            <div className="flex justify-between items-center z-20">
                <a href="/">
                    <div className="w-24 aspect-[5/2]">
                        <img
                            src="/logo/header-logo.svg"
                            alt=""
                            className="w-full h-full"
                        />
                    </div>
                </a>
                <div className="flex items-center gap-4">
                    <div>
                        <p className="text-xs text-mc_slate font-graphik">Sales Hotline (worldwide)</p>
                        <p className="text-sm text-mc_slate font-graphik">+4908926200255</p>
                    </div>
                    <div onClick={ () => updateOpen( !isOpen ) }>
                        {

                            isOpen &&
                            <img
                                src="/icons/close.svg"
                                className="w-6 aspect-square"
                            />

                        }
                        {

                            !isOpen &&
                            <img
                                src="/icons/menu.svg"
                                className="w-5 aspect-square"
                            />

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
                        <div className="flex flex-col gap-1 items-center justify-center h-full z-10">
                            <ul className="flex flex-col justify-center items-center gap-8">
                                <HeaderMobileItem href="/">Services</HeaderMobileItem>
                                <HeaderMobileItem href="/">Industries</HeaderMobileItem>
                                <HeaderMobileItem href="/">Publications</HeaderMobileItem>
                                <HeaderMobileItem href="/">Home</HeaderMobileItem>
                                <HeaderMobileItem href="/">About Us</HeaderMobileItem>
                            </ul>
                        </div>
                    </motion.div>

                }
            </AnimatePresence>
        </header>
    )

}

export default HeaderMobile
