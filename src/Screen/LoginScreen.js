import React, { Component } from 'react'

import {
    Button,
    Toast,
    WingBlank,
    WhiteSpace,
    List,
    InputItem,
    Flex,
    NavBar
} from 'antd-mobile';

import UserManager from '../DataServer/UserManager';

export default class LoginScreen extends Component {

    componentDidMount() {
        if (UserManager.isLogin() === true) {
            this.props.history.replace('/LoginScreen');
        }
    }

    constructor(props) {
        super(props)

        this.state = {
            Name: '',
            Pwd: ''
        }
    }


    render() {
        return (
            <div>
                <NavBar
                    mode="dark"
                    onLeftClick={() => { this.props.history.goBack() }}
                >登录</NavBar>
                <List>
                    <InputItem
                        type={'text'}
                        value={this.state.Name}
                        onChange={(Name) => { this.setState({ Name }) }}
                        placeholder={'请输入登录密码'}
                    >
                        邮箱
            </InputItem>
                    <InputItem
                        type={'password'}
                        value={this.state.Pwd}
                        onChange={(Pwd) => { this.setState({ Pwd }) }}
                        placeholder={'请输入登录密码'}
                    >
                        密码
            </InputItem>
                </List>
                <WhiteSpace />
                <WingBlank>
                    <Flex>
                        <Button
                            style={{ flex: 1, marginRight: 5 }}
                            type={'primary'}
                            onClick={async () => {
                                const result = await UserManager.login(this.state.Name, this.state.Pwd);
                                console.log(result);
                                if (result.success === false) {
                                    Toast.fail(result.errorMessage, 1);
                                    return;
                                }

                                if (!result.data.userId) {
                                    //this.props.history.push('/CreateUserScreen');
                                    return;
                                }

                                // this.props.history.replace('/TabBarScreen');

                            }}
                        >
                            登录
                </Button>
                        <Button
                            style={{ flex: 1, marginLeft: 5 }}
                            type={'primary'}
                            onClick={async () => {
                                this.props.history.push('/RegisterScreen');
                            }}
                        >
                            注册
                </Button>
                    </Flex>
                </WingBlank>
            </div>
        )
    }
}
