import React, { Component } from 'react'
import {
    Button,
    Toast,
    NavBar,
    WingBlank,
    WhiteSpace,
    List,
    InputItem,
    Icon,
    ImagePicker,
    Modal
} from 'antd-mobile';

import UserManager from '../DataServer/UserManager';

export default class UpdateCustomer extends Component {
    constructor(props) {
        super(props)

        this.state = {
            Nickname: props.location.state.Nickname,
            HeadPortrait:props.location.state.HeadPortrait,
            files: []
        }
    }



    render() {
        return (
            <div>
                <NavBar
                    mode="dark"
                    icon={<Icon type="left" />}
                    onLeftClick={() => { this.props.history.goBack() }}
                >修改用户信息</NavBar>
                <WhiteSpace />
                <ImagePicker
                    files={this.state.files}
                    onChange={(files) => { this.setState({ files }) }}
                    selectable={this.state.files.length < 1}
                />
                <List>
                    <InputItem
                        type={'text'}
                        value={this.state.Nickname}
                        onChange={(Nickname) => { this.setState({ Nickname }) }}
                        placeholder={'请输入昵称'}
                    >
                        昵称
              </InputItem>
                </List>
                <WhiteSpace />
                <WingBlank>
                    <Button
                        type={'primary'}
                        onClick={async () => {

                            Toast.loading('内容上传中...', 0);
                            Nickname: this.state.Nickname;
                            if (this.state.files.length !== 0) {
                                HeadPortrait:this.state.files[0];
                            }
                            const result = await UserManager.UpdateCustomer(this.state.Nickname, this.state.HeadPortrait);
                            console.log(result)

                            Toast.hide();
                            if (result.success === false) {
                                Toast.fail(result.errorMessage);
                                return;
                            }
                            Modal.alert('修改成功', '点击确认返回', [{
                                text: '确认',
                                onPress: () => { this.props.history.goBack() }
                            }])

                        }}
                    >
                        提交修改
              </Button>
                </WingBlank>
            </div>
        )
    }
}
