import { endpointFetch } from "../../functions/endpoint"

export const homeAPI = async ( environment ) => {

    const endpoint = endpointFetch( environment )

    // NETWORK CALL TO GET DATA
    const network_data = await fetch( endpoint + "/home" )
    const data_json = await network_data.json()

    const { home, services, clients, meta } = data_json.data

    let home_data = {

        // HOME PROPS
        hero : "",
        clients : "",
        about : "",
        work_with_us : "",
        services : ""

    }
    home.map( ( data ) => {

        if( data.slug === "hero" )
            home_data.hero = data
        else if( data.slug === "clients" )
            home_data.clients = data
        else if ( data.slug === "about" )
            home_data.about = data
        else if ( data.slug === "work-with-us" )
            home_data.work_with_us = data
        else if ( data.slug === "services" )
            home_data.services = data

    })

    return { home_data, services, clients, meta }

}
