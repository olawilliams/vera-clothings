import React from 'react';
import './directory-styles.scss';
import MenuItem from '../menu/menu-item-component'

import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectDirectory } from '../../redux/directory/directory-selectors'

class Directory extends React.Component {
    
    render() {
      const { sections } = this.props;
        return (
            <div className='directory-menu'>
                {
                    sections.map(({id,...otherSectionProps}) => (
                        <MenuItem key={id} {...otherSectionProps} />
                    ))
                }
            </div>
        )
    }
}

const mapState = createStructuredSelector({
  sections: selectDirectory
})

export default connect(
  mapState)
  (Directory);