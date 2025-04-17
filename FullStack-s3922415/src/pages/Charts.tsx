import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';
import { getFromLocal } from '../utils/localStorage';

const Charts = () => {
  const data = getFromLocal('tutor_applicants') || [];
  const grouped = data.reduce((acc: any, cur: any) => {
    acc[cur.course] = (acc[cur.course] || 0) + 1;
    return acc;
  }, {});

  const chartData = Object.entries(grouped).map(([course, count]) => ({ course, count }));

  return (
    <div className="max-w-3xl mx-auto p-6">
      <h2 className="text-2xl font-semibold mb-4">Applicant Overview</h2>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={chartData}>
          <XAxis dataKey="course" />
          <YAxis allowDecimals={false} />
          <Tooltip />
          <Bar dataKey="count" fill="#2563EB" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Charts;

