import React from 'react';

function Footer() {
  return (
    <div className="w-100">
      <footer className="py-4">
        <ul className="nav justify-content-center border-bottom pb-3 mb-3 ">
          <li className="nav-item">
            <a href="/" className="nav-link px-2 text-body-secondary">Home</a>
          </li>
          <li className="nav-item">
            <a href="/YieldPage" className="nav-link px-2 text-body-secondary">Search</a>
          </li>
          <li className="nav-item">
            <a href="/MapPage" className="nav-link px-2 text-body-secondary">Account</a>
          </li>
          <li className="nav-item">
            <a href="/Cart" className="nav-link px-2 text-body-secondary">Cart</a>
          </li>
        </ul>
        <p className="text-center text-body-secondary">© 2024 CodeChef Store, Inc</p>
      </footer>
    </div>
  );
}

export default Footer;
