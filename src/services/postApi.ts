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
