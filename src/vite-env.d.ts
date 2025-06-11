/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_WEBSITE_TITLE?: string;
  readonly VITE_ROOT_PATH?: string;
  readonly VITE_OPENAI_API_KEY?: string;
  readonly VITE_OPENAI_MODEL?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
