/* eslint-disable no-unused-expressions */
import sinon from 'sinon';
import React from 'react'
import {shallow} from 'enzyme';
import sinonChai from 'sinon-chai';
import chai, { expect } from 'chai';

import SimpleTextButtonGroup from './index';

chai.use(sinonChai);

describe('PostItNoteDialogueBox', () => {

    const props = {
        previousHandler: sinon.spy(),
        nextHandler: sinon.spy(),
        infoHandler: sinon.spy(),
    };

    const wrapper = shallow(<SimpleTextButtonGroup {...props} />);

    it('should render', () => {
        expect(wrapper.type()).to.equal('div');
    });

    it('should render children', () => {
        expect(wrapper.children().length).to.equal(3);
    });

    describe('<button>PREV</button>', () => {
        const button = wrapper.childAt(0);

        it('should render', () => {
            expect(button.type()).to.equal('button');
        });

        it('should set text', () => {
            expect(button.text()).to.equal('PREV');
        });

        it('should set className', () => {
            expect(button.props().className).to.equal('simple-text-button');
        });

        it('should call previousHandler when clicked', () => {
            expect(props.previousHandler).not.to.have.been.calledOnce;

            button.simulate('click');

            expect(props.previousHandler).to.have.been.calledOnce;
        });
    });

    describe('<button>NEXT</button>', () => {
        const button = wrapper.childAt(1);

        it('should render', () => {
            expect(button.type()).to.equal('button');
        });

        it('should set text', () => {
            expect(button.text()).to.equal('NEXT');
        });

        it('should set className', () => {
            expect(button.props().className).to.equal('simple-text-button');
        });

        it('should call nextHandler when clicked', () => {
            expect(props.nextHandler).not.to.have.been.calledOnce;

            button.simulate('click');

            expect(props.nextHandler).to.have.been.calledOnce;
        });
    });

    describe('<button>INFO</button>', () => {
        const button = wrapper.childAt(2);

        it('should render', () => {
            expect(button.type()).to.equal('button');
        });

        it('should set text', () => {
            expect(button.text()).to.equal('INFO');
        });

        it('should set className', () => {
            expect(button.props().className).to.equal('simple-text-button');
        });

        it('should call infoHandler when clicked', () => {
            expect(props.infoHandler).not.to.have.been.calledOnce;

            button.simulate('click');

            expect(props.infoHandler).to.have.been.calledOnce;
        });
    });
});