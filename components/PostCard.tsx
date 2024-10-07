"use client";
import { Post } from "@/lib/types/postsTypes";
import { useState } from "react";

interface PostCardProps extends Post {
  error?: string; 
}

const PostCard: React.FC<PostCardProps> = ({ title, body, id, error }) => {
  const [isHovered, setIsHovered] = useState<boolean>(false);

  const truncateText = (text: string, length: number): string => {
    return text?.length > length ? text.slice(0, length) + "..." : text;
  };

  if (error) {
    return (
      <div className='relative p-6 border border-red-300 rounded-lg bg-red-50'>
        <h2 className='text-xl font-bold text-red-600'>Error</h2>
        <p className='text-red-800'>{error}</p>
      </div>
    );
  }

  return (
    <div
      className='relative p-6 border border-gray-300 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300'
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}>
      <h2 className='text-xl font-bold uppercase mb-2'>{title}</h2>
      <p className='text-gray-700 mb-4'>{truncateText(body, 100)}</p>

      {isHovered && (
        <div className='absolute inset-0 flex items-center justify-center bg-black bg-opacity-70 text-white text-lg font-semibold transition-opacity duration-300'>
          <a href={`/pages/posts/${id}`} className='text-blue-600 mt-4 inline-block'>
            Learn more
          </a>
        </div>
      )}
    </div>
  );
};

export default PostCard;