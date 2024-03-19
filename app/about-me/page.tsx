import { FcGlobe, FcBusinessContact } from 'react-icons/fc';
import { IoLanguage } from 'react-icons/io5';

const AboutMePage = () => {
  return (
    <div className="wrapper">
      <div className="about">
        <div className="about__title">About me</div>
        <div className="about__content">
          <p>
            Hi! My name is Julia Rodrigues, and I am a Frontend Developer with
            over 3 years of experience. I graduated during the 2020 pandemic,
            which is when I began my work experience as well.
          </p>
          <p>
            My main focus is JavaScript-driven technologies like React, but
            I&apos;ve also worked as a Full Stack Developer a few times. I can
            handle and learn whatever is needed of me.
          </p>
          <p>
            I particularly enjoy working in community-based workplaces. I find
            the knowledge that other developers have to share so valuable,
            specially with the years of experience they carry. Working in such
            places has helped me grow much faster, as knowledge is everywhere,
            and people are happy to see everyone improve.
          </p>
          <p>
            I perform well in both small and large teams. I like to develop
            friendships with my co-workers whenever possible, as it fosters
            better team connections.
          </p>
          <p>
            I adapt quickly to new workplaces and workflows, as many of my
            former leads have pointed out. I am a quick learner, specially when
            provided with good leadership, clear directions and a good team.
          </p>
          <p>
            I tend to get nervous during interviews or first-time meetings, but
            with time, you&apos;ll see that it tends to fade. As I become more
            comfortable and confident, you&apos;ll find that I am a well-spoken,
            good communicator. I have led many meetings directly with customers
            in the past.
          </p>
          <p>
            I am patient with non-technical people when explaining something
            outside of their knowledge. At a previous job, this was a daily
            task. I ensure people are following along, and if not, I&apos;ll
            explain as many times as needed and am not bothered by it.
          </p>
          <p>Hopefully you&apos;ll like what you see! :)</p>

          <p>
            <IoLanguage /> Languages I speak: Portuguese and English
          </p>

          <p>
            <FcGlobe /> Located at: Guarapuava, Paraná, Brazil
          </p>
          <p>
            <FcBusinessContact /> Email: nimmulabs@gmail.com
          </p>
        </div>
      </div>

      <div className="about">
        <div className="about__title">THINGS I ENJOY</div>
        <div className="about__content">
          <p>
            Music, cats (all animals really but cats are kings), cooking, the
            gym, swimming, drawing, painting, being out in nature, movies, TV
            shows, inline skating, going out with friends, gardening, planning
            events for my friends, rainy days, the winter, video games, make-up,
            wigs and colorful hair.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutMePage;
