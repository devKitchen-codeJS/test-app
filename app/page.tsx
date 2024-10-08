'use client'
import PostGrid from "@/components/PostGrid";
import { useGetAllPostsQuery } from "@/lib/services/postsApi";

export default function Home() {
  const { data, error, isLoading } = useGetAllPostsQuery();
  if (error) {
    return (
      <div className="p-4 border border-red-300 rounded-lg bg-red-50">
        <h2 className="text-xl font-bold text-red-600">Error</h2>
        <p className="text-red-800">Failed to load posts. Please try again later.</p>
      </div>
    );
  }

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (!data || data.length === 0) {
    return (
      <div className="p-4 border border-gray-300 rounded-lg">
        <h2 className="text-xl font-bold">No posts available.</h2>
      </div>
    );
  }

  return (
    <div>
      <PostGrid posts={data} />
    </div>
  );
}