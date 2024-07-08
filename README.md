# URL Screenshot Generator

This Node.js application captures screenshots of URLs using Express and Puppeteer.

## Project Requirements

- Node.js
- Express.js (for handling HTTP requests)
- Puppeteer (for capturing screenshots)

## Getting Started

### Prerequisites

- Node.js (v14 or later recommended)
- npm (usually comes with Node.js)

### Installation

1. Clone the repository:
   ```
   git clone https://github.com/yourusername/url-screenshot-generator.git
   cd url-screenshot-generator
   ```

2. Install dependencies:
   ```
   npm install
   ```

### Running the Server

Start the server with:
```
npm start
```

The server will start on `http://localhost:3000` by default.

## Development

### Code Style

This project uses ESLint for code linting and Prettier for code formatting. To run the linter:

```
npm run lint
```

To format the code:

```
npm run format
```

## Directory Structure

```
url-screenshot-generator/
├── src/
│   ├── server.js
│   └── routes/
│       └── screenshot.js
├── .eslintrc.json
├── .prettierrc
├── package.json
└── README.md
```

## Contributing

Please read [CONTRIBUTING.md](CONTRIBUTING.md) for details on our code of conduct and the process for submitting pull requests.

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.