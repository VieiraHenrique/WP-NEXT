export default function Card({ product }) {
    return (
        <div>
            <img src={product.product.image.mediaItemUrl} alt="" />
            <h2>{product.title}</h2>
            <p>{product.product.price} €</p>
            <p>{product.product.description}</p>
        </div>
    );
}
