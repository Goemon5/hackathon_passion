
import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { BrowserRouter as Router, Route, Routes,Link } from 'react-router-dom';

function Users({ users }) {
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

  return (
    <div className="container mt-100">
      
      <div className="content">
      <Link to="/form">
              <Button variant="primary" className="my-3">Form</Button>
            </Link>
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
          <Modal.Title>Profile</Modal.Title>
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
    </div>
  );
}

export default Users;
