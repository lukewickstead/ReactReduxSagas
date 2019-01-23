import React from 'react'
import { expect } from 'chai';
import {shallow} from 'enzyme';

import  PolaroidImage from './index';
import ImageWithLoadingSpinner from '../ImageWithLoadingSpinner';

describe('<PolaroidImage /> for an image', () => {
    const wrapper = shallow(<PolaroidImage url={'MyUrl'} mediaType={'image'} title={'MyTitle'} date={'MyDate'} />);

    it('should render', () => {       
        expect(wrapper.type()).to.be.equal('div');
    });

    it('should set the className', () => {       
      expect(wrapper.props().className).to.be.equal('polaroid-image');
    });

    it('should render children', () => {       
      expect(wrapper.children().length).to.be.equal(1);
    });

    describe('<a />', () => {
      const anchor = wrapper.children().at(0);

      it('should render', () => {       
        expect(anchor.type()).to.be.equal('a');
      });

      it('should set href', () => {       
        expect(anchor.props().href).to.be.equal('MyUrl');
      });

      it('should render children', () => {       
        expect(anchor.children().length).to.be.equal(2);
      });

      describe('<ImageWithLoadingSpinner />', () => {
        const imageWithLoadingSpinner = anchor.children().at(0);

        it('should render', () => {       
          expect(imageWithLoadingSpinner.is(ImageWithLoadingSpinner)).to.equal(true);
        });

        it('should set url', () => {       
          expect(imageWithLoadingSpinner.props().url).to.equal('MyUrl');
        });
      });

      describe('<p />', () => {
        const paragraph = anchor.children().at(1);

        it('should render', () => {       
          expect(paragraph.type()).to.equal('p');
        });

        it('should render inner text', () => {       
          expect(paragraph.html()).to.equal('<p>MyDate - MyTitle</p>');
        });
      });
    });
});

describe('<PolaroidImage /> for a video setting hdurl', () => {
  const wrapper = shallow(<PolaroidImage url={'MyUrl'} hdurl={'MyHDUrl'} mediaType={'video'} title={'MyTitle'} date={'MyDate'} />);

  it('should render', () => {       
      expect(wrapper.type()).to.be.equal('div');
  });

  it('should set the className', () => {       
    expect(wrapper.props().className).to.be.equal('polaroid-video');
  });

  it('should render children', () => {       
    expect(wrapper.children().length).to.be.equal(1);
  });

  describe('<a />', () => {
    const anchor = wrapper.children().at(0);

    it('should render', () => {       
      expect(anchor.type()).to.be.equal('a');
    });

    it('should set href', () => {       
      expect(anchor.props().href).to.be.equal('MyHDUrl');
    });

    it('should render children', () => {       
      expect(anchor.children().length).to.be.equal(2);
    });

    describe('<ImageWithLoadingSpinner />', () => {
      const iFrame = anchor.children().at(0);

      it('should render', () => {       
        expect(iFrame.type()).to.equal('iframe');
      });

      console.log(iFrame.debug());

      it('should set url', () => {       
        expect(iFrame.props().src).to.equal('MyUrl');
      });

      it('should set title', () => {       
        expect(iFrame.props().title).to.equal('MyTitle');
      });

      it('should set frameBorder=', () => {       
        expect(iFrame.props().frameBorder).to.equal('0');
      });
    });

    describe('<p />', () => {
      const paragraph = anchor.children().at(1);

      it('should render', () => {       
        expect(paragraph.type()).to.equal('p');
      });

      it('should render inner text', () => {       
        expect(paragraph.html()).to.equal('<p>MyDate - MyTitle</p>');
      });
    });
  });
});
