import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  topicDetail: "null",
};

// Config slice
export const topicSlice = createSlice({
  name: "topic",
  initialState,
  reducers: {
    updateTopicDetail: (state, action) => {
      state.topicDetail = action.payload || initialState.lessonDetail;
    },
  },
});

// Export actions
export const { updateTopicDetail } = topicSlice.actions;

export const selectTopic = (state) => state.topic.topicDetail;

// Export reducer
export default topicSlice.reducer;
