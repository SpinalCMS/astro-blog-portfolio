// astro.config.mjs
import { defineConfig } from 'astro/config'
import astroImagePlugin from "astro-imagetools/plugin"
import tailwind from "@astrojs/tailwind"

export default defineConfig({
    integrations: [
        tailwind({
            config: {
                applyBaseStyles: false,
            },
        }),
    ],
    markdown: {
        shikiConfig: {
            theme: 'dracula',
            wrap: true,
        },
    },
    site: 'https://eriksolsen.com',
    sitemap: true,
    vite: {
        plugins: [astroImagePlugin]
    }
});