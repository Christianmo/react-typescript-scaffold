import React, { FC, useEffect } from "react";
import { toast } from "react-toastify";
import { useSelector, useDispatch } from "react-redux";
import i18next from "i18next";
import postActions from "redux/posts/actions";
import Nav from "app/components/complex/Nav";
import { PostProps } from "types/app";

import styles from "./styles.module.scss";

const success = () => toast("Success !");
const failure = () => toast("Failure !");

const Posts: FC<PostProps> = () => {
  const posts = useSelector((state: any) => state.postsReducer.postsData);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(postActions.getPosts(success, failure));
  }, []);

  const renderPost = (post: PostProps) => <li key={post.id}>{post.title}</li>;

  return !posts ? (
    <span>Loading...</span>
  ) : (
    <div>
      <Nav />
      <h1 className={styles.title}>{i18next.t("posts:title")}</h1>
      <ul>{posts.map(renderPost)}</ul>
    </div>
  );
};

export default Posts;
