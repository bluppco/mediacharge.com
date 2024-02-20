const PictureInternal = ( props ) => {

    const {

        alternative_text,
        source

    } = props

    return(
        <picture className="w-full h-full">
            <source media="(max-width: 375px)" srcSet={ source } />
            <source media="(max-width: 640px)" srcSet={ source } />
            <img
                src={ source }
                alt={ alternative_text }
                className="w-full h-full object-cover"
            />
        </picture>
    )

}

export default PictureInternal
