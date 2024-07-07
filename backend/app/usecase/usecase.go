package usecase

import (
	"fmt"
	"recochoku/hackathon_passion/backend/app/entity"
	"recochoku/hackathon_passion/backend/app/infra"

	"github.com/labstack/echo/v4"
)

type Usecase interface {
	GetUsers(ctx echo.Context) error
	CreateUserProfile(user entity.User, ctx echo.Context) error
}

type usecase struct {
	sh infra.SqlHandler
}

func NewUsecase(sh infra.SqlHandler) Usecase {
	return &usecase{sh}
}

func (u *usecase) GetUsers(ctx echo.Context) error {

	fmt.Println("GetUsers")

	return nil
}

func (u *usecase) CreateUserProfile(user entity.User, ctx echo.Context) error {

	_, err := u.sh.CreateUserProfile(&user)
	if err != nil {
		return err
	}

	return nil

}
