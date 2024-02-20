const ListItem = ( props ) => {

    const { href, aria_label } = props

    return(
        <li className="uppercase font-graphik tracking-wider">
            <a href={ href } aria_label={ aria_label }>
                { props.children }
            </a>
        </li>
    )

}

export default ListItem
