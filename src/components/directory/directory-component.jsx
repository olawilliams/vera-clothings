import React from 'react';
import './directory-styles.scss';
import MenuItem from '../menu/menu-item-component'

import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectDirectory } from '../../redux/directory/directory-selectors'

const Directory =({ sections }) => (
     <div className='directory-menu'>
          {
              sections.map(({id,...otherSectionProps}) => (
                  <MenuItem key={id} {...otherSectionProps} />
                 ))
             }
         </div>
    );

const mapState = createStructuredSelector({
  sections: selectDirectory
})

export default connect(
  mapState)
  (Directory);