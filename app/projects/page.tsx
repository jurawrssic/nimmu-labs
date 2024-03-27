import tennisCourtBookingApp from '@/public/images/tennis-court-booking-app.jpeg';
import swimmerTrackerApp from '@/public/images/swimmer-tracker-app.jpeg';

import Image from 'next/image';

const ProjectsPage = () => {
  return (
    <div className="about projects-page wrapper">
      <div className="about__title">Projects</div>
      <a
        className="projects-page__project"
        href="https://tennis-court-booking-two.vercel.app/"
        target="_blank"
      >
        <div className="project__details">
          <h2>Tennis Court Booking</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
            efficitur gravida metus, ut molestie nisl placerat vel. Vestibulum
            faucibus est in ex malesuada, et consequat purus bibendum. Curabitur
            luctus faucibus magna et dictum. Morbi pulvinar rhoncus magna non
            blandit. Nunc est augue, molestie sit amet lacus sodales, porttitor
            pellentesque sem. Curabitur venenatis dolor ut neque laoreet luctus.
            Praesent laoreet leo nec eros molestie faucibus et vitae ipsum.
          </p>
        </div>

        <Image
          src={tennisCourtBookingApp}
          alt="Screenshot of a project for booking tenis courts."
          className="project__image"
        />
      </a>

      <a
        className="projects-page__project"
        href="https://swimmer-tracker.vercel.app/"
        target="_blank"
      >
        <div className="project__details">
          <h2>Swimmer Tracker</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
            efficitur gravida metus, ut molestie nisl placerat vel. Vestibulum
            faucibus est in ex malesuada, et consequat purus bibendum. Curabitur
            luctus faucibus magna et dictum. Morbi pulvinar rhoncus magna non
            blandit. Nunc est augue, molestie sit amet lacus sodales, porttitor
            pellentesque sem. Curabitur venenatis dolor ut neque laoreet luctus.
            Praesent laoreet leo nec eros molestie faucibus et vitae ipsum.
          </p>
        </div>

        <Image
          src={swimmerTrackerApp}
          alt="Screenshot of a project for tracking swimming laps/progress"
          className="project__image"
        />
      </a>
    </div>
  );
};

export default ProjectsPage;
