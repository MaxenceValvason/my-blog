const Info = (props) => {
  return (
    <div className="sideContent">
      <h2 className="sideTitle">{props.title}</h2>
      <div>
        <img className="pictureSide" src={props.picture} alt="" />
      </div>
      <p className="descSide">{props.description}</p>
    </div>
  );
};

export default Info;
//   titre
//   picture
//   desc
