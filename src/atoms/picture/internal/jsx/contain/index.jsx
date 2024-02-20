const PictureInternalContain = ( props ) => {

    const {

        alternative_text,
        source

    } = props

    return(
        <picture className="w-full h-full">
            <source media="(max-width: 375px)" srcset={ source } />
            <source media="(max-width: 640px)" srcset={ source } />
            <img
                src={ source }
                alt={ alternative_text }
                className="w-full h-full object-contain"
            />
        </picture>
    )

}

export default PictureInternalContain
