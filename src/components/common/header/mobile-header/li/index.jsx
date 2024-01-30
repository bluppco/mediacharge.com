const HeaderMobileItem = ( props ) => {

    const { href } = props

    return(
        <li className="text-lg uppercase">
            <a href={ href }>
                { props.children }
            </a>
        </li>
    )

}

export default HeaderMobileItem
