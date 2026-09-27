import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { IProduct, IProductsState } from '../../types/product';

export const fetchProducts = createAsyncThunk<IProduct[], void>(
  'products/fetchProducts',
  async (_, { rejectWithValue }) => {
    try {
      const response = await fetch(`${import.meta.env.VITE_API_URL}/products`);
      if (!response.ok) {
        throw new Error('Failed to load data from the server. Please try again');
      }
      const data = await response.json();
      return data.products;
    } catch (error) {
      return rejectWithValue(error instanceof Error ? error.message: 'Unknown error');
    }
  }
);

export const fetchProductsById = createAsyncThunk<IProduct, number | string>(
  'products/fetchProductsById',
  async (id, { rejectWithValue }) => {
    try {
      const response = await fetch(`${import.meta.env.VITE_API_URL}/products/${id}`);
      if (!response.ok) {
        throw new Error('Failed to load data from the server. Please try again');
      }
      const data = await response.json();
      return data;
    } catch (error) {
      return rejectWithValue(error instanceof Error ? error.message: 'Unknown error');
    }
  }
);

const initialState: IProductsState = {
    currentProduct: null,
    items: [],
    isLoading: false,
    error: null,
    search: '',
    category: 'All',
    sort: 'default'
  };

const productSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    setSearch: (state, action) => {
      state.search = action.payload;
    },
    setCategory: (state, action) => {
      state.category = action.payload;
    },
    setSort: (state, action) => {
      state.sort = action.payload;
    }
  },

  extraReducers: (builder) => {
    builder
    .addCase(fetchProducts.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
.addCase(fetchProducts.fulfilled, (state, action) => {
  state.isLoading = false;
  state.items = action.payload;

  state.items = action.payload.map((product, index) => {
    if (index === 0) {
      return {
        ...product,
        title: "iPhone 16 Pro Max",
        description: "2026 flagship featuring the A18 Pro chip, Camera Control button, and a titanium chassis in Desert Titanium",
        price: 1199,
        thumbnail: 'https://cdn.dummyjson.com/products/images/smartphones/iPhone%2013%20Pro/thumbnail.png'
      }
    }
    if (index === 1) {
      return {
        ...product,
        title: "Samsung Galaxy S26 Ultra",
        description: "The ultimate flagship powered by Snapdragon 8 Gen 5, featuring a 200 MP camera, built-in S Pen, and cutting-edge Galaxy AI.",
        price: 1299,
        thumbnail: 'https://www.myphone.kg/cache/files/29495.jpg_w800_h800_resize.jpg'
      };
    }
    return product;
  });
})
      .addCase(fetchProducts.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
        ;
      })
    .addCase(fetchProductsById.pending, (state) => {
      state.isLoading = true;
      state.error = false;
    })
    .addCase(fetchProductsById.fulfilled, (state, action) => {
      state.isLoading = false;
      state.currentProduct = action.payload;
    })
    .addCase(fetchProductsById.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    });
  },
});

export const { setSearch, setCategory, setSort } = productSlice.actions;
export default productSlice.reducer;