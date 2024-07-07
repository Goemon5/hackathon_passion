package usecase

import (
	"fmt"
	"recochoku/hackathon_passion/backend/app/entity"
	"recochoku/hackathon_passion/backend/app/infra"

	"github.com/labstack/echo/v4"
)

type Usecase interface {
	GetUsers(ctx echo.Context) ([]entity.User, error)
	CreateUserProfile(user entity.User, ctx echo.Context) error
}

type usecase struct {
	sh infra.SqlHandler
}

func NewUsecase(sh infra.SqlHandler) Usecase {
	return &usecase{sh}
}

func (u *usecase) GetUsers(ctx echo.Context) ([]entity.User, error) {
	userPtrs, err := u.sh.GetUsers()
	if err != nil {
		return nil, fmt.Errorf("failed to get users: %v", err)
	}

	var users []entity.User
	for _, userPtr := range userPtrs {
		if userPtr != nil {
			users = append(users, *userPtr)
		}
	}

	return users, nil
}

func (u *usecase) CreateUserProfile(user entity.User, ctx echo.Context) error {
	fmt.Printf("Received user data: %+v\n", user)

	createdUser, err := u.sh.CreateUserProfile(&user)
	if err != nil {
		fmt.Println("User creation failed in usecase")
		return err
	}

	fmt.Println(createdUser.Name)
	fmt.Println("User creation succeeded in usecase")
	return nil
}
