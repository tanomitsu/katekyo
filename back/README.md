# Katekyo back

## Running the app

```bash
$ docker compose up back
```

## Test

```bash
# unit tests
$ docker compose exec back yarn run test

# e2e tests
$ docker compose exec back yarn run test:e2e

# test coverage
$ docker compose exec back yarn run test:cov
```