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


  return (
      <div className='projectDetail'>
        <button onClick={() => navigate(-1)} className='backButton'></button>
        <h2>{foundProject['title']}</h2>
        <img src={foundProject['imgUrl']} />
        <div className='dates'>{foundProject['date']}</div>
        <span>{foundProject['description']}</span>
        {foundProject['code'] && ( // only renders if exists
            <button onClick={() => navigate(foundProject['code'])} className='codeButton'>Code</button>
        )}

      </div>
  );
};




