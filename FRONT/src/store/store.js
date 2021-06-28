import {
  createSlice, configureStore,
} from '@reduxjs/toolkit';

const produtoState = {
  produtos: [],
};

const produtoSlice = createSlice({
  name: 'produtoSlice',
  initialState: produtoState,
  reducers: {
    adicionarProduto(state, action) {
      // eslint-disable-next-line no-param-reassign
      state.produtos = action.payload;
    },
  },
});

const store = configureStore({
  reducer: { produtoState: produtoSlice.reducer },
});

export const produtoActions = produtoSlice.actions;

export default store;
