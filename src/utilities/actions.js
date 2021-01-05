import {
    firstTab,
    lastTab,
    nextTab,
    prevTab,
    registerTab,
    removeTab,
    selectTab,
} from 'actions';

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
    [KEY_CLICK]: selectTab,
    [KEY_DOWN]: nextTab,
    [KEY_END]: lastTab,
    [KEY_ENTER]: selectTab,
    [KEY_HOME]: firstTab,
    [KEY_LEFT]: prevTab,
    [KEY_RIGHT]: nextTab,
    [KEY_REGISTER]: registerTab,
    [KEY_REMOVE]: removeTab,
    [KEY_SPACE]: selectTab,
    [KEY_UP]: prevTab,
};
