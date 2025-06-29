"use client";
import Image from "next/image";
import Link from "next/link";
import styles from "./page.module.css";
import { useState } from "react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <>
      {/* Sidebar overlay */}
      {menuOpen && (
        <div
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100vw',
            height: '100vh',
            background: 'rgba(0,0,0,0.3)',
            zIndex: 1000,
          }}
          onClick={() => setMenuOpen(false)}
        >
          <nav
            style={{
              position: 'fixed',
              top: 0,
              right: 0,
              width: 260,
              height: '100vh',
              background: '#fff',
              boxShadow: '-2px 0 8px rgba(0,0,0,0.08)',
              display: 'flex',
              flexDirection: 'column',
              padding: '32px 24px',
              zIndex: 1001,
              animation: 'slideIn 0.2s',
            }}
            onClick={e => e.stopPropagation()}
          >
            <button
              style={{
                alignSelf: 'flex-end',
                background: 'none',
                border: 'none',
                fontSize: 28,
                cursor: 'pointer',
                marginBottom: 32,
              }}
              aria-label="Close menu"
              onClick={() => setMenuOpen(false)}
            >
              &times;
            </button>
            <Link href="/services" style={{marginBottom: 24, fontSize: 18, color: '#222'}}>Services</Link>
            <Link href="/ourwork" style={{marginBottom: 24, fontSize: 18, color: '#222'}}>Our Work</Link>
            <Link href="/blog" style={{marginBottom: 24, fontSize: 18, color: '#222'}}>Blog</Link>
            <Link href="/about" style={{marginBottom: 24, fontSize: 18, color: '#222'}}>About Us</Link>
            <Link href="/contact" style={{fontSize: 18, color: '#222'}}>Contact Us</Link>
          </nav>
        </div>
      )}
      <header className={styles.header}>
        <Link href="/" className={styles.companyName} style={{display: 'flex', alignItems: 'center', textDecoration: 'none', color: 'inherit'}}>
          <Image src="/abox-logo.png.png" alt="Abox Logo" width={32} height={32} style={{verticalAlign: 'middle', marginRight: 10}} />
          ABOX Technologies
        </Link>
        <div className={styles.headerRight}>
          <button className={styles.quoteButton}>Get a Quote</button>
          <div className={styles.callInfo}>
            <span className={styles.callUs}>call us</span>
            <span className={styles.phoneNumber}>080 40953678</span>
          </div>
          {/* Hamburger menu icon */}
          <button style={{background: 'none', border: 'none', cursor: 'pointer', padding: 0, marginLeft: 24}} aria-label="Menu" onClick={() => setMenuOpen(true)}>
            <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect y="6" width="28" height="2.5" rx="1.25" fill="#222"/>
              <rect y="13" width="28" height="2.5" rx="1.25" fill="#222"/>
              <rect y="20" width="28" height="2.5" rx="1.25" fill="#222"/>
            </svg>
          </button>
        </div>
      </header>
      <nav className={styles.navbar}>
        <Link href="/services">SERVICES</Link>
        <Link href="/ourwork">OUR WORK</Link>
        <Link href="/about">ABOUT US</Link>
        <Link href="/blog">BLOG</Link>
        <Link href="/contact">CONTACT US</Link>
      </nav>
    </>
  );
} 