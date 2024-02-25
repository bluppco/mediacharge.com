// IMPORTS ATOMS
import Link from "@/atoms/link/jsx/index.jsx"
import PictureInternalContain from "@/atoms/picture/internal/jsx/contain/index.jsx"

const Services = ( props ) => {

    const { item } = props

    return(
        <div>
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
                                                <div className="w-6 aspect-square">
                                                    <PictureInternalContain
                                                        alternative_text={ sub_item.title }
                                                        source={ "/icons/" + sub_item.src }
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
        </div>
    )

}

export default Services
