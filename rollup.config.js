import babel from "rollup-plugin-babel"; // 解析es6代码->es5
import commonjs from "rollup-plugin-commonjs"; //转换为ES6版本
import resolvePlugin from "rollup-plugin-node-resolve"; //  加载第三方模块

export default [
  {
    input: "./src/index.cjs.js", //入口文件
    output: {
      // 输出配置
      file: "./dist/bundle.cjs.js", // 打包生成cjs格式
      format: "cjs",
    },
    plugins: [
      babel({
        exclude: "node_modules/**",
      }),
      resolvePlugin(),
      commonjs(),
    ],
  },
  {
    input: "./src/index.js",
    output: {
      file: "./dist/bundle.es.js", // 打包生成es格式
      format: "es",
    },
    plugins: [
      babel({
        exclude: "node_modules/**",
      }),
      resolvePlugin(),
      commonjs(),
    ],
  },
  {
    input: "./src/index.js",
    output: {
      file: "./dist/bundle.umd.js", // 打包生成umd格式
      format: "umd",
      name: "UmdBundle",
    },
    plugins: [
      babel({
        exclude: "node_modules/**",
      }),
      resolvePlugin(),
      commonjs(),
    ],
  },
  {
    input: "./src/index.js",
    output: {
      file: "./dist/bundle.amd.js", // 打包生成amd格式
      format: "amd",
    },
    plugins: [
      babel({
        exclude: "node_modules/**",
      }),
      resolvePlugin(),
      commonjs(),
    ],
  },
  {
    input: "./src/index.js",
    output: {
      file: "./dist/bundle.iife.js", // 打包生成iife格式
      format: "iife",
      name: "IIfe",
    },
    plugins: [
      babel({
        exclude: "node_modules/**",
      }),
      resolvePlugin(),
      commonjs(),
    ],
  },
];
