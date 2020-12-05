import { Link } from 'gatsby';
import React from 'react';

const Highlight = ({ }) => {

    return (
        <div className="floater">
            <a
                href="https://calendly.com/verbalhomecoaching/free-demo-class"
                target="blank"
                className="link"
            >
                <span className="animate-ping absolute inline-flex h-3 w-3 rounded-full bg-green-400 opacity-15 blink"></span>
  <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>&nbsp;&nbsp;Free Demo Class
            </a>
        </div>
    );
}

export default Highlight;