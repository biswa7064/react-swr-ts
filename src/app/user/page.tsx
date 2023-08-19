"use client"
import useUser from "@/hooks/useUser"
import React from "react"
import RootLayout from "../layout"

const User = () => {
  const { userDetails, isAuthLoading } = useUser()
  console.log({ userDetails, isAuthLoading })
  return (
    <RootLayout>
      <div>User Details</div>
    </RootLayout>
  )
}

export default User
