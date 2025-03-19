import { createSlice } from '@reduxjs/toolkit'
import toast from 'react-hot-toast';

const initialState = {
  pastes:localStorage.getItem("pastes") 
  ?  JSON.parse(localStorage.getItem("pastes"))
  : []
  
}

export const pasteSlice = createSlice({
  name: 'paste',
  initialState,
  reducers: {
    addInPastes: (state,action) => {
      const paste = action.payload;

      state.pastes.push(paste);
      localStorage.setItem("pastes",JSON.stringify(state.pastes));
      toast.success("Paste created successfully");
    },
    updateInPastes: (state,action) => {
      const paste = action.payload;
      const index = state.pastes.findIndex((item)=>item._id === paste._id);

      if(index>=0){
        state.pastes[index]= paste;
        localStorage.setItem("pastes", JSON.stringify(state.pastes));

        toast.success("Paste Updated");
      }
      
    },
    resetAllPastes: (state,action) => {
      state.pastes=[];
      localStorage.removeItem("pastes")
    },
    removeFromPastes: (state,action) => {
      const paste = action.payload
      console.log(paste);

      const index = state.pastes.findIndex((item)=>item._id === paste);

      if(index>=0){
        state.pastes.splice(index,1);

        localStorage.setItem("pastes",JSON.stringify(state.pastes))

        toast.success("Paste deleted")
      }
    },
  },
})

export const { addInPastes, removeFromPastes, updateInPastes, resetAllPastes } = pasteSlice.actions

export default pasteSlice.reducer