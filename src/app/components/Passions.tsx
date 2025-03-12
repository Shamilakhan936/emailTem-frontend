import { Passion } from '../types/datatypes';

interface PassionsProps {
  data: Passion[];
}

export default function Passions({ data }: PassionsProps) {
  if (!data || data.length === 0) return null;

  return (
    <div className="mb-8">
      <h2 className="text-lg font-semibold mb-4">INTERESTS & PASSIONS</h2>
      <div className="space-y-4">
        {data.map((passion) => (
          <div key={passion.id} className="border-b border-gray-200 pb-4 last:border-0">
            <h3 className="font-medium text-base">{passion.title}</h3>
            <p className="text-sm text-gray-500">{passion.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
} 