import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const BASE_API = "https://hp-api.onrender.com/api";



const initialState = {
    data: [],
    selectedCharacter: {},
    isLoading: false,
    status: null,
  };

export const fetchCharacters = createAsyncThunk(
    "characters/fetchCharacters",
    async () => {
      try {
        const response = await axios.get(`${BASE_API}/characters`);
        return response.data;
      } catch (error) {
        throw new Error("Failed to fetch data");
      }
    }
  );

  export const fetchCharacterById = createAsyncThunk(
    "characters/fetchCharacterById",
    async (id) => {
      try {
          const response = await axios(`${BASE_API}/character/${id}`, {});
          return response.data;
      } catch (error) {
          throw new Error("Failed to fetch data");
      }
    }
  );

const characterSlice = createSlice({
    name: "characters",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
      builder
        .addCase(fetchCharacters.pending, (state) => ({
          ...state, 
          isLoading: true,
        }))
        .addCase(fetchCharacters.fulfilled, (state, action) => ({
          ...state, 
          data: action.payload,
          isLoading: false,
        }))
        .addCase(fetchCharacters.rejected, (state, action) => ({
          ...state, 
          isLoading: false,
          error: action.error.message,
        }))
        .addCase(fetchCharacterById.pending, (state) => ({
          ...state,
          isLoading: true,
        }))
        .addCase(fetchCharacterById.fulfilled, (state, action) => ({
          ...state,
          selectedCharacter: action.payload,
          isLoading: false,
        }))
        .addCase(fetchCharacterById.rejected, (state, action) => ({
          ...state,
          isLoading: false,
          error: action.error.message,
        }));
    },
  });
  

export default characterSlice.reducer;
