module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./'],
        extensions: ['.ios.js', '.android.js', '.js', '.ts', '.tsx', '.json'],
        alias: {
          // This needs to be mirrored in tsconfig.json
          src: './src',
          app: './src/app',
          '@entities': './src/entities',
          features: './src/features',
          screens: './src/screens',
          shared: './src/shared',
          widgets: './src/widgets',
        },
      },
    ],
  ],
};
