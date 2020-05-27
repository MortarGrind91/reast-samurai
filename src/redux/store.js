import profileReducer from './profile-reducer';
import dialogsReducer from './dialogs-reducer';
import sidebarReducer from './sidebar-reducer';

let store = {
  _state:{
    profilePage: {
      posts:[
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
    },
    dialogsPage:{
      message: [
        {id: 1, message: 'Hi'},
        {id: 2, message: 'How is your it?'},
        {id: 3, message: 'You'},
        {id: 4, message: 'You'}
      ],
      newMessageText: '',
      dialogs: [
        {id: 1, name: 'Dima'},
        {id: 2, name: 'Ann'},
        {id: 3, name: 'Sveta'},
        {id: 4, name: 'Valera'}
      ],
      newUserName: '',

    },
    sidebar:{
      friends: [
        {
          id:1, 
          photo: 'https://www.myzoomag.com.ua/image/catalog/chem-kormit-britanskogo-kotenka.jpg', 
          name: 'Dima'
        },
        {
          id:2, 
          photo: 'https://opt-1031816.ssl.1c-bitrix-cdn.ru/upload/resize_cache/iblock/3f0/750_400_1/v_kakom_vozraste_brat_kotenka.jpg?1528191765113032',
           name: 'Ann'
        },
        {
          id:3, 
          photo: 'https://petstime.ru/sites/default/files/styles/article-500/public/field/image/123_1.jpg?itok=PjtbLA7f', 
          name: 'Vasya'
        },
      ]
    }
  },

  _callSubscriber(){
    console.log('State changed');
  },

  subscribe(observer){
    this._callSubscriber = observer;
  },

  getState(){
    return this._state;
  },

  dispatch(action){
    this._state.profilePage = profileReducer(this._state.profilePage, action);
    this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
    this._callSubscriber(this._state);
  }
}

export default store;