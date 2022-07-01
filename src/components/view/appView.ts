import News from './news/news';
import Sources from './sources/sources';
import { NewsClass, SourcesClass, ArticlesObject, SourcesData, NewsObject, SourceObject } from '../../types/types';

export class AppView {
    private news: NewsClass;
    private sources: SourcesClass;
    constructor() {
        this.news = new News();
        this.sources = new Sources();
    }

    drawNews(data: ArticlesObject) {
        const values: NewsObject[] = data?.articles ? data?.articles : [];
        this.news.draw(values);
    }

    drawSources(data: SourcesData) {
        const values: SourceObject[] = data?.sources ? data?.sources : [];
        this.sources.draw(values);
    }
}

export default AppView;
