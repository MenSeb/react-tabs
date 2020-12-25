export default function updateState({
    state,
    target,
    update = state.automatic,
}) {
    return {
        ...state,
        target,
        idTab: target === null ? null : update ? target.id : state.idTab,
    };
}
