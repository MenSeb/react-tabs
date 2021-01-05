import { selectTabLast, updateState } from 'utilities';

export default function last(state, { target }) {
    return updateState({ state, target: selectTabLast(target) });
}
