let initialState = {
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
};

const sidebarReducer = (state = initialState, action) => {
  return state;
}

export default sidebarReducer;