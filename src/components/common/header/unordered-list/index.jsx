// IMPORTS COMPONENTS
import Industries from "@/components/common/header/list-item/industries/index.jsx"
import Services from "@/components/common/header/list-item/services/index.jsx"

// IMPORTS ATOMS
import Link from "@/atoms/link/jsx/index.jsx"
import PictureInternalContain from "@/atoms/picture/internal/jsx/contain/index.jsx"

const UnorderedList = ( props ) => {

    const { header_data } = props

    return(
        <ul className="flex">
            {

                header_data.map( ( item, index ) => {

                    return (
                        <li key={ index } className="font-graphik_medium text-sm flex items-center gap-1 group cursor-pointer py-6 px-3">
                            <a href={ "/" + item.data.slug } aria-label={"explore " + item.data.title }>{ item.data.title }</a>
                            {

                                item.data.has_dropdown &&
                                <div>
                                    <div className="w-5 aspect-square">
                                        <PictureInternalContain
                                            alternative_text="dropdown menu icon"
                                            source="/icons/dropdown.svg"
                                        />
                                    </div>
                                    <div className="hidden group-hover:block group-hover:flex-col absolute bg-white left-0 z-20 top-16 w-full gap-2 transition-all duration-1000 ease-in">
                                        <Services item={ item } />
                                        <Industries item={ item } />
                                        <div className="bg-mc_light_pink py-6">
                                            <Link href="/career" aria_label="career">
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
)

}

export default UnorderedList
