const PrimaryButton = ( props ) => {

    return(
        <button className="bg-black h-12 px-4 text-white -skew-x-6 rounded font-graphik_medium cursor-pointer">
            { props.children }
        </button>
    )

}

export default PrimaryButton
