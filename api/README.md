# Install and setup

Install dependencies
```npm i```

Add .env file containing DATABASE_URL for PGSQL

Run the app
```npm run start:dev```

## API Examples

### GET
```http://localhost:3000/api/products?name=bmw```

### POST
```http://localhost:3000/api/products```

```json
{
  "name": "Basketball ball",
  "description": "",
  "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/Basketball.png/220px-Basketball.png"
}
```
