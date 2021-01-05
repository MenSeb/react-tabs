import { isOrientationHorizontal, isOrientationVertical } from './orientation';

export const KEY_CLICK = 'click';
export const KEY_DOWN = 'ArrowDown';
export const KEY_END = 'End';
export const KEY_ENTER = 'Enter';
export const KEY_HOME = 'Home';
export const KEY_LEFT = 'ArrowLeft';
export const KEY_REGISTER = 'register';
export const KEY_REMOVE = 'Delete';
export const KEY_RIGHT = 'ArrowRight';
export const KEY_SPACE = ' ';
export const KEY_UP = 'ArrowUp';

export function isKeyLeft(key) {
    return key === KEY_LEFT;
}

export function isKeyRight(key) {
    return key === KEY_RIGHT;
}

export function isKeyUp(key) {
    return key === KEY_UP;
}

export function isKeyDown(key) {
    return key === KEY_DOWN;
}

export function isKeyHorizontal(key) {
    return isKeyLeft(key) || isKeyRight(key);
}

export function isKeyVertical(key) {
    return isKeyDown(key) || isKeyUp(key);
}

export function isKeyEnter(key) {
    return key === KEY_ENTER;
}

export function isKeySpace(key) {
    return key === KEY_SPACE;
}

export function isKeySelection(key) {
    return isKeyEnter(key) || isKeySpace(key);
}

export function isKeyRemove(key) {
    return key === KEY_REMOVE;
}

export function isKeyHome(key) {
    return key === KEY_HOME;
}

export function isKeyEnd(key) {
    return key === KEY_END;
}

export function isKeyNext(key) {
    return isKeyRight(key) || isKeyDown(key);
}

export function isKeyPrev(key) {
    return isKeyLeft(key) || isKeyUp(key);
}

export function isKeyEdge(key) {
    return isKeyHome(key) || isKeyEnd(key);
}

export function isKeyNavigation(key) {
    return isKeyNext(key) || isKeyPrev(key);
}

export function isKeyValid({ key, orientation, override }) {
    return (
        isKeySelection(key) ||
        isKeyEdge(key) ||
        isKeyRemove(key) ||
        (isKeyNavigation(key) &&
            (override ||
                (isOrientationHorizontal(orientation) &&
                    isKeyHorizontal(key)) ||
                (isOrientationVertical(orientation) && isKeyVertical(key))))
    );
}
