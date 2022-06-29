export interface SourceObject {
    id: string;
    name: string;
    description: string;
    url: string;
    category: string;
    language: string;
    country: string;
}

export enum Status {
    ok = "ok",
    error = "error",
}