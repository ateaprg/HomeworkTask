import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { RenderIf } from './RenderIf';

Enzyme.configure({adapter: new Adapter()});

describe('RenderIf testing', () => {
    it('Should contain span', () => {
        const wrapper = shallow(<RenderIf isTrue={1 < 2}><span>test</span></RenderIf>);
        const text = wrapper.find('span');
        expect(text.text()).toBe('test');
    });
    it('Should not contain span', () => {
        const wrapper = shallow(<RenderIf isTrue={1 > 2}><span>test</span></RenderIf>);
        expect(wrapper.contains(<span>test</span>)).toBe(false);
    })
})