# Jelban.js Express example

Example usage of [JelBAN.js](https://github.com/Fcmam5/jelban-js)

## Example queries

### Request

```bash
curl --location --request POST 'http://localhost:3000/signup' \
     --header 'Content-Type: application/json' \
     --data-raw '{
        "emailAddress": "4fa167a441@boxomail.live"
    }'
```

### Response

```json
{
  "status": 400,
  "answer": "Bad email address"
}
```

---

### Request

```bash
curl --location --request POST 'http://localhost:3000/signup' \
     --header 'Content-Type: application/json' \
     --data-raw '{
        "emailAddress": "John.Doe+example@googlemail.com"
    }'
```

### Response

```json
{
  "status": 200,
  "answer": "I got \"John.Doe+example@googlemail.com\", you get johndoe@gmail.com"
}
```
