import React, { PureComponent } from 'react'
import SubMain from './SubMain';
import PrintCancel from './PrintCancel';

export default class Main extends PureComponent {
  render() {
    return (
      <div>
        <div id='SubMain'>
          <SubMain />
        </div>
        <PrintCancel />
      </div>
    )
  }
}
