import React from "react";
import { getUserId, getUserName, getUserEmail } from '../reducks/users/selectors';
import { useSelector } from 'react-redux';

const Home = () => {
  
  // 変数selectorに全stateが入る
  const selector = useSelector(state => state);
  // それをgetUserIdに渡して、uidだけ抽出させる
  const uid = getUserId(selector);
  const username = getUserName(selector);
  const email = getUserEmail(selector);

  return (
    <div>
      <h2>ホーム</h2>
      <p>ユーザID: {uid}</p>
      <p>ユーザネーム：{username}</p>
      <p>Email：{email}</p>
    </div>

  );
}
export default Home;