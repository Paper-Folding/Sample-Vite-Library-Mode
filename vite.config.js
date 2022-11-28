import { resolve } from 'path';
import { defineConfig } from "vite";
// import typescript from 'rollup-plugin-typescript2';
// import minifyPrivatesTransformer from 'ts-transformer-minify-privates';

export default defineConfig({
    server: {
        port: 3000
    },
    build: {
        lib: {
            entry: resolve(__dirname, 'src/lib/sample-lib.ts'),
            name: 'SampleLib',
            fileName: 'sample-lib',
            formats: ['umd'],
        },
        rollupOptions: {
            output: {
                entryFileNames: 'sample-lib.min.js',
            },
            // plugins: [
            //     typescript({
            //         transformers: [service => ({
            //             before: [minifyPrivatesTransformer(service.getProgram())],
            //             after: []
            //         })]
            //     })
            // ]
        }
    }
})