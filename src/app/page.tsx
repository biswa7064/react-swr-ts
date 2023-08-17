"use client"
import usePost from "@/hooks/usePost"
import Image from "next/image"

export default function Home() {
  const { posts, isLoadingPosts } = usePost()

  return (
    <main className="min-h-screen p-16">
      {isLoadingPosts ? (
        <div className="flex min-h-screen justify-center items-center">
          Loading Posts....
        </div>
      ) : (
        <div className="grid grid-cols-2 gap-2">
          {posts?.map((item) => (
            <div
              key={item?.id}
              className="p-2 rounded-lg m-2 text-left shadow shadow-gray-600 min-h-[5rem]"
            >
              <h1 className="text-[1.5rem] my-1 text-cyan-200">
                {item?.title}
              </h1>
              <h3>{item?.body}</h3>
            </div>
          ))}
        </div>
      )}
    </main>
  )
}
