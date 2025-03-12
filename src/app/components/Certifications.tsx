import { Certification } from '../types/datatypes';

interface CertificationsProps {
  data: Certification[];
}

export default function Certifications({ data }: CertificationsProps) {
  if (!data || data.length === 0) return null;

  return (
    <div className="mb-8">
      <h2 className="text-lg font-semibold mb-4">CERTIFICATIONS</h2>
      <div className="space-y-4">
        {data.map((cert) => (
          <div key={cert.id} className="border-b border-gray-200 pb-4 last:border-0">
            <h3 className="font-medium text-base">{cert.title}</h3>
            <p className="text-sm text-gray-600 mb-1">{cert.organization}</p>
            <p className="text-sm text-gray-500">{cert.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
} 