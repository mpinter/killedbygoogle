import React from 'react';
import PropTypes from 'prop-types';
import { format } from 'date-fns';

import Knife from '../assets/knife.svg';

// Import Styled Components
import { ListContainer } from './List.atoms';

// Import External Components
import Item from './Item';

const List = ({ items }) => (
  <ListContainer>
    {items.map(item => (
      <Item key={item.name} {...item} />
    ))}
  </ListContainer>
);

List.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape(Item.propTypes)).isRequired,
};

export default List;
