const contactCard = (props) => {
  return (
    <article className="contact-card">
      <img src={props.img} alt={props.alt} />
      <h3>{props.name}</h3>
      <div className="info-group">
        <img src={props.numIcon} alt={props.numalt} />
        <p>{props.num}</p>
      </div>
      <div className="info-group">
        <img src={props.mailIcon} alt={props.mailalt} />
        <p>{props.mail}</p>
      </div>
    </article>
  );
};

export default contactCard;
