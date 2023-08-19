import { UserType } from "@/types/userTypes"
import useSWR from "swr"

const useUser = () => {
  const {
    data: userDetails,
    error: authError,
    isLoading: isAuthLoading,
  } = useSWR<UserType>("/user")
  return { userDetails, authError, isAuthLoading }
}

export default useUser
