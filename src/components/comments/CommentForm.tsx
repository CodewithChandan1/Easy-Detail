import React, { useState } from 'react';

interface CommentFormProps {
  onSubmit: (data: { author: string; content: string }) => void;
  isReply?: boolean;
}

export const CommentForm: React.FC<CommentFormProps> = ({ onSubmit, isReply }) => {
  const [content, setContent] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (content.trim()) {
      onSubmit({
        author: 'Anonymous User',
        content: content.trim()
      });
      setContent('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-3">
      <textarea
        value={content}
        onChange={(e) => setContent(e.target.value)}
        placeholder={isReply ? "Write a reply..." : "Write a comment..."}
        className="w-full px-4 py-2 rounded-lg backdrop-blur-md bg-white/5 border border-white/20 focus:outline-none focus:ring-2 focus:ring-white/30 resize-none"
        rows={isReply ? 2 : 3}
      />
      <button
        type="submit"
        className="px-4 py-2 rounded-lg bg-white/10 hover:bg-white/20 transition-colors"
      >
        {isReply ? 'Reply' : 'Comment'}
      </button>
    </form>
  );
};