import { createSlice } from '@reduxjs/toolkit'

type ThemeMode = 'light' | 'dark'

const getInitialTheme = (): ThemeMode => {
  const saved = localStorage.getItem('theme') as ThemeMode | null
  if (saved) return saved
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
}

const applyTheme = (mode: ThemeMode) => {
  const root = document.documentElement
  if (mode === 'dark') {
    root.classList.add('dark')
  } else {
    root.classList.remove('dark')
  }
  localStorage.setItem('theme', mode)
}

const initialMode = getInitialTheme()
applyTheme(initialMode)

interface ThemeState {
  mode: ThemeMode
}

const initialState: ThemeState = {
  mode: initialMode,
}

const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    toggleTheme(state) {
      state.mode = state.mode === 'dark' ? 'light' : 'dark'
      applyTheme(state.mode)
    },
    setTheme(state, action: { payload: ThemeMode }) {
      state.mode = action.payload
      applyTheme(state.mode)
    },
  },
})

export const { toggleTheme, setTheme } = themeSlice.actions
export default themeSlice.reducer
