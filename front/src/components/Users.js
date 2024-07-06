
import React from 'react';



function Users() {
  // ダミーデータ
  const userCards = Array.from({ length: 10 });

  return (
    <div className="container mt-5">
      {userCards.map((_, index) => (
        <div className="card mb-4 mx-auto" key={index} style={{ width: '50%' }}>
          <h5 className="card-header">Featured</h5>
          <div className="card-body">
            <h5 className="card-title">Special title treatment</h5>
            <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
            <a href="#" className="btn btn-primary">Go somewhere</a>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Users;

