import React from 'react'
import { expect } from 'chai';
import {shallow} from 'enzyme';

import ImageWithLoadingSpinner from './index';
import LoadingSpinner from '../LoadingSpinner/index';

describe('<ImageWithLoadingSpinner />', () => {
    const wrapper = shallow(<ImageWithLoadingSpinner url="MyImage.jpg"/>);

    it('should render a div with', () => {   
        expect(wrapper.type()).to.be.equal('div');
    });

    it('should render children', () => {
        expect(wrapper.children()).to.have.length(2);
    });

    it('should set the class name', () => {
        expect(wrapper.props().className).to.equal('image-with-loading-spinner');
    });

    describe('<LoadingSpinner />', () => {
        const loadingSpinner = wrapper.childAt(0);

        it('should be rendered', () => {
            expect(loadingSpinner.is(LoadingSpinner)).to.equal(true);
        });        
    })

    describe('<img />', () => {
        const img = wrapper.childAt(1);

        it('should be rendered', () => {
            expect(img.type()).to.equal('img');
        });

        it('with the correct url', () => {
            expect(img.props().src).to.equal('MyImage.jpg');
        });
    });
});

describe('<ImageWithLoadingSpinner /> when the image has loaded', () => {
    const wrapper = shallow(<ImageWithLoadingSpinner url="MyImage.jpg"/>);

    const img = wrapper.find('img');
	img.props().onLoad();
	wrapper.update();

    it('should render a div with', () => {   
        expect(wrapper.type()).to.be.equal('div');
    });

    it('should render children', () => {
        expect(wrapper.children()).to.have.length(1);
    });

    it('should set the class name', () => {
        expect(wrapper.props().className).to.equal('image-with-loading-spinner');
    });

    describe('<LoadingSpinner />', () => {
        const loadingSpinner = wrapper.find('LoadingSpinner');

		it('should not be rendered', () => {
			expect(loadingSpinner.exists()).to.equal(false);
		});         
    });

    describe('<img />', () => {
        const img = wrapper.find('img');

        it('should be rendered', () => {
            expect(img.type()).to.equal('img');
        });

        it('with the correct url', () => {
            expect(img.props().src).to.equal('MyImage.jpg');
        });
    });
});