import React from 'react';
// Redux
import { connect } from 'react-redux';
import { addItem } from '../../redux/cart/cart.actions';

// Styled components
import {
  CollectionContainer,
  BackgroundImage,
  AddButton,
  CollectionsFooterContainer,
  NameContainer,
  PriceContainer
} from './collection-item.styles';

const CollectionItem = ({ item, addItem }) => {
  const { name, price, imageUrl } = item;

  return (
    <CollectionContainer>
      <BackgroundImage
        className='image'
        style={{ backgroundImage: `url(${imageUrl})` }}
      />
      <CollectionsFooterContainer>
        <NameContainer>{name}</NameContainer>
        <PriceContainer>${price}</PriceContainer>
      </CollectionsFooterContainer>
      <AddButton onClick={() => addItem(item)} inverted>
        Add to cart
      </AddButton>
    </CollectionContainer>
  );
};

const mapDispatchToProps = dispatch => ({
  addItem: item => dispatch(addItem(item))
});

export default connect(
  null,
  mapDispatchToProps
)(CollectionItem);
