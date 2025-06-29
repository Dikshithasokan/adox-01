"use client";
import styles from "./page.module.css";
import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <div className={styles.page} style={{ background: "linear-gradient(135deg, #f7f8fa 0%, #e6e6f7 100%)", minHeight: "100vh" }}>
      {/* Hero Section */}
      <section style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minHeight: '60vh', padding: '48px 0 24px 0', textAlign: 'center' }}>
        <h1 style={{ fontFamily: "Georgia, 'Times New Roman', serif", fontSize: 44, fontWeight: 700, color: '#3a356e', marginBottom: 16, letterSpacing: '1px' }}>
          Welcome to ABOX Technologies
        </h1>
        <p style={{ fontSize: 20, color: '#555', maxWidth: 600, margin: '0 auto 32px auto', lineHeight: 1.6 }}>
          We design and build world class responsive websites, software, and digital solutions for businesses of all sizes. Discover our services and let us help you grow your business online.
        </p>
      </section>

      {/* Navigation Grid */}
      <section style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: 32, maxWidth: 1000, margin: '48px auto 0 auto', padding: '0 16px' }}>
        <NavCard href="/services" title="Our Services" desc="Explore our full range of web, design, and digital solutions." icon="window" />
        <NavCard href="/ourwork" title="Our Work" desc="See the projects and brands we've helped grow." icon="file" />
        <NavCard href="/about" title="About Us" desc="Learn about our mission, values, and team." icon="globe" />
        <NavCard href="/blog" title="Blog" desc="Read insights, tips, and news from our experts." icon="next" />
        <NavCard href="/contact" title="Contact" desc="Start your project or ask us anything." icon="vercel" />
      </section>

      <footer style={{
        background: 'rgba(0,0,0,0.2)',
        color: 'white',
        textAlign: 'center',
        padding: '40px 0',
        marginTop: 80
      }}>
        <p>&copy; 2025 ABOX Technologies. Pioneering the Future of Technology.</p>
      </footer>
    </div>
  );
}

function NavCard({ href, title, desc, icon }: { href: string; title: string; desc: string; icon: string }) {
  return (
    <Link href={href} style={{
      display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
      background: '#fff', borderRadius: 16, boxShadow: '0 2px 12px rgba(72,61,139,0.06)',
      padding: '36px 18px', textAlign: 'center', textDecoration: 'none', color: '#3a356e',
      transition: 'transform 0.2s, box-shadow 0.2s', minHeight: 220, position: 'relative',
    }}
    onMouseOver={e => {
      e.currentTarget.style.transform = 'translateY(-8px) scale(1.03)';
      e.currentTarget.style.boxShadow = '0 8px 32px rgba(72,61,139,0.12)';
    }}
    onMouseOut={e => {
      e.currentTarget.style.transform = '';
      e.currentTarget.style.boxShadow = '0 2px 12px rgba(72,61,139,0.06)';
    }}
    >
      <Image src={`/${icon}.svg`} alt={title + " icon"} width={48} height={48} style={{ marginBottom: 18 }} />
      <h2 style={{ fontFamily: "Georgia, 'Times New Roman', serif", fontSize: 24, fontWeight: 600, marginBottom: 10, color: '#3a356e', letterSpacing: '0.5px' }}>{title}</h2>
      <p style={{ fontSize: 15, color: '#555', lineHeight: 1.6 }}>{desc}</p>
    </Link>
  );
}
