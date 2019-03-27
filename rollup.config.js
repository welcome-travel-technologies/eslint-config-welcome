import buble from "rollup-plugin-buble";
export default {
  input: "src/index.js",
  output: {
    file: "index.js",
    format: "cjs"
  },
  plugins: [buble({ objectAssign: "Object.assign" })]
};
