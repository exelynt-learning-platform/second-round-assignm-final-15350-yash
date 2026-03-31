import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { sendMessageToApi } from "../../services/chatApi";

export const sendMessage = createAsyncThunk(
  "chat/sendMessage",
  async (message, { rejectWithValue }) => {
    try {
      const data = await sendMessageToApi(message);

      return {
        botReply: data.reply,
        time: new Date().toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
        }),
      };
    } catch (error) {
      return rejectWithValue(
        error.response?.data?.error || error.message || "Failed to send message"
      );
    }
  }
);

const chatSlice = createSlice({
  name: "chat",
  initialState: {
    messages: [
      {
        role: "assistant",
        content: "Hello! How can I help you today?",
        time: new Date().toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
        }),
      },
    ],
    loading: false,
    error: null,
  },
  reducers: {
    clearChat: (state) => {
      state.messages = [
        {
          role: "assistant",
          content: "Hello! How can I help you today?",
          time: new Date().toLocaleTimeString([], {
            hour: "2-digit",
            minute: "2-digit",
          }),
        },
      ];
      state.loading = false;
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(sendMessage.pending, (state, action) => {
        state.loading = true;
        state.error = null;

        state.messages.push({
          role: "user",
          content: action.meta.arg,
          time: new Date().toLocaleTimeString([], {
            hour: "2-digit",
            minute: "2-digit",
          }),
        });
      })
      .addCase(sendMessage.fulfilled, (state, action) => {
        state.loading = false;

        state.messages.push({
          role: "assistant",
          content: action.payload.botReply,
          time: action.payload.time,
        });
      })
      .addCase(sendMessage.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || "Failed to send message";
      });
  },
});

export const { clearChat } = chatSlice.actions;
export default chatSlice.reducer;