import { getPosts, updatePost } from "@/services/postApi"
import { AxiosError } from "axios"
import useSWR from "swr"
import { useMemo } from "react"
import { PostType } from "@/types/postTypes"
import { useEffect } from "react"
import { setAuthDetails } from "@/services/userApi"
import useSWRMutation from "swr/mutation"

const usePost = () => {
  const POSTS_URL = "/posts"
  const {
    data: posts,
    isLoading: isLoadingPosts,
    error,
    mutate: handleGetPosts,
  } = useSWR<PostType[]>(POSTS_URL, getPosts, { refreshInterval: 4000 })
  const {
    trigger: handlePostUpdate,
    isMutating: isPostUpdating,
    data: updatedPost,
  } = useSWRMutation(POSTS_URL, updatePost, {
    revalidate: false,
  })
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
    isPostUpdating,
    handlePostUpdate,
    updatedPost,
    handleGetPosts,
  }
}

export default usePost
