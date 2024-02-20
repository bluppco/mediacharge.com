// IMPORTS REACT
import { useState, useEffect } from "react"

// IMPORTS COMPONENTS
import HeaderMobile from "@/components/common/header/mobile-header/index.jsx"

// IMPORTS ATOMS
import SecondaryButton from "@/atoms/button/primary/jsx/index.jsx"
import Link from "@/atoms/link/jsx/index.jsx"

// IMPORTS HEADER COLLECTION
import { getCollection } from "astro:content"

let header_data = await getCollection("header")
header_data = header_data.sort((a, b) => a.data.order - b.data.order)

const Header = ( props ) => {

    const { top_fixed } = props

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
            <header className={` ${ top_fixed ? "top-0" : "top-10" } ${ isScrolled ? "shadow-2xl border-b border-gray-50" : "" } h-16 hidden md:flex items-center fixed z-[100] w-full bg-white `}>
                <nav className="flex items-center justify-between h-full w-full container max-w-8xl mx-auto">
                    <section className="flex items-center gap-12">
                        <div className="w-32 aspect-[3/1]">
                            <Link href="/" aria-label="logo">
                                <img
                                    src="/logo/header-logo.svg"
                                    alt=""
                                    className="w-32 aspect-[3/1] object-contain"
                                />
                            </Link>
                        </div>
                        <div className="flex gap-10 items-center">
                            <ul className="flex">
                                {

                                    header_data.map( ( item, index ) => {

                                        return (
                                            <li key={ index } className="font-graphik_medium text-sm flex items-center gap-1 group cursor-pointer py-6 px-3">
                                                <a href={ "/" + item.data.slug } aria-label={"explore " + item.data.title }>{ item.data.title }</a>
                                                {

                                                    item.data.has_dropdown &&
                                                    <div>
                                                        <img
                                                            src="/icons/dropdown.svg"
                                                            className="w-5 h-5"
                                                            alt="dropdown menu icon"
                                                        />
                                                        <div className="hidden group-hover:block group-hover:flex-col absolute bg-white left-0 z-20 top-16 w-full gap-2 transition-all duration-1000 ease-in">
                                                            {

                                                                item.data.slug === "services" &&

                                                                <div className="grid grid-cols-4 gap-x-10 gap-y-14 px-10 pt-16 pb-12">
                                                                {

                                                                    item.data.items.map( ( sub_item, sub_item_index ) => {

                                                                        return(
                                                                            <div key={ sub_item_index } className="p-5 rounded hover:bg-blue-50/50">
                                                                                <Link href={ "/" + item.data.slug + "/" + sub_item.slug } aria_label={ "explore" + sub_item.title }>
                                                                                    <div className="space-y-4">
                                                                                        <div className="flex gap-4">
                                                                                            <div>
                                                                                                <img
                                                                                                    src={ "/icons/" + sub_item.src }
                                                                                                    className="w-6 h-6"
                                                                                                    alt=""
                                                                                                />
                                                                                            </div>
                                                                                            <p className="font-graphik_medium capitalize tracking-wide">{ sub_item.title }</p>
                                                                                        </div>
                                                                                        <p className="text-xs font-graphik text-mc_dark_gray">{ sub_item.description }</p>
                                                                                    </div>
                                                                                </Link>
                                                                            </div>
                                                                        )

                                                                    })

                                                                }
                                                            </div>

                                                            }
                                                            {

                                                                item.data.slug === "industries" &&

                                                                <section className="grid grid-cols-2 gap-10 pt-16 pb-4">
                                                                    <div className="pl-10 space-y-6">
                                                                        <p className="font-graphik_medium text-2xl text-mc_black">Industries</p>
                                                                        <div className="grid grid-cols-2 gap-4">
                                                                            {

                                                                                item.data.items.map( ( sub_item, sub_item_index ) => {

                                                                                    return(
                                                                                        <div key={ sub_item_index } className="p-2 rounded hover:bg-zinc-50">
                                                                                            <Link href={ "/" + item.data.slug + "/" + sub_item.slug } aria_label={ "explore" + sub_item.title }>
                                                                                                <div className="flex gap-4">
                                                                                                    <div>
                                                                                                        <img
                                                                                                            src={ "/icons/" + sub_item.src }
                                                                                                            className="w-6 h-6"
                                                                                                            alt=""
                                                                                                        />
                                                                                                    </div>
                                                                                                    <p className="text-sm font-graphik_medium capitalize tracking-wide">{ sub_item.title }</p>
                                                                                                </div>
                                                                                            </Link>
                                                                                        </div>
                                                                                    )

                                                                                })

                                                                            }
                                                                        </div>
                                                                    </div>
                                                                    <div className="pt-6">
                                                                        <p className="font-graphik_medium text-2xl text-mc_black">Recent Publications</p>
                                                                        <div className="pt-6">
                                                                            <Link href="/publications/navigating-financial-prudence-a-new-lens-for-marketing-strategies" aria_label="explore financial prudence">
                                                                                <div className="grid grid-cols-3 gap-4 border border-zinc-200 rounded-md p-6">
                                                                                    <div className="w-full h-full bg-zinc-200">
                                                                                        <img
                                                                                            src="/images/financial-prudence.png"
                                                                                            alt=""
                                                                                            className="w-full h-full object-cover"
                                                                                        />
                                                                                    </div>
                                                                                    <div className="col-span-2 space-y-2">
                                                                                        <p className="font-graphik_medium text-sm text-mc_black">Navigating Financial Prudence: A New Lens for Marketing Strategies</p>
                                                                                        <p className="text-light font-merriweather text-sm text-mc_black leading-relaxed">In the dynamic realm of business, the first response to financial crunches often revolves around slashing marketing budgets. However, this reflex may not always</p>
                                                                                    </div>
                                                                                </div>
                                                                            </Link>
                                                                            <Link href="/publications/chatgpt-market-share" aria_label="explore chatgpt">
                                                                                <div className="grid grid-cols-3 gap-4 border border-zinc-200 rounded-md p-6 mt-3">
                                                                                    <div className="w-full h-full bg-zinc-200">
                                                                                        <img
                                                                                            src="/images/chatgpt.jpg"
                                                                                            alt=""
                                                                                            className="w-full h-full object-cover"
                                                                                        />
                                                                                    </div>
                                                                                    <div className="col-span-2 space-y-2">
                                                                                        <p className="font-graphik_medium text-sm text-mc_black">ChatGPT and Bing Market Share jumps up to 7%</p>
                                                                                        <p className="text-light font-merriweather text-sm text-mc_black leading-relaxed">Bing and ChatGPT - surpass a significant 7% market share in global search queries, a unique opportunity is unfolding for advertisers.</p>
                                                                                    </div>
                                                                                </div>
                                                                            </Link>
                                                                        </div>
                                                                    </div>
                                                                </section>

                                                            }
                                                            <div className="bg-mc_light_pink py-6">
                                                                <Link href="/career">
                                                                    <p className="text-mc_orange font-graphik text-center text-sm">Looking for a new career? Get in touch</p>
                                                                </Link>
                                                            </div>
                                                        </div>
                                                    </div>

                                                }
                                            </li>
                                        )

                                    })

                                }
                            </ul>
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
