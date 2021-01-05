export default function select(state, { target }) {
    return { ...state, idTab: target.id, target };
}
