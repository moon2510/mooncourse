import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  courseDetail: "null",
};

// Config slice
export const courseSlice = createSlice({
  name: "course",
  initialState,
  reducers: {
    updateCourseDetail: (state, action) => {
      state.courseDetail = action.payload || initialState.courseDetail;
    },
    
  }
});

// Export actions
export const { updateCourseDetail } = courseSlice.actions;

export const selectCourse= state => state.course.courseDetail;

// Export reducer
export default courseSlice.reducer;
