'use strict';

import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Image,
    Text,
    TouchableHighlight
} from 'react-native';

export default class extends Component {
    static propTypes = {
        text: React.PropTypes.string,
        textView: React.PropTypes.element,
        onClick: React.PropTypes.func.isRequired,
        isChecked: React.PropTypes.bool
    }

    static defaultProps = {
        text: 'remember',
        isChecked: false,
    }

    constructor(props) {
        super(props);
        this.state = {
            isChecked: this.props.isChecked,
        }
    }

    _renderRight() {
        if (this.props.textView) return this.props.textView;
        return (
            <Text style={styles.text}>{this.props.text}</Text>
        )
    }

    genCheckedImage() {
        return (
            <Image
                style={{ width: 24, height: 24 }}
                source={
                    this.state.isChecked
                        ?
                        require('./assets/ic_check_box_checked.png')
                        :
                        require('./assets/ic_check_box_unchecked.png')} >
            </Image>
        )
    }

    onClick() {
        this.setState({
            isChecked: !this.state.isChecked
        })
        this.props.onClick();
    }

    render() {
        return (
            <TouchableHighlight
                style={this.props.style}
                onPress={() => this.onClick()}
                underlayColor='transparent'>
                <View style={styles.container}>
                    {this.genCheckedImage()}
                    {this._renderRight()}
                </View>
            </TouchableHighlight>
        )
    }
}
const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    text: {
        fontSize: 15,
        color:'#3790ec'
    }
})