import '@testing-library/jest-dom';
import { screen, render } from '@testing-library/react';
import { expect, describe, test } from 'vitest';

import Header from './Header';

describe('header component', () => {
  test('Contains Heading', () => {
    render(<Header />);

    expect(screen.getByText('Webb Gallery')).toBeInTheDocument();
  });
});
