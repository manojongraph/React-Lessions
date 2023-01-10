import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers } from "./userSlice";
export const UserView = () => {
  const user = useSelector((state) => state.user);
  console.log('users',user)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchUsers());
  }, []);
  return (
    <div>
      <h2>List of User</h2>
      {user.loading && <div>Loading...</div>}
      {!user.loading && user.error ? <div>Error : {user.error} </div> : null}
      {!user.loading && user.users.length ? (
        <ul>
          {
          user.users.map((user) => (
            <ol key={user.id}> {user.name}</ol>
          ))}
        </ul>
      ) : null}
    </div>
  );
};
