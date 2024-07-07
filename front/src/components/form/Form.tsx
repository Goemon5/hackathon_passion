


import React from "react";
import { useState } from "react";
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css'; 

const Form = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    gender: "",
    fan_history: "",
    fav_song: "",
    applying: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data:", formData);
    setIsSubmitted(true);
    // ここにフォームデータを送信する処理を追加
  };

  return (
    <>
      {isSubmitted ? (
        <div className="text-center mt-5">
          <h2>送信が完了しました</h2>
        </div>
      ) : (
        <form
          onSubmit={handleSubmit}
          className="p-4 border rounded shadow-sm"
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            width: "50%",
            marginLeft: "auto",
            marginRight: "auto",
            backgroundColor: "#f8f9fa", 
          }}
        >
          <h3 className="mb-4">form</h3>
          <div className="mb-3 w-100">
            <label htmlFor="name" className="form-label">Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="form-control"
            />
          </div>
          <div className="mb-3 w-100">
            <label htmlFor="email" className="form-label">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="form-control"
            />
          </div>
          <div className="mb-3 w-100">
            <label htmlFor="gender" className="form-label">Gender:</label>
            <select
              name="gender"
              id="gender"
              className="form-select"
              value={formData.gender}
              onChange={handleChange}
            >
              <option value="" disabled>
                性別を選択してください
              </option>
              <option value="男性">男性</option>
              <option value="女性">女性</option>
              <option value="その他">その他</option>
            </select>
          </div>
          <div className="mb-3 w-100">
            <label htmlFor="fan_history" className="form-label">ファンになってから何年経ちますか？</label>
            <textarea
              id="fan_history"
              name="fan_history"
              value={formData.fan_history}
              onChange={handleChange}
              className="form-control"
            ></textarea>
          </div>
          <div className="mb-3 w-100">
            <label htmlFor="fav_song" className="form-label">お気に入りの曲を教えてください</label>
            <textarea
              id="fav_song"
              name="fav_song"
              value={formData.fav_song}
              onChange={handleChange}
              className="form-control"
            ></textarea>
          </div>
          <Button variant="primary" type="submit" className="mt-3">
            Submit
          </Button>
        </form>
      )}
    </>
  );
};

export default Form;


