import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { fetchPackages } from '../../services/endpoints/packages';
import type { Package } from '../../features/packages/types';

interface PackagesState {
  items: Package[];
  loading: boolean;
}

const initialState: PackagesState = {
  items: [],
  loading: false,
};

export const loadPackages = createAsyncThunk('packages/load', async () => {
  const response = await fetchPackages();
  return response.data;
});

const packagesSlice = createSlice({
  name: 'packages',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(loadPackages.pending, (state) => { state.loading = true; })
      .addCase(loadPackages.fulfilled, (state, action) => {
        state.items = action.payload;
        state.loading = false;
      });
  },
});

export default packagesSlice.reducer;