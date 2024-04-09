import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
    // If publishing to GitHub Pages repo (i.e. [username].github.io/[repo]),
    // set BASE_URL environment variable to '/[repo]' or manually set it here.
    // Remember to also set the appropriate value for 'pathSegmentsToKeep' in public/404.html.
    base: process.env.BASE_URL || '/',
    build: {
        outDir: 'build',
        sourcemap: true,
        emptyOutDir: true,
        rollupOptions: {
            // Fix: MUI emits lots of warnings with Vite when sourcemaps are enabled
            // https://github.com/vitejs/vite/issues/15012
            onwarn(warning, defaultHandler) {
                if (warning.code === 'SOURCEMAP_ERROR') {
                    return;
                }

                defaultHandler(warning);
            },
        }
    },
    plugins: [react()]
});