import { axiosConfig } from "@/config"

export const getPosts = async (url: string): Promise<any> => {
  try {
    const resp = await axiosConfig.get(`${url}`)
    const data = resp.data
    return data
  } catch (error) {
    throw error
  }
}
