import React from 'react';
import { shallow } from 'enzyme';
import SearchBar from '../../components/search-bar/search-bar.component';

describe('SearchBar component', () => {
    let wrapper ; 

    beforeEach (()=> wrapper = shallow(<SearchBar/>));

    it('should render a <form/>', () => {
        expect(wrapper.find('form').length).toEqual(1);
      });
})