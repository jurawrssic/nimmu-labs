'use client';
import { useEffect, useRef, useState } from 'react';

import { fairyDustCursor } from 'cursor-effects';
import SparklesComponent from '@/components/Sparkles';

import { FaSortDown } from 'react-icons/fa';
import { PiDownloadSimpleBold } from 'react-icons/pi';

import Link from 'next/link';

let hasDropdownEventListenerBeenAdded = false;

const Homepage = () => {
  const [displayDropdown, setDisplayDropdown] = useState<boolean>(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const isClickOutsideOfDropdown = (e: Event) => {
    return (
      displayDropdown &&
      dropdownRef.current &&
      !dropdownRef.current.contains(e.target as HTMLElement)
    );
  };

  const closeDropdown = (e: Event) => {
    if (isClickOutsideOfDropdown(e)) setDisplayDropdown(false);
  };

  useEffect(() => {
    if (!hasDropdownEventListenerBeenAdded) {
      window.addEventListener('click', closeDropdown);
      hasDropdownEventListenerBeenAdded = true;
    }

    return () => {
      if (hasDropdownEventListenerBeenAdded) {
        window.removeEventListener('click', closeDropdown);
        hasDropdownEventListenerBeenAdded = false;
      }
    };
  }, [displayDropdown]);

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

        <div className="dropdown" ref={dropdownRef}>
          <button onClick={() => setDisplayDropdown(!displayDropdown)}>
            <span>
              Get my CV <FaSortDown />
            </span>
          </button>

          <div
            className={`dropdown__content ${
              displayDropdown ? 'open' : 'closed'
            }`}
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
