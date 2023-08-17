import { getPosts } from "@/services/postApi"
import { AxiosError } from "axios"
import useSWR, { Fetcher } from "swr"
import { useMemo } from "react"
import { PostType } from "@/types/postTypes"

const usePost = () => {
  const POSTS_URL = "/posts"
  const {
    data: posts,
    isLoading: isLoadingPosts,
    error,
  } = useSWR<PostType[]>(POSTS_URL, getPosts)
  const postError = useMemo(() => {
    return error instanceof AxiosError ? error.message : error
  }, [error])
  console.log({ posts, isLoadingPosts, postError })
  return {
    posts,
    isLoadingPosts,
    postError,
  }
}

export default usePost
