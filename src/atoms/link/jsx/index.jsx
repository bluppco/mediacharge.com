const Link = ( props ) => {

    // PROPS
    const {

        aria_label,
        href

    } = props

    return(
        <a href={ href } aria-label={ aria_label } className="block">
            { props.children }
        </a>
    )

}

export default Link
