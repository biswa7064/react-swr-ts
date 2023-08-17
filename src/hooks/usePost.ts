import { getPosts } from "@/services/postApi"
import { AxiosError } from "axios"
import useSWR from "swr"
import { useMemo } from "react"
import { PostType } from "@/types/postTypes"

const usePost = () => {
  const {
    data: posts,
    isLoading: isLoadingPosts,
    error,
  } = useSWR<PostType[]>("/post", getPosts)
  const postError = useMemo(() => {
    return error instanceof AxiosError ? error.message : error
  }, [error])

  return {
    posts,
    isLoadingPosts,
    postError,
  }
}

export default usePost
