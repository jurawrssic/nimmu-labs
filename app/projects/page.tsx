import tennisCourtBookingApp from '@/public/images/tennis-court-booking-app.jpeg';
import swimmerTrackerApp from '@/public/images/swimmer-tracker-app.jpeg';

import ProjectDetails from '@/app/projects/component/ProjectDetails';

const projects = [
  {
    id: 'project-01',
    imgSrc: tennisCourtBookingApp,
    imgAlt: 'Screenshot of a project for booking tenis courts.',
    projectTitle: 'Tennis Court Booking',
    projectDescription: `This is a project that I developed using Next.js, Typescript, Context Api, Shadcn and Tailwind. It is a tool for booking
    a Tennis Court, so it handles all the logic behind an agenda.`,
    githubRepoLink: 'https://github.com/jurawrssic/tennis-court-booking',
    liveDemoLink: 'https://tennis-court-booking-two.vercel.app/',
  },
  {
    id: 'project-02',
    imgSrc: swimmerTrackerApp,
    imgAlt: 'Screenshot of a project for tracking swimming laps/progress.',
    projectTitle: 'Swimmer Tracker',
    projectDescription: `This is my personal project that is still in development. This uses React.js and Javascript, it is still at it's early stages
    of development. I'm a swimmer, so, I wanted to create a tool to keep track of my progress. My goals for this project are to present all kinds of
    data and charts to track how I'm doing and also learn new technologies while doing so.`,
    githubRepoLink: 'https://github.com/jurawrssic/swimmer-tracker',
    liveDemoLink: 'https://swimmer-tracker.vercel.app/',
  },
];

const ProjectsPage = () => {
  return (
    <div className="about projects-page wrapper">
      <div className="about__title">Projects</div>

      {projects.map((project) => (
        <ProjectDetails
          key={project.id}
          imgSrc={project.imgSrc}
          imgAlt={project.imgAlt}
          projectTitle={project.projectTitle}
          projectDescription={project.projectDescription}
          githubRepoLink={project.githubRepoLink}
          liveDemoLink={project.liveDemoLink}
        />
      ))}
    </div>
  );
};

export default ProjectsPage;
