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
    it('Should call function on input value change', () => {
        let changeableValue = false;
        const wrapper = shallow(<TextInput onChange={() => {changeableValue = true;}} ></TextInput>);
        const input = wrapper.find('input');
        input.simulate('change', { target: { value: 'test' } });
        expect(changeableValue).toBe(true);
    });
})