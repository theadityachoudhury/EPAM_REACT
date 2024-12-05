import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Course } from "./types";

interface CoursesState {
    courses: Course[];
    loading: boolean;
}

const initialState: CoursesState = {
    courses: [],
    loading: true,
};

const coursesSlice = createSlice({
    name: "courses",
    initialState,
    reducers: {
        setCourses: (state, action: PayloadAction<Course[]>) => {
            state.courses = action.payload;
        },
        addCourse: (state, action: PayloadAction<Course>) => {
            state.courses.push(action.payload);
        },
        deleteCourse: (state, action: PayloadAction<string>) => {
            state.courses = state.courses.filter(course => course.id !== action.payload);
        },
        setLoading: (state, action: PayloadAction<boolean>) => {
            state.loading = action.payload;
        }

    },
});

export const { setCourses, addCourse, deleteCourse, setLoading } = coursesSlice.actions;

export default coursesSlice.reducer;
