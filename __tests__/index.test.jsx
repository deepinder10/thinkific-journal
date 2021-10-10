/**
 * @jest-environment jsdom
 */

import React from 'react';
import { render, screen } from '@testing-library/react';
import Journal from '../pages/index';

const SAMPLE_POSTS = [
  {
    id: 1,
    title: 'Second Post',
    content: 'Hello, Journal!',
    createdAt: new Date().toISOString(),
    author: { id: 1, name: 'John Doe' },
  },
  {
    id: 2,
    title: 'Second Post',
    content: 'Hello, Journal!',
    createdAt: new Date().toISOString(),
    author: { id: 2, name: 'Jane Doe' },
  },
];

describe('Posts page', () => {
  it('renders the sample posts', () => {
    render(<Journal posts={SAMPLE_POSTS} />);

    const posts = screen.getByTestId('posts-container');

    expect(posts.children.length).toBe(2);
  });
  it('shows no posts text when there is no data', () => {
    render(<Journal posts={[]} />);

    const noPostText = screen.getByTestId('no-post-text');

    expect(noPostText).toBeTruthy();
  });
});
