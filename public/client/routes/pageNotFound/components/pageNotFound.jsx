import React from 'react'

export default class PageNotFound extends React.Component {
  render () {
    const styles = require('./pageNotFound.css')
    return (
      <div>
        <h1 className={styles.title}>Page not found</h1>
        <span className={styles.description}>Lost your way?</span>
      </div>
    )
  }
}
