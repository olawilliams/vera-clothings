import React from 'react';
import './collection-preview-styles.scss';

import { withRouter } from 'react-router-dom';

import CollectionItem from '../collection-item/collection-item-component'

const CollectionPreview = ({title, items, history, match, routeName}) => {
    
    return (
    <div className='collection-preview'>
        <div className='heading'>
            <h1 className='title'>{title}</h1>
            <span className='view' onClick={() => history.push(`${match.path}/${routeName}`)}>
                view all</span>
        </div>
        
        <div className='preview'>
            {
                items.filter((item, idx) => idx < 4) 
                .map((item) => (
                    <CollectionItem key={item.id} item={item}/>
                ))
            }
        </div>
    </div>
)}

export default withRouter(CollectionPreview);