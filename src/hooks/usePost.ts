import { getPosts } from "@/services/postApi"
import { AxiosError } from "axios"
import useSWR from "swr"
import { useMemo } from "react"
import { PostType } from "@/types/postTypes"
import { useEffect } from "react"
import { setAuthDetails } from "@/services/userApi"

const usePost = () => {
  const POSTS_URL = "/posts"
  const {
    data: posts,
    isLoading: isLoadingPosts,
    error,
  } = useSWR<PostType[]>(POSTS_URL, getPosts, { refreshInterval: 4000 })
  const postError = useMemo(() => {
    return error instanceof AxiosError ? error.message : error
  }, [error])
  useEffect(() => {
    let isMount = true
    isMount && setAuthDetails()
    return () => {
      isMount = false
    }
  }, [])

  return {
    posts,
    isLoadingPosts,
    postError,
  }
}

export default usePost
