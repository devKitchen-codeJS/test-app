import { Post } from "@/lib/types/postsTypes";
import PostCard from "./PostCard";

interface PostGridProps {
  posts: Post[];
  error?: string;
}

const PostGrid: React.FC<PostGridProps> = ({ posts, error }) => {
  if (error) {
    return (
      <div className='my-7 p-4 border border-red-300 rounded-lg bg-red-50'>
        <h2 className='text-xl font-bold text-red-600'>Error</h2>
        <p className='text-red-800'>{error}</p>
      </div>
    );
  }

  if (posts.length === 0) {
    return (
      <div className='my-7 p-4 border border-gray-300 rounded-lg'>
        <h2 className='text-xl font-bold'>No posts available.</h2>
      </div>
    );
  }

  return (
    <div className='my-7 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
      {posts.map((post) => (
        <PostCard
          key={post.id}
          title={post.title}
          body={post.body}
          id={post.id}
        />
      ))}
    </div>
  );
};

export default PostGrid;
