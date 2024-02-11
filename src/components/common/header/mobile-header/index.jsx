// IMPORTS FRAMER MOTION
import { motion, AnimatePresence } from "framer-motion"

// IMPORTS REACT
import { useState } from "react"

// IMPORTS COMPONENTS
import Li from "./li/index"

const HeaderMobile = ( props ) => {

    const [ isOpen, updateOpen ] = useState( false )

    return (
        <header className="md:hidden bg-white px-4 z-[100] py-4 border-b border-gray-100">
            <div className="flex justify-between items-center relative">
                <a href="/">
                    <div className="w-24 aspect-[5/2]">
                        <img
                            src="/logo/header-logo.svg"
                            alt=""
                            className="w-full h-full"
                        />
                    </div>
                </a>
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
                                <Li>Services</Li>
                                <Li>Industries</Li>
                                <Li>Publications</Li>
                                <Li href="/">Home</Li>
                                <Li href="/about-us">About Us</Li>
                            </ul>
                        </div>
                    </motion.div>

                }
            </AnimatePresence>
        </header>
    )

}

export default HeaderMobile
