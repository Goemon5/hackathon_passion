import React, { useState, useEffect } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

function Users() {
  const [users, setUsers] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);

  const handleShowModal = (user) => {
    setSelectedUser(user);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedUser(null);
  };

  useEffect(() => {
    // ローカルAPIからユーザーデータを取得
    fetch('/api/users.json')
      .then(response => response.json())
      .then(data => setUsers(data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  return (
    <div className="container mt-5">
      {users.map((user, index) => (
        <div className="card mb-4 mx-auto" key={index} style={{ width: '50%' }}>
          <h5 className="card-header">{user.name}</h5>
          <div className="card-body">
            <h5 className="card-title">{user.email}</h5>
            <p className="card-text">{user.gender}</p>
            <Button onClick={() => handleShowModal(user)}>Show Details</Button>
          </div>
        </div>
      ))}

      <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>User Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {selectedUser && (
            <>
              <p><strong>Name:</strong> {selectedUser.name}</p>
              <p><strong>Email:</strong> {selectedUser.email}</p>
              <p><strong>Gender:</strong> {selectedUser.gender}</p>
              <p><strong>Fan History:</strong> {selectedUser.fan_history}</p>
              <p><strong>Favorite Song:</strong> {selectedUser.fav_song}</p>
              <p><strong>Favorite Artist:</strong> {selectedUser.artist}</p>
            </>
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModal}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default Users;
