import React from 'react'; // eslint-disable-line no-unused-vars
import jsDOM from 'jsdom-global';
import { expect } from 'chai';
import Enzyme, { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { spy } from 'sinon';
import Component from '../src/index';

jsDOM();
Enzyme.configure({ adapter: new Adapter() });
spy(Component.prototype, 'componentDidMount');

describe('<Foo />', () => {
  it('calls componentDidMount', () => {
    mount(<Component />);
    expect(Component.prototype.componentDidMount).to.have.property('callCount', 1);
  });
});