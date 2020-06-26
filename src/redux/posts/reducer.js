import { GET_POSTS } from 'constants/actionNames';

const initialState = {
  postsData: [],
  postsLoading: false,
  postsError: false,
};

const postReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_POSTS:
      return { ...state, ...payload };
    default:
      return state;
  }
};

export default postReducer;
