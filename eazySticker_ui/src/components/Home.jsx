import PageHeading from './PageHeading';
import ProductListings from './ProductListings';
import products from "../data/products";    

export default function Home () {
    return (
        <div className="home-container">
            <PageHeading title="Explore Eazy Stickers!">
                Add a touch of creativity to your space with our wide range of fun
                and unique stickers. From quirky designs to inspirational quotes, we have something for everyone.
                Browse our collection and find the perfect sticker to express your personality and style.
            </PageHeading>
            <ProductListings products={products} />
        </div>
    );
}