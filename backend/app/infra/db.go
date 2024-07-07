package infra

import (
	"fmt"
	"log"
	"os"

	_ "github.com/go-sql-driver/mysql"
	"github.com/jmoiron/sqlx"
	"github.com/joho/godotenv"
)

func NewDB() *sqlx.DB {
	err := godotenv.Load(".env")

	if err != nil {
		fmt.Printf("読み込み出来ませんでした: %v", err)
	}
	user := os.Getenv("MYSQL_USER")
	pass := os.Getenv("MYSQL_ROOT_PASSWORD")
	database := os.Getenv("MYSQL_DATABASE")

	//var dsn string = "test:test@tcp(db)/test?charset=utf8&parseTime=true&loc=Asia%2FTokyo"
	dsn := fmt.Sprintf("%s:%s@tcp(db)/%s?charset=utf8&parseTime=true&loc=Asia%%2FTokyo", user, pass, database)

	db, err := sqlx.Connect("mysql", dsn)
	if err != nil {
		log.Fatalln(err)
	}
	fmt.Println("Connceted")
	return db
}
