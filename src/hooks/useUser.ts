import { UserType } from "@/types/userTypes"
import useSWR from "swr"

const useUser = () => {
  const {
    data,
    error: authError,
    isLoading: isAuthLoading,
    mutate: mutateUser,
  } = useSWR<UserType>("/user")
  const userDetails = data as UserType
  return { userDetails, authError, isAuthLoading, mutateUser }
}

export default useUser
