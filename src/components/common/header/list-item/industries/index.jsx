// IMPORTS ATOMS
import Link from "@/atoms/link/jsx/index.jsx"
import PictureInternal from "@/atoms/picture/internal/jsx/index.jsx"
import PictureInternalContain from "@/atoms/picture/internal/jsx/contain/index.jsx"

const Industries = ( props ) => {

    const { item } = props

    return(
        <div>
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
                                                    <div className="w-6 aspect-square">
                                                        <PictureInternalContain
                                                            alternative_text={ sub_item.title }
                                                            source={ "/icons/" + sub_item.src }
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
                                        <PictureInternal
                                            alternative_text="financial prudence"
                                            source="/images/financial-prudence-cover.jpg"
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
                                        <PictureInternal
                                            alternative_text="chatgpt"
                                            source="/images/chatgpt.jpg"
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
        </div>
    )

}

export default Industries
