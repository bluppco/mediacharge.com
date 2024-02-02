export const endpointFetch = ( environment ) => {

    return environment === "staging" ? "https://staging.mediacharge.api.blupp.co" : "https://mediacharge.api.blupp.co"

}
