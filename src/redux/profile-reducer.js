import { profileAPI } from './../api/api';

const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SET_USER_PROFILE = 'SET_USER_PROFILE';

let initialState = {
  posts: [
    {
      id: 1,
      post: 'Post Ann',
      likesCount: 12,
      image: 'https://catmolly.com/wp-content/uploads/2019/05/kak-opredelit-pol-kotenka.jpg'
    },
    {
      id: 2,
      post: 'Post 2',
      likesCount: 33,
      image: 'https://opt-1031816.ssl.1c-bitrix-cdn.ru/upload/resize_cache/iblock/8b8/750_400_1/pochemu_kotenok_lizhet_volosy_i_zaryvaetsja_v_nih.jpg?152818987087154'
    },
    {
      id: 3,
      post: 'Post 3',
      likesCount: 22,
      image: 'https://golos.ua/images/items/2019-11/21/htvtzphT68cKrOIV/img_top.jpg'
    },
    {
      id: 4,
      post: 'Post 4',
      likesCount: 15,
      image: 'https://st.depositphotos.com/1000122/2016/i/450/depositphotos_20163697-stock-photo-small-scottish-straight-kitten-walking.jpg'
    }
  ],
  newPostText: 'test',
  profile: null
};

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST: {
      let newPost = {
        id: 5,
        post: state.newPostText,
        likesCount: 0,
        image: 'https://opt-1031816.ssl.1c-bitrix-cdn.ru/upload/resize_cache/iblock/8b8/750_400_1/pochemu_kotenok_lizhet_volosy_i_zaryvaetsja_v_nih.jpg?152818987087154'
      };

      return {
        ...state,
        newPostText: '',
        posts: [...state.posts, newPost]
      };

    }
    case UPDATE_NEW_POST_TEXT: {
      return {
        ...state,
        newPostText: action.newText
      }
    }
    case SET_USER_PROFILE: {
      return {
        ...state,
        profile: action.profile
      }
    }

    default:
      return state;
  }
}

export const addPostActionCreator = () => ({ type: ADD_POST });

export const updateNewPostTextActionCreator = (text) => ({
  type: UPDATE_NEW_POST_TEXT,
  newText: text
});

export const setUserProfile = (profile) => ({ type: SET_USER_PROFILE, profile });

//thunk
export const getProfileData = (userId) => {
  return (dispatch) => {
    profileAPI.getProfile(userId)
      .then(data => {
        dispatch(setUserProfile(data));
      });
  }
}

export default profileReducer;