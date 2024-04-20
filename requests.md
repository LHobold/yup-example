## INVALID CREATE USER ##
curl -X POST   -H "Content-Type: application/json"   -d '{"name":"Felipeta","email":"felipem@rotaexata.com.br","age":7,"job":"CS"}'   http://localhost:3000/users

## VALID CREATE USER ##
curl -X POST   -H "Content-Type: application/json"   -d '{"name":"Lucas Hobold","email":"lucas@rotaexata.com.br","age":15,"job":"Developer"}'   http://localhost:3000/users

## GET USER ##
curl -X GET http://localhost:3000/users/5