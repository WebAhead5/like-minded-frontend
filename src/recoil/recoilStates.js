import {atom} from "recoil";
import * as keys from "./stateKeys"

atom({
    key: keys.PROFILE_STATE,
    default: {},
});

atom({
    key: keys.LOGGED_IN,
    default: false,
});

atom({
    key: keys.SETTINGS_STATE,
    default: {},
});

atom({
    key: keys.QUIZZES_STATE,
    default: {},
});