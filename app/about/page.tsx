export default function About() {
  return (
    <section className="section">
      ```jsx
import Head from 'next/head';
import Link from 'next/link';

function AboutPage() {
  return (
    <>
      <Head>
        <title>About Us | Abacus Schools Austin</title>
        <meta name="description" content="Learn about Abacus Schools Austin's mission, values, and history." />
      </Head>

      <header className="hero">
        <div className="container">
          <h1>About Us</h1>
          <p>Welcome to Abacus Schools Austin, a leading educational institution in the heart of Texas.</p>
          <Link href="/">
            <a>Home</a>
          </Link>
        </div>
      </header>

      <main>
        <section className="about">
          <div className="container">
            <h2>Our Mission</h2>
            <p>At Abacus Schools Austin, our mission is to provide a world-class education that fosters intellectual curiosity, creativity, and a passion for lifelong learning.</p>
          </div>
        </section>

        <section className="values">
          <div className="container">
            <h2>Our Values</h2>
            <ul>
              <li>Academic Excellence</li>
              <li>Collaborative Learning</li>
              <li>Community Engagement</li>
              <li>Emotional Intelligence</li>
            </ul>
          </div>
        </section>

        <section className="contact">
          <div className="container">
            <h2>Get in Touch</h2>
            <p>Contact us to learn more about Abacus Schools Austin or to schedule a tour.</p>
            <p>Email: <a href="mailto:infoar@abacusschools.com">infoar@abacusschools.com</a></p>
            <p>Address: N/A</p>
          </div>
        </section>
      </main>

      <footer>
        <div className="container">
          <p>&copy; 2024 Abacus Schools Austin. All rights reserved.</p>
        </div>
      </footer>
    </>
  );
}

export default AboutPage;
```

This JSX code generates the about page for the Abacus Schools Austin website, including a hero section, about section, values section, and contact section. The page does not include a phone number, as per your request. The email address is displayed for visitors to contact the school. The address is also not displayed.
    </section>
  );
}
