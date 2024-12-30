import React from 'react';
import { Comment } from '../../types';
import { CommentItem } from './CommentItem';

export const CommentList: React.FC<{ comments: Comment[] }> = ({ comments }) => {
  return (
    <div className="space-y-4 mt-6">
      {comments.map(comment => (
        <CommentItem key={comment.id} comment={comment} />
      ))}
    </div>
  );
};