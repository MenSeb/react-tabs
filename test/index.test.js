import React from 'react';
import { render, screen } from '@testing-library/react';
import App from 'index';

describe('Test', () => {
    it('should work properly', () => {
        render(<App />);

        expect(screen.getByRole('main')).toBeInTheDocument();
    });
});
