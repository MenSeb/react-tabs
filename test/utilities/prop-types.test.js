import React from 'react';
import { childrenRestricted, errorChildren } from 'utilities';

function ComponentA() {}
function ComponentB() {}

const propName = 'children';
const componentName = 'TestComponent';
const components = `${ComponentA.name}, ${ComponentB.name}`;

describe('errorChildren', () => {
    it('returns an error message for childrenRestricted', () => {
        expect(errorChildren(componentName, components)).toBe(
            `Invalid children supplied to ${componentName}, ` +
                `expected component(s): ${components}.`,
        );
    });
});

describe('childrenRestricted', () => {
    it('returns a validation function for PropTypes', () => {
        expect(childrenRestricted({})).toEqual(expect.any(Function));
    });

    describe('When used as a validation', () => {
        it('returns an error if the number of children is wrong', () => {
            expect(
                childrenRestricted({ types: [ComponentA, ComponentB] })(
                    { children: <ComponentA /> },
                    propName,
                    componentName,
                ),
            ).toMatchObject(Error(errorChildren(componentName, components)));
        });

        it('returns an error if the position of a children is wrong', () => {
            expect(
                childrenRestricted({ types: [ComponentA, ComponentB] })(
                    {
                        children: [
                            <ComponentB key="B" />,
                            <ComponentA key="A" />,
                        ],
                    },
                    propName,
                    componentName,
                ),
            ).toMatchObject(Error(errorChildren(componentName, components)));
        });

        it('returns an error if children types are wrong', () => {
            expect(
                childrenRestricted({ multiple: true, types: [ComponentA] })(
                    {
                        children: [
                            <ComponentA key="A" />,
                            <ComponentB key="B" />,
                        ],
                    },
                    propName,
                    componentName,
                ),
            ).toMatchObject(
                Error(errorChildren(componentName, ComponentA.name)),
            );
        });

        it('returns null otherwise', () => {
            expect(
                childrenRestricted({ types: [ComponentA, ComponentB] })(
                    {
                        children: [
                            <ComponentA key="A" />,
                            <ComponentB key="B" />,
                        ],
                    },
                    propName,
                    componentName,
                ),
            ).toBeNull();

            expect(
                childrenRestricted({ multiple: true, types: [ComponentA] })(
                    {
                        children: [
                            <ComponentA key="A" />,
                            <ComponentA key="B" />,
                        ],
                    },
                    propName,
                    componentName,
                ),
            ).toBeNull();
        });
    });
});
