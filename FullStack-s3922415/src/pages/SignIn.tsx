import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { validateEmail, validatePassword } from '../utils/validators';
import { saveToLocal } from '../utils/localStorage';

const SignIn = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateEmail(email)) return setError('Invalid email address.');
    if (!validatePassword(password)) return setError('Password must be 8+ chars with letters and numbers.');
    saveToLocal('user', { email, password });
    setSuccess(true);
    setTimeout(() => navigate('/tutor'), 1500);
  };

  return (
    <div className="max-w-md mx-auto bg-white p-6 rounded-lg shadow">
      <h2 className="text-2xl font-semibold mb-4">Sign In</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" className="w-full p-2 border rounded" />
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" className="w-full p-2 border rounded" />
        {error && <p className="text-red-500 text-sm">{error}</p>}
        {success && <p className="text-green-500 text-sm">Login successful!</p>}
        <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">Sign In</button>
      </form>
    </div>
  );
};

export default SignIn;