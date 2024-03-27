'use client';
import { useEffect } from 'react';

import { fairyDustCursor } from 'cursor-effects';
import SparklesComponent from '@/components/Sparkles';

import Link from 'next/link';

const Homepage = () => {
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
