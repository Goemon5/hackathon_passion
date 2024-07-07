package infra

import (
	"fmt"
	"recochoku/hackathon_passion/backend/app/entity"

	"github.com/jmoiron/sqlx"
)

type SqlHandler interface {
	CreateUserProfile(user *entity.User) (*entity.User, error)
	GetUsers() ([]*entity.User, error)
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
	defer tx.Rollback() // コミットされなかった場合にトランザクションをロールバック

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
		:gender,
		:fan_history,
		:fav_song,
		:applying
	)`)
	if err != nil {
		fmt.Printf("Error preparing statement: %v\n", err)
		return nil, err
	}

	result, err := stmt.Exec(user)
	if err != nil {
		fmt.Printf("Error executing statement: %v\n", err)
		return nil, err
	}

	cnt, err := result.RowsAffected()
	if err != nil || cnt != 1 {
		fmt.Printf("Error in RowsAffected or no rows affected: %v\n", err)
		return nil, err
	}

	if err := tx.Commit(); err != nil {
		fmt.Printf("Error committing transaction: %v\n", err)
		return nil, err
	}

	fmt.Println("User successfully inserted into database")
	return user, nil
}

func (s *sqlHandler) GetUsers() ([]*entity.User, error) {
	var users []*entity.User

	err := s.db.Select(&users, "SELECT * FROM users")
	if err != nil {
		return nil, fmt.Errorf("failed to get all user profiles: %v", err)
	}
	return users, nil
}
