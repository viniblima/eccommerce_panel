import axios from "axios";
import Config from "../config/config";

const httpPost = async (address: string, body: any) => {
    const response = await axios.post(
        `${Config.baseAPi}${address}`,
        body
    );

    return response;
}

const httpGet = async (address: string) => {
    const response = await axios.get(
        `${Config.baseAPi}${address}`
    );

    return response;
}
export {httpPost, httpGet}