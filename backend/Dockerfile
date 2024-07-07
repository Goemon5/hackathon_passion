FROM golang:1.22 as dev

RUN go install github.com/air-verse/air@latest

WORKDIR /app

COPY . .

CMD ["air", "-c", ".air.toml"]
