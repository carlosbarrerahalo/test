import React from 'react';
import userEvent from '@testing-library/user-event';
import {render, screen} from "@testing-library/react";
import {Title} from "./Title";


test('this method will render a title', () => {
    it('should render a title', () => {
        render(<Title title={'this is a title'} />);
        expect(screen.getByText('this is a title')).toBeTruthy();
    });
    it('test true', () => {
        expect(true).toBeTruthy();
    })
    it('tooltip should render when mouse over', () => {
        userEvent.mouseOver(screen.getByText('this is a title'));
        expect(screen.getByText('this is a helper')).toBeTruthy();
    })
});

