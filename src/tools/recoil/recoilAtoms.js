import {atom} from "recoil";
import * as keys from "./stateKeys";

export const settingsState = atom({
    key: keys.SETTINGS_STATE_KEY,
    default:  {},
});

export const quizzesState = atom({
    key: keys.QUIZZES_STATE_KEY,
    default:  {},
});

export const profileState = atom({
    key: keys.PROFILE_STATE_KEY,
    default:  {},
});
export const chatsSettings = atom({
    key: keys.CHATS_STATE_KEY,
    default:  {},
});