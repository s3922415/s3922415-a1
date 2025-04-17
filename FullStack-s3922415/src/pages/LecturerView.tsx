import { useState, useEffect } from 'react';
import { getFromLocal } from '../utils/localStorage';

const LecturerView = () => {
  const [applicants, setApplicants] = useState<any[]>([]);
  const [query, setQuery] = useState('');

  useEffect(() => {
    const data = getFromLocal('tutor_applicants');
    setApplicants(data);
  }, []);

  const filtered = applicants.filter(a =>
    a.course.toLowerCase().includes(query.toLowerCase()) ||
    a.skills.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="max-w-4xl mx-auto">
      <h2 className="text-2xl font-bold mb-4">Tutor Applicants</h2>
      <input placeholder="Search by course or skill" className="w-full p-2 border rounded mb-4" onChange={e => setQuery(e.target.value)} />
      {filtered.map((a, i) => (
        <div key={i} className="bg-white p-4 rounded shadow mb-4">
          <h3 className="font-bold text-lg">{a.course}</h3>
          <p><strong>Role:</strong> {a.role} | <strong>Availability:</strong> {a.availability}</p>
          <p><strong>Skills:</strong> {a.skills}</p>
          <p><strong>Experience:</strong> {a.experience}</p>
          <p><strong>Credentials:</strong> {a.credentials}</p>
        </div>
      ))}
    </div>
  );
};

export default LecturerView;