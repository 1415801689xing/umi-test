import React, {Component} from 'react';
import styles from './login.css';
import {Login} from 'ant-design-pro';
import {connect} from 'dva'
import router from 'umi/router';

const {UserName, Password, Submit} = Login; // 通用的用户名、密码和提交组件
@connect()
// 改为类形式组件，可持有状态
export default class extends Component {
  onSubmit = (err, values) => {
    console.log (err, values);
    if(!err){
      // 提交表单请求
      this.props.dispatch({type: 'user/login', payload: values})
    }
  };  
  render () {
    return (
      <div className={styles.loginForm}>
        {/* logo */}
        <img
          className={styles.logo}
          src="https://img.kaikeba.com/logo-new.png"
        />
        {/* 登录表单 */}
        <Login onSubmit={this.onSubmit}>
          <UserName
            name="username"
            placeholder="kaikeba"
            rules={[{required: true, message: '请输入用户名'}]}
          />
          <Password
            name="password"
            placeholder="123"
            rules={[{required: true, message: '请输入密码'}]}
          />
          <Submit>登录</Submit>
        </Login>
      </div>
    );
  }
}
