"use client";
import "./services.css";

export default function Services() {
  const services = [
    { name: "Web Design", color: "#483D8B" },
    { name: "Graphic Design", color: "#483D8B" },
    { name: "Enterprise Bulk SMS Service", color: "#483D8B" },
    { name: "Stationary Design", color: "#483D8B" },
    { name: "Data Collection Services", color: "#483D8B" },
    { name: "Mobile Application Development", color: "#483D8B" },
    { name: "Mobile API", color: "#483D8B" },
    { name: "Database Management", color: "#483D8B" },
    { name: "Digital Marketing", color: "#483D8B" }
  ];

  return (
    <div style={{ padding: '12px', maxWidth: '1000px', margin: '0 auto', background: '#f7f8fa', borderRadius: '12px' }}>
      <h1 style={{ fontFamily: "Georgia, 'Times New Roman', serif", fontSize: '38px', fontWeight: 700, color: '#3a356e', marginBottom: '10px', textAlign: 'center', letterSpacing: '1px' }}>Our Services</h1>
      <div id="our-work" style={{ marginTop: '20px' }}>
        <h2 style={{ textAlign: 'center', marginBottom: '16px', color: '#333', fontSize: '22px', fontWeight: '500' }}>What We Offer</h2>
        <div className="services-grid">
          {services.map((service, index) => (
            <div key={index} className="hover-card">
              <div className="hover-card-content">
                <h3 style={{ 
                  margin: '0 0 8px 0', 
                  color: service.color, 
                  fontSize: '16px', 
                  fontWeight: '600', 
                  lineHeight: '1.3',
                  transition: 'color 0.3s ease'
                }}>
                  {service.name}
                </h3>
                <p style={{ margin: '0', color: '#666', fontSize: '13px', lineHeight: '1.3' }}>
                  Professional {service.name.toLowerCase()} solutions tailored to your needs.
                </p>
              </div>
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
    </div>
  );
} 