import resolve from "@rollup/plugin-node-resolve";
import typescript from "@rollup/plugin-typescript";
import { terser } from "rollup-plugin-terser";

export default {
  input: "src/pollenpulsen-card.ts",
  output: {
    file: "dist/pollenpulsen-card.js",
    format: "es",
    sourcemap: true,
  },
  plugins: [
    resolve({ browser: true }),
    typescript(),
    terser({
      format: {
        comments: false,
      },
    }),
  ],
};
