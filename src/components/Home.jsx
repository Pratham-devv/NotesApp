import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";
import { addInPastes, updateInPastes } from "../redux/pasteSlice";
import { format } from "date-fns";

const Home = () => {
  const [title, setTitle] = useState("");
  const [value, setValue] = useState("");
  const [seachParams, setSearchParams] = useSearchParams();
  const pasteId = seachParams.get("pasteId");
  const dispatch = useDispatch();
  const allPastes = useSelector((state) => state.paste.pastes);

  useEffect(() => {
    if (pasteId) {
      const paste = allPastes.find((p) => p._id === pasteId);
      setTitle(paste.title);
      setValue(paste.content);
    }
  }, [pasteId]);

  const date = format(new Date(), "PPpp");

  function createPaste() {
    if (!title.trim() || !value.trim()) {
      alert("Title and Content cannot be empty!");
      return;
    } else {
      const paste = {
        title: title,
        content: value,
        _id: pasteId || Date.now().toString(36),
        createdAt: date,
      };

      if (pasteId) {
        dispatch(updateInPastes(paste));
      } else {
        dispatch(addInPastes(paste));
      }

      setTitle("");
      setValue("");
      setSearchParams({});
    }
  }

  return (
    <div className="flex flex-col gap-2 w-screen items-center justify-center">
      <div className="w-full flex justify-center gap-1">
        <input
          type="text"
          placeholder="Enter title here"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="md:w-[69%] w-[60%] rounded-2xl text-xl hover:border-blue-600 border-3 bg-gray-800 text-gray-300 placeholder-gray-400"
        />

        <button
          onClick={createPaste}
          className="rounded-2xl bg-gray-600 hover:border-amber-50 border-0 hover:border-2 text-gray-100"
        >
          {pasteId ? "Update Paste" : "Create Paste"}
        </button>
      </div>

      <div className="w-full flex justify-center">
        <textarea
          className="text-xl w-3/4 rounded-2xl bg-slate-800 text-gray-300 placeholder-gray-400 border-gray-700"
          value={value}
          placeholder="Enter content here"
          onChange={(e) => setValue(e.target.value)}
          rows={10}
        ></textarea>
      </div>
    </div>
  );
};

export default Home;
