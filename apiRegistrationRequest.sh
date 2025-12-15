curl -X POST http://localhost:3000/api/register ^
  -H "Content-Type: application/json" ^
  -d "{\"email\":\"user@example.com\",\"password\":\"PASSWORD\",\"name\":\"User\"}"
