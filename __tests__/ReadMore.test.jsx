/**
 * @jest-environment jsdom
 */

import React from 'react';
import { render, screen } from '@testing-library/react';
import { ReadMore } from '@/components/ReadMore/ReadMore';

const largeText =
  "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.Why do we use it?It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected)";

describe('Read More component', () => {
  it('correctly triggers read more and read less', () => {
    render(<ReadMore text={largeText} />);

    const readMoreBtn = screen.queryByTestId('read-more-btn');

    expect(readMoreBtn).toBeTruthy();

    readMoreBtn.click();

    expect(readMoreBtn.textContent).toBe('Read Less');

    let readMoreContainer = screen.queryByTestId('read-more-text');

    expect(readMoreContainer.textContent.length).toBeGreaterThan(200);

    readMoreBtn.click();

    readMoreContainer = screen.queryByTestId('read-more-text');

    // 204 as 200 + 3 for the ellipsis
    expect(readMoreContainer.textContent.length).toBeLessThan(204);

    expect(readMoreBtn.textContent).toBe('Read More');
  });
});
