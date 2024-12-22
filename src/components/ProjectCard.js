export const ProjectCard = ({ title, description, date, imgUrl, onClick }) => {
  return (
    <div className="proj-imgbx" onClick={onClick}>
      <img src={imgUrl} alt={title} />
      <div className="proj-txtx">
        <h4>{title}</h4>
        <p>{description}</p>
        <p>{date}</p>
      </div>
    </div>
  );
};
