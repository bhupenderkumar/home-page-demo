export default function Programs() {
  return (
    <section className="section">
      ```jsx
import Link from 'next/link';

function ProgramsPage() {
  return (
    <div className="container mx-auto p-4 pt-6">
      <h1 className="text-2xl font-bold text-gray-700 mb-4">Academic Programs</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
        <div className="bg-white rounded-lg shadow-md p-4">
          <h2 className="text-lg font-bold text-gray-700 mb-2">Early Childhood Education</h2>
          <p className="text-gray-600">Our early childhood education program focuses on nurturing young minds and preparing them for success in elementary school.</p>
          <Link href="/about/early-childhood-education">
            <a className="text-blue-600 hover:text-blue-800">Learn More</a>
          </Link>
        </div>

        <div className="bg-white rounded-lg shadow-md p-4">
          <h2 className="text-lg font-bold text-gray-700 mb-2">Elementary Education</h2>
          <p className="text-gray-600">Our elementary education program is designed to provide a well-rounded education that meets the needs of all students.</p>
          <Link href="/about/elementary-education">
            <a className="text-blue-600 hover:text-blue-800">Learn More</a>
          </Link>
        </div>

        <div className="bg-white rounded-lg shadow-md p-4">
          <h2 className="text-lg font-bold text-gray-700 mb-2">Middle School Education</h2>
          <p className="text-gray-600">Our middle school education program focuses on preparing students for high school and beyond.</p>
          <Link href="/about/middle-school-education">
            <a className="text-blue-600 hover:text-blue-800">Learn More</a>
          </Link>
        </div>

        <div className="bg-white rounded-lg shadow-md p-4">
          <h2 className="text-lg font-bold text-gray-700 mb-2">High School Education</h2>
          <p className="text-gray-600">Our high school education program is designed to provide students with a rigorous and challenging education that prepares them for college and beyond.</p>
          <Link href="/about/high-school-education">
            <a className="text-blue-600 hover:text-blue-800">Learn More</a>
          </Link>
        </div>
      </div>

      <h2 className="text-lg font-bold text-gray-700 mb-2">Contact Us</h2>
      <p className="text-gray-600">For more information about our academic programs, please contact us at:</p>
      <p className="text-gray-600">infoar@abacusschools.com</p>
    </div>
  );
}

export default ProgramsPage;
```

This JSX code generates a basic page component for the programs page of a school website. The page includes a grid layout with four cards, each representing a different academic program (early childhood education, elementary education, middle school education, and high school education). Each card includes a title, a brief description, and a link to learn more about the program. Below the program cards, the page includes a contact section with a link to the school's email address.
    </section>
  );
}
