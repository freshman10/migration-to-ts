import Loader from './loader';

class AppLoader extends Loader {
    constructor() {
        super('https://newsapi.org/v2/', {
            apiKey: '2e78c10f77944c618cd50562b68377bd', // получите свой ключ https://newsapi.org/
        });
    }
}

export default AppLoader;
