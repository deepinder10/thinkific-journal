/**
 * @jest-environment jsdom
 */

import React from 'react';
import { render, screen } from '@testing-library/react';
import { Sentiment } from '@/components/Sentiment/Sentiment';

describe('Read More component', () => {
  it('shows Positive text', () => {
    render(<Sentiment sentimentInt={2} />);

    expect(screen.getByTestId('sentiment-colored-text').textContent).toBe(
      'positive'
    );
  });
  it('shows Negative text', () => {
    render(<Sentiment sentimentInt={-1} />);

    expect(screen.getByTestId('sentiment-colored-text').textContent).toBe(
      'negative'
    );
  });
  it('shows Neutral text', () => {
    render(<Sentiment sentimentInt={0} />);

    expect(screen.getByTestId('sentiment-colored-text').textContent).toBe(
      'neutral'
    );
  });
});
