'use client';
import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';

import Link from 'next/link';
import Image from 'next/image';
import avatarImage from '@/public/images/avatar.jpg';

import { FcLike } from 'react-icons/fc';
import { IoMenu, IoClose } from 'react-icons/io5';
import { FaLinkedin, FaGithub } from 'react-icons/fa';

const SideNavBar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  return (
    <div className="navbar">
      <div
        className="navbar__mobile-menu"
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
      >
        {isMobileMenuOpen ? <IoClose /> : <IoMenu />}
      </div>

      <div
        className={`navbar__content ${isMobileMenuOpen ? 'open' : 'closed'}`}
      >
        <Image
          src={avatarImage}
          alt="a"
          width={150}
          className="navbar__avatar"
        />

        <nav className="navbar__links">
          <ul>
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/about-me">About me</Link>
            </li>
            <li>
              <Link href="/experience">Experience & skills</Link>
            </li>
            <li>
              <Link href="/projects">Projects</Link>
            </li>
            <li>
              <Link href="/contact">Contact</Link>
            </li>
          </ul>
        </nav>

        <div className="navbar__footer">
          <div className="footer__links">
            <a
              href="https://github.com/jurawrssic"
              target="_blank"
              className="footer__icons"
            >
              <FaGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/jurawrssic/"
              target="_blank"
              className="footer__icons"
            >
              <FaLinkedin />
            </a>
          </div>

          <p>
            Made with <FcLike />
          </p>
          <p>Nimmu Labs LTDA, 2024</p>
        </div>
      </div>
    </div>
  );
};

export default SideNavBar;
