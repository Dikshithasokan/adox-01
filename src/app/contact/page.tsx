"use client";
import { useState } from "react";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    company: "",
    email: "",
    position: "",
    phone: "",
    service: "",
    description: "",
    human: false,
  });

  const services = [
    "Web Design",
    "Graphic Design",
    "Enterprise Bulk SMS Service",
    "Stationary Design",
    "Data Collection Services",
    "Mobile Application Development",
    "Mobile API",
    "Database Management",
    "Digital Marketing"
  ];

  function handleChange(e) {
    const { name, value, type, checked } = e.target;
    setForm(f => ({ ...f, [name]: type === "checkbox" ? checked : value }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    // You can add your form submission logic here
    alert("Thank you for contacting us!");
  }

  return (
    <div>
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: 24, display: "flex", gap: 32, background: "#f7f8fa", borderRadius: 12, fontFamily: 'Segoe UI, Arial, sans-serif' }}>
        {/* Left Info */}
        <div style={{ flex: 1, minWidth: 220 }}>
          <h3 style={{ fontWeight: 700, color: '#222', marginBottom: 12 }}>ADDRESS</h3>
          <div style={{ color: '#333', fontSize: 15, marginBottom: 24 }}>
            <b>ABOX TECHNOLOGIES</b><br />
            #13, Ground Floor, 3rd Cross<br />
            Gandhinagar<br />
            Opp Atg Royal Hotel<br />
            Bangalore-560 009
          </div>
          <h3 style={{ fontWeight: 700, color: '#222', marginBottom: 8 }}>CALL US</h3>
          <div style={{ color: '#333', fontSize: 15, marginBottom: 24 }}>080 40953678</div>
          <h3 style={{ fontWeight: 700, color: '#222', marginBottom: 8 }}>EMAIL</h3>
          <div style={{ color: '#333', fontSize: 15, marginBottom: 24 }}>info@abox.in</div>
          <div style={{ display: 'flex', gap: 12, marginTop: 16 }}>
            <a href="#" aria-label="Facebook" style={{ color: '#333', fontSize: 22 }}><i className="fa fa-facebook"></i></a>
            <a href="#" aria-label="Twitter" style={{ color: '#333', fontSize: 22 }}><i className="fa fa-twitter"></i></a>
            <a href="#" aria-label="Google+" style={{ color: '#333', fontSize: 22 }}><i className="fa fa-google-plus"></i></a>
          </div>
        </div>

        {/* Center Form */}
        <form onSubmit={handleSubmit} style={{ flex: 2, minWidth: 320, display: "flex", flexDirection: "column", gap: 16 }}>
          <h1 style={{ fontFamily: "Georgia, 'Times New Roman', serif", fontSize: 38, fontWeight: 700, color: '#3a356e', marginBottom: 6, textAlign: 'center', letterSpacing: '1px' }}>
            Have a project in mind? Lets talk
          </h1>
          <p style={{ textAlign: 'center', color: '#444', marginBottom: 18, fontSize: 16 }}>
            Please take a quick moment to complete this form and a business representative will get back to you swiftly.
          </p>
          <div style={{ display: 'flex', gap: 12 }}>
            <input name="name" value={form.name} onChange={handleChange} required placeholder="Full Name*" style={inputStyle} />
            <input name="company" value={form.company} onChange={handleChange} required placeholder="Company*" style={inputStyle} />
          </div>
          <div style={{ display: 'flex', gap: 12 }}>
            <input name="email" value={form.email} onChange={handleChange} required placeholder="Email Address*" type="email" style={inputStyle} />
            <input name="position" value={form.position} onChange={handleChange} required placeholder="Position*" style={inputStyle} />
          </div>
          <div style={{ display: 'flex', gap: 12 }}>
            <input name="phone" value={form.phone} onChange={handleChange} required placeholder="Phone Number*" style={inputStyle} />
            <select name="service" value={form.service} onChange={handleChange} required style={inputStyle}>
              <option value="">Service Of Interest*</option>
              {services.map(s => <option key={s} value={s}>{s}</option>)}
            </select>
          </div>
          <textarea name="description" value={form.description} onChange={handleChange} required placeholder="Describe Your Project In A Few Sentences" style={{ ...inputStyle, minHeight: 80, resize: 'vertical' }} />
          <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
            <input type="checkbox" name="human" checked={form.human} onChange={handleChange} required />
            <label htmlFor="human" style={{ color: '#444', fontSize: 15 }}>Are you human? *</label>
          </div>
          <button type="submit" style={{ background: '#ff7f5c', color: '#fff', border: 'none', borderRadius: 4, padding: '12px 0', fontWeight: 600, fontSize: 18, marginTop: 8, cursor: 'pointer', letterSpacing: 1 }}>SEND</button>
        </form>

        {/* Right Info */}
        <div style={{ flex: 1, minWidth: 220, display: 'flex', flexDirection: 'column', gap: 18, justifyContent: 'flex-start' }}>
          <h3 style={{ fontWeight: 700, color: '#222', marginBottom: 12 }}>WHAT YOU GET</h3>
          <div style={{ color: '#333', fontSize: 15, display: 'flex', alignItems: 'center', gap: 10 }}>
            <span role="img" aria-label="email">✉️</span> An email and phone call
          </div>
          <div style={{ color: '#333', fontSize: 15, display: 'flex', alignItems: 'center', gap: 10 }}>
            <span role="img" aria-label="cost">💲</span> A cost estimate for your project.
          </div>
          <div style={{ color: '#333', fontSize: 15, display: 'flex', alignItems: 'center', gap: 10 }}>
            <span role="img" aria-label="meeting">👤</span> An in-person meeting.
          </div>
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

const inputStyle = {
  flex: 1,
  padding: '12px',
  border: '1px solid #ccc',
  borderRadius: 4,
  fontSize: 15,
  color: '#222',
  background: '#fff',
  outline: 'none',
  marginBottom: 0,
}; 