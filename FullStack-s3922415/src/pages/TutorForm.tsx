import { useState } from 'react';
import { saveToLocal } from '../utils/localStorage';
import { courses } from '../utils/mockCourses';

const TutorForm = () => {
  const [form, setForm] = useState({
    course: '', role: '', availability: '', skills: '', experience: '', credentials: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    saveToLocal('tutor_applicants', form, true);
    alert('Application submitted successfully!');
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-2xl mx-auto bg-white p-6 rounded-lg shadow space-y-4">
      <h2 className="text-2xl font-bold mb-2">Tutor Application</h2>
      <select name="course" onChange={handleChange} required className="w-full border p-2 rounded">
        <option value="">Select Course</option>
        {courses.map(c => <option key={c.code} value={c.code}>{c.code} - {c.name}</option>)}
      </select>
      <input name="role" placeholder="Role (Tutor/Lab Assistant)" onChange={handleChange} required className="w-full p-2 border rounded" />
      <input name="availability" placeholder="Availability (Full/Part Time)" onChange={handleChange} required className="w-full p-2 border rounded" />
      <input name="skills" placeholder="Skills" onChange={handleChange} required className="w-full p-2 border rounded" />
      <input name="experience" placeholder="Previous Experience" onChange={handleChange} className="w-full p-2 border rounded" />
      <input name="credentials" placeholder="Academic Credentials" onChange={handleChange} required className="w-full p-2 border rounded" />
      <button className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700">Submit</button>
    </form>
  );
};

export default TutorForm;