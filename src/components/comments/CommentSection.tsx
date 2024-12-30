import React, { useState } from 'react';
import { CommentList } from './CommentList';
import { CommentForm } from './CommentForm';
import { Comment } from '../../types';

export const CommentSection: React.FC<{ itemId: string }> = ({ itemId }) => {
  const [comments, setComments] = useState<Comment[]>([]);

  const handleAddComment = (newComment: Omit<Comment, 'id' | 'createdAt'>) => {
    const comment: Comment = {
      id: Date.now().toString(),
      ...newComment,
      createdAt: new Date().toISOString(),
      replies: []
    };
    setComments(prev => [comment, ...prev]);
  };

  return (
    <div className="mt-8">
      <h2 className="text-2xl font-semibold mb-4">Comments</h2>
      <CommentForm onSubmit={handleAddComment} />
      <CommentList comments={comments} />
    </div>
  );
};