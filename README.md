# react-native-checkbox-heaven

ReactNative Checkbox components which contains 17 design type.Built in with the help
of [react-native-vector-icons](https://github.com/oblador/react-native-vector-icons). Currently supports icon sets:
* ***fa*** prefix for [FontAwesome](http://fortawesome.github.io/Font-Awesome/icons/) by Dave Gandy 
* ***ios*** prefix for [Ionicons](http://ionicframework.com/docs/v2/ionicons/) by Ben Sperry
* ***mat*** prefix for [MaterialCommunityIcons](https://materialdesignicons.com/) by MaterialDesignIcons.com

I categorized checkboxes to 3 type:
1. ***Edge*** (outlined icon for both state)
2. ***Fill*** (filled icon for both state)
3. ***Mix*** (outlined for unchecked, filled for checked state)

# Default checkboxes 
![Imgur](http://i.imgur.com/G5N131c.png)
# Styled checkboxes  
![Imgur](http://i.imgur.com/zbM5s0C.png)

## **Installation guide**

1. First [react-native-vector-icons](https://github.com/oblador/react-native-vector-icons) must be installed and linked
2. Run: `$ npm install react-native-checkbox-heaven --save`

## **Examples**

1.Import component
```javascript
import CheckBox from 'react-native-checkbox-heaven';
```
2.Basic use (default icon is `iosMix`)
```javascript
 <CheckBox
    onChange={(val) => alert(val)}
    checked={true}
/>
```
Or
```javascript
<CheckBox
    iconName='faEdge'
    label='faEdge'
    onChange={(val) => alert(val)}
    checked={false}
/>
```

## **API**

| Property              | Type | Default Value             | Description                              |
| ----------------- | -------- | ------------------------- | ---------------------------------------- |
| style              | object   | {}                       | Style for [TouchableOpacity](http://facebook.github.io/react-native/docs/touchableopacity.html)                               |
| checked           | bool     | false                     | Checbox state                           |
| onChange          | func     |                           | Handler function for button press. Required |
| labelPosition     | string   | 'right'                   | Position for label ('right' or 'left')  |
| labelStyle        | object   | {fontSize:16,marginLeft:3}| Style for [Text](http://facebook.github.io/react-native/docs/text.html)                           |
| iconName          | string   | 'iosMix'                  | Icon name                                |
| iconStyle         | object   | {}                        | Custom style for Icon [react-native-vector-icons](https://github.com/oblador/react-native-vector-icons)                   |
| iconSize          | number   | 30                        | Icon size                   |
| checkedColor      | string   | '#464646'                 | Icon color for checked state             |
| uncheckedColor    | string   | '#464646'                 | Icon color for checked state             |

## License

This project is licenced under the [MIT License](http://opensource.org/licenses/mit-license.html).