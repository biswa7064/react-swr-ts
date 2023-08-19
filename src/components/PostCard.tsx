import { PostType } from "@/types/postTypes"
import React, { FC } from "react"

const PostCard: FC<{ item: PostType }> = ({ item }) => {
  return (
    <div className="p-2 rounded-lg m-2 text-left shadow shadow-gray-600 hover:shadow-lg hover:shadow-gray-300 transition-all delay-150 min-h-[5rem]">
      <h1 className="text-[1.5rem] my-1 text-cyan-200">{item?.title}</h1>
      <h3>{item?.body}</h3>
    </div>
  )
}

export default PostCard
