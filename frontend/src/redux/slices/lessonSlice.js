import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  lessonDetail: "null",
};

// Config slice
export const lessonSlice = createSlice({
  name: "lesson",
  initialState,
  reducers: {
    updateLessonDetail: (state, action) => {
      state.lessonDetail = action.payload || initialState.lessonDetail;
    },
  }
});

// Export actions
export const { updateLessonDetail } = lessonSlice.actions;

export const selectLesson= state => state.lesson.lessonDetail;

// Export reducer
export default lessonSlice.reducer;
