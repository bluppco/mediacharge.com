export const endpointFetch = ( environment ) => {

    return environment === "staging" ? "https://staging.api.mediacharge.blupp.co" : "https://mediacharge.api.blupp.co"

}
