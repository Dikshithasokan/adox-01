"use client";

export default function OurWork() {
  const services = [
    "Website Designing – Engaging, responsive, and modern websites that bring your vision to life",
    "Software Solutions – Custom-built tools and platforms tailored to your business needs",
    "CMS Customizing – WordPress, Joomla, or custom—your content, your control",
    "Logo Designing – Memorable logos that reflect your brand's identity and values",
    "Stationary Design – Professional letterheads, business cards, envelopes & more",
    "Graphic Designing – From digital assets to ad creatives, visuals that communicate",
    "Icon Designing – Custom icons that align with your product and aesthetics",
    "Print Services – High-quality print designs for marketing and branding materials",
    "Brochure Design – Informative, beautiful layouts that grab attention",
    "Brand Identity – Consistent visuals, tone, and style across your brand presence"
  ];

  return (
    <div style={{ padding: '20px', maxWidth: '1200px', margin: '0 auto', textAlign: 'center' }}>
      <h1 style={{ fontFamily: "Georgia, 'Times New Roman', serif", fontSize: '38px', fontWeight: 700, color: '#3a356e', marginBottom: '10px', textAlign: 'center', letterSpacing: '1px' }}>
        Our Work
      </h1>
      <p style={{ fontSize: '18px', color: '#666', lineHeight: '1.6', maxWidth: '800px', margin: '0 auto', marginBottom: '40px' }}>
        We design and build world class responsive websites for buisnesses of all sizes.
      </p>
      
      <div style={{ marginTop: '40px' }}>
        <h2 style={{ fontSize: '28px', fontWeight: '600', color: '#222', marginBottom: '32px' }}>
          Excellence in Every Pixel
        </h2>
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', 
          gap: '20px', 
          maxWidth: '1000px', 
          margin: '0 auto',
          textAlign: 'left'
        }}>
          {services.map((service, index) => (
            <div key={index} style={{
              padding: '20px',
              background: '#483D8B',
              borderRadius: '8px',
              boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
              border: '2px solid #333',
              transition: 'all 0.3s ease',
              position: 'relative',
              overflow: 'hidden',
              cursor: 'pointer'
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.transform = 'translateY(-4px)';
              e.currentTarget.style.boxShadow = '0 8px 24px rgba(72, 61, 139, 0.3)';
              e.currentTarget.style.borderColor = '#483D8B';
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = '0 2px 8px rgba(0,0,0,0.1)';
              e.currentTarget.style.borderColor = '#333';
            }}
            >
              <div style={{
                position: 'absolute',
                top: 0,
                left: '-100%',
                width: '100%',
                height: '100%',
                background: 'linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.3), transparent)',
                animation: 'hazeSweep 10s linear infinite',
                pointerEvents: 'none'
              }}></div>
              <p style={{ 
                margin: '0', 
                fontSize: '16px', 
                color: 'white', 
                lineHeight: '1.5',
                fontWeight: '500',
                position: 'relative',
                zIndex: 1,
                transition: 'all 0.3s ease'
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.color = '#FFD700';
                e.currentTarget.style.fontWeight = '600';
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.color = 'white';
                e.currentTarget.style.fontWeight = '500';
              }}
              >
                {service}
              </p>
            </div>
          ))}
        </div>
      </div>
      
      <footer style={{
        background: 'rgba(0,0,0,0.2)',
        color: 'white',
        textAlign: 'center',
        padding: '40px 0',
        marginTop: 80
      }}>
        <p>&copy; 2025 ABOX Technologies. Pioneering the Future of Technology.</p>
      </footer>
      
      <style dangerouslySetInnerHTML={{
        __html: `
          @keyframes hazeSweep {
            0% { left: -100%; }
            100% { left: 100%; }
          }
        `
      }} />
    </div>
  );
} 