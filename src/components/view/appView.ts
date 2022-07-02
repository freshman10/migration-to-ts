import News from './news/news';
import Sources from './sources/sources';
import { NewsClass, SourcesClass, ArticlesObject, SourcesData, NewsObject } from '../../types/types';

export class AppView {
    news: NewsClass;
    sources: SourcesClass;
    constructor() {
        this.news = new News();
        this.sources = new Sources();
    }

    drawNews(data: Readonly<ArticlesObject>) {
        const values: NewsObject[] = data?.articles ? data?.articles : [];
        this.news.draw(values);
    }

    drawSources(data: Readonly<SourcesData>) {
        const values = data?.sources ? data?.sources : [];
        this.sources.draw(values);
    }
}

export default AppView;
