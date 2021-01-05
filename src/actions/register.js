export default function register(state, { childs }) {
    return {
        ...state,
        datas: state.datas.map((data, index) => {
            const { removable } = childs[index].props;

            if (removable === undefined) return data;

            return { ...data, removable };
        }),
    };
}
