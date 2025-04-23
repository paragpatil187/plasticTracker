import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ActivityItem } from "../components/EcoTracker";

interface EcoState {
  points: number;
  items: ActivityItem[];
  currentItem: string;
  usageDate: string;
}

const initialState: EcoState = {
  points: 0,
  items: [],
  currentItem: "",
  usageDate: new Date().toISOString().split("T")[0],
};

const ecoSlice = createSlice({
  name: "eco",
  initialState,
  reducers: {
    addItem: (state, action: PayloadAction<ActivityItem>) => {
      state.items.unshift(action.payload);
      state.points += action.payload.points;
      state.currentItem = "";
    },
    setCurrentItem: (state, action: PayloadAction<string>) => {
      state.currentItem = action.payload;
    },
    setUsageDate: (state, action: PayloadAction<string>) => {
      state.usageDate = action.payload;
    },
  },
});

export const { addItem, setCurrentItem, setUsageDate } = ecoSlice.actions;
export default ecoSlice.reducer;
