import { Post } from "@/lib/types/postsTypes";
import { Comment } from "@/lib/types/commentTypes";
import { fetchCommentsByPostId, fetchPostById } from "@/lib/services/getDataForSSR";

interface PostPageProps {
  params: {
    id: string;
  };
}

const PostPage = async ({ params }: PostPageProps) => {
  const { id } = params;

  try {
    const post: Post = await fetchPostById(id);
    const comments: Comment[] = await fetchCommentsByPostId(id);

    return (
      <div className='container mx-auto p-4'>
        <h1 className='text-3xl font-bold'>{post.title}</h1>
        <p className='mt-4'>{post.body}</p>

        <h2 className='text-2xl font-semibold mt-8'>Comments</h2>
        <ul className='mt-4 space-y-4'>
          {comments.length > 0 ? (
            comments.map((comment) => (
              <li key={comment.id} className='border p-4 rounded-lg'>
                <h3 className='font-bold'>{comment.name}</h3>
                <p>{comment.body}</p>
                <p className='text-sm text-gray-600'>By: {comment.email}</p>
              </li>
            ))
          ) : (
            <li className='border p-4 rounded-lg'>No comments available.</li>
          )}
        </ul>

        <a href='/' className='text-blue-600 mt-4 inline-block'>
          Back to posts
        </a>
      </div>
    );
  } catch (error: any) {
    return (
      <div className='container mx-auto p-4'>
        <h1 className='text-3xl font-bold'>Error</h1>
        <p className='mt-4'>
          {error.message || "Something went wrong while fetching the post."}
        </p>
        <a href='/' className='text-blue-600 mt-4 inline-block'>
          Back to posts
        </a>
      </div>
    );
  }
};

export default PostPage;
