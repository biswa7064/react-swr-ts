import { axiosConfig } from "@/config"
import { PostType } from "@/types/postTypes"

export const getPosts = async (url: string): Promise<PostType[]> => {
  try {
    const resp = await axiosConfig.get(`${url}`)
    const data = resp.data
    return data
  } catch (error) {
    throw error
  }
}

export const updatePost = async (
  url: string,
  { arg }: { arg: Partial<PostType> }
): Promise<PostType> => {
  try {
    await axiosConfig.post(`${url}`, arg)
    return arg as PostType
  } catch (error) {
    throw error
  }
}
