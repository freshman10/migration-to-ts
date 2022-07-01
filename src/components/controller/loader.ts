import { ApiKeyObject, GetRespObject, ResponseObj, OptionsObj } from '../../types/types';

class Loader {
    private baseLink: string;
    private options: ApiKeyObject;
    constructor(baseLink: string, options: ApiKeyObject) {
        this.baseLink = baseLink;
        this.options = options;
    }

    public getResp<Data>(
        { endpoint, options = {} }: GetRespObject,
        callback: (data: Data) => void = () => {
            console.error('No callback for GET response');
        }
    ) {
        this.load('GET', endpoint, callback, options);
    }

    public errorHandler(res: ResponseObj) {
        if (!res.ok) {
            if (res.status === 401 || res.status === 404)
                console.log(`Sorry, but there is ${res.status} error: ${res.statusText}`);
            throw Error(res.statusText);
        }

        return res;
    }

    private makeUrl(options: ApiKeyObject, endpoint: string) {
        const urlOptions: OptionsObj = { ...this.options, ...options };
        let url = `${this.baseLink}${endpoint}?`;

        Object.keys(urlOptions).forEach((key) => {
            url += `${key}=${urlOptions[key]}&`;
        });

        return url.slice(0, -1);
    }

    private load<Data>(method: string, endpoint: string, callback: (data: Data) => void, options: OptionsObj = {}) {
        fetch(this.makeUrl(options, endpoint), { method })
            .then(this.errorHandler)
            .then((res) => res.json())
            .then((data) => callback(data))
            .catch((err) => console.error(err));
    }
}

export default Loader;
