import React, { useState } from 'react';
import { Comment } from '../../types';
import { CommentForm } from './CommentForm';
import { User, MessageSquare, ThumbsUp } from 'lucide-react';

export const CommentItem: React.FC<{ comment: Comment }> = ({ comment }) => {
  const [showReplyForm, setShowReplyForm] = useState(false);
  const [likes, setLikes] = useState(0);

  return (
    <div className="backdrop-blur-md bg-white/5 rounded-lg p-4 border border-white/10">
      <div className="flex items-start space-x-3">
        <div className="flex-shrink-0">
          <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
            <User className="w-6 h-6" />
          </div>
        </div>
        <div className="flex-grow">
          <div className="flex items-center space-x-2">
            <span className="font-medium">{comment.author}</span>
            <span className="text-sm text-gray-400">
              {new Date(comment.createdAt).toLocaleDateString()}
            </span>
          </div>
          <p className="mt-1">{comment.content}</p>
          <div className="flex items-center space-x-4 mt-2">
            <button
              onClick={() => setLikes(prev => prev + 1)}
              className="flex items-center space-x-1 text-sm hover:text-white/80"
            >
              <ThumbsUp className="w-4 h-4" />
              <span>{likes}</span>
            </button>
            <button
              onClick={() => setShowReplyForm(!showReplyForm)}
              className="flex items-center space-x-1 text-sm hover:text-white/80"
            >
              <MessageSquare className="w-4 h-4" />
              <span>Reply</span>
            </button>
          </div>
          {showReplyForm && (
            <div className="mt-4">
              <CommentForm
                onSubmit={(data) => {
                  // Handle reply
                  setShowReplyForm(false);
                }}
                isReply
              />
            </div>
          )}
          {comment.replies && comment.replies.length > 0 && (
            <div className="ml-8 mt-4 space-y-4">
              {comment.replies.map(reply => (
                <CommentItem key={reply.id} comment={reply} />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};