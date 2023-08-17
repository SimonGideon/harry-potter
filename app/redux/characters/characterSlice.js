import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const BASE_API = "https://hp-api.onrender.com/api";

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

  const characterSlice = createSlice({});
  