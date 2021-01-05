import { selectTabPrev, updateState } from 'utilities';

export default function next(state, { target }) {
    return updateState({ state, target: selectTabPrev(target) });
}
