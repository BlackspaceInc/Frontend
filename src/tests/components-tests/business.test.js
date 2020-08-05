import React from 'react';
import { shallow } from 'enzyme';
import Business from '../../components/business/business.component';
import {Card} from 'semantic-ui-react';



describe('<Business />', () => {
    it('should render a <Card/>', () => {
        const wrapper = shallow(<Business />);
        expect(wrapper.find('card').length).toEqual(1);
      });
});