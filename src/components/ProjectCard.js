import { Col } from "react-bootstrap";
import { useNavigate } from "react-router-dom";


export const ProjectCard = ({ title, description, imgUrl, projectId}) => {
  const navigate = useNavigate();

  return (
    <Col size={12} sm={6} md={4}>
      <div className="proj-imgbx">
        <img src={imgUrl} />
        <div className="proj-txtx">
          <h4>{title}</h4>
          <span>{description}</span>
          <button onClick={() => navigate(`/projects/${projectId}`)}>
            Read More
          </button>
        </div>
      </div>
    </Col>
  )
}
