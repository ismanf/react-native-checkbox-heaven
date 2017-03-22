import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome'
import IonIcon from 'react-native-vector-icons/Ionicons'
import MaerialComIcon from 'react-native-vector-icons/MaterialCommunityIcons'

/*
  -----------------
  Icons summary
  -----------------
  0:faEdge,
  1:faFill,
  2:faMix,
  3:faCircleEdge,
  4:faCircleFill,
  5:faCircleMix,
  6:iosEdge,
  7:iosFill,
  8:iosMix,
  9:iosCircleEdge,
  10:iosCircleFill,
  11:iosCircleMix,
  12:matEdge,
  13:matFill,
  14:matMix,
  15:matCircleEdge,
  16:matCircleFill,
  17:matCircleMix
  -----------------
*/

const iconDb = [
    {
        component: FontAwesomeIcon,
        iconName: 'faEdge',
        checkedIconName: 'check-square-o',
        uncheckedIconName: 'square-o'
    },
    {
        component: FontAwesomeIcon,
        iconName: 'faFill',
        checkedIconName: 'check-square',
        uncheckedIconName: 'square'
    },
    {
        component: FontAwesomeIcon,
        iconName: 'faMix',
        checkedIconName: 'check-square',
        uncheckedIconName: 'square-o'
    },
    {
        component: FontAwesomeIcon,
        iconName: 'faCircleEdge',
        checkedIconName: 'check-circle-o',
        uncheckedIconName: 'circle-o'
    },
    {
        component: FontAwesomeIcon,
        iconName: 'faCircleFill',
        checkedIconName: 'check-circle',
        uncheckedIconName: 'circle'
    },
    {
        component: FontAwesomeIcon,
        iconName: 'faCircleMix',
        checkedIconName: 'check-circle',
        uncheckedIconName: 'circle-o'
    },
    {
        component: IonIcon,
        iconName: 'iosEdge',
        checkedIconName: 'ios-checkbox',
        uncheckedIconName: 'ios-square'
    },
    {
        component: IonIcon,
        iconName: 'iosFill',
        checkedIconName: 'ios-checkbox-outline',
        uncheckedIconName: 'ios-square-outline'
    },
    {
        component: IonIcon,
        iconName: 'iosMix',
        checkedIconName: 'ios-checkbox',
        uncheckedIconName: 'ios-square-outline'
    },
    {
        component: IonIcon,
        iconName: 'iosCircleEdge',
        checkedIconName: 'ios-checkmark-circle-outline',
        uncheckedIconName: 'ios-radio-button-off-outline'
    },
    {
        component: IonIcon,
        iconName: 'iosCircleFill',
        checkedIconName: 'ios-checkmark-circle',
        uncheckedIconName: 'ios-radio-button-off-outline'
    },
    {
        component: IonIcon,
        iconName: 'iosCircleMix',
        checkedIconName: 'ios-checkmark-circle',
        uncheckedIconName: 'ios-radio-button-off-outline'
    },
    {
        component: MaerialComIcon,
        iconName: 'matEdge',
        checkedIconName: 'checkbox-marked-outline',
        uncheckedIconName: 'checkbox-blank-outline'
    },
    {
        component: MaerialComIcon,
        iconName: 'matFill',
        checkedIconName: 'checkbox-marked',
        uncheckedIconName: 'checkbox-blank'
    },
    {
        component: MaerialComIcon,
        iconName: 'matMix',
        checkedIconName: 'checkbox-marked',
        uncheckedIconName: 'checkbox-blank-outline'
    },
    {
        component: MaerialComIcon,
        iconName: 'matCircleEdge',
        checkedIconName: 'check-circle-outline',
        uncheckedIconName: 'checkbox-blank-circle-outline'
    },
    {
        component: MaerialComIcon,
        iconName: 'matCircleFill',
        checkedIconName: 'check-circle',
        uncheckedIconName: 'checkbox-blank-circle'
    },
    {
        component: MaerialComIcon,
        iconName: 'matCircleMix',
        checkedIconName: 'check-circle',
        uncheckedIconName: 'checkbox-blank-circle-outline'
    }

]

export default iconDb