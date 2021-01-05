import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Tab } from 'components';

const props = {
    children: <div />,
    className: 'cs',
    controls: 'controls',
    haspopup: false,
    id: 'id',
    onClick: jest.fn(),
    onKeyDown: jest.fn(),
    onKeyUp: jest.fn(),
    removable: false,
    selected: false,
};

function getTab() {
    return screen.getByRole('tab');
}

describe('<Tab />', () => {
    describe('When rendering', () => {
        beforeEach(() => render(<Tab {...props} />));

        it('renders with role tab', () => {
            expect(getTab()).toBeInTheDocument();
        });

        it('renders with children', () => {
            expect(getTab()).not.toBeEmptyDOMElement();
        });

        it('renders with mouse handler', () => {
            userEvent.click(getTab());

            expect(props.onClick).toHaveBeenCalledTimes(1);
        });

        it('renders with keyboard handler', () => {
            userEvent.type(getTab(), '{enter}');

            expect(props.onKeyDown).toHaveBeenCalledTimes(1);
            expect(props.onKeyUp).toHaveBeenCalledTimes(1);
        });

        it('renders with attribute id', () => {
            expect(getTab()).toHaveAttribute('id', props.id);
        });

        it('renders with attribute aria-controls', () => {
            expect(getTab()).toHaveAttribute('aria-controls', props.controls);
        });

        it('renders with additionnal props', () => {
            expect(getTab()).toHaveClass(props.className);
        });
    });

    describe('When selected', () => {
        beforeEach(() => render(<Tab {...props} selected={true} />));

        it('renders with attribute aria-selected true', () => {
            expect(getTab()).toHaveAttribute('aria-selected', 'true');
        });

        it('renders with attribute tabIndex 0', () => {
            expect(getTab()).toHaveAttribute('tabindex', '0');
        });
    });

    describe('When not selected', () => {
        beforeEach(() => render(<Tab {...props} selected={false} />));

        it('renders with attribute aria-selected false', () => {
            expect(getTab()).toHaveAttribute('aria-selected', 'false');
        });

        it('renders with attribute tabIndex -1', () => {
            expect(getTab()).toHaveAttribute('tabindex', '-1');
        });
    });

    describe('With popup', () => {
        it('renders with attribute aria-haspopup true', () => {
            render(<Tab {...props} haspopup={true} />);
            expect(getTab()).toHaveAttribute('aria-haspopup', 'true');
        });
    });

    describe('Without popup', () => {
        it('renders with attribute aria-haspopup false', () => {
            render(<Tab {...props} haspopup={false} />);
            expect(getTab()).toHaveAttribute('aria-haspopup', 'false');
        });
    });
});
