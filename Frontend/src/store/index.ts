import { configureStore } from '@reduxjs/toolkit';
// Import slices here

export const store = configureStore({
  reducer: {
    // Add reducers
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;