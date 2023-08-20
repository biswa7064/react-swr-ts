import { axiosConfig } from "@/config"
import { UserType } from "@/types/userTypes"

export const getAuthDetails = async (): Promise<UserType> => {
  const localData = (await localStorage.getItem("user")) as string
  const response = JSON.parse(localData)
  if (!response) {
    throw new Error("No details found...")
  }
  return response
}
export const setAuthDetails = async () => {
  await localStorage.setItem(
    "user",
    JSON.stringify({ email: "test.user@gmail.com", uid: 2 })
  )
}

export const getUserById = async (id: number | undefined): Promise<any> => {
  try {
    if (!id) throw new Error("No uid found")
    const response = (await axiosConfig.get(`/users/${id}`)).data
    return response
  } catch (error) {
    throw error
  }
}
