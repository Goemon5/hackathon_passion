package infra

import (
	"log"
	"recochoku/hackathon_passion/backend/app/entity"

	"github.com/jmoiron/sqlx"
)

type SqlHandler interface {
	CreateUserProfile(user *entity.User) (*entity.User, error)
}

type sqlHandler struct {
	db *sqlx.DB
}

func NewInfra(db *sqlx.DB) SqlHandler {
	return &sqlHandler{db} //暗黙的　構造体を返す
}

func (s *sqlHandler) CreateUserProfile(user *entity.User) (*entity.User, error) {
	tx, err := s.db.Beginx()
	if err != nil {
		return nil, err
	}
	stmt, err := tx.PrepareNamed(`
	INSERT INTO users 
	(
		name,
		email,
		gender,
		fan_history,
		fav_song,
		applying
		) VALUES
		(
			:name,
			:email,
			:gender
			:fan_history
			:fav_song
			:applying)
			`)
	if err != nil {
		return nil, err
	}

	result, err := stmt.Exec(user)
	if err != nil {
		err := tx.Rollback()
		return nil, err
	}

	cnt, err := result.RowsAffected()
	if err != nil || cnt != 1 {
		log.Panicln(err)

		return nil, err
	}

	if err := tx.Commit(); err != nil {
		return nil, err
	}

	return user, nil
}
