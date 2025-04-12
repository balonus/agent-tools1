# Simple REST API

A simple Node.js application that exposes a single REST endpoint for processing input.

## Setup

1. Install dependencies:
```bash
npm install
```

2. Start the server:
```bash
npm start
```

The server will start on port 3000 by default.

## API Endpoint

### POST /tool1

Accepts a JSON body with an "input" parameter and returns different responses based on the input:

- If the input starts with "test", it returns the same input value
- For all other inputs, it returns a predefined message

Example request with "test" input:
```bash
curl -X POST http://localhost:3000/tool1 \
  -H "Content-Type: application/json" \
  -d '{"input": "test123"}'
```

Example response for "test" input:
```json
{
  "output": "test123"
}
```

Example request with non-"test" input:
```bash
curl -X POST http://localhost:3000/tool1 \
  -H "Content-Type: application/json" \
  -d '{"input": "hello"}'
```

Example response for non-"test" input:
```json
{
  "output": "uczelnia: UNIJAG, sponsor: JJIT - Just JSON Intelligence Technologies"
}
``` 