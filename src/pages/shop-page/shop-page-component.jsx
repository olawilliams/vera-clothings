import React from 'react';
import  './shop-page-styles.scss';
import { Route } from 'react-router-dom';

import CollectionOverview from '../../components/collection-overview/collection-overview-component';

const  ShopPage = ({ match }) => (  
            <div className='shop-page'>
                     <Route exact path={`${match.path}`} component={CollectionOverview}/>
            </div>  
);

export default ShopPage