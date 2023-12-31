"use client"
import Header from "@/components/Header"
import PostCard from "@/components/PostCard"
import usePost from "@/hooks/usePost"
import useUser from "@/hooks/useUser"
import RootLayout from "./layout"
import PostForm from "@/components/PostForm"

export default function Home() {
  const { posts, isLoadingPosts } = usePost()
  const { userDetails, mutateUser, isUserByIdLoading, isAuthLoading } =
    useUser()
  const isLoading = isLoadingPosts || isAuthLoading
  return (
    <RootLayout>
      <Header auth={userDetails} mutate={mutateUser} />
      <div className="my-2 w-[50%] p-16">
        <PostForm />
      </div>
      <main className="min-h-screen p-16">
        {isLoading ? (
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
    </RootLayout>
  )
}
