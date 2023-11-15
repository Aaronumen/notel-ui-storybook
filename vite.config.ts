import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import vitePluginDts from "vite-plugin-dts"
import AutoImport from "unplugin-auto-import/vite";
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vueJsx(),
    vitePluginDts({
      outDir: "dist",
      staticImport: true,
      insertTypesEntry: true,
      exclude: ["notel-env.d.ts"]
    }),
    AutoImport({
      dts: true, // 会在根目录生成auto-imports.d.ts，里面可以看到自动导入的api
      imports: [
        "vue",
      ],
      // 解析器配置
      resolvers: [], // 第三方ui
      // 根据项目情况配置eslintrc，默认是不开启的
      eslintrc: {
        enabled: true, // @default false
        // 下面两个是其他配置，默认即可
        // 输出一份json文件，默认输出路径为./.eslintrc-auto-import.json
        // filepath: './.eslintrc-auto-import.json', // @default './.eslintrc-auto-import.json'
        // globalsPropValue: true, // @default true 可设置 boolean | 'readonly' | 'readable' | 'writable' | 'writeable'
      },
    }),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  build: {
    assetsInlineLimit: 4096,
    lib: {
      entry: "src/index.ts",
      name: "notel-ui",
      fileName: format => `notel.${format}.js`
    },
    rollupOptions: {
      external: ["vue"],
      output: {
        globals: {
          vue: "Vue"
        },
        exports: "named"
      }
    }
  }
})
