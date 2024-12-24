export const ProjectCard = ({
  title,
  description,
  date,
  imgUrl,
  additionalInfo,
  onClick,
}) => {
  return (
    <div className="proj-imgbx" onClick={onClick}>
      <img src={imgUrl} alt={title} />
      <div className="proj-txtx">
        <h4>{title}</h4>
        <p>{description}</p>
        <br></br>
        <p>{date}</p>
      </div>
    </div>
  );
};
