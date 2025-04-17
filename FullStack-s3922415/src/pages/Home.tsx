import { Link } from 'react-router-dom';

const Home = () => (
  <section className="space-y-8">
    <div className="text-center">
      <h2 className="text-4xl font-bold text-blue-700">Welcome to TeachTeam</h2>
      <p className="mt-2 text-lg text-gray-600 max-w-2xl mx-auto">
        A modern platform connecting aspiring tutors with experienced lecturers at the School of Computing.
      </p>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition">
        <h3 className="text-2xl font-semibold text-blue-600">For Tutor Applicants</h3>
        <p className="mt-2 text-gray-700">Submit your details, showcase your skills, and apply for roles in active courses.</p>
        <Link to="/tutor" className="mt-4 inline-block text-blue-500 hover:underline">Apply as Tutor →</Link>
      </div>
      <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition">
        <h3 className="text-2xl font-semibold text-green-600">For Lecturers</h3>
        <p className="mt-2 text-gray-700">Review tutor applicants, rank candidates, and select based on skills and availability.</p>
        <Link to="/lecturer" className="mt-4 inline-block text-green-500 hover:underline">View Applicants →</Link>
      </div>
    </div>
  </section>
);

export default Home;