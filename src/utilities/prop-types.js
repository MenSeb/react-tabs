import { Children, isValidElement } from 'react';

export function errorChildren(component, children) {
    return (
        `Invalid children supplied to ${component}, ` +
        `expected component(s): ${children}.`
    );
}

export function childrenRestricted({ multiple = false, types = [] }) {
    const names = types.map(({ name }) => name).join(', ');

    return function (props, propName, componentName) {
        const prop = props[propName];

        if (
            (!multiple || types.length > 1) &&
            Children.count(prop) !== types.length
        ) {
            return new Error(errorChildren(componentName, names));
        }

        const childs = Children.toArray(prop);

        for (let index = 0; index < childs.length; index++) {
            const child = childs[index];
            const type = types.length > 1 ? types[index] : types[0];

            if (!(isValidElement(child) && child.type === type)) {
                return new Error(errorChildren(componentName, names));
            }
        }

        return null;
    };
}
