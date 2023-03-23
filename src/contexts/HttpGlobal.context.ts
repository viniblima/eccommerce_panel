import axios from "axios";
import Config from "../config/config";

const httpPost = async (address: string, body: any) => {
    const response = await axios.post(
        `${Config.baseAPI}${address}`,
        body,
        {
            withCredentials: false,    
        },
    );

    return response;
}

const httpGet = async (address: string) => {
    const response = await axios.get(
        `${Config.baseAPI}${address}`
    );

    return response;
}
export { httpPost, httpGet }