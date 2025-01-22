function BannerWithText({ id, text, image, alt }) {
  return (
    <div
      className="banner_container"
      id={id}

      // style={{ backgroundImage: `url(${image})` }}
    >
      <img className="banner__image" src={image} alt={alt} />
      <h3 className="banner__text">{text}</h3>
    </div>
  );
}

export default BannerWithText;
