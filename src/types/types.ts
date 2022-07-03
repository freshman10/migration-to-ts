type ObjectIdName = Pick<SourceObject, 'id' | 'name'>;

export type UnionHTMLAndNull = HTMLTemplateElement | null;

export interface NewsObject {
    author: string;
    content: string;
    description: string;
    publishedAt: string;
    source: ObjectIdName;
    title: string;
    url: string;
    urlToImage: string;
}

export interface SourceObject {
    category: string;
    country: string;
    description: string;
    id: string;
    language: string;
    name: string;
    url: string;
}

export enum Status {
    ok = 'ok',
    error = 'error',
}

export interface NewsClass {
    draw(data: NewsObject[]): void;
}

export interface SourcesClass {
    draw(data: SourceObject[]): void;
}

export interface ArticlesObject {
    status: Status;
    totalResults: 3503;
    articles: NewsObject[];
}

export interface SourcesData {
    status: Status;
    sources: SourceObject[];
}

interface ApiKeyObjectUsual {
    apiKey: string;
}

export type ApiKeyObject = Partial<ApiKeyObjectUsual>;

export interface GetRespObject {
    endpoint: string;
    options?: OptionsObj;
}

export interface OptionsObj {
    [prop: string]: string;
}

export interface AppControllerInterface {
    getSources<Data>(callback: (data: Readonly<Data>) => void): void;
    getNews<Data>(e: PointerEvent, callback: (data: Readonly<Data>) => void): void;
}

export interface AppViewInterface {
    news: NewsClass;
    sources: SourcesClass;
    drawNews(data: Readonly<ArticlesObject>): void;
    drawSources(data: Readonly<SourcesData>): void;
    drawCategories(data: Readonly<SourcesData>): void;
}
