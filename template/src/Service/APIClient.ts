import axios from "axios";
import Strings from "../util/Strings";

function getBaseUrl() {
    return Strings.Api_endpoints.BASE_URL
}

export async function get(url: string) {
    let finalUrl = getBaseUrl() + url
    return await axios.get(finalUrl)
}

export async function post(url: string, payload = null, headers = undefined) {
    let finalUrl = getBaseUrl() + url

    return await  axios.post(finalUrl, payload, headers)
}