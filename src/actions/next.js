import { selectTabNext, updateState } from 'utilities';

export default function next(state, { target }) {
    return updateState({ state, target: selectTabNext(target) });
}
