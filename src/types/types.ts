interface ObjectIdName {
    id:string;
    name:string;
}

export interface SourceObject {
    author: string;
    content: string;
    description: string;
    publishedAt: string;
    source: ObjectIdName;
    title:string;
    url:string;
    urlToImage:string;
}

export enum Status {
    ok = "ok",
    error = "error",
}