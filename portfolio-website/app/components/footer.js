import React from 'react';

export default function Footer() {
    const currentYear = new Date().getFullYear();

  return (
    <div className='lg:mt-10'>
       <footer style={{ textAlign: 'center', padding: '20px', position: 'relative', bottom: 0, width: '100%' }}>
      <div style={{ fontSize: '0.8em',  }}>
        &copy; {currentYear} ChrisNetEngineer. All rights reserved.
      </div>
    </footer>
    </div>
  );
}
