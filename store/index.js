import axios from 'axios';

export const state = () => ({
    postsLoaded: [],
    commentsLoaded: [],
    token: null
});

export const mutations = {
    addPost(state, post) {
        state.postsLoaded.push(post);
    },
    setPosts(state, posts) {
        state.postsLoaded = posts;
    },
    editPost(state, postEdit) {
        const postIndex = state.postsLoaded.findIndex(post => {
            return post.id === postEdit.id
        });
        state.postsLoaded[postIndex] = postEdit;
    },
    addComment(state, comment) {
        state.commentsLoaded.push(comment);
    },
    setToken(state, token){
        state.token = token;
    },
    destroyToken(state){
        state.token = null;
    }
}

export const actions = {
    authUser({ commit }, authData) {
        const key = 'AIzaSyBYeffR2CY_ihpCaoX2XDTJnecdJmxYkbE';
        return axios.post(`https://www.googleapis.com/identitytoolkit/v3/relyingparty/verifyPassword?key=${key}`, {
            email: authData.email,
            password: authData.password,
            returnSecureToken: true
        })
        .then(res => commit('setToken', res.data.idToken))
        .catch(e => console.log('euth err', e))
    },
    logoutUser({commit}){
        commit('destroyToken');
    },
    nuxtServerInit({ commit }, context) {
        return axios.get('https://fbtest-228.firebaseio.com/posts.json')
            .then((res) => {
                const postsArray = []
                for (let key in res.data) {
                    postsArray.push({ ...res.data[key], id: key })
                }
                console.log('postsArray', postsArray);
                commit('setPosts', postsArray)
            }).catch(err => {
                console.log('err', err);
            })
    },
    addPost({ commit }, post) {
        return axios.post('https://fbtest-228.firebaseio.com/posts.json', post)
            .then((result) => {
                commit('addPost', { ...post, id: result.data.name });
            }).catch((err) => {
                console.log('err', err);
            });
    },
    editPost({ commit }, post) {
        return axios.put(`https://fbtest-228.firebaseio.com/posts/${post.id}.json`, post)
            .then(res => {
                commit('editPost', post);
            })
            .catch(e => console.log('err', e))
    },
    addComment({ commit }, comment) {
        return axios.post('https://fbtest-228.firebaseio.com/comments.json', comment)
            .then((result) => {
                commit('addComment', { ...comment, id: result.data.name });
            }).catch((err) => {
                console.log('err', err);
            });
    }
}

export const getters = {
    getPostsLoaded(state) {
        return state.postsLoaded;
    },
    checkAuthUser(state){
        return state.token != null;
    }
}