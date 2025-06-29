export default function About() {
  return (
    <div style={{ padding: '32px 12px', maxWidth: '900px', margin: '0 auto', background: '#fff', borderRadius: '14px', boxShadow: '0 2px 16px rgba(72,61,139,0.06)' }}>
      <h1 style={{ fontFamily: "Georgia, 'Times New Roman', serif", fontSize: '38px', fontWeight: 700, color: '#3a356e', marginBottom: '10px', textAlign: 'center', letterSpacing: '1px' }}>
        About Us
      </h1>
      <p style={{ fontFamily: 'Segoe UI, Arial, sans-serif', fontSize: '20px', color: '#555', lineHeight: '1.7', maxWidth: '700px', margin: '0 auto 36px auto', textAlign: 'center' }}>
        We design and build world class responsive websites for businesses of all sizes.
      </p>

      <div style={{ borderTop: '1px solid #ececf6', paddingTop: '32px', marginTop: '24px' }}>
        <p style={{ fontFamily: 'Segoe UI, Arial, sans-serif', fontSize: '17px', color: '#444', lineHeight: '1.8', marginBottom: '32px', textAlign: 'left' }}>
          <b style={{ color: '#3a356e' }}>ABOX Technologies</b> is an IT Services Company that offers end to end UI Design, E-commerce & Open Source Development. We always look towards providing the best of the software solutions to the required business applications. Our founders have been significant players in the INDIA's web hosting and domain name registration market for over many years.
        </p>

        <SectionDivider />

        <Section
          title="OUR AIM"
          content="We will continuously improve and strive to be the industry leader and a premier outsourcing company in the field of web designing, development and mobile web and application development through excellent services and unmatched professional skill by building life-long relationships with the clients to achieve the highest client satisfaction."
        />

        <SectionDivider />

        <Section
          title="OUR MOTTO"
          content="To form long lasting relationships with all of our clients, providing customer satisfaction and delivering highly integrated solutions with best returns with affordable services in a timely manner will always be our highest priority."
        />

        <SectionDivider />

        <Section
          title="OUR PHILOSOPHY"
          content="To be honest in our work and employ the best practices and strategies of the industry."
        />

        <SectionDivider />

        <Section
          title="OUR JOURNEY"
          content={<>
            <p style={{ marginBottom: '16px' }}>
              ABOX Technologies founders have been significant players in the INDIA's web hosting and domain name registration market for over many years. Initially they realised that though the internet was becoming increasingly popular, web hosting services were predominantly technical in nature, this meant that customers needed a good level of technical expertise to manage their accounts, often including UNIX skills, which came out with the launch of "ABOX Technologies".
            </p>
            <p style={{ marginBottom: '16px' }}>
              Our journey which has just been about half a decade, began as an entrepreneurial adventure, and today has mushroomed into a mature small scale entity delivering excellence in service to our small but ever growing clientele base.
            </p>
            <p style={{ marginBottom: '16px' }}>
              We believe Ability to think out of the box, Innovate to understand the client and deliver and exceed expectations. Money is primarily important and we are known to be economically price positioned but what is more important to us is that we understand that a happy customer means repeat business to us and a plethora of references.
            </p>
            <p style={{ marginBottom: '0' }}>
              We call this the NETWORK Office Stationery, school stationery is where the journey started.
            </p>
          </>}
        />
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

function Section({ title, content }) {
  return (
    <div style={{ margin: '36px 0' }}>
      <h2 style={{ fontFamily: "Georgia, 'Times New Roman', serif", fontSize: '24px', fontWeight: 600, color: '#483D8B', marginBottom: '14px', textAlign: 'left', letterSpacing: '0.5px' }}>{title}</h2>
      <div style={{ fontFamily: 'Segoe UI, Arial, sans-serif', fontSize: '16px', color: '#444', lineHeight: '1.8', textAlign: 'left' }}>{content}</div>
    </div>
  );
}

function SectionDivider() {
  return <div style={{ borderTop: '1px solid #ececf6', margin: '0 0 0 0', width: '100%' }} />;
} 