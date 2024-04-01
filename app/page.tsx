'use client';
import { useEffect, useState } from 'react';

import { fairyDustCursor } from 'cursor-effects';
import SparklesComponent from '@/components/Sparkles';

import { FaSortDown } from 'react-icons/fa';
import { PiDownloadSimpleBold } from 'react-icons/pi';

import Link from 'next/link';

const Homepage = () => {
  const [openDropdown, setOpenDropdown] = useState(false);

  useEffect(() => {
    fairyDustCursor({
      colors: ['#f582ae', '#7bdff2', '#a077c9'],
    });
  });

  return (
    <div className="home">
      <div className="home__description">
        <p>[DISCLAIMER] This portfolio is still under progress.</p>
        <h1>JULIA RODRIGUES</h1>
        <p>Front-end Developer</p>
      </div>

      <div className="home__actions">
        <Link href="/contact">
          <button>
            <SparklesComponent>Hire me</SparklesComponent>
          </button>
        </Link>

        <div className="dropdown">
          <button onClick={() => setOpenDropdown(!openDropdown)}>
            <span>
              Get my CV <FaSortDown />
            </span>
          </button>

          <div
            className={`dropdown__content ${openDropdown ? 'open' : 'closed'}`}
          >
            <a
              href="documents/Resume-Julia-Rodrigues-EN.pdf"
              download="Resume-Julia-Rodrigues-EN.pdf"
            >
              English <PiDownloadSimpleBold />
            </a>
            <a
              href="documents/Resume-Julia-Rodrigues-PTbr.pdf"
              download="Resume-Julia-Rodrigues-PTbr.pdf"
            >
              Portuguese <PiDownloadSimpleBold />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
