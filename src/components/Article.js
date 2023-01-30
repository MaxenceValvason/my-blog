const Article = (props) => {
  return (
    <div className="content">
      <h2 className="padding">{props.title}</h2>
      <h3 className="padding">{props.subtitle}</h3>
      <div className={"padding"}>
        <img className="picture" src={props.picture} alt="" />
      </div>
      <p className="padding">{props.description}</p>
    </div>
  );
};

export default Article;
// title
// subtitle
// picture
// desc
