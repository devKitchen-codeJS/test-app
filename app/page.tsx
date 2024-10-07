"use client";

import PostGrid from "@/components/PostGrid";
import { useGetAllPostsQuery } from "@/lib/services/postsApi";

export default function Home() {
  const { data, error, isLoading } = useGetAllPostsQuery();
  console.log("[data]", data);
  return (
    <div>
      {isLoading ? (
        <div>Loading</div>
      ) : (
        <div>{data && <PostGrid posts={data} />}</div>
      )}
    </div>
  );
}
