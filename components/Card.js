import Link from "next/link";

export default function Card({ product }) {
    return (
        <div className="card">
            <Link href={"/product/" + product.slug}>
                <img src={product.product.image.mediaItemUrl} alt="" />
            </Link>
            <h2>{product.title}</h2>
            <p>{product.product.price} €</p>
            <p>{product.product.description}</p>
        </div>
    );
}
