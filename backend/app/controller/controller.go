package controller

import (
	"fmt"
	"net/http"
	"recochoku/hackathon_passion/backend/app/entity"
	"recochoku/hackathon_passion/backend/app/usecase"

	"github.com/labstack/echo/v4"
)

type Controller interface {
	GetUsers(c echo.Context) error
	CreateUserProfile(c echo.Context) error
}

type controller struct {
	u usecase.Usecase
}

func NewController(c usecase.Usecase) Controller {
	return &controller{c}
}

func (c *controller) GetUsers(ctx echo.Context) error {

	users, err := c.u.GetUsers(ctx)
	if err != nil {
		return ctx.JSON(http.StatusBadRequest, err.Error())
	}

	for _, user := range users {
		fmt.Println(user)
	}

	return ctx.JSON(http.StatusOK, users)
}

func (c *controller) CreateUserProfile(ctx echo.Context) error {
	user := entity.User{}

	if err := ctx.Bind(&user); err != nil {
		return ctx.JSON(http.StatusBadRequest, err.Error())
	}

	res := c.u.CreateUserProfile(user, ctx)

	if res != nil {
		return ctx.JSON(http.StatusBadRequest, res.Error())
	}

	return ctx.JSON(http.StatusOK, res)
}
