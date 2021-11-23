import firebase from "firebase";
import { USER_STATE_CHANGE, USERS_POSTS_STATE_CHANGE, USERS_DATA_STATE_CHANGE, USER_POSTS_STATE_CHANGE, CLEAR_DATA, USER_FOLLOWING_STATE_CHANGE, USER_BUBBL_STATE_CHANGE } from "../constants/index";

export function clearData() {
    return ((dispatch) => {
        dispatch({type: CLEAR_DATA})
    })
}

export function fetchUser() {
    return((dispatch) => {
        firebase.firestore()
        .collection("users")
        .doc(firebase.auth().currentUser.uid)
        .get()
        .then((snapshot) => {
            if(snapshot.exists){
                dispatch({ type: USER_STATE_CHANGE, currentUser: snapshot.data() })
            }
            else{
                console.log('does not exist');
            }
        })
    })
}

export function fetchUserPosts() {
    return((dispatch) => {
        firebase.firestore()
        .collection("posts")
        .doc(firebase.auth().currentUser.uid)
        .collection("userPosts")
        .orderBy("date", "desc")
        .get()
        .then((snapshot) => {
            let posts = snapshot.docs.map(doc => {
                const data = doc.data();
                const id = doc.id;
                return {id, ...data}
            })
            dispatch({ type: USER_POSTS_STATE_CHANGE, posts: posts})
        })
    })
}

export function fetchUserFollowing() {
    return((dispatch) => {
        firebase.firestore()
        .collection("following")
        .doc(firebase.auth().currentUser.uid)
        .collection("usersFollowing")
        .onSnapshot((snapshot) => {
            let following = snapshot.docs.map(doc => {
                const id = doc.id;
                return id
            })
            dispatch({ type: USER_FOLLOWING_STATE_CHANGE, following})
            for(let i = 0; i < following.length; i++){
                dispatch(fetchUsersData(following[i]));
            }
        })
    })
}

export function fetchUserBubbls() {
    return((dispatch) => {
        firebase.firestore()
        .collection("bubbls")
        .doc(firebase.auth().currentUser.uid)
        .collection("userBubbls")
        .onSnapshot((snapshot) => {
            let bubbls = snapshot.docs.map(doc => {
                const data = doc.data();
                const id = doc.id;
                return {id, ...data}
            })
            bubbls.unshift({id: "public", name: "public", color: "black"})
            dispatch({ type: USER_BUBBL_STATE_CHANGE, bubbls})
        })
    })
}


export function fetchUsersData(uid){
    return ((dispatch, getState) => {
        const found = getState().usersState.users.some(el => el.uid === uid);
        if(!found){
            firebase.firestore()
            .collection("users")
            .doc(uid)
            .get()
            .then((snapshot) => {
                if(snapshot.exists){
                    let user = snapshot.data();
                    user.uid = snapshot.id;
                    dispatch({ type: USERS_DATA_STATE_CHANGE, user})
                    dispatch(fetchUsersFollowingPosts(uid));

                }
                else{
                    console.log('does not exist');
                }
            })
        }
    }) 
}

export function fetchUsersFollowingPosts(uid) {
    return((dispatch, getState) => {
        firebase.firestore()
        .collection("posts")
        .doc(uid)
        .collection("userPosts")
        .orderBy("date", "desc")
        .get()
        .then((snapshot) => {
            const uid = snapshot.docs[0].ref.path.split('/')[1];
            const user = getState().usersState.users.find(el => el.uid === uid);

            let posts = snapshot.docs.map(doc => {
                const data = doc.data();
                const id = doc.id;
                return {id, ...data, user}
            })
            dispatch({ type: USERS_POSTS_STATE_CHANGE, posts: posts, uid})
        })
    })
}