import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import TextInput from './TextInput';

Enzyme.configure({adapter: new Adapter()});

describe('TextInput testing', () => {
    it('Should have label', () => {
        const wrapper = shallow(<TextInput label='test' ></TextInput>);
        const text = wrapper.find('p');
        expect(text.text()).toBe('test');
    });
})