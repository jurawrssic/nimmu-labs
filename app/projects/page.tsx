import tennisCourtBookingApp from '@/public/images/tennis-court-booking-app.jpeg';
import swimmerTrackerApp from '@/public/images/swimmer-tracker-app.jpeg';

import ProjectDetails from '@/app/projects/component/ProjectDetails';

const projects = [
  {
    id: 'project-01',
    imgSrc: tennisCourtBookingApp,
    imgAlt: 'Screenshot of a project for booking tenis courts.',
    projectTitle: 'Tennis Court Booking',
    projectDescription: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
    efficitur gravida metus, ut molestie nisl placerat vel. Vestibulum
    faucibus est in ex malesuada, et consequat purus bibendum. Curabitur
    luctus faucibus magna et dictum. Morbi pulvinar rhoncus magna non
    blandit. Nunc est augue, molestie sit amet lacus sodales, porttitor
    pellentesque sem. Curabitur venenatis dolor ut neque laoreet luctus.
    Praesent laoreet leo nec eros molestie faucibus et vitae ipsum.`,
    githubRepoLink: 'https://github.com/jurawrssic/tennis-court-booking',
    liveDemoLink: 'https://tennis-court-booking-two.vercel.app/',
  },
  {
    id: 'project-02',
    imgSrc: swimmerTrackerApp,
    imgAlt: 'Screenshot of a project for tracking swimming laps/progress.',
    projectTitle: 'Swimmer Tracker',
    projectDescription: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
    efficitur gravida metus, ut molestie nisl placerat vel. Vestibulum
    faucibus est in ex malesuada, et consequat purus bibendum. Curabitur
    luctus faucibus magna et dictum. Morbi pulvinar rhoncus magna non
    blandit. Nunc est augue, molestie sit amet lacus sodales, porttitor
    pellentesque sem. Curabitur venenatis dolor ut neque laoreet luctus.
    Praesent laoreet leo nec eros molestie faucibus et vitae ipsum.`,
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
