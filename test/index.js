import React from 'react'; // eslint-disable-line no-unused-vars
import jsDOM from 'jsdom-global';
import { expect } from 'chai';
import Enzyme, { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { spy } from 'sinon';
import Form from '../src/index';

jsDOM();
Enzyme.configure({ adapter: new Adapter() });

const options = {
  config: [{
    identifier: 'firstName',
    order: 0,
    props: {},
    type: 'input'
  }, {
    identifier: 'lastName',
    order: 1,
    props: {},
    type: 'input'
  }, {
    identifier: 'gender',
    order: 2,
    props: {},
    type: 'dropdown'
  }],
  onSubmit: spy(),
  onChange: spy()
};

const typeMappings = {
  'input': 'inupt',
  'dropdown': 'select'
};

spy(Form.prototype, 'componentDidMount');

describe('<Form />', () => {
  let form;

  before(function() {
    form = mount(<Form {...options}/>);
  });

  it('Form componentDidMount', () => {
    expect(Form.prototype.componentDidMount).to.have.property('callCount', 1);
  });

  it('Form elements rendered', () => {
    const inputs = form.find(typeMappings['input']);
    const dropdowns = form.find(typeMappings['input']);

    expect(inputs).to.have.length(2);
    expect(dropdowns).to.have.length(1);
  });

  it('Input elements rendered', () => {
    const inputs = form.find(typeMappings['input']);

    for (let i = 0, len = inputs.length; i < len; i++) {
      let input = inputs.at(0),
        inputConfig = options.config.find((config) => {
          return config.order === i;
        });

      for (let key in inputConfig) {
        expect(input.prop(key)).equals(inputConfig[key]);
      }
    }
  });
});
