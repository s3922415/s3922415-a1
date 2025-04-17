import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import SignIn from './pages/SignIn';
import TutorForm from './pages/TutorForm';
import LecturerView from './pages/LecturerView';
import NotFound from './pages/NotFound';
import Charts from './pages/Charts';


const App = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50 text-gray-900">
      <Header />
      <Navbar />
      <main className="flex-grow container mx-auto p-6">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/tutor" element={<TutorForm />} />
          <Route path="/lecturer" element={<LecturerView />} />
          <Route path="/charts" element={<Charts />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
};

export default App;
