# Node, PostgreSQL and GraphQL (NPG) Boilerplate
[![standard-readme compliant](https://img.shields.io/badge/readme%20style-standard-brightgreen.svg?style=flat-square)](https://github.com/RichardLitt/standard-readme)

This is a free quick-to-use boilerplate for setting up your backend API with Node, GraphQL and PostgreSQL.
This is meant to quickly set you up for frontend development.

This GraphQL API is powered by [postgraphile](https://www.graphile.org/postgraphile/introduction/)

This repository contains:
1. A containerized Node GraphQL API
2. A containerized PostgreSQL Database
3. An environment variables, `env`, file

## Table of Contents

- [Background](#background)
- [Usage](#usage)
	- [Modifying the Schema](#modifying-the-schema)
- [Maintainers](#maintainers)
- [Contributing](#contributing)
- [License](#license)

## Background

Everybody wants to quickly set up their Backend APIs. As such, this repo was made exactly for that purpose. Th


## Usage

To set up your Node GraphQL API, simply run
```
docker-compose up --build
```

After your containers have finished setting up, you should be able to access `http://localhost:3000/graphiql` and see the following:

![GraphiQL Sample](https://raw.githubusercontent.com/RedTint/node-postgraphile-boilerplate/master/assets/sample-output.png)

Upon seeing the above interface, you should be able to start working on your frontend application.

### Modifying the Schema

I have only created a sample database schema to get you up and running.
Feel free to add scripts [here](https://github.com/RedTint/node-postgraphile-boilerplate/tree/master/db/scripts)

## Maintainers

[@RedTint](https://github.com/RedTint).

## Contributing

Feel free to dive in! [Open an issue](https://github.com/RedTint/node-postgraphile-boilerplate/issues/new) or submit PRs.

Standard Readme follows the [Contributor Covenant](http://contributor-covenant.org/version/1/3/0/) Code of Conduct.

### Contributors

Only me at this point. =)


## License

[MIT](LICENSE) © Algefmarc Anthony L. Almocera
