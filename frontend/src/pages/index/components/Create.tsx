import { useState } from "react";
import { postState, type createPost } from "../../../types/Post";
import { SquarePen, Trophy } from "lucide-react";

export default function Create() {
  const [postData, setPostData] = useState<createPost>(postState);

  const submit = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    if (
      !postData.title.trim() ||
      !postData.description.trim() ||
      !postData.imageUrl.trim()
    ) {
      alert("Um, this is awkward. Please fill all the spaces");
      return;
    }
    try {
      const response = await fetch("http://localhost:1234/api/posts", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(postData),
      });

      if (response.ok) {
        setPostData({ title: "", description: "", imageUrl: "" } as createPost);
        alert("Your thought is in the Internet!");
        location.reload();
      } else {
        alert("Ups, we failed creating your thought.");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex min-h-18 bg-white gap-12">
      <div className="py-12 pl-12 w-1/2 flex flex-col justify-center">
        <div className="flex items-center mb-4 gap-2">
          <Trophy size={24} strokeWidth={2.5} className="text-blue " />
          <h2 className="text-4xl text-blue ">AWKWARDLY HALF OF FAME</h2>
        </div>
        <div className="border-2 border-dashed border-blue p-2 bg-green">
          <div className="aspect-video w-full bg-blue/10 flex items-center justify-center">
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/PFPzsrA7QPk"
              title="New York’s Underground Subway Wrestling Scene | Gatherings"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
          </div>
        </div>

        <p className="mt-4 text-blue  tracking-tight">
          "New York’s Underground Subway Wrestling Scene | Gatherings"
          <span className="italic font-semibold"> by VICE</span>
        </p>
      </div>

      <div className="py-12 pr-12  w-1/2 justify-center">
        <div className="flex items-center mb-4 gap-2">
          <SquarePen size={24} strokeWidth={2.5} className="text-blue " />
          <h2 className="text-4xl text-blue ">CREATE A NEW THOUGHT</h2>
        </div>
        <div className="w-full bg-white border-2 border-dashed border-blue p-6 ">
          <input
            type="text"
            placeholder="YOUR THOUGHT"
            value={postData.title}
            onChange={(e) =>
              setPostData({ ...postData, title: e.target.value })
            }
            className="w-full text-2xl font-bold text-blue outline-none mb-4 placeholder-gray-400"
          />

          <textarea
            placeholder="WHAT ELSE DO YOU HAVE TO SAY?"
            value={postData.description}
            onChange={(e) =>
              setPostData({ ...postData, description: e.target.value })
            }
            className="w-full text-xl text-black outline-none resize-none h-24 placeholder-black-400"
          />

          <input
            type="text"
            placeholder="imageUrl"
            value={postData.imageUrl}
            onChange={(e) =>
              setPostData({ ...postData, imageUrl: e.target.value })
            }
            className="w-full text-blue font-semibold hover:underline outline-none placeholder:text-gray-400 mb-6 border-b-2 border-dashed border-blue pb-2"
          />

          <button
            onClick={submit}
            className="bg-blue px-8 py-2 hover:bg-green group transition-all duration-700 cursor-pointer"
          >
            <h2 className="text-white group-hover:text-blue text-xl transition-all duration-700">
              Share your thought
            </h2>
          </button>
        </div>
      </div>
    </div>
  );
}
