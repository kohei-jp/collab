import React from "react";
import {initial} from '../reducks/users/operations';
import { getUserId, getuser_name, getUserEmail } from '../reducks/users/selectors';
import { useSelector, useDispatch} from 'react-redux';

const Home = () => {
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(initial());
  }, [dispatch]);

  // 変数selectorに全stateが入る
  const selector = useSelector(state => state);
  // それをgetUserIdに渡して、idだけ抽出させる
  const id =  selector.users && getUserId(selector);
  const user_name = selector.users && getuser_name(selector);
  const email = selector.users && getUserEmail(selector);


  return (
    <div>
      { id && user_name && email &&
        <>
          <h2>ホーム</h2>
          <p>ユーザID: {id}</p>
          <p>ユーザネーム：{user_name}</p>
          <p>Email：{email}</p>
        </>
      } 
    </div>
  );
}
export default Home;