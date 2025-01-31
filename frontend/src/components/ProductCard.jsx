function ProductCard({
  img,
  alt,
  name,
  id,
  handleCardClick,
  title,
  items,
  brand,
  info,
}) {
  return (
    <div className="product__container" id={id}>
      <img className="product__image" src={img} alt={alt} />
      <div className="product__description">
        <div className="product__brands">
          <img className="product__brand" src={brand} alt="marca" />
        </div>
        <h1 className="product__name">{name}</h1>
        <p className="product__info">{info}</p>
        <button
          className="product__button"
          onClick={() => handleCardClick(title, items)}
        >
          Ver más
        </button>
      </div>
    </div>
  );
}

export default ProductCard;
