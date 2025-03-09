import React from 'react';

interface SectionTitleProps {
  title: string;
}

const SectionTitle: React.FC<SectionTitleProps> = ({ title }) => {
  return (
    <h3 className="text-lg font-semibold mt-6">{title}</h3>
  );
};

export default SectionTitle;
