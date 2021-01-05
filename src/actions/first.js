import { selectTabFirst, updateState } from 'utilities';

export default function first(state, { target }) {
    return updateState({ state, target: selectTabFirst(target) });
}
