import { client } from "../../lib/apollo";
import { getProductById } from "../../lib/queries";

export default async function handleRevalidate(req, res) {
    console.log(req.body.post.post_status);

    if (req.body.post.post_status === "publish" || req.body.post.post_status === "trash") {
        const { data } = await client.query({
            query: getProductById(req.body.post_id),
        });

        await res.revalidate(`/product/${data.post.slug}`);
        await res.revalidate(`/`);

        if (data.post) {
            console.log("success");
        }
    }

    console.log("revalidated");
    res.status(200).json({});
}
