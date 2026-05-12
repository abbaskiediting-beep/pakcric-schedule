import React from 'react';
import ShareButton from './ShareButton';

interface BlogShareProps {
  title: string;
  summary?: string;
}

export const BlogShare: React.FC<BlogShareProps> = ({ title, summary }) => {
  return (
    <div className="fixed bottom-8 right-8 z-50 flex flex-col items-end gap-3">
      <ShareButton 
        title={title}
        text={summary || title}
        url={window.location.href}
        variant="filled"
        className="!p-0"
      />
    </div>
  );
};
