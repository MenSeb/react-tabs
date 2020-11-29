import React from 'react';
import { render, screen } from '@testing-library/react';
import { TabList } from 'components';

const props = {
    children: <div />,
    className: 'cs',
    label: 'label',
    labelledby: 'labelledby',
    orientation: 'horizontal',
};

function getList() {
    return screen.getByRole('tablist');
}

describe('<TabList />', () => {
    beforeEach(() => render(<TabList {...props} />));

    it('renders with role tablist', () => {
        expect(getList()).toBeInTheDocument();
    });

    it('renders with children', () => {
        expect(getList()).not.toBeEmptyDOMElement();
    });

    it('renders with attribute aria-label', () => {
        expect(getList()).toHaveAttribute('aria-label', props.label);
    });

    it('renders with attribute aria-labelledby', () => {
        expect(getList()).toHaveAttribute('aria-labelledby', props.labelledby);
    });

    it('renders with attribute aria-orientation', () => {
        expect(getList()).toHaveAttribute(
            'aria-orientation',
            props.orientation,
        );
    });

    it('renders with additionnal props', () => {
        expect(getList()).toHaveClass(props.className);
    });
});
