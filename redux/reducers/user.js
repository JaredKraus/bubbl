import {USER_STATE_CHANGE, USER_POSTS_STATE_CHANGE, USER_FOLLOWING_STATE_CHANGE, CLEAR_DATA, USER_BUBBL_STATE_CHANGE} from "../constants"

const initialState = {
    currentUser: null,
    posts: [],
    following: [],
    bubbls: [{id: "public", name: "public", color: "black"}]
}

export const user = (state = initialState, action) => {

    switch(action.type) {
        case USER_STATE_CHANGE:
            return {
                ...state,
                currentUser: action.currentUser
            }
        
        case USER_POSTS_STATE_CHANGE:
            return {
                ...state,
                posts: action.posts
            }

        case USER_FOLLOWING_STATE_CHANGE:
            return {
                ...state,
                following: action.following
            }

        case USER_BUBBL_STATE_CHANGE:
            return {
                ...state,
                bubbls: action.bubbls
            }
        
        case CLEAR_DATA:
            return initialState;
        
        default:
            return state;
    }


   
}