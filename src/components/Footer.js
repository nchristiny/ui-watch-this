import React from 'react'
import { Link } from 'react-router';

export default React.createClass({
  render() {
    return (
      <div>
        <footer className="footer">
          <small>
            <Link to="http://www.jellyvision.com/" target="_blank">Jellyvision</Link> Dev Apprentice Project | <Link to="#">Nick Christiny</Link>
          </small>
        </footer>
      </div>
    );
  }
})
