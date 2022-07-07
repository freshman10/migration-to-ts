import Loader from './loader';
import { apiURL, apiKey } from '../../constants/appLink';

class AppLoader extends Loader {
    constructor() {
        super(apiURL, {
            apiKey: apiKey,
        });
    }
}

export default AppLoader;
