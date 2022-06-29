import Head from "next/head";
import { client } from "../../lib/apollo";
import { getProduct, getProducts } from "../../lib/queries";

export default function SingleProduct({ product }) {
    return (
        <>
            <Head>
                <title>{product.seo.title}</title>
            </Head>
            <div>
                <h1>{product.title}</h1>
                <img src={product.product.image.sourceUrl} alt="" />
                <h2>{product.product.price} euros</h2>
                <h3>{product.product.subtitle}</h3>
                <p>{product.product.description}</p>
                <a href="#">Add to cart</a>
            </div>
        </>
    );
}

export async function getStaticProps({ params }) {
    try {
        const props = {};

        await client.resetStore();

        const { data: productData } = await client.query({
            query: getProduct(params.slug),
        });

        props["product"] = productData.post;

        return {
            props,
        };
    } catch (err) {
        return { notFound: true };
    }
}

export async function getStaticPaths() {
    const { data: productsData } = await client.query({
        query: getProducts,
    });

    const paths = productsData.posts.edges.map((product) => {
        return { params: { slug: `${product.node.slug}` } };
    });

    return {
        paths,
        fallback: "blocking", // goes to 404 if not valid
    };
}
