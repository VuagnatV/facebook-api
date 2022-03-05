```
model Invoice {
  id     Int    @id @default(autoincrement())
  client String
  total  Int
  createdAt @default(now())
  updatedAt @updatedAt
}

model Estimate {
  id Int @id @default(autoincrement())
  client String
  total Int
  expires DateTime
  createdAt @default(now())
  updatedAt @updatedAt
}
```

URIs
```
Invoice:
  POST   - /api/v1/invoices     - Create One Invoice
  GET    - /api/v1/invoices     - Get All Invoices
  GET    - /api/v1/invoices/:id - Get One Invoice by ID
  PUT    - /api/v1/invoices/:id - Update One Invoice by ID
  DELETE - /api/v1/invoices/:id - Delete One Invoice by ID

Estimate:
  POST   - /api/v1/estimates     - Create One Estimate
  GET    - /api/v1/estimates     - Get All Estimates
  GET    - /api/v1/estimates/:id - Get One Estimate by ID
  PUT    - /api/v1/estimates/:id - Update One Estimate by ID
  DELETE - /api/v1/estimates/:id - Delete One Estimate by ID
```
