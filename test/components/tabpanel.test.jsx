import React from 'react';
import { render, screen } from '@testing-library/react';
import { TabPanel } from 'components';

const props = {
    children: <div />,
    className: 'cs',
    hidden: false,
    id: 'id',
    labelledby: 'labelledby',
};

function getPanel() {
    return screen.getByRole('tabpanel', { hidden: true });
}

describe('<TabPanel />', () => {
    describe('When rendering', () => {
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
            expect(getPanel()).toHaveAttribute(
                'aria-labelledby',
                props.labelledby,
            );
        });

        it('renders with attribute tabindex 0', () => {
            expect(getPanel()).toHaveAttribute('tabindex', '0');
        });

        it('renders with additionnal props', () => {
            expect(getPanel()).toHaveClass(props.className);
        });
    });

    describe('When shown', () => {
        it('renders without attribute hidden', () => {
            render(<TabPanel {...props} hidden={false} />);
            expect(getPanel()).not.toHaveAttribute('hidden');
        });
    });

    describe('When hidden', () => {
        it('renders with attribute hidden', () => {
            render(<TabPanel {...props} hidden={true} />);
            expect(getPanel()).toHaveAttribute('hidden', '');
        });
    });
});
