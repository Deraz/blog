import createDataContext from "./createDataContext";
import uuid from "react-native-uuid";

const blogReducer = (state, action) => {
  switch (action.type) {
    case "add_blogpost":
      return [
        ...state,
        {
          title: action.payload.title,
          id: uuid.v4(),
          content: action.payload.content,
        },
      ];
    case "edit_blogpost":
      return state.map((post) => {
        return post.id === action.payload.id ? action.payload : post;
      });
    case "delete_blogpost":
      return state.filter((post) => post.id != action.payload);
    default:
      return state;
  }
};

const addBlogPost = (dispatch) => {
  return (title, content, callback) => {
    dispatch({
      type: "add_blogpost",
      payload: { title, content },
    });
    callback();
  };
};

const editBlogPost = (dispatch) => {
  return (id, title, content, callback) => {
    dispatch({
      type: "edit_blogpost",
      payload: { id, title, content },
    });
    callback();
  };
};

const deleteBlogPost = (dispatch) => {
  return (id) => {
    dispatch({ type: "delete_blogpost", payload: id });
  };
};

export const { Context, Provider } = createDataContext(
  blogReducer,
  { addBlogPost, editBlogPost, deleteBlogPost },
  [{ title: "TEST POST", content: "TEST CONTENT", id: "1" }]
);
