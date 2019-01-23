/* eslint-disable no-unused-expressions */
import sinon from 'sinon';
import sinonChai from 'sinon-chai';
import chai, { expect } from 'chai';

import { consoleLog, consoleError } from './consoleHelpers';

chai.use(sinonChai);


describe('ConsoleHelpers', () => {
    describe('consoleLog', () => {
        beforeEach(function() {
            sinon.spy(console, 'log');
        });
    
        it('should call console.log with the expected parameterd', () => {
            consoleLog("TestLog");
            expect(console.log).to.be.calledWith('TestLog');
        });

        afterEach(function() {
            console.log.restore();
        });        
    });

    describe('consoleError', () => {
        beforeEach(function() {
            sinon.spy(console, 'error');
        });
    
        it('should call console.log with the expected parameterd', () => {
            consoleError("TestError");
            expect(console.error).to.be.calledWith('TestError');
        });

        afterEach(function() {
            console.error.restore();
        });   
    });
});