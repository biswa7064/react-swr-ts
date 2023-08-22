import { UserType } from "@/types/userTypes"
import React, { FC } from "react"
import { KeyedMutator } from "swr"

const Header: FC<{
  auth: UserType
  mutate: KeyedMutator<UserType>
}> = ({ auth, mutate }) => {
  const handleLogout = async () => {
    await localStorage.removeItem("user")
    mutate({ ...auth, uid: undefined })
  }
  return (
    <div className="w-full p-4">
      <button
        className={`px-3 py-1 bg-cyan-500 rounded-md hover:shadow-md hover:shadow-cyan-300 font-bold float-right ${
          auth?.uid ? "" : "hidden"
        }`}
        onClick={handleLogout}
      >
        LOGOUT
      </button>
    </div>
  )
}

export default Header
