import React from "react";
import Styles from './formStyles'
import { Form, Field } from 'react-final-form'
import { useDispatch } from 'react-redux';
import {push} from 'connected-react-router';
import { POST_METHOD, promiseApi } from '../reducks/commons/index';
import { sessionsCreateUrl } from '../urls/index';
import {fetchUser} from '../reducks/users/actions';


const SessionNew = () => {
  const dispatch = useDispatch();
  const onSubmit = async(values) => {
      // controllerに飛ばすparams
      const params = {
        users: { user_name: values.username, email: values.email, hashed_password: values.password }
      }
    // API通信
    const response = await promiseApi(sessionsCreateUrl, POST_METHOD, params)

    // 通信成功
    if (response.data.status === 200) {
        dispatch(fetchUser(response.data.user))
        dispatch(push('/'));
    // 通信失敗
    } else {
      // dispatch(openBar(response.data.message, 'error'));
    }


    // await sleep(300)
    // window.alert(JSON.stringify(values, 0, 2))
  }

  return (
    <Styles>
      <h1>ユーザ登録画面</h1>
      <Form
        onSubmit={onSubmit}
        validate={values => {
          const errors = {}
          if (!values.username) {
            errors.username = 'Required'
          }
          if (!values.email) {
            errors.email = 'Required'
          }
          if (!values.password) {
            errors.password = 'Required'
          }
          if (!values.confirm) {
            errors.confirm = 'Required'
          } else if (values.confirm !== values.password) {
            errors.confirm = 'Must match'
          }
          return errors
        }}
        render={({ handleSubmit, form, submitting, pristine, values }) => (
          <form onSubmit={handleSubmit}>
            <Field name="username">
              {({ input, meta }) => (
                <div>
                  <label>ユーザ名</label>
                  <input {...input} type="text" placeholder="Username" />
                  {meta.error && meta.touched && <span>{meta.error}</span>}
                </div>
              )}
            </Field>
            <Field name="email">
              {({ input, meta }) => (
                <div>
                  <label>メールアドレス</label>
                  <input {...input} type="text" placeholder="Email" />
                  {meta.error && meta.touched && <span>{meta.error}</span>}
                </div>
              )}
            </Field>
            <Field name="password">
              {({ input, meta }) => (
                <div>
                  <label>パスワード</label>
                  <input {...input} type="password" placeholder="Password" />
                  {meta.error && meta.touched && <span>{meta.error}</span>}
                </div>
              )}
            </Field>
            <Field name="confirm">
              {({ input, meta }) => (
                <div>
                  <label>パスワード確認</label>
                  <input {...input} type="password" placeholder="Confirm" />
                  {meta.error && meta.touched && <span>{meta.error}</span>}
                </div>
              )}
            </Field>
            <div className="buttons">
              <button type="submit" disabled={submitting}>
                Submit
              </button>
              <button
                type="button"
                onClick={form.reset}
                disabled={submitting || pristine}
              >
                Reset
              </button>
            </div>
            {/* <pre>{JSON.stringify(values, 0, 2)}</pre> jsonを表示 */} 
          </form>
        )}
      />
    </Styles>
  )
}
export default SessionNew;