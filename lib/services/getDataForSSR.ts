import { Post } from "@/lib/types/postsTypes";
import { Comment } from "@/lib/types/commentTypes";

const apiURL = process.env.NEXT_PUBLIC_BASE_URL;

export const fetchPostById = async (id: string): Promise<Post> => {
  const postRes = await fetch(`${apiURL}/posts/${id}`);
  if (!postRes.ok) {
    throw new Error(`Error fetching post: ${postRes.statusText}`);
  }
  return await postRes.json();
};

export const fetchCommentsByPostId = async (id: string): Promise<Comment[]> => {
  const commentsRes = await fetch(`${apiURL}/posts/${id}/comments`);
  if (!commentsRes.ok) {
    throw new Error(`Error fetching comments: ${commentsRes.statusText}`);
  }
  return await commentsRes.json();
};
