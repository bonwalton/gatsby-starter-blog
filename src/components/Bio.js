import React from 'react'

// Import typefaces
import 'typeface-montserrat'
import 'typeface-merriweather'

import profilePic from './profile-pic.png'
import linkedPic from './LI-sq.png'
import githubPic from './GitHub.png'
import { rhythm } from '../utils/typography'

class Bio extends React.Component {
  render() {
    return (
      <div
        style={{
          display: 'flex',
          marginBottom: rhythm(1),
        }}
      >
        <img
          src={profilePic}
          alt={`Bonnie Walton`}
          style={{
            marginRight: rhythm(1 / 2),
            marginBottom: 0,
            width: rhythm(2),
            height: rhythm(2),
          }}
        />

        <p>
          Written by <strong>Bonnie Walton</strong> who lives in Columbus, OH and is applying for the Support Engineer role at Netlify. {' '}
<br />
          <img
            src={linkedPic}
            style={{
              marginRight: rhythm(1 / 5),
              marginBottom: -4,
              height: rhythm(.8),

            }}
          />
          <a href="https://www.linkedin.com/in/bonwalton/" target="blank">
 bonwalton</a>
<img
  src={githubPic}
  style={{
    marginRight: rhythm(1 / 5),
    marginLeft: rhythm(3 / 5),
    marginBottom: -4,
    height: rhythm(.8),

  }}
/>
<a href="https://github.com/bonwalton" target="blank">
bonwalton
</a>
</p>
      </div>
    )
  }
}

export default Bio
