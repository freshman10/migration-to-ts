import AppController from '../controller/controller';
import { AppView } from '../view/appView';
import { AppControllerInterface, AppViewInterface, ArticlesObject, SourcesData } from '../../types/types';

class App {
    private controller: AppControllerInterface;
    private view: AppViewInterface;
    constructor() {
        this.controller = new AppController();
        this.view = new AppView();
    }

    public start() {
        document
            ?.querySelector('.sources')
            ?.addEventListener('click', (e) =>
                this.controller.getNews(e as PointerEvent, (data: ArticlesObject) => this.view.drawNews(data))
            );
        this.controller.getSources((data: SourcesData) => this.view.drawSources(data));
    }
}

export default App;