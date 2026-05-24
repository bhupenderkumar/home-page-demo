export default function Download() {
  return (
    <section className="section">
      ```jsx
import Head from 'next/head';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Download = () => {
  return (
    <>
      <Head>
        <title>Download | Abacus School</title>
        <meta name="description" content="Download page for Abacus School" />
      </Head>
      <Header />
      <main className="container mx-auto p-4 pt-6 md:p-6">
        <section className="text-gray-600 body-font">
          <div className="container mx-auto p-4 pt-6 md:p-6">
            <h1 className="text-3xl text-gray-900 font-bold title-font mb-4">Download</h1>
            <p className="text-gray-600 mb-8">Get access to our school's information and resources.</p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
              <div className="bg-white rounded-lg shadow-lg p-8">
                <h2 className="text-lg text-gray-900 font-bold mb-2">Info Packet</h2>
                <p className="text-gray-600">Our comprehensive info packet includes everything you need to know about Abacus School.</p>
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Download Info Packet</button>
              </div>
              <div className="bg-white rounded-lg shadow-lg p-8">
                <h2 className="text-lg text-gray-900 font-bold mb-2">Application Form</h2>
                <p className="text-gray-600">Get started on your application today with our easy-to-use form.</p>
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Download Application Form</button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Download;
```

This JSX code creates a basic Next.js page component for the download page. The page includes a header, a main section with a title and a grid of two columns, each containing a button to download a respective resource (info packet and application form). The footer is also included.
    </section>
  );
}
