import Link from 'next/link';

const Homepage = () => {
  return (
    <div className="home">
      <div className="home__description">
        <p>[DISCLAIMER] This portfolio is still under progress.</p>
        <h1>JULIA RODRIGUES</h1>
        <p>Front-end Developer</p>
      </div>

      <div className="home__actions">
        <Link href="/contact">
          <button>Hire me</button>
        </Link>

        <a
          href="documents/Resume-Julia-Rodrigues-EN.pdf"
          download="Resume-Julia-Rodrigues-EN.pdf"
        >
          <button>Get my CV</button>
        </a>
      </div>
    </div>
  );
};

export default Homepage;
