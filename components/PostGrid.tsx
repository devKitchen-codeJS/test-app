import { Post } from "@/lib/types/postsTypes";
import PostCard from "./PostCard";

interface PostGridProps {
  posts: Post[];
}

const PostGrid: React.FC<PostGridProps> = ({ posts }) => {
  return (
    <div className='grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
      {posts.map((post, index) => (
        <PostCard
          key={index}
          title={post.title}
          body={post.body}
          id={post.id}
        />
      ))}
    </div>
  );
};

export default PostGrid;
