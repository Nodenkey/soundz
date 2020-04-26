import {CHANGE_PLAYING} from "./constants";

const initialState = {
    playing: ""
};

const playAlbumReducer = (state= initialState, action= {}) => {
    switch(action.type){
        case CHANGE_PLAYING:
            return  {
                ...state,
                playing: action.payload
            };

        default:
            return state;
    }
};

export default playAlbumReducer;