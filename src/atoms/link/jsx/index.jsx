const Link = ( props ) => {

    const { href, aria_label } = props

    return(
        <div>
            <a href={ href } aria-label={ aria_label }>
                { props.children }
            </a>
        </div>
    )

}

export default Link
