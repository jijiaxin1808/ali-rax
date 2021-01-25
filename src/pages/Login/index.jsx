import { createElement, useState } from 'rax';
import View from 'rax-view';
import TextInput from 'rax-textinput';
import { setToken } from '@/utils/store.js';
import Link from 'rax-link';
import styles from './index.module.css';
import request from 'universal-request';

export default function Home() {
  const [password, setPassword] = useState('');
  const [accout, setAccout] = useState('');
  const login = () => {
    // TODO: 这里要不要搞点ras加密啥的
    request({
      url: 'https:localhost:8000/login',
      method: 'POST',
      data: {
        accout,
        password,
      },
      dataType: 'json',
    }).then((response) => {
      if (response.code === 200) {
        setToken(response.data.token);
      }
    })
      .catch((error) => {});
  };

  return (
    <View className={styles.loginPage}>
      <TextInput className={styles.textinput} onChangeText={(text) => setAccout(text)} placeholder="请输入账号" />
      <TextInput className={styles.textinput} onChangeText={(text) => setPassword(text)} placeholder="请输入密码" password />
      <Link miniappHref={'/pages/Home/index'}>
        点击跳转
      </Link>
      <button className={styles.loginBtn} onClick={() => login()}>登陆</button>
    </View>
  );
}
