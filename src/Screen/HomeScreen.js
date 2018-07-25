import React, { Component } from 'react'
import {
    TabBar
} from 'antd-mobile';
export default class HomeScreen extends Component {
    render() {
        return (
            <div style={{ position: 'fixed', height: '100%', width: '100%', top: 0 }}>
                <TabBar>
                    <TabBar.Item
                        key='HomeScreen'
                        title='首页'
                        onPress={() => {

                        }}
                        icon={{ uri: 'http://7u2rl9.com1.z0.glb.clouddn.com/home.png' }}
                        selectedIcon={{ uri: 'http://7u2rl9.com1.z0.glb.clouddn.com/home_setected.png' }}
                    >
                    </TabBar.Item>
                    <TabBar.Item
                        key='FriendScreen'
                        title='发现'
                        onPress={() => {

                        }}
                        icon={{ uri: 'http://7u2rl9.com1.z0.glb.clouddn.com/friend.png' }}
                        selectedIcon={{ uri: 'http://7u2rl9.com1.z0.glb.clouddn.com/friend_selected.png' }}
                    >
                    </TabBar.Item>
                    <TabBar.Item
                        key='PersonScreen'
                        title='个人'
                        onPress={() => {

                        }}
                        icon={{ uri: 'http://7u2rl9.com1.z0.glb.clouddn.com/personal.png' }}
                        selectedIcon={{ uri: 'http://7u2rl9.com1.z0.glb.clouddn.com/personal_select.png' }}
                    >
                    </TabBar.Item>
                </TabBar>
            </div>
        )
    }
}
