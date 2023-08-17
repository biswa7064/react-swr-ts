import { axiosConfig } from "@/config"

export const getPosts = async (): Promise<any> => {
  try {
    const resp = await axiosConfig.get("/posts")
    const data = resp.data
    return data
  } catch (error) {
    throw error
  }
}
