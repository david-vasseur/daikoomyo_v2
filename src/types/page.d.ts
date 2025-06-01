export default interface IContent {
    subName: string;
    id: string;
    name: string;
    image: string;
    priceName: string;
    subTitle: string[];
    alt: string;
    options: string[];
    infos: {
        title: string;
        value: string;
    }[];
    benefits: {
        icon: string;
        title: string;
        description: string;
    }[];
    prices: {
        name: string;
        price: number;
        duration: string;
        popular?: boolean;
        features: string[]
    }[];
}