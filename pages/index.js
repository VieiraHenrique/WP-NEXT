import Head from "next/head";
import { client } from "../lib/apollo";
import { getPage } from "../lib/queries";

export default function HomePage({ page }) {
    console.log(page);
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

export async function getStaticProps(context) {
    const props = {};

    const { data } = await client.query({
        query: getPage("welcome"),
    });

    props["page"] = data.page;

    return {
        props,
    };
}
