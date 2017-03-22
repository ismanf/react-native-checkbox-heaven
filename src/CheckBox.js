import React from 'react'
import ReactNative from 'react-native'
import iconDb from './iconDb'

const { PropTypes } = React
const { View, Text, TouchableOpacity, StyleSheet } = ReactNative
const defaultIcon = iconDb[8]

const CheckBox = (props) => {

    const {
        labelPosition,
        labelStyle,
        iconName,
        iconSize,
        iconColor,
        iconStyle,
        checked,
        checkedColor,
        uncheckedColor,
        style
    } = props
    const { contentStyle } = styles
    const flexDirection = labelPosition === 'left' ? 'row-reverse' : 'row'

    const _onChange = () => {
        props.onChange(!props.checked)
    }

    const _renderIcon = (iconName) => {
        const index = iconDb.findIndex(i => i.iconName === iconName)

        if (index !== -1) {
            defaultIcon = iconDb[index]
        }

        const { component: Icon, checkedIconName, uncheckedIconName } = defaultIcon

        return (
            <Icon
                name={checked ? checkedIconName : uncheckedIconName}
                size={iconSize}
                color={checked ? checkedColor : uncheckedColor}
                style={iconStyle}
            />
        )
    }

    const _renderContent = () => {
        return (
            <View style={[contentStyle, { flexDirection }]}>
                {_renderIcon(iconName)}
                < Text style={labelStyle}>
                    {props.label}
                </Text>
            </View>
        )
    }

    return (
        <TouchableOpacity
            onPress={_onChange}
            style={style}
        >
            {_renderContent()}
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    contentStyle: {
        alignItems: 'center'
    },
    labelStyle: {
        fontSize: 16,
        marginLeft: 3
    }
})

CheckBox.propTypes = {
    style: Text.propTypes.style,
    onChange: PropTypes.func.isRequired,
    checked: PropTypes.bool,
    labelPosition: PropTypes.string,
    labelStyle: Text.propTypes.style,
    iconName: PropTypes.string,
    iconStyle: Text.propTypes.style,
    iconSize: PropTypes.number,
    checkedColor: PropTypes.string,
    uncheckedColor: PropTypes.string,
}

CheckBox.defaultProps = {
    style: {},
    checked: false,
    labelPosition: 'right',
    labelStyle: styles.labelStyle,
    iconName: 'iosMix',
    iconStyle: {},
    iconSize: 30,
    checkedColor: '#464646',
    uncheckedColor: '#464646',
}

export default CheckBox