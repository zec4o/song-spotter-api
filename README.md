# 🎵 Song Spotter API

Welcome to the groovy Song Spotter API! 🎉 This repository contains the code for a simple RESTful API that lets you search for song lyrics. The API is built using Node.js, Fastify, Knex.js, and SQLite. Request validation is handled with Zod.

## Prerequisites

Before you dive into the musical adventure, make sure you have the following installed:

- Node.js (version 10 or above)
- SQLite

## Getting Started

To get started with the API, follow these steps:

1. Clone the repository:

   ```bash
   git clone https://github.com/zec4o/song-spotter-api.git
   ```

2. Navigate to the project directory:

   ```bash
   cd song-spotter-api
   ```

3. Install the dependencies:

   ```bash
   npm install
   ```

4. Create a `.env` file in the project root directory and specify the following environment variables:

   ```plaintext
   PORT=<port_number>
   ```

   Replace `<port_number>` with your desired port for the API.

5. Run the database migrations to create the necessary tables:

   ```bash
   npm run migrate
   ```

6. Start the API:

   ```bash
   npm start
   ```

   The API will be running at `http://localhost:<port_number>`.

## API Endpoints

The following endpoints are available in the API:

- `GET /songs` 🎶

  Retrieves a list of all songs.

- `GET /songs/:id` 📜

  Retrieves details of a specific song.

- `POST /songs` 🎤

  Creates a new song. Rock the mic with the following request body parameters:

  - `title`: Title of the song (string)
  - `author`: Author of the song (string)
  - `duration`: Duration of the song (string)

- `DELETE /songs/:id` ❌

  Deletes a specific song. Sometimes we need to let go...

## Frameworks and ORM

This API grooves with the following frameworks and ORM:

- **Fastify**: Fastify is a high-performance web framework for Node.js. It provides a rock-solid foundation for building web applications at lightning speed. 🚀

- **Knex.js**: Knex.js is a SQL query builder for Node.js. It simplifies the process of interacting with the SQLite database by providing a clean and intuitive syntax for crafting queries. 🎸

- **SQLite**: SQLite is a lightweight and serverless database engine. It sets the rhythm as the data storage for the Song Spotter API. 🎶

- **Zod**: Zod is a TypeScript-first schema validation library. It ensures that the data received by the API follows the beat by validating against the defined schema. 🎹

## Contributing

We'd love to have your contributions to the Song Spotter API! 🎉 Since the API is in its initial stage, there's ample opportunity for improvements and enhancements. We welcome your ideas, bug fixes, and new features!

If you have any suggestions, bug fixes, or cool features in mind, please open an issue or submit a pull request. Together, let's make this API even better! 🚀

## License

This project is licensed under the [MIT License](LICENSE).

## Acknowledgments

This API was developed as part of a basic project by me [zec4o](https://github.com/zec4o). 

## Contact

If you have any questions or need to get in touch, feel free to contact [zec4o](https://github.com/zec4o).
