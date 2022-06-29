import Head from "next/head";
import Card from "../components/Card";
import { client } from "../lib/apollo";
import { getPage, getProducts } from "../lib/queries";

export default function HomePage({ page, products }) {
    return (
        <>
            <Head>
                <title>{page.seo.title}</title>
                <meta name="description" content={`${page.seo.metaDesc}`} />
            </Head>
            <div className="home">
                <h1>{page.title}</h1>
            </div>
            <div className="products-grid">
                {products &&
                    products.map((product) => {
                        return <Card key={product.node.id} product={product.node} />;
                    })}
            </div>
        </>
    );
}

export async function getStaticProps(context) {
    const props = {};
    await client.resetStore();

    const { data: pageData } = await client.query({
        query: getPage("welcome"),
    });

    props["page"] = pageData.page;

    const { data: productsData } = await client.query({
        query: getProducts,
    });

    props["products"] = productsData.posts.edges;

    return {
        props,
    };
}
