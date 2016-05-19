import React from 'react'
import { Link } from 'react-router';

export default React.createClass({
  render() {
    return (
      <div>
        <header className="navbar navbar-fixed-top navbar-inverse">
          <nav>
            <h1 className="nav navbar-nav navbar-left"><Link to="/">#watchthis</Link></h1>
          </nav>
        </header>
      </div>
    );
  }
})
