module.exports = function(api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    env: {
      production: {
        plugins: ['react-native-paper/babel'],
      },
    },
    plugins: [
      ['module-resolver',{
          "alias":{
            "@src": "./src",
            "@assets": "./assets"
          },
          "extensions":[
            ".js",
            ".jsx",
            ".ts",
            ".tsx"
          ]
        }
      ]
    ]
  };
};
