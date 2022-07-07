import News from './news/news';
import Sources from './sources/sources';
import { NewsClass, SourcesClass, ArticlesObject, SourcesData, NewsObject, SourceObject } from '../../types/types';
import Categories from './categories/categories';

export class AppView {
    news: NewsClass;
    sources: SourcesClass;
    categories: SourcesClass;

    constructor() {
        this.news = new News();
        this.sources = new Sources();
        this.categories = new Categories();
    }

    public drawNews(data: Readonly<ArticlesObject>) {
        let values: NewsObject[] = [];
        if (data.articles) {
            values = data.articles;
        }
        this.news.draw(values);
    }

    public drawSources(data: Readonly<SourcesData>) {
        let values: SourceObject[] = [];
        if (data.sources) {
            values = data.sources;
        }
        this.sources.draw(values);
    }

    public drawCategories(data: Readonly<SourcesData>) {
        let values: SourceObject[] = [];
        if (data.sources) {
            values = data.sources;
        }
        this.categories.draw(values);
    }
}

export default AppView;
