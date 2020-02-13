import React, { useEffect } from 'react';
import * as rtl from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import App from './App';
import axios from 'axios';

jest.mock('axios', () => {
    return {
    get: jest.fn(() => Promise.resolve({
        data: {
            results: [{name: 'Raudel,'}, {name: 'Fern'}]
        }
    }))}
})

test('Render StarWars Logo', async () => {
    const wrapper = rtl.render(<App />);

    const starwarsLogo = wrapper.getByAltText(/logo/i);

    expect(starwarsLogo).toBeVisible();
});

test('Made an api call', async () => {
    expect(axios.get).toBeCalled();
})

test('Next Button works', async () => {
    const wrapper = rtl.render(<App />);

    const nextBtn = wrapper.getByText(/next/i);

    rtl.act(() => {
        rtl.fireEvent.click(nextBtn);
    });

    expect(nextBtn).toBeVisible();
})

test('Next Button works', async () => {
    const wrapper = rtl.render(<App />);

    const prevBtn = wrapper.getByText(/previous/i);

    rtl.act(() => {
        rtl.fireEvent.click(prevBtn);
    });

    expect(prevBtn).toBeVisible();
})