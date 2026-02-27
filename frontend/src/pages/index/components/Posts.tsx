import { useState, useEffect } from "react";
import { type Post } from "../../../types/Post";

export default function Posts() {
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    const getPosts = async () => {
      try {
        const response = await fetch(
          "https://lab-2-ecosystems.vercel.app/api/posts",
        );
        const result = await response.json();
        setPosts(result.data || result);
      } catch (error) {
        console.log(error);
      }
    };

    getPosts();
  }, []);

  const handleDelete = async (id: string) => {
    if (!window.confirm("Are u sure that you want to Delete? :(")) return;

    try {
      await fetch(`https://lab-2-ecosystems.vercel.app/api/posts/${id}`, {
        method: "DELETE",
      });
      setPosts(posts.filter((p) => p.id !== id));
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="bg-white min-h-screen">
      <div className="px-12 py-8 flex items-center border-b-2 border-dashed border-blue">
        <h1 className="text-blue text-4xl tracking-tighter">Latest Thoughts</h1>
      </div>

      <div className="grid grid-cols-3 gap-8 p-12">
        {posts.map((post, index) => (
          <div
            key={index}
            className="border-2 border-dashed border-blue p-4 flex flex-col bg-white hover:bg-green/5 transition-colors group"
          >
            <div className="border-2 border-blue bg-green overflow-hidden mb-4">
              <img
                src={post.imageUrl}
                alt={post.title}
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-90 cursor-pointer"
              />
            </div>

            <h2 className="text-blue text-2xl leading-none mb-3">
              {post.title}
            </h2>

            <p className="text-black text-md font-medium leading-tight line-clamp-4 border-t-2 border-dashed border-blue pt-3">
              {post.description}
            </p>
            <button
              onClick={() => handleDelete(post.id)}
              className="mt-4 border-2 border-blue text-blue font-bold py-1 px-4 uppercase text-xs hover:bg-red-500 hover:text-white transition-all cursor-pointer w-fit"
            >
              [ Delete Thought ]
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
