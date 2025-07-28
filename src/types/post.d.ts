export interface IPost {
    title: string;
    slug: string;
    excerpt: string;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    article: Record<string, any>;
    date: Date;
    image: string;
    category: string;
    like: number;
    dislike: number;
}
