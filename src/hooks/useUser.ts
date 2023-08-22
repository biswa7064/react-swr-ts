import { getUserById } from "@/services/userApi"
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
  const {
    data: userById,
    error: userByIdErr,
    isLoading: isUserByIdLoading,
  } = useSWR(["/userById", userDetails?.uid], (args) => getUserById(args[1]), {
    revalidateOnMount: true,
  })
  return {
    userDetails,
    authError,
    isAuthLoading,
    mutateUser,
    userById,
    userByIdErr,
    isUserByIdLoading,
  }
}

export default useUser
