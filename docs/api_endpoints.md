# API Endpoints

## HTML API

### Root

- `GET /` - loads React web app

## JSON API

### Users

- `POST /api/users`
- `PATCH /api/users`

### Session

- `POST /api/session`
- `DELETE /api/session`

### Questions

- `GET /api/questions`
  - Notes index/search
  - accepts `tag_name` query param to list questions by tag
  - accepts pagination params (if I get there)
- `POST /api/questions`
- `GET /api/questions/:id`
- `PATCH /api/questions/:id`
- `DELETE /api/questions/:id`

### Answers

- `GET /api/Answers`
- `POST /api/Answers`
- `GET /api/Answers/:id`
- `DELETE /api/Answers/:id`
- `GET /api/Answers/:id/Questions`
  - index of all notes for a notebook
  - accepts pagination params (if I get there)

### Tags

- A note's tags will be included in the note show template
- `GET /api/tags`
  - includes query param for typeahead suggestions
- `POST /api/questions/:question_id/tags`: add tag to note by name
  - if note doesn't already exist, it will be created
- `DELETE /api/questions/:question_id/tags/:tag_name`: remove tag from note by
  name
