import { Link } from 'react-router-dom';

const Navbar = () => (
  <nav className="bg-white shadow border-b sticky top-0 z-50">
    <div className="container mx-auto px-6 py-4 flex justify-between items-center">
      <div className="text-2xl font-bold text-blue-700">TeachTeam</div>
      <div className="space-x-5 text-gray-700 font-medium">
        <Link to="/" className="hover:text-blue-600">Home</Link>
        <Link to="/signin" className="hover:text-blue-600">Sign In</Link>
        <Link to="/signup" className="hover:text-blue-600">Sign Up</Link>
        <Link to="/tutor" className="hover:text-blue-600">Tutor Form</Link>
        <Link to="/lecturer" className="hover:text-blue-600">Lecturer View</Link>
        <Link to="/charts" className="hover:text-blue-600">Charts</Link>
      </div>
    </div>
  </nav>
);

export default Navbar;
