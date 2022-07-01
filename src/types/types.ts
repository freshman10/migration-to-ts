interface ObjectIdName {
    id: string;
    name: string;
}

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

export interface ApiKeyObject {
    apiKey?: string;
}

export interface GetRespObject {
    endpoint: string;
    options?: OptionsObj;
}

export interface OptionsObj {
    [prop: string]: string;
}
