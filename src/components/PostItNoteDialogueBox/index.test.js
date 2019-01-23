/* eslint-disable no-unused-expressions */
import sinon from 'sinon';
import React from 'react'
import {shallow} from 'enzyme';
import sinonChai from 'sinon-chai';
import chai, { expect } from 'chai';

import PostItNoteDialogueBox from './index';

chai.use(sinonChai);

describe('PostItNoteDialogueBox', () => {

    const props = {
        title: 'MyTitle',
        closeHandler: sinon.spy(),
        information: 'MyInformation'
    };

    const wrapper = shallow(<PostItNoteDialogueBox {...props} />);

    it('should render', () => {
        expect(wrapper.type()).to.equal('div');
    });

    it('should render children', () => {
        expect(wrapper.children().length).to.equal(3);
    });

    it('should set className', () => {
        expect(wrapper.props().className).to.equal('postItNoteDialogueBox');
    });

    describe('<h1 />', () => {
        const headingOne = wrapper.childAt(0);

        it('should render', () => {
            expect(headingOne.type()).to.equal('h1');
        });

        it('should set text', () => {
            expect(headingOne.text()).to.equal(props.title);
        });
    });

    describe('<p />', () => {
        const paragraph = wrapper.childAt(1);

        it('should render', () => {
            expect(paragraph.type()).to.equal('p');
        });

        it('should set text', () => {
            expect(paragraph.text()).to.equal(props.information);
        });
    });

    describe('<button />', () => {
        const button = wrapper.childAt(2);

        it('should render', () => {
            expect(button.type()).to.equal('button');
        });

        it('should set text', () => {
            expect(button.text()).to.equal('OK!');
        });

        it('should set className', () => {
            expect(button.props().className).to.equal('simple-text-button');
        });

        it('should call closeHandler when clicked', () => {
            expect(props.closeHandler).not.to.have.been.calledOnce;

            button.simulate('click');

            expect(props.closeHandler).to.have.been.calledOnce;
        });
    });
});