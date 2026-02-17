import { store as internalStore } from './src/store';

export const store = internalStore;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;