import React from 'react'
import { expect } from 'chai';
import {shallow} from 'enzyme';

import LoadingSpinner from './index';

describe('<LoadingSpinner />', () => {
    const wrapper = shallow(<LoadingSpinner/>);

    it('should render', () => {       
        expect(wrapper.type()).to.be.equal('div');
    });

    it('should render children', () => {       
        expect(wrapper.children()).to.have.lengthOf(12);
    });

    it('should set the class name', () => {
        expect(wrapper.props().className).to.equal('lds-spinner');
    });

    describe('<div />', () => {  
        it('should be rendered', () => {
            expect(wrapper.children().find('div').length).to.be.equal(12);
        });
    });
});
