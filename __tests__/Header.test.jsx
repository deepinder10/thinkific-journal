/**
 * @jest-environment jsdom
 */

import React from 'react';
import { render, screen } from '@testing-library/react';
import { Header } from '@/components/Header/Header';

describe('Header popup', () => {
  it('opens and closes the post create popup', () => {
    render(<Header />);

    const createPostBtn = screen.getByTestId('create-post-btn');

    createPostBtn.click();

    let createPostPopup = screen.queryByTestId('create-post-popup');

    expect(createPostPopup).toBeTruthy();

    const closeBtn = screen.getByTestId('popup-close-btn');

    closeBtn.click();

    createPostPopup = screen.queryByTestId('create-post-popup');

    expect(createPostPopup).toBeFalsy();
  });
});
