
import React,{ useState, useEffect } from 'react';

function Profile() {

const [users, setUsers] = useState([]);

  useEffect(() => {
    // APIからユーザーデータを取得
    fetch('https://api.example.com/users') // 実際のエンドポイントに置き換える
      .then(response => response.json())
      .then(data => setUsers(data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);



  return (
    <div className="profile">
        
    </div>
  );
}

export default Profile;

