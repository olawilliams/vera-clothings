import React from 'react';
import { connect } from 'react-redux';
import { selectCollection } from '../../redux/collection/collection-selectors'
import CollectionItem from '../../components/collection-item/collection-item-component';

import './collection-page-styles.scss';

const CollectionPage = ({collection} ) => {
   const { title, items} = collection;
    return(
        <div className='collection-page'>
            <h2 className='title'>{ title } Collections</h2>
            <div className='items'>
            {
                items.map(item => <CollectionItem key={item.id} item={item}/>)
            }

            </div>
        </div>
    )
}

const mapState = (state, ownProps) => ({
    collection: selectCollection(ownProps.match.params.id)(state)
})

export default connect(
    mapState)
    (CollectionPage);