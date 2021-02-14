export const SIGN_IN = "SIGN_IN";
export const signInAction = (userState) => {
  return {
    type: "SIGN_IN",
    payload: {
      isSignedIn: true,
      uid: userState.uid,
      username: userState.username,
      email: userState.email
    }
  }
};

export const SIGN_OUT = "SIGN_OUT";
export const signOutAction = () => { //sign_outは、引数を受け取る必要がない。user情報を初期の状態に戻せば良いだけだから。
  return{
    type: "SIGN_OUT",
    payload: {  //どんなデータなのかを記述
      isSignedIn: false,
      uid: "",
      username: "",
      email: ""
    }
  }
}


// ユーザ新規登録時のデータを保存
export const FETCH_USER = "FETCH_USER";
export const fetchUser = user => ({
  type: FETCH_USER,
  payload: user,
});