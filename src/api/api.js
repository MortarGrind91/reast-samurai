import * as axios from "axios";

const instanse = axios.create({
  baseURL: 'https://social-network.samuraijs.com/api/1.0/',
  // withCredentials: true,
  // headers: {
  //   'API-KEY': '5d376f4d-d3f1-4406-b1d0-d9b323486eb1' 
  // }
});

export const usersAPI = {
  getUsers(currentPage = 1, pageSize = 6) {
    return instanse.get(`users?page=${currentPage}&count=${pageSize}`)
      .then(response => {
        return response.data;
      });
  },

  follow(userId) {
    return instanse.post(`follow/${userId}`);
  },

  unfollow(userId) {
    return instanse.delete(`follow/${userId}`);
  }

}

export const profileAPI = {
  getProfile(userId = 2) {
    return instanse.get(`profile/${userId}`)
      .then(response => {
        return response.data;
      });
  }
}

export const authAPI = {
  getMyData() {
    return instanse.get(`/auth/me`).then(response => {
      return response.data;
    });
  }
}