"use client";

import PostGrid from "@/components/PostGrid";
import { useGetAllPostsQuery } from "@/lib/services/postsApi";
import { Post } from "@/lib/types/postsTypes";
import { useEffect, useState } from "react";

export default function Home() {
  const { data, error, isLoading } = useGetAllPostsQuery();
console.log('[data]', data)
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
