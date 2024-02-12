const SecondaryButton = ( props ) => {

    return(
        <button className="bg-mc_red h-12 px-4 text-white -skew-x-6 rounded font-graphik_medium cursor-pointer">
            { props.children }
        </button>
    )

}

export default SecondaryButton
