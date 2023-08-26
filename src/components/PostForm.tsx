import usePost from "@/hooks/usePost"
import { PostType } from "@/types/postTypes"
import React, { ChangeEvent, useState } from "react"

const PostForm = () => {
  const {
    handlePostUpdate,
    isPostUpdating,
    updatedPost,
    handleGetPosts,
    posts,
  } = usePost()
  const [post, setPost] = useState<Partial<PostType>>({
    title: "",
    body: "",
  })
  const onChange = (
    ev: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setPost((pre) => ({
      ...pre,
      [ev.target.name]: ev.target.value,
    }))
  }

  const callUpdatePost = async (postToUpdate: Partial<PostType>) => {
    await handlePostUpdate(postToUpdate)
    await handleGetPosts()
  }

  console.log({ isPostUpdating, posts })
  return (
    <div className="flex flex-col gap-2 p-2 justify-start">
      <label htmlFor="title">Title</label>
      <input
        type="text"
        name="title"
        className="p-3 rounded-sm border-1 border-cyan-300 outline-none text-black"
        onChange={onChange}
      />
      <label htmlFor="body">Description</label>
      <textarea
        name="body"
        className="p-3 rounded-sm border-1 border-cyan-300 outline-none text-black"
        minLength={4}
        onChange={onChange}
      />
      <button
        className="bg-cyan-300 w-cover px-6 py-2 rounded-md hover:bg-cyan-400 my-2"
        onClick={() =>
          callUpdatePost({
            ...post,
            userId: new Date().getTime(),
          })
        }
      >
        POST
      </button>
    </div>
  )
}

export default PostForm
