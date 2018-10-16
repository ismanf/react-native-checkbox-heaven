import React, {PureComponent} from 'react'
import {View, Text, TouchableOpacity, StyleSheet, ViewPropTypes } from 'react-native'
import iconDb from './iconDb'
import PropTypes from 'prop-types'

let defaultIcon = iconDb[8]

const styles = StyleSheet.create({
    contentStyle: {
        alignItems: 'center'
    },
    labelStyle: {
        fontSize: 16,
        marginLeft: 3
    }
})

class CheckBox extends PureComponent {

    static propTypes = {
        style: ViewPropTypes.style,
        onChange: PropTypes.func.isRequired,
        checked: PropTypes.bool,
        labelPosition: PropTypes.string,
        labelStyle: Text.propTypes.style,
        iconName: PropTypes.string,
        iconStyle: ViewPropTypes.style,
        iconSize: PropTypes.number,
        checkedColor: PropTypes.string,
        uncheckedColor: PropTypes.string,
        disabled: PropTypes.bool,
        disabledColor: PropTypes.string,
    };

    static defaultProps = {
        style: {},
        checked: false,
        labelPosition: 'right',
        labelStyle: styles.labelStyle,
        iconName: 'iosMix',
        iconStyle: {},
        iconSize: 30,
        checkedColor: '#464646',
        uncheckedColor: '#464646',
        disabledColor: '#888',
        disabled: false,
    };

    componentWillMount() {
        this.setState({
            checked: this.props.checked,
            disabled: this.props.disabled
        });
    }

    componentWillReceiveProps(props) {
        this.setState({
            checked: props.checked,
            disabled: props.disabled
        })
    }

    _onChange() {
        const newVal = !this.state.checked
        const { onChange } = this.props
        this.setState({ checked:newVal }, () => {
            onChange(newVal)
        })
    }

    _renderIcon(iconName) {

        const { iconSize, iconStyle, checkedColor, uncheckedColor, disabledColor } = this.props
        const checked = this.state.checked;
        const disabled = this.state.disabled;
        const index = iconDb.findIndex(i => i.iconName === iconName)

        if (index !== -1) {
            defaultIcon = iconDb[index]
        }

        const { component: Icon, checkedIconName, uncheckedIconName } = defaultIcon

        return (
            <Icon
                name={checked ? checkedIconName : uncheckedIconName}
                size={iconSize}
                color={disabled ? disabledColor : checked ? checkedColor : uncheckedColor}
                style={iconStyle}
            />
        )
    }

    _renderContent() {

        const { labelPosition, labelStyle, label, iconName } = this.props
        const flexDirection = labelPosition === 'left' ? 'row-reverse' : 'row'

        return (
            <View style={[styles.contentStyle, { flexDirection }]}>
                {this._renderIcon.call(this, iconName)}
                {
                    label ?
                    <Text style={labelStyle}>{label}</Text>
                    : null
                }
            </View>
        )
    }

    render() {
        const { style } = this.props;
        const { disabled } = this.props;
        return (
            <TouchableOpacity
                onPress={this._onChange.bind(this)}
                disabled={disabled}
                style={style}
            >
                {this._renderContent.call(this)}
            </TouchableOpacity>
        )
    }
}

export default CheckBox
