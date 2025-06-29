"use client";
import { useEffect } from "react";

export default function Blog() {
  useEffect(() => {
    // Scroll reveal animation
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };
    const observer = new window.IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed');
        }
      });
    }, observerOptions);
    document.querySelectorAll('.scroll-reveal').forEach(el => {
      observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  return (
    <div style={{ fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif", background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)", minHeight: "100vh", lineHeight: 1.6 }}>
      {/* Header (uses site nav) */}
      <section className="hero" style={{ textAlign: 'center', padding: '80px 0 40px 0', color: 'white' }}>
        <h1 style={{ fontSize: 48, fontWeight: 800, marginBottom: 20, textShadow: '2px 2px 4px rgba(0,0,0,0.3)' }}>
          AI &amp; Robotics Insights
        </h1>
        <p style={{ fontSize: 20, opacity: 0.9, maxWidth: 600, margin: '0 auto' }}>
          Exploring the cutting-edge world of artificial intelligence and robotics technology
        </p>
      </section>

      {/* Quote Section */}
      <section className="quote-section scroll-reveal" style={{ background: 'rgba(255,255,255,0.1)', backdropFilter: 'blur(20px)', borderRadius: 20, padding: 40, margin: '60px auto', textAlign: 'center', border: '1px solid rgba(255,255,255,0.2)', maxWidth: 900 }}>
        <p className="quote-text" style={{ fontSize: 24, fontStyle: 'italic', color: 'white', marginBottom: 20, lineHeight: 1.4 }}>
          &quot;The future belongs to those who understand that AI and robotics are not just technologies, but partners in human advancement.&quot;
        </p>
        <p className="quote-author" style={{ color: 'rgba(255,255,255,0.8)', fontWeight: 600 }}>
          - ABOX Technologies Innovation Team
        </p>
      </section>

      {/* Blog Section */}
      <section className="blog-section" id="blog" style={{ padding: '80px 0' }}>
        <div className="container" style={{ maxWidth: 1200, margin: '0 auto', padding: '0 20px' }}>
          <div className="blog-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(550px, 1fr))', gap: 40 }}>
            {/* Blog Post 1: AI */}
            <article className="blog-card scroll-reveal" style={blogCardStyle}>
              <div className="blog-header" style={blogHeaderStyle}>
                <span className="blog-category" style={blogCategoryStyle}>Artificial Intelligence</span>
                <h2 className="blog-title" style={blogTitleStyle}>The Revolutionary Impact of Large Language Models on Modern Business</h2>
                <div className="blog-meta" style={blogMetaStyle}>
                  <span>📅 June 28, 2025</span>
                  <span>⏱️ 8 min read</span>
                  <span>👤 Dr. Sarah Chen</span>
                </div>
              </div>
              <div className="blog-content" style={blogContentStyle}>
                <p className="blog-excerpt" style={blogExcerptStyle}>
                  Discover how Large Language Models are transforming industries and reshaping the way we interact with technology in 2025.
                </p>
                <div className="blog-text" style={blogTextStyle}>
                  <p>
                    Large Language Models (LLMs) have evolved far beyond simple text generation. In 2025, we&apos;re witnessing unprecedented integration of these AI systems across industries, fundamentally changing how businesses operate, communicate, and innovate.
                  </p>
                  <h3 style={blogH3Style}>🚀 Current Applications Revolutionizing Industries</h3>
                  <ul style={blogUlStyle}>
                    <li><strong>Healthcare:</strong> AI-powered diagnostic assistants help doctors analyze complex medical data with 95% accuracy</li>
                    <li><strong>Finance:</strong> Intelligent trading algorithms and risk assessment models process market data in real-time</li>
                    <li><strong>Education:</strong> Personalized learning platforms adapt to individual student needs and learning styles</li>
                    <li><strong>Customer Service:</strong> Advanced chatbots handle 80% of customer inquiries without human intervention</li>
                  </ul>
                  <h3 style={blogH3Style}>🔮 The Future Landscape</h3>
                  <p>
                    By 2026, experts predict that LLMs will become even more specialized, with domain-specific models outperforming general-purpose ones in narrow applications. The integration of multimodal capabilities—combining text, image, and audio processing—will create truly comprehensive AI assistants.
                  </p>
                  <h3 style={blogH3Style}>⚠️ Challenges and Considerations</h3>
                  <p>
                    Despite their promise, LLMs face significant challenges including bias mitigation, energy consumption, and the need for robust safety measures. Organizations must balance innovation with responsible AI deployment to ensure ethical and sustainable growth.
                  </p>
                  <p>
                    At ABOX Technologies, we&apos;re pioneering solutions that harness LLM capabilities while addressing these critical challenges. Our research focuses on creating efficient, bias-free models that serve humanity&apos;s best interests.
                  </p>
                </div>
                <a href="#" className="read-more" style={readMoreStyle}>
                  Continue Reading
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" style={{ marginLeft: 8 }}>
                    <path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z" />
                  </svg>
                </a>
              </div>
            </article>
            {/* Blog Post 2: Robotics */}
            <article className="blog-card scroll-reveal" style={blogCardStyle}>
              <div className="blog-header" style={blogHeaderStyle}>
                <span className="blog-category" style={blogCategoryStyle}>Robotics</span>
                <h2 className="blog-title" style={blogTitleStyle}>Humanoid Robots: From Science Fiction to Manufacturing Reality</h2>
                <div className="blog-meta" style={blogMetaStyle}>
                  <span>📅 June 25, 2025</span>
                  <span>⏱️ 10 min read</span>
                  <span>👤 Prof. Alex Rodriguez</span>
                </div>
              </div>
              <div className="blog-content" style={blogContentStyle}>
                <p className="blog-excerpt" style={blogExcerptStyle}>
                  Explore how humanoid robots are transitioning from research labs to factory floors, revolutionizing manufacturing and human-robot collaboration.
                </p>
                <div className="blog-text" style={blogTextStyle}>
                  <p>
                    The year 2025 marks a pivotal moment in robotics history. Humanoid robots, once confined to research laboratories and science fiction movies, are now making their debut in real-world manufacturing environments, fundamentally changing our relationship with automated systems.
                  </p>
                  <h3 style={blogH3Style}>🏭 Manufacturing Revolution</h3>
                  <p>
                    Leading manufacturers like Tesla, Toyota, and Samsung have deployed humanoid robots in their production lines. These robots excel in tasks requiring human-like dexterity and adaptability:
                  </p>
                  <ul style={blogUlStyle}>
                    <li><strong>Precision Assembly:</strong> Handling delicate components with sub-millimeter accuracy</li>
                    <li><strong>Quality Control:</strong> Visual and tactile inspection using advanced sensor arrays</li>
                    <li><strong>Collaborative Tasks:</strong> Working alongside human workers safely and efficiently</li>
                    <li><strong>Adaptive Operations:</strong> Quickly reprogramming for different product lines</li>
                  </ul>
                  <h3 style={blogH3Style}>🧠 Advanced AI Integration</h3>
                  <p>
                    Modern humanoid robots combine sophisticated mechanical engineering with cutting-edge AI. They feature:
                  </p>
                  <ul style={blogUlStyle}>
                    <li>Real-time learning algorithms that adapt to new tasks</li>
                    <li>Advanced computer vision for spatial awareness</li>
                    <li>Natural language processing for human-robot communication</li>
                    <li>Predictive maintenance capabilities</li>
                  </ul>
                  <h3 style={blogH3Style}>🤝 Human-Robot Collaboration</h3>
                  <p>
                    The most significant breakthrough isn&apos;t just in robot capabilities, but in how they collaborate with humans. Advanced safety systems, including:
                  </p>
                  <ul style={blogUlStyle}>
                    <li>Proximity sensing to prevent accidents</li>
                    <li>Force feedback systems that respond to human touch</li>
                    <li>Intuitive gesture recognition</li>
                    <li>Emotional intelligence for better team dynamics</li>
                  </ul>
                  <h3 style={blogH3Style}>🌟 Looking Ahead</h3>
                  <p>
                    As we move toward 2026, expect to see humanoid robots expanding beyond manufacturing into healthcare, hospitality, and home assistance. The key to successful adoption lies in designing robots that augment human capabilities rather than replace them entirely.
                  </p>
                  <p>
                    ABOX Technologies is at the forefront of this revolution, developing next-generation control systems and AI algorithms that make humanoid robots more intuitive, safe, and efficient partners in the workplace of tomorrow.
                  </p>
                </div>
                <a href="#" className="read-more" style={readMoreStyle}>
                  Continue Reading
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" style={{ marginLeft: 8 }}>
                    <path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z" />
                  </svg>
                </a>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer" style={{ background: 'rgba(0,0,0,0.2)', color: 'white', textAlign: 'center', padding: '40px 0', marginTop: 80 }}>
        <div className="container" style={{ maxWidth: 1200, margin: '0 auto', padding: '0 20px' }}>
          <div className="footer-content" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 20, flexWrap: 'wrap', gap: 20 }}>
            <div>
              <h3>Stay Connected</h3>
              <p>Follow us for the latest in AI and Robotics</p>
            </div>
            <div className="social-links" style={{ display: 'flex', gap: 20 }}>
              <a href="#" title="LinkedIn">💼</a>
              <a href="#" title="Twitter">🐦</a>
              <a href="#" title="GitHub">💻</a>
              <a href="#" title="YouTube">📺</a>
            </div>
          </div>
          <p>&copy; 2025 ABOX Technologies. Pioneering the Future of Technology.</p>
        </div>
      </footer>
    </div>
  );
}

