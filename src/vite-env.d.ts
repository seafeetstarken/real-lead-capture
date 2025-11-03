/// <reference types="vite/client" />

interface Window {
  fbq?: (command: string, event: string, params?: object) => void;
}
