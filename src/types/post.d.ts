export interface IPost {
    title: string;
    slug: string;
    excerpt: string;
    article: string[];
    date: Date;
    image: string;
    category: string;
    like: number;
    dislike: number;
}