const blogCardStyle = {
  background: 'rgba(255,255,255,0.95)',
  borderRadius: 20,
  overflow: 'hidden',
  boxShadow: '0 20px 40px rgba(0,0,0,0.1)',
  transition: 'all 0.4s ease',
  position: 'relative',
  animation: 'fadeInUp 0.8s ease',
} as React.CSSProperties;
const blogHeaderStyle = {
  background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
  color: 'white',
  padding: 30,
  position: 'relative',
  overflow: 'hidden',
} as React.CSSProperties;
const blogCategoryStyle = {
  background: 'rgba(255,255,255,0.2)',
  color: 'white',
  padding: '8px 16px',
  borderRadius: 20,
  fontSize: 12,
  fontWeight: 600,
  textTransform: 'uppercase',
  letterSpacing: 1,
  display: 'inline-block',
  marginBottom: 15,
} as React.CSSProperties;
const blogTitleStyle = {
  fontSize: 28,
  fontWeight: 700,
  marginBottom: 15,
  lineHeight: 1.3,
} as React.CSSProperties;
const blogMetaStyle = {
  display: 'flex',
  alignItems: 'center',
  gap: 20,
  fontSize: 14,
  opacity: 0.8,
} as React.CSSProperties;
const blogContentStyle = {
  padding: '40px 30px',
  color: '#333',
} as React.CSSProperties;
const blogExcerptStyle = {
  fontSize: 16,
  color: '#666',
  marginBottom: 30,
  lineHeight: 1.7,
} as React.CSSProperties;
const blogTextStyle = {
  fontSize: 15,
  lineHeight: 1.8,
  marginBottom: 25,
} as React.CSSProperties;
const blogH3Style = {
  color: '#667eea',
  fontSize: 20,
  margin: '30px 0 15px 0',
  fontWeight: 600,
} as React.CSSProperties;
const blogUlStyle = {
  margin: '15px 0',
  paddingLeft: 20,
} as React.CSSProperties;
const readMoreStyle = {
  display: 'inline-flex',
  alignItems: 'center',
  gap: 8,
  color: '#667eea',
  fontWeight: 600,
  textDecoration: 'none',
  padding: '12px 24px',
  border: '2px solid #667eea',
  borderRadius: 25,
  transition: 'all 0.3s ease',
  marginTop: 20,
} as React.CSSProperties; 