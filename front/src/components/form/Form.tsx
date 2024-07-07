import React from "react";
import { useState } from "react";

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
    // ここにフォームデータを送信する処理を追加します
  };

  return (
    <>
      {isSubmitted ? (
        <div>
          <h2>送信が完了しました</h2>
        </div>
      ) : (
        <form
          onSubmit={handleSubmit}
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            width: "50%",
            marginLeft: "auto",
            marginRight: "auto",
          }}
        >
          <div style={{ width: "70%" }}>
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              style={{ width: "100%" }}
            />
          </div>
          <div style={{ width: "100%" }}>
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              style={{ width: "100%" }}
            />
          </div>
          <div style={{ width: "100%" }}>
            <label htmlFor="gender">Gender:</label>
            <select
              name="gender"
              id="gender"
              className="form-select form-select-sm"
              aria-label=".form-select-sm example"
              value={formData.gender}
              onChange={handleChange}
              style={{ width: "100%", border: "1px solid black" }}
            >
              <option value="" disabled>
                性別を選択してください
              </option>
              <option value="男性">男性</option>
              <option value="女性">女性</option>
              <option value="その他">その他</option>
            </select>
          </div>
          <div style={{ width: "100%" }}>
            <label htmlFor="history">ファンになってから何年経ちますか？</label>
            <textarea
              id="fan_history"
              name="fan_history"
              value={formData.fan_history}
              onChange={handleChange}
              style={{ width: "100%" }}
            ></textarea>
          </div>
          <div style={{ width: "100%" }}>
            <label htmlFor="fav_song">お気に入りの曲を教えてください</label>
            <textarea
              id="fav_song"
              name="fav_song"
              value={formData.fav_song}
              onChange={handleChange}
              style={{ width: "100%" }}
            ></textarea>
          </div>

          <button type="submit" style={{ marginTop: "10px" }}>
            Submit
          </button>
        </form>
      )}
      ;
    </>
  );
};
export default Form;
