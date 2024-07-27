// src/components/ObservableEmbed.tsx
import React from 'react';

const ObservableEmbed: React.FC<{ heigh?: string }> = ({ heigh }: { heigh?: string }) => {
  return (
    <iframe
      width="100%"
      height={heigh || '480'}
      frameBorder="0"
      src="http://localhost:3000"
    ></iframe>
  );
};

export default ObservableEmbed;
