# Megacity Region Data Schema

## Low-level format

File:  UTF8 JSON

Top-level JSON object:   Array of megacity regions.

## Megacity Region objects

```
{
  "name": "megacity region name -- often, the same name as the city",
  "city": "closest city",
  "cc": "two-letter country code"
}
```
