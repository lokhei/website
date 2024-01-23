import React from 'react';
import { useNavigate } from "react-router-dom";
import { useParams} from 'react-router-dom';
import { projectsList } from "./ProjectInfo";


const findProjectById = (projectId) => {
    return projectsList.find((project) => project.projectId === projectId);
};

  
export const About = () => {
  const { projectId } = useParams();
  const foundProject = findProjectById(projectId);
  const navigate = useNavigate();
  var bullet = true;

  const description = foundProject['description'];
  if (typeof description === "string"){
    bullet = false;
  }
  return (
      <div className='projectDetail'>
        <button onClick={() => navigate(-1)} className='backButton'></button>
        <h2>{foundProject['title']}</h2>
        <img src={foundProject['imgUrl']} />
        {foundProject['job_title'] && (
          <h3>{foundProject['job_title']}</h3> 
        )}
        <div className='dates'>{foundProject['date']}</div>
        {bullet ? (
          <ul>
          {foundProject['description'].map((point, index) => (
            <li key={index}>{point}</li>
          ))}
        </ul>
        ) : (
          <div>{foundProject['description']}</div>
        )}
        {foundProject['code'] && (
          <a href={foundProject['code']} className="code-link" target="_blank">
             <button className="codeButton">Code</button>
          </a>
        )}
      </div>
  );
};




