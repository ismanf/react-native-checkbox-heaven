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

# **Default checkboxes** 
![Imgur](http://i.imgur.com/G5N131cl.png)
# **Styled checkboxes**  
![Imgur](http://i.imgur.com/zbM5s0Cm.png)

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
3.Full 
```javascript

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

import CheckBox from 'react-native-checkbox-heaven'

export default class checkboxDemo extends Component {
  state = {
    checked: false
  }
  handleOnChange(val) {
    this.setState({ checked: val })
  }
  render() {

    return (
      <View style={styles.container}>
        <CheckBox
          label='demo label'
          labelStyle={styles.labelStyle}
          iconSize={28}
          iconName='matMix'
          checked={this.state.checked}
          checkedColor='#008080'
          uncheckedColor='#8b0000'
          onChange={this.handleOnChange.bind(this)}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  labelStyle: {
    marginLeft: 4,
    fontSize: 16,
    fontWeight: 'bold',
    color: '#2f4f4f'
  }
});

AppRegistry.registerComponent('checkboxDemo', () => checkboxDemo);

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

## Contribution

Speacial thanks to [Maksim Degtyarev](https://github.com/maksimdegtyarev) and [pitchourou](https://github.com/pitchourou).
Any contribution welcome!