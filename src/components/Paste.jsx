import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeFromPastes } from "../redux/pasteSlice";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";

const Paste = () => {
  const pastes = useSelector((state) => state.paste.pastes);
  const [searchPaste, setSearchPaste] = useState("");
  const dispatch = useDispatch();

  const baseUrl = window.location.origin;
  const sharePaste = (pasteId) => {
    const shareLink = `${baseUrl}/paste/${pasteId}`;
    navigator.clipboard.writeText(shareLink);
    alert("Share link copied: " + shareLink);
  };

  const filteredData = pastes.filter((paste) =>
    paste.title.toLowerCase().includes(searchPaste.toLowerCase())
  );

  function handleDelete(pasteId) {
    dispatch(removeFromPastes(pasteId));
  }
  // function handleEdit(pasteId){
  //   dispatch(updateInPastes(pasteId))
  //   toast.success("Paste Updated")
  // }

  // function handleCopy (e){
  //   navigator.clipboard.writeText(e)
  //   toast.success("Copied to clipboard")
  // }

  return (
    <div className="w-full flex flex-col items-center gap-5">
      <div className="w-[80%] ">
        <input
          className="w-full rounded-2xl text-xl hover:border-blue-600 border-3"
          type="search"
          placeholder="Search title here"
          value={searchPaste}
          onChange={(e) => setSearchPaste(e.target.value)}
        />
      </div>

      <div className="w-3/4 justify-center">
        <h1 className="text-3xl font-bold text-gray-300 border rounded-t-2xl border-gray-900 p-3">
          All Pastes
        </h1>
        {filteredData.length > 0 ? (
          <div className="flex flex-col  gap-2 w-full border-gray-900 rounded-b-2xl border  p-3">
            {filteredData.map((paste) => (
              <div
                className="border flex flex-col md:flex-row justify-between  md:p-4 pt-4  rounded-2xl text-gray-200 hover:scale-103 duration-300  gap-7"
                key={paste?._id}
              >
                <div className="md:flex md:flex-col md:gap-2  md:justify-between flex flex-col gap-2 pl-2 md:p-0 ">
                  <p className=" text-3xl font-bold cursor-default block underline ">
                    {paste.title}
                  </p>
                  <p className="w-full md:w-fit">
                    {paste.content}
                  </p>
                  
                  
                   
                  
                </div>

                <div
                  className="flex md:flex-col flex-row justify-between items-end cursor-default md:border-none border-t rounded-b-2xl p-1"
                  key={paste._id}
                >
                  <div className="pt-0.5  ">
                    <button className="rounded-2xl bg-gray-600 hover:border-amber-50 border-0 hover:border-2 text-gray-100 max-h-6 min-w-fit">
                      <Link to={`/pastes/${paste?._id}`}>View</Link>
                    </button>
                    <button className="rounded-2xl bg-gray-600 hover:border-amber-50 border-0 hover:border-2 text-gray-100 max-h-6 min-w-fit">
                      <Link to={`/?pasteId=${paste?._id}`}>Edit</Link>
                    </button>
                    <button
                      className="rounded-2xl bg-gray-600  hover:border-amber-50 border-0 hover:border-2 cursor-pointer text-gray-100 max-h-6 min-w-fit"
                      onClick={() => {
                        navigator.clipboard.writeText(paste?.content);
                        toast.success("Copied to clipboard");
                      }}
                    >
                      Copy
                    </button>
                    <button
                      className="rounded-2xl bg-gray-600  hover:border-amber-50 border-0 hover:border-2 cursor-pointer text-gray-100 max-h-6 min-w-fit"
                      onClick={() => sharePaste(paste._id)}
                    >
                      Share
                    </button>
                    <button
                      className="rounded-2xl bg-gray-600  hover:border-amber-50 border-0 hover:border-2 text-gray-100 cursor-pointer max-h-6 min-w-fit"
                      onClick={() => handleDelete(paste?._id)}
                    >
                      Delete
                    </button>
                  </div>

                  <small>{paste.createdAt}</small>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <p> No pastes found</p>
        )}
      </div>
    </div>
  );
};

export default Paste;
