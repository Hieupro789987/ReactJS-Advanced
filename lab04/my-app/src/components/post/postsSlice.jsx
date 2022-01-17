import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  { id: 1, title: "First post", content: "Hello" },
  { id: 2, title: "Second post", content: "Wellcome to Redux" },
  { id: 3, title: "Third post", content: "Hello everybody" },
  {
    id: 4,
    title: "Long story",
    content:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorem blanditiis odio, non aspernatur magnam aliquam iste sunt beatae ut totam ipsa libero, eveniet accusamus ipsum, doloremque deserunt autem aut quam nemo vitae consectetur officia molestiae minima! Inventore, sint mollitia quisquam, officia consequuntur voluptates ducimus quia nisi nemo temporibus dolor. Impedit nulla quisquam repudiandae voluptate animi eos veritatis cumque, laborum neque possimus, iste asperiores! Tempora dolores eveniet eum accusamus, eaque qui maiores labore. Incidunt deserunt at aperiam iure, iusto ipsa molestias hic sed harum veritatis dolor laboriosam mollitia aliquid blanditiis? Itaque corporis odit quas? Asperiores porro nisi sit voluptatem ducimus? Fuga.",
  },
];

const postSlice = createSlice({
  name: "post",
  initialState,
  reducers: {
    postAdd(state, action) {
      state.push(action.payload);
    },
  },
});

export const { postAdd } = postSlice.actions;
export default postSlice.reducer;
