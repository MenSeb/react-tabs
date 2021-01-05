import { selectTab, selectTabDelete, updateState } from 'utilities';

export default function remove(state, { target }) {
    const data = state.datas.find((data) => data.id === target.id);

    if (!data.removable) return state;

    const datas = state.datas.map((data) => {
        return data.id === target.id ? { ...data, deleted: true } : data;
    });

    const isTabActive = state.idTab === target.id;

    return updateState({
        state: { ...state, datas },
        target: isTabActive
            ? selectTabDelete(target)
            : selectTab(state.idTab, target),
        update: isTabActive,
    });
}
