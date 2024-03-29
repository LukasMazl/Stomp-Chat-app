import GLOBAL_CONST from "../config/GlobalConstant";

class ApiCaller {

    static ORIGIN_URL = GLOBAL_CONST.HTTP_PROTOCOL + GLOBAL_CONST.DOMAIN_NAME;
    static REST_API_PREFIX = "/api/v1";
    static REST_API_ENDPOINT = ApiCaller.ORIGIN_URL + ApiCaller.REST_API_PREFIX;

    static GET_USER_CONTEXT = "/user/context";
    static PREPARE_ROOM = ApiCaller.REST_API_PREFIX + "/room/prepare";
    static GET_LAST_MESSAGES_FROM_ROOM = ApiCaller.REST_API_ENDPOINT + "/room/messages";
    static SEND_MESSAGE_TO_ROOM = ApiCaller.REST_API_ENDPOINT + "/send";

    static getCall(url, data, callback, errorCallback, onResp) {
        let callUrl = url;
        if(data !== null) {
            const keys = Object.keys(data);
            callUrl = callUrl + "?";
            for (let key in keys) {
                callUrl += keys[key] + "=" + data[keys[key]] + "&";
            }
        }
        this.call(callUrl, "GET", null, callback, errorCallback, onResp);
    }

    static call(url, method, data, callback, errorCallback, onResp) {
        let jsonData = (data !== null)? JSON.stringify(data): null;

        let request = {
            method: method,
            headers: {
                'Origin': GLOBAL_CONST.HTTP_PROTOCOL + GLOBAL_CONST.DOMAIN_NAME,
                'Content-Type': 'application/json',
                'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept, Set-cookies, Authorization'
            },
            mode: "cors"
        };

        if(jsonData !== null) {
            request["body"] = jsonData;
        }

        fetch(url, request)
            .then(res => {
                if (onResp !== undefined) {
                    return onResp(res);
                } else {
                    return res.json();
                }
            })
            .then((data) => {
                    callback(data);
            })
            .catch((data) => {
                if (errorCallback !== undefined) {
                    errorCallback(data);
                } else {
                    console.log(data);
                }
            })
    }
}

export default ApiCaller;
