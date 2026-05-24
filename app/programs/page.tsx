export default function Programs() {
  return (
    <section className="section">
      ```jsx
import Head from 'next/head';

function ProgramsPage() {
  return (
    <>
      <Head>
        <title>Abacus Schools Austin - Programs</title>
        <meta name="description" content="Explore our programs at Abacus Schools Austin, a leading educational institution in Texas." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="max-w-7xl mx-auto pt-12 pb-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-3xl font-bold text-gray-900">Our Programs at Abacus Schools Austin</h1>
          <p className="mt-4 text-gray-600">Discover our unique approach to education and learn why Abacus Schools Austin is the right choice for your child.</p>
        </div>

        <div className="max-w-7xl mx-auto mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-bold text-gray-900">Early Childhood Education</h2>
            <p className="mt-4 text-gray-600">Our programs for children ages 6 weeks to 5 years focus on play-based learning and socialization.</p>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Learn More</button>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-bold text-gray-900">Elementary Education</h2>
            <p className="mt-4 text-gray-600">Our elementary programs for children ages 5 to 10 focus on core subjects and character development.</p>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Learn More</button>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-bold text-gray-900">Middle School Education</h2>
            <p className="mt-4 text-gray-600">Our middle school programs for children ages 11 to 14 focus on academic rigor and extracurricular activities.</p>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Learn More</button>
          </div>
        </div>

        <div className="max-w-4xl mx-auto mt-12 text-center">
          <h2 className="text-2xl font-bold text-gray-900">Get in Touch</h2>
          <p className="mt-4 text-gray-600">Ready to learn more about our programs at Abacus Schools Austin? Contact us today!</p>
          <a href="mailto:infoar@abacusschools.com" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Send Email</a>
        </div>
      </main>
    </>
  );
}

export default ProgramsPage;
```
This JSX code generates a Next.js page component for the programs page of the Abacus Schools Austin website. It includes a header with a title and meta description, a hero section with a heading and paragraph, a grid of program cards, and a call-to-action section with a contact email link.
    </section>
  );
}
