import style from "./index.module.scss";

export const ProductCard = ({ product, addProduct }) => {
    return(
        <li className={style.card__li}>
            <div className={style.card__imgContainer}>
            <img className={style.card__img} src={product.img} alt={product.name} />
            </div>
            <div className={style.card__div}>
                <h3 className="heading3">{product.name}</h3>
                <span className="headline">{product.category}</span>
                <span className={style.price}>{product.price.toLocaleString('pt-BR', { style: "currency", currency: "BRL"})}</span>
                <button onClick={() => addProduct(product)} className="button__default">Adicionar</button>
            </div>
        </li>
    )
}