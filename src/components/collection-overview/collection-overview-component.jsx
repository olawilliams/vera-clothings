import React from  'react';

import { connect } from 'react-redux';
import { selectCollections } from '../../redux/collection/collection-selectors';
import { createStructuredSelector } from 'reselect';

import CollectionPreview from '../../components/collection-preview/collection-preview';


const CollectionOverview = ({ collections}) => (
    <div className='collection-overview'>
        {
            collections.map(({id, ...otherCollectionProps}) => (
                <CollectionPreview key={id} {...otherCollectionProps} />
            ))
        } 
      </div>
);

const mapState = createStructuredSelector({
    collections: selectCollections
})

export default connect(
    mapState)
    (CollectionOverview);