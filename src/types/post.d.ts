export interface IPost {
    title: string;
    slug: string;
    excerpt: string;
    article: Record<string, any>;
    date: Date;
    image: string;
    category: string;
    like: number;
    dislike: number;
}
