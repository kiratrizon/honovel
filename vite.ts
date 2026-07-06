// don't import any modules that's related to vite to avoid deployment issues

type ViteConfig = {
  server?: {
    port?: number;
    host?: string;
    cors?: boolean;
    strictPort?: boolean;
    ssl?: {
      cert?: string;
      key?: string;
      keyFormat?: string;
    };
    watch?: {
      ignored?: string | string[];
    };
  };
  cors?: {
    origin?: string | string[];
    methods?: string[];
    allowedHeaders?: string[];
  };
  headers?: Record<string, string>;

  build: {
    outDir: string;
    emptyOutDir: boolean;
    manifest: boolean;
    rollupOptions?: {
      input?: string[];
    };
  };
  publicDir: string;
};

// Your resources imports
const input: string[] = ["resources/ts/app.ts"];

export default <ViteConfig>{
  server: {
    port: 5173,
    watch: {
      ignored: ["**/.env", "**/.env.*", "**/node_modules/**"],
    },
  },

  build: {
    outDir: "public/build",
    emptyOutDir: true,
    manifest: true,
    rollupOptions: {
      input,
    },
  },
  publicDir: "public/build/assets",
};
