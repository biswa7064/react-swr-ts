"use client"
import PostCard from "@/components/PostCard"
import SwrConfigWrapper from "@/components/SwrConfigWrapper"
import usePost from "@/hooks/usePost"
import { getAuthDetails } from "@/services/userApi"

export default function Home() {
  const { posts, isLoadingPosts } = usePost()

  return (
    <SwrConfigWrapper fetcher={getAuthDetails}>
      <main className="min-h-screen p-16">
        {isLoadingPosts ? (
          <div className="flex min-h-screen justify-center items-center">
            Loading Posts....
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
            {posts?.map((item) => (
              <PostCard item={item} key={item?.id} />
            ))}
          </div>
        )}
      </main>
    </SwrConfigWrapper>
  )
}
