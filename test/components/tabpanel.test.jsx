import React from 'react';
import { render, screen } from '@testing-library/react';
import { TabPanel } from 'components';

const props = {
    children: <div />,
    className: 'cs',
    hidden: false,
    id: 'id',
    label: 'label',
    tag: 'section',
};

function getPanel() {
    return screen.getByRole('tabpanel', { hidden: true });
}

describe('<TabPanel />', () => {
    describe('When shown', () => {
        beforeEach(() => render(<TabPanel {...props} />));

        it('renders with role tabpanel', () => {
            expect(getPanel()).toBeInTheDocument();
        });

        it('renders with children', () => {
            expect(getPanel()).not.toBeEmptyDOMElement();
        });

        it('renders with attribute id', () => {
            expect(getPanel()).toHaveAttribute('id', props.id);
        });

        it('renders with attribute aria-labelledby', () => {
            expect(getPanel()).toHaveAttribute('aria-labelledby', props.label);
        });

        it('renders with attribute tabindex 0', () => {
            expect(getPanel()).toHaveAttribute('tabindex', '0');
        });

        it('renders with the tag provided', () => {
            expect(getPanel().tagName).toMatch(RegExp(props.tag, 'i'));
        });

        it('renders with additionnal props', () => {
            expect(getPanel()).toHaveClass(props.className);
        });

        it('renders without attribute hidden', () => {
            expect(getPanel()).not.toHaveAttribute('hidden');
        });
    });

    describe('When hidden', () => {
        beforeEach(() => render(<TabPanel {...props} hidden={true} />));

        it('renders with attribute hidden', () => {
            expect(getPanel()).toHaveAttribute('hidden', '');
        });
    });
});
