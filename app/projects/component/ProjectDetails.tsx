import Image, { StaticImageData } from 'next/image';

import { RiExternalLinkLine } from 'react-icons/ri';
import { FaGithub } from 'react-icons/fa';

const ProjectDetails = ({
  imgSrc,
  imgAlt,
  projectTitle,
  projectDescription,
  githubRepoLink,
  liveDemoLink,
}: {
  imgSrc: StaticImageData;
  imgAlt: string;
  projectTitle: string;
  projectDescription: string;
  githubRepoLink: string;
  liveDemoLink: string;
}) => {
  return (
    <div className="project">
      <Image src={imgSrc} alt={imgAlt} className="project__image" />

      <div className="project__details">
        <h2>{projectTitle}</h2>
        <p>{projectDescription}</p>

        <div className="project__links">
          <a href={githubRepoLink} target="_blank">
            <FaGithub className="icon" /> Code
          </a>

          <a href={liveDemoLink} target="_blank">
            <RiExternalLinkLine className="icon" /> Live Demo
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;
