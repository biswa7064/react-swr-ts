import { UserType } from "@/types/userTypes"

export const getAuthDetails = async (): Promise<UserType> => {
  const localData = localStorage.getItem("user") as string
  const response = JSON.parse(localData)
  if (!response) {
    throw new Error("No details found...")
  }
  return response
}
