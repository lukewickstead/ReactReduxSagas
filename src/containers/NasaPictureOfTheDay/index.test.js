/* eslint-disable no-unused-expressions */
import React from 'react';
import sinon from 'sinon';
import {shallow} from 'enzyme';
import sinonChai from 'sinon-chai';
import chai, { expect } from 'chai';

import PolaroidImage from '../../components/PolaroidImage';
import PostItNoteDialogueBox from '../../components/PostItNoteDialogueBox';
import SimpleTextButtonGroup from '../../components/SimpleTextButtonGroup';
import { NasaPictureOfTheDayContainer as NasaPictureOfTheDay } from './index';

chai.use(sinonChai);

describe('<NasaPictureOfTheDay />', () => {
    describe('when loading', () => {
        const props = {
            data: {},
            error: '',
            isLoading: true,
            displayExplanation: false,
            getNasaPictureOfTheDayHandler : sinon.spy(),
            resetNasaPictureOfTheDayErrorHandler: sinon.spy(),
            putDisplayNasaPictureOfTheDayExplanationHandler: sinon.spy()
            }    

        const wrapper = shallow(<NasaPictureOfTheDay {...props} />);

        it('should render as <>', () => {
            expect(wrapper.name()).to.equal('Fragment');
        });

        it('should render children', () => {
            expect(wrapper.children().length).to.equal(1);
        });

        it('should call getNasaPictureOfTheDayHandler when mounting', () => {
            expect(props.getNasaPictureOfTheDayHandler).to.have.been.calledOnce;
        });

        describe('<div className="nasaPicOfDayContainer" />', () => {
            const containerClass = wrapper.childAt(0);

            it('should render as <div>', () => {
                expect(containerClass.type()).to.equal('div');
            });

            it('should set the class', () => {
                expect(containerClass.props().className).to.equal('nasaPicOfDayContainer');
            });

            it('should render children', () => {
                expect(containerClass.children().length).to.equal(2);
            });

            describe('<h1 />', () => {
                const headingOne = containerClass.childAt(0);
        
                it('should render as <h1>', () => {
                    expect(headingOne.type()).to.equal('h1');
                });
        
                it('should set text', () => {
                    expect(headingOne.text()).to.equal('NASA Picture of the Day');
                });    
            });

            describe('<div className="loadingMessage" />', () => {
                const divLoadingMsg = containerClass.childAt(1);
        
                it('should render as <div>', () => {
                    expect(divLoadingMsg.type()).to.equal('div');
                });
        
                it('should set className', () => {
                    expect(divLoadingMsg.props().className).to.equal('loadingMessage');
                });

                it('should render children', () => {
                    expect(divLoadingMsg.children().length).to.equal(1);
                });   
                
                describe('<p />', () => {
                    const pLoadingMsg = divLoadingMsg.childAt(0);
            
                    it('should render as <p>', () => {
                        expect(pLoadingMsg.type()).to.equal('p');
                    });
            
                    it('should set text', () => {
                        expect(pLoadingMsg.text()).to.equal('Please wait, loading....');
                    });    
                });
            });
        });
    });

    describe('when loaded with data', () => {
        const props = {
            data: {
                url: "Test URL", 
                date: "Test DateL", 
                hdurl: "Test HD URL", 
                title: "Test Title", 
                media_type: "image", 
                explanation: "Test explanation"},
            error: '',
            isLoading: false,
            displayExplanation: false,
            getNasaPictureOfTheDayHandler : sinon.spy(),
            resetNasaPictureOfTheDayErrorHandler: sinon.spy(),
            putDisplayNasaPictureOfTheDayExplanationHandler: sinon.spy()
            }    

        const wrapper = shallow(<NasaPictureOfTheDay {...props} />);

        it('should render as <>', () => {
            expect(wrapper.name()).to.equal('Fragment');
        });

        it('should render children', () => {
            expect(wrapper.children().length).to.equal(1);
        });

        it('should call getNasaPictureOfTheDayHandler when mounting', () => {
            expect(props.getNasaPictureOfTheDayHandler).to.have.been.calledOnce;
        });

        describe('<div className="nasaPicOfDayContainer" />', () => {
            const containerClass = wrapper.childAt(0);

            it('should render as <div>', () => {
                expect(containerClass.type()).to.equal('div');
            });

            it('should set the class', () => {
                expect(containerClass.props().className).to.equal('nasaPicOfDayContainer');
            });

            it('should render children', () => {
                expect(containerClass.children().length).to.equal(3);
            });

            describe('<h1 />', () => {
                const headingOne = containerClass.childAt(0);
        
                it('should render as <h1>', () => {
                    expect(headingOne.type()).to.equal('h1');
                });
        
                it('should set text', () => {
                    expect(headingOne.text()).to.equal('NASA Picture of the Day');
                });    
            });

            describe('<SimpleTextButtonGroup />', () => {
                const simpleTextButtonGroup = containerClass.childAt(1);

                it('should render as <SimpleTextButtonGroup>', () => {
                    expect(simpleTextButtonGroup.is(SimpleTextButtonGroup)).to.equal(true);
                });

                it('should set previousHandler', () => {
                    simpleTextButtonGroup.props().previousHandler();
                    expect(props.getNasaPictureOfTheDayHandler).to.have.been.calledWithExactly(-1);
                });

                it('should set nextHandler', () => {
                    simpleTextButtonGroup.props().nextHandler();
                    expect(props.getNasaPictureOfTheDayHandler).to.have.been.calledWithExactly(1);
                });

                it('should set infoHandler', () => {
                    simpleTextButtonGroup.props().infoHandler();
                    expect(props.putDisplayNasaPictureOfTheDayExplanationHandler).to.have.been.calledWithExactly(true);
                });
            });

            describe('<PolaroidImage />', () => {
                const polaroidImage = containerClass.childAt(2);

                it('should render as <PolaroidImage>', () => {
                    expect(polaroidImage.is(PolaroidImage)).to.equal(true);
                });

                it('should set the title', () => {
                    expect(polaroidImage.props().title).to.equal(props.data.title);
                });

                it('should set the date', () => {
                    expect(polaroidImage.props().date).to.equal(props.data.date);
                });    

                it('should set the url', () => {
                    expect(polaroidImage.props().url).to.equal(props.data.url);
                });    

                it('should set the hdurl', () => {
                    expect(polaroidImage.props().hdurl).to.equal(props.data.hdurl);
                });

                it('should set the media_type', () => {
                    expect(polaroidImage.props().mediaType).to.equal(props.data.media_type);
                });
                it('should set the media_type', () => {
                    expect(polaroidImage.props().mediaType).to.equal(props.data.media_type);
                });
            });
        });
    });

    describe('when displaying information', () => {
        const props = {
            data: {
                url: "Test URL", 
                date: "Test DateL", 
                hdurl: "Test HD URL", 
                title: "Test Title", 
                media_type: "image", 
                explanation: "Test explanation"},
            error: '',
            isLoading: false,
            displayExplanation: true,
            getNasaPictureOfTheDayHandler : sinon.spy(),
            resetNasaPictureOfTheDayErrorHandler: sinon.spy(),
            putDisplayNasaPictureOfTheDayExplanationHandler: sinon.spy()
            }    

        const wrapper = shallow(<NasaPictureOfTheDay {...props} />);

        it('should render as <>', () => {
            expect(wrapper.name()).to.equal('Fragment');
        });

        it('should render children', () => {
            expect(wrapper.children().length).to.equal(1);
        });

        it('should call getNasaPictureOfTheDayHandler when mounting', () => {
            expect(props.getNasaPictureOfTheDayHandler).to.have.been.calledOnce;
        });

        describe('<div className="nasaPicOfDayContainer" />', () => {
            const containerClass = wrapper.childAt(0);

            it('should render as <div>', () => {
                expect(containerClass.type()).to.equal('div');
            });

            it('should set the class', () => {
                expect(containerClass.props().className).to.equal('nasaPicOfDayContainer');
            });

            it('should render children', () => {
                expect(containerClass.children().length).to.equal(4);
            });

            describe('<h1 />', () => {
                const headingOne = containerClass.childAt(0);
        
                it('should render as <h1>', () => {
                    expect(headingOne.type()).to.equal('h1');
                });
            });

            describe('<PostItNoteDialogueBox />', () => {
                const postItNoteDialogueBox = containerClass.childAt(1);
        
                it('should render as <PostItNoteDialogueBox>', () => {
                    expect(postItNoteDialogueBox.is(PostItNoteDialogueBox)).to.equal(true);
                });

                it('should set title', () => {
                    expect(postItNoteDialogueBox.props().title).to.equal(props.data.title);
                });

                it('should set information', () => {
                    expect(postItNoteDialogueBox.props().information).to.equal(props.data.explanation);
                });

                it('should set close handler', () => {
                    expect(props.putDisplayNasaPictureOfTheDayExplanationHandler).not.to.have.been.called
                    postItNoteDialogueBox.props().closeHandler();
                    expect(props.putDisplayNasaPictureOfTheDayExplanationHandler).to.have.been.calledOnce
                });
            });

            describe('<SimpleTextButtonGroup />', () => {
                const simpleTextButtonGroup = containerClass.childAt(2);
        
                it('should render as <SimpleTextButtonGroup>', () => {
                    expect(simpleTextButtonGroup.is(SimpleTextButtonGroup)).to.equal(true);
                });        
            });

            describe('<PolaroidImage />', () => {
                const polaroidImage = containerClass.childAt(3);
        
                it('should render as <polaroidImage>', () => {
                    expect(polaroidImage.is(PolaroidImage)).to.equal(true);
                });
            });
        });
    });

    describe('when displaying information', () => {
        const props = {
            data: {
                url: "Test URL", 
                date: "Test DateL", 
                hdurl: "Test HD URL", 
                title: "Test Title", 
                media_type: "image", 
                explanation: "Test explanation"},
            error: '',
            isLoading: false,
            displayExplanation: true,
            getNasaPictureOfTheDayHandler : sinon.spy(),
            resetNasaPictureOfTheDayErrorHandler: sinon.spy(),
            putDisplayNasaPictureOfTheDayExplanationHandler: sinon.spy()
            }    

        const wrapper = shallow(<NasaPictureOfTheDay {...props} />);

        it('should render as <>', () => {
            expect(wrapper.name()).to.equal('Fragment');
        });

        it('should render children', () => {
            expect(wrapper.children().length).to.equal(1);
        });

        it('should call getNasaPictureOfTheDayHandler when mounting', () => {
            expect(props.getNasaPictureOfTheDayHandler).to.have.been.calledOnce;
        });

        describe('<div className="nasaPicOfDayContainer" />', () => {
            const containerClass = wrapper.childAt(0);

            it('should render as <div>', () => {
                expect(containerClass.type()).to.equal('div');
            });

            it('should set the class', () => {
                expect(containerClass.props().className).to.equal('nasaPicOfDayContainer');
            });

            it('should render children', () => {
                expect(containerClass.children().length).to.equal(4);
            });

            describe('<h1 />', () => {
                const headingOne = containerClass.childAt(0);
        
                it('should render as <h1>', () => {
                    expect(headingOne.type()).to.equal('h1');
                });
            });

            describe('<PostItNoteDialogueBox />', () => {
                const postItNoteDialogueBox = containerClass.childAt(1);
        
                it('should render as <PostItNoteDialogueBox>', () => {
                    expect(postItNoteDialogueBox.is(PostItNoteDialogueBox)).to.equal(true);
                });

                it('should set title', () => {
                    expect(postItNoteDialogueBox.props().title).to.equal(props.data.title);
                });

                it('should set information', () => {
                    expect(postItNoteDialogueBox.props().information).to.equal(props.data.explanation);
                });

                it('should set closeHandler', () => {
                    expect(props.putDisplayNasaPictureOfTheDayExplanationHandler).not.to.have.been.called
                    postItNoteDialogueBox.props().closeHandler();
                    expect(props.putDisplayNasaPictureOfTheDayExplanationHandler).to.have.been.calledOnce
                });
            });

            describe('<SimpleTextButtonGroup />', () => {
                const simpleTextButtonGroup = containerClass.childAt(2);
        
                it('should render as <SimpleTextButtonGroup>', () => {
                    expect(simpleTextButtonGroup.is(SimpleTextButtonGroup)).to.equal(true);
                });        
            });

            describe('<PolaroidImage />', () => {
                const polaroidImage = containerClass.childAt(3);
        
                it('should render as <polaroidImage>', () => {
                    expect(polaroidImage.is(PolaroidImage)).to.equal(true);
                });
            });
        });
    });

    describe('when displaying error', () => {
        const props = {
            data: {
                url: "Test URL", 
                date: "Test DateL", 
                hdurl: "Test HD URL", 
                title: "Test Title", 
                media_type: "image", 
                explanation: "Test explanation"},
            error: 'Test Error',
            isLoading: false,
            displayExplanation: false,
            getNasaPictureOfTheDayHandler : sinon.spy(),
            resetNasaPictureOfTheDayErrorHandler: sinon.spy(),
            putDisplayNasaPictureOfTheDayExplanationHandler: sinon.spy()}    

        const wrapper = shallow(<NasaPictureOfTheDay {...props} />);

        it('should render as <>', () => {
            expect(wrapper.name()).to.equal('Fragment');
        });

        it('should render children', () => {
            expect(wrapper.children().length).to.equal(1);
        });

        it('should call getNasaPictureOfTheDayHandler when mounting', () => {
            expect(props.getNasaPictureOfTheDayHandler).to.have.been.calledOnce;
        });

        describe('<div className="nasaPicOfDayContainer" />', () => {
            const containerClass = wrapper.childAt(0);

            it('should render as <div>', () => {
                expect(containerClass.type()).to.equal('div');
            });

            it('should set the class', () => {
                expect(containerClass.props().className).to.equal('nasaPicOfDayContainer');
            });

            it('should render children', () => {
                expect(containerClass.children().length).to.equal(3);
            });

            describe('<h1 />', () => {
                const headingOne = containerClass.childAt(0);
        
                it('should render as <h1>', () => {
                    expect(headingOne.type()).to.equal('h1');
                });
            });

            describe('<PostItNoteDialogueBox />', () => {
                const postItNoteDialogueBox = containerClass.childAt(1);
        
                it('should render as <PostItNoteDialogueBox>', () => {
                    expect(postItNoteDialogueBox.is(PostItNoteDialogueBox)).to.equal(true);
                });

                it('should set title', () => {
                    expect(postItNoteDialogueBox.props().title).to.equal("Something wen't wrong....");
                });

                it('should set information', () => {
                    expect(postItNoteDialogueBox.props().information).to.equal(props.error);
                });

                it('should set closeHandler', () => {
                    expect(props.resetNasaPictureOfTheDayErrorHandler).not.to.have.been.called
                    postItNoteDialogueBox.props().closeHandler();
                    expect(props.resetNasaPictureOfTheDayErrorHandler).to.have.been.calledOnce
                });
            });

            describe('<SimpleTextButtonGroup />', () => {
                const simpleTextButtonGroup = containerClass.childAt(2);

                it('should render as <SimpleTextButtonGroup>', () => {
                    expect(simpleTextButtonGroup.is(SimpleTextButtonGroup)).to.equal(true);
                });
            });
        });
    });
});