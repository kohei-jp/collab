import {createSelector} from 'reselect';

const usersSelector = (state) => state.users;
// 全State内からusersを取り出して、usersSelectorに入れている.

export const getUserId = createSelector(
  [usersSelector], // usersSelectorを配列に入れて、その中のuidだけを返す
  state => state.uid
)
export const getUserName = createSelector(
  [usersSelector],
  state => state.username
)
export const getUserEmail = createSelector(
  [usersSelector],
  state => state.email
)