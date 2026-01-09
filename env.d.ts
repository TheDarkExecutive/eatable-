
declare global {
  namespace NodeJS {
    interface ProcessEnv {
      API_KEY: string;
      NODE_ENV: 'development' | 'production' | 'test';
    }
  }
  // The global 'process' variable is already declared by environment types (like @types/node).
  // Augmenting the NodeJS.ProcessEnv interface above is sufficient to provide type safety for process.env.
}

export {};
