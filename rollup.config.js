import resolve from "@rollup/plugin-node-resolve";
import typescript from "@rollup/plugin-typescript";
import { terser } from "rollup-plugin-terser";

export default {
  input: "src/pollenpulsen-card.ts",
  output: {
    dir: "dist",
    format: "es",
  },
  plugins: [
    resolve(),
    typescript(),
    terser(),
  ],
};
