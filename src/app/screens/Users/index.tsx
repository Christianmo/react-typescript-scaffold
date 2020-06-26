import React, { FC, useEffect } from "react";
import i18next from "i18next";
import { useSelector, useDispatch } from "react-redux";
import userActions from "redux/users/actions";
import Nav from "app/components/complex/Nav";
import { toast } from "react-toastify";
import { UserProps } from "types/app";

import styles from "./styles.module.scss";

const success = () => toast("Success Users load !");
const failure = () => toast("Failure !");

const Users: FC<UserProps> = () => {
  const users = useSelector((state: any) => state.usersReducer.usersData);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(userActions.getUsers(success, failure));
  }, []);

  const renderUser = (user: UserProps) => (
    <li key={user.id}>{`${user.name}, ${user.email}`}</li>
  );

  return !users ? (
    <span>Loading...</span>
  ) : (
    <div>
      <Nav />
      <h1 className={styles.title}>{i18next.t("users:title")}</h1>
      <ul>{users.map(renderUser)}</ul>
    </div>
  );
};

export default Users;
