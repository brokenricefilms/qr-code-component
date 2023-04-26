import { defineConfig } from 'astro/config';
import compress from "astro-compress";

// https://astro.build/config
export default defineConfig({
  site: "http://qr-code-component.thuanowa.com",
  integrations: [compress()],
});

