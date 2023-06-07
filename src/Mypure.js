import React, { PureComponent } from 'react'

export default class Mypure extends PureComponent {
  render() {
    return (
      <h3 className=' information'>PureComponent skips the re-render things when the page is reload</h3>
    )
  }
}
