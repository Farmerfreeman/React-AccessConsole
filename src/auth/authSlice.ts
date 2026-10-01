import { createSlice, type PayloadAction } from '@reduxjs/toolkit'

export type AuthStatus = 'loading' | 'authenticated' | 'anonymous'

export interface AuthState {
  status: AuthStatus
  username: string | null
  roles: string[]
}

const initialState: AuthState = {
  status: 'loading',
  username: null,
  roles: [],
}

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    signedIn(state, action: PayloadAction<{ username: string; roles: string[] }>) {
      state.status = 'authenticated'
      state.username = action.payload.username
      state.roles = action.payload.roles
    },
    signedOut(state) {
      state.status = 'anonymous'
      state.username = null
      state.roles = []
    },
  },
})

export const { signedIn, signedOut } = authSlice.actions
export default authSlice.reducer