export default function config(state) {
    const { idTabs, removable, tab, tabs } = state;

    const datas = [];

    for (let index = 0; index < tabs; index++) {
        const id = `${idTabs}-${index}`;

        datas.push({
            controls: `panel-${id}`,
            deleted: false,
            id: `tab-${id}`,
            removable,
        });
    }

    const { id: idTab } = datas[tab];

    return { ...state, datas, idTab };
}
