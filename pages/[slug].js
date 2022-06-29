import Head from "next/head";
import { client } from "../lib/apollo";
import { getPage, getPages } from "../lib/queries";

export default function HomePage({ page }) {
    return (
        <>
            <Head>
                <title>{page.seo.title}</title>
                <meta name="description" content={`${page.seo.metaDesc}`} />
            </Head>
            <div className="home">
                <h1>{page.title}</h1>
            </div>
        </>
    );
}

export async function getStaticProps({ params }) {
    const props = {};

    const { data } = await client.query({
        query: getPage(params.slug),
    });

    props["page"] = data.page;

    return {
        props,
    };
}

export async function getStaticPaths() {
    const { data } = await client.query({
        query: getPages,
    });

    const paths = data.pages.edges.map((page) => {
        return { params: { slug: page.node.slug } };
    });

    return {
        paths: paths,
        fallback: false, // goes to 404 if not valid
    };
}
