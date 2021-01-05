import { first, last, next, prev, register, remove, select } from 'actions';
import {
    KEY_CLICK,
    KEY_DOWN,
    KEY_END,
    KEY_ENTER,
    KEY_HOME,
    KEY_LEFT,
    KEY_REGISTER,
    KEY_REMOVE,
    KEY_RIGHT,
    KEY_SPACE,
    KEY_UP,
} from './keys';

export default {
    [KEY_CLICK]: select,
    [KEY_DOWN]: next,
    [KEY_END]: last,
    [KEY_ENTER]: select,
    [KEY_HOME]: first,
    [KEY_LEFT]: prev,
    [KEY_RIGHT]: next,
    [KEY_REGISTER]: register,
    [KEY_REMOVE]: remove,
    [KEY_SPACE]: select,
    [KEY_UP]: prev,
};
