import React from 'react'

export default class Header extends React.Component {
  render () {
    const styles = require('./header.css')
    return (
      <h1 className={styles.normal}>Boilerplate</h1>
    )
  }
}
