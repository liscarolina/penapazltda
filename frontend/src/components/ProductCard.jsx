function ProductCard({ img, alt, name, id, handleCardClick, title, items }) {
  return (
    <div className="product__container" id={id}>
      <img
        className="product__image"
        src={img}
        alt={alt}
        onClick={() => handleCardClick(title, items)}
      />
      <h1 className="product__name">{name}</h1>
    </div>
  );
}

export default ProductCard;
