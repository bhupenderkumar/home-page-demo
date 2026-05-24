export default function Contact() {
  return (
    <section className="section">
      ```jsx
import Head from 'next/head';

function HomePageContact() {
  return (
    <div>
      <Head>
        <title>Contact Us - Abacus Schools</title>
        <meta name="description" content="Contact Abacus Schools in Austin, TX" />
      </Head>
      <main className="max-w-7xl mx-auto p-4 pt-6">
        <h1 className="text-3xl font-bold mb-4">Contact Us</h1>
        <p className="text-lg">We would love to hear from you! Please fill out the form below or reach out to us via email.</p>
        <div className="mt-8">
          <h2 className="text-2xl font-bold mb-2">Get in Touch</h2>
          <address>
            <p className="text-md">
              Abacus Schools
              <br />
              Austin, TX
            </p>
          </address>
          <p className="text-md mb-4">Email: <a href="mailto:infoar@abacusschools.com" className="text-blue-600 hover:text-blue-800">infoar@abacusschools.com</a></p>
          <p className="text-md">Phone: N/A</p>
        </div>
      </main>
    </div>
  );
}

export default HomePageContact;
```
    </section>
  );
}
