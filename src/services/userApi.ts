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
    JSON.stringify({ email: "test.user@gmail.com" })
  )
}
