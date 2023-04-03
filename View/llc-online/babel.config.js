/*module.exports = {
    presets: [
      '@babel/preset-env',
      ['@babel/preset-react', {runtime: 'automatic'}],
    ],
  };*/

  /*export default {
    "presets": ["@babel/preset-react"]
  }*/

module.exports = {
    "presets": [
      "@babel/preset-env", ["@babel/preset-react", {
        "runtime": "automatic"}],
      ]
    //"plugins": [
      //  ["@babel/plugin-transform-react-jsx", {
        //  "runtime": "automatic"
        //}]
      //]
  };