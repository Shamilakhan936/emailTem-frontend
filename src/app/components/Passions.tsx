import { Passion } from '../types/datatypes';

interface PassionsProps {
  data: Passion[];
}

export default function Passions({ data }: PassionsProps) {
  if (!data || data.length === 0) return null;

  return (
    <div>
      <div className="space-y-4">
        {data.map((passion) => (
          <div key={passion.id} className="mb-4">
            <h3 className="font-medium text-white">{passion.title}</h3>
            <p className="text-sm text-white">{passion.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
} 