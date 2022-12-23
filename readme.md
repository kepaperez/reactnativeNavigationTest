## React Native Navegation Test

#### Links
1. [Official documentation ](https://reactnavigation.org/)
2. [Custom Tab and custom drawer Navigators [All in 1] (YT)](https://www.youtube.com/watch?v=I7POH4acHV8&t=2347s&ab_channel=BasirPayenda)
3. [React Navigation V6 in React Native with TypeScript (YT)](https://www.youtube.com/watch?v=UzMbu3XKEoM&list=LL&index=18&t=2192s&ab_channel=DanielGSC)
4. [React Native: Show Popup (use Modal) (YT)](https://www.youtube.com/watch?v=nZWW7Ue9TD0&list=LL&index=3&ab_channel=LirsTechTips)

#### Installation
##### Basic
```
npm install @react-navigation/native
npm install @react-navigation/native-stack
npm install react-native-screens react-native-safe-area-context
```

##### Tab Navigation
```
npm install @react-navigation/bottom-tabs
```

##### Drawer Navigation
```
pm install @react-navigation/drawer
npm install react-native-gesture-handler react-native-reanimated
```
Add this on top  index.js or App.js
```
import 'react-native-gesture-handler';
```
Add Reanimated's Babel plugin to your babel.config.js:
```
 module.exports = {
    presets: [
      ...
    ],
    plugins: [
      ...
      'react-native-reanimated/plugin',
    ],
  };
```
and run 
```
npm start -- --reset-cache
```
