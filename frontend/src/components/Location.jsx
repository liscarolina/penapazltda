function Location({ id, title, address, hours, number, cel, children }) {
  return (
    <div className="location__container" id={id}>
      <div className="location__info">
        <h1 className="location__title">{title}</h1>
        <h2 className="location__adress">{address}</h2>
        <h2 className="location__hours">{hours}</h2>
        <h2 className="location__tel">{number}</h2>
        <h2 className="location__cel">{cel}</h2>
      </div>
      <div className="location__map">{children}</div>
    </div>
  );
}

export default Location;
