package entity

type User struct {
	Name       string `json:"name" db:"name"`
	Email      string `json:"email" db:"email"`
	Gender     string `json:"gender" db:"gender"`
	FanHistory string `json:"fan_history" db:"fan_history"`
	FavSong    string `json:"fav_song" db:"fav_song"`
	Applying   int    `json:"applying" db:"applying"`
}
