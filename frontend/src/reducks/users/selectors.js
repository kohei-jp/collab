import {createSelector} from 'reselect';

const usersSelector = (state) => state.users;
// 通常、jsxで記載するselectorをここに持ってきている.
// 全State内からusersを取り出して、usersSelectorに入れている.

export const getUserId = createSelector(
  [usersSelector], // usersSelectorを配列に入れて、その中のuidだけを返す
  state => state.id
)
export const getUserName = createSelector(
  [usersSelector],
  state => state.user_name
)
export const getUserEmail = createSelector(
  [usersSelector],
  state => state.email
)