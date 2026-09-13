import { useLoaderData } from 'react-router-dom';
import PageHeading from './PageHeading';
import ProductListings from './ProductListings';

export default function Home () {
    const products = useLoaderData();

    return (
        <div className="max-w-6xl mx-auto px-6 py-8">
            <PageHeading title="Explore Eazy Stickers!">
                Add a touch of creativity to your space with our wide range of fun
                and unique stickers. From quirky designs to inspirational quotes, we have something for everyone.
                Browse our collection and find the perfect sticker to express your personality and style.
            </PageHeading>
            <ProductListings products={products} />
        </div>
    );
}
