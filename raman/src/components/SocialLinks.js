import React from 'react';

const SocialLinks = ({ links }) => {
  return (
    <footer>
      <nav>
        <ul>
          {links.map((link, index) => (
            <li key={index}><a href={link.url}>{link.name}</a></li>
          ))}
        </ul>
      </nav>
    </footer>
  );
}

export default SocialLinks;