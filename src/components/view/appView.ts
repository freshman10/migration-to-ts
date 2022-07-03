import News from './news/news';
import Sources from './sources/sources';
import { NewsClass, SourcesClass, ArticlesObject, SourcesData, NewsObject } from '../../types/types';
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
        const values: NewsObject[] = data?.articles ? data?.articles : [];
        this.news.draw(values);
    }

    public drawSources(data: Readonly<SourcesData>) {
        const values = data?.sources ? data?.sources : [];
        this.sources.draw(values);
    }

    public drawCategories(data: Readonly<SourcesData>) {
        const values = data?.sources ? data?.sources : [];
        this.categories.draw(values);
    }
}

export default AppView;
