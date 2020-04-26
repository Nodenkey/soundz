import {CHANGE_PLAYING} from "./constants";

const initialState = {
    playing: ""
}

export const playAlbum = (state= initialState, action={}) => {
    switch(action.type){
        case CHANGE_PLAYING:
            return  {...state, playing: action.payload};
        default:
            return state;
    }
}