import { defineConfig } from "vite";
import laravel from "laravel-vite-plugin";
import vue from "@vitejs/plugin-vue";
import { fileURLToPath, URL } from "url";
import legacy from "@vitejs/plugin-legacy";
import vuetify from 'vite-plugin-vuetify'

export default defineConfig({
    plugins: [
        laravel({
            input: ["resources/src/app.js"],
            refresh: true,
        }),
        legacy({
            targets: ["defaults", "not IE 11"],
        }),
        vue({
            template: {
                transformAssetUrls: {
                    // The Vue plugin will re-write asset URLs, when referenced
                    // in Single File Components, to point to the Laravel web
                    // server. Setting this to `null` allows the Laravel plugin
                    // to instead re-write asset URLs to point to the Vite
                    // server instead.
                    base: null,

                    // The Vue plugin will parse absolute URLs and treat them
                    // as absolute paths to files on disk. Setting this to
                    // `false` will leave absolute URLs un-touched so they can
                    // reference assets in the public directory as expected.
                    includeAbsolute: false,
                },
            },
        }),
        vuetify({
            styles: { configFile: "resources/src/assets/scss/vuetify.scss" },
        }),
    ],
    resolve: {
        alias: {
            "@": fileURLToPath(new URL("./resources/src", import.meta.url)),
        },
    },
});
