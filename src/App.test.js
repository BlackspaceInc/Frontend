import React from 'react';
import Header from './components/header/header.component';
import {shallow} from 'enzyme';

import App from './App';

describe('App', () => {
  let wrapper;

  beforeEach(() => wrapper = shallow(<App />));


  it('should render the Header Component', () => {
    expect(wrapper.containsMatchingElement(< Header/>)).toEqual(true);
  });


});