
const { override,addPostcssPlugins,addLessLoader } = require('customize-cra');

module.exports = override(
  addLessLoader({}),
  addPostcssPlugins([require('postcss-pxtorem')({
    //设计稿 / 10 
    rootValue: 37.5,
    propList: ['*']
    // propList: ['*', '!border*', '!font-size*', '!letter-spacing'],
    // propWhiteList: []
}),]))