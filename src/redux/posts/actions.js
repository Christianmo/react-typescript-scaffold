import { GET_POSTS } from 'constants/actionNames';
import postServices from 'services/postServices';
import { denormalizePosts } from 'schemas/posts';

const getPostsTarget = 'posts';

const postActions = {
  getPosts: (success, failure) => ({
    type: GET_POSTS,
    target: getPostsTarget,
    service: postServices.getPosts(),
    response: resp => denormalizePosts(resp.data),
    initialState: [],
    success,
    failure,
  })
};

export default postActions;
