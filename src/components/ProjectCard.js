import { Col } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

export const ProjectCard = ({ title, summary, imgUrl, projectId, tags }) => {
  const navigate = useNavigate();

  return (
    <Col size={12} sm={6} md={4}>
      <div className="proj-imgbx">
        <img src={imgUrl} alt={title} />
        <div className="proj-txtx">
          <h4>{title}</h4>
          <span>{summary}</span>
          <div className="tags">
            {tags.map((tag, index) => (
              <span key={index} className="tag">
                {tag}
              </span>
            ))}
          </div>
          <div>
            <button className="moreButton" onClick={() => navigate(`/projects/${projectId}`)}>
              Read More
            </button>
          </div>
        </div>
      </div>
    </Col>
  );
};
