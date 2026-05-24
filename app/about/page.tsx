export default function About() {
  return (
    <section className="section">
      ```jsx
import Head from 'next/head';
import Image from 'next/image';

const AboutPage = () => {
  return (
    <div className="max-w-7xl mx-auto p-4">
      <Head>
        <title>About Us | Abacus School Austin</title>
        <meta name="description" content="Learn about our mission, values, and vision at Abacus School Austin" />
        <meta name="keywords" content="Abacus School, Austin, TX, about us, mission, values, vision" />
      </Head>

      <header className="text-center mb-8">
        <h1 className="text-3xl font-bold mb-4">About Us</h1>
        <p className="text-gray-600">Welcome to Abacus School Austin, where we empower young minds to reach their full potential.</p>
      </header>

      <main className="grid grid-cols-1 gap-4 lg:grid-cols-2">
        <section className="flex flex-col justify-center items-center">
          <Image src="/about-us-image.jpg" alt="Abacus School Austin" width={800} height={600} />
          <p className="text-lg font-bold mt-4">Our Mission</p>
          <p className="text-gray-600">Our mission is to provide a nurturing and stimulating environment that fosters academic excellence, creativity, and social responsibility.</p>
        </section>

        <section className="flex flex-col justify-center items-center">
          <p className="text-lg font-bold mt-4">Our Values</p>
          <ul className="list-disc ml-4">
            <li className="text-gray-600">Respect</li>
            <li className="text-gray-600">Responsibility</li>
            <li className="text-gray-600">Empathy</li>
            <li className="text-gray-600">Integrity</li>
          </ul>
        </section>
      </main>

      <footer className="text-center mt-8">
        <p className="text-gray-600">
          <a href="mailto:infoar@abacusschools.com" target="_blank" rel="noopener noreferrer">infoar@abacusschools.com</a>
        </p>
      </footer>
    </div>
  );
};

export default AboutPage;
```

This JSX code generates a basic about page for Abacus School Austin. It includes a header with a title and a brief introduction, a main section with two columns, and a footer with the school's email address.
    </section>
  );
}
