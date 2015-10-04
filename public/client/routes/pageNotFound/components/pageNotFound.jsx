import React from 'react'

import styles from './pageNotFound.css'

export default class PageNotFound extends React.Component {
  render () {
    return (
      <div>
        <h1 className={styles.title}>Page not found</h1>
        <span className={styles.description}>Lost your way?</span>
      </div>
    )
  }
}
