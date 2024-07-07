package main

import (
	"log"
	"recochoku/hackathon_passion/backend/app/controller"
	"recochoku/hackathon_passion/backend/app/infra"
	"recochoku/hackathon_passion/backend/app/router"
	"recochoku/hackathon_passion/backend/app/usecase"
)

func main() {

	db := infra.NewDB()
	infra := infra.NewInfra(db)
	usecase := usecase.NewUsecase(infra)
	c := controller.NewController(usecase)

	e := router.NewRouter(c)

	err := e.Start(":8080")
	if err != nil {
		log.Fatal(err)
	}

}
