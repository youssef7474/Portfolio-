import React from 'react'
import { Col } from 'react-bootstrap'
import { FaGithub } from "react-icons/fa";
import { GrDeploy } from "react-icons/gr";

const ProjectCard = ({imgUrl,title,description,demoLink,gitHubLink}) => {
    const navigateDemo=()=>{
        window.open(demoLink, '_blank');
    }
    const navigateGithub=()=>{
        window.open(gitHubLink, '_blank');
    }
  return (
    <Col sm={6} md={4}>
        <div className='proj-imgbx'>
            <img src={imgUrl} alt='p' style={{maxWidth:"500px",maxHeight:"200px"}}></img>
            <div className='proj-txtx'>
                <h4>{title}</h4>
                <span>{description}</span>
                <div style={{display:"flex", alignItems:"center",justifyContent:"center",gap:"10px",marginTop:"15px"}}>
                    {
                        demoLink&&(
                            <GrDeploy size={25} style={{cursor:"pointer"}} onClick={navigateDemo}/>
                        )
                    }
                    {
                        gitHubLink&&(
                            <FaGithub style={{cursor:"pointer"}} size={25} onClick={navigateGithub}/>
                        )
                    }
                </div>
            </div>
            
        </div>
    </Col>
  )
}

export default ProjectCard
