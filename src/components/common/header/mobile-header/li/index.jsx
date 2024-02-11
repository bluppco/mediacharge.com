const Li = ( props ) => {

    const { href } = props

    return(
        <li className="uppercase font-graphik tracking-wider">
            <a href={ href }>
                { props.children }
            </a>
        </li>
    )

}

export default Li
