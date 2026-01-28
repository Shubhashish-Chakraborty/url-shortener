# URL Shortener

A modern, lightweight URL shortener built with Node.js and Express. Transform long URLs into short, shareable links with ease.

![Live Demo](https://img.shields.io/badge/demo-live-brightgreen)
![License](https://img.shields.io/badge/license-MIT-blue)

**Live Demo:** [theshortlink.vercel.app](https://theshortlink.vercel.app)

---

## Features

- **Fast & Lightweight** - Built with Express.js for optimal performance
- **Secure** - Input validation and sanitization
- **Analytics Ready** - Track your shortened URLs (if implemented)
- **Clean UI** - Simple and intuitive user interface
- **RESTful API** - Easy integration with other services
- **Cloud Deployed** - Hosted on Vercel for 99.9% uptime

---

## Quick Start

### Prerequisites

Before you begin, ensure you have the following installed:
- [Node.js](https://nodejs.org/) (v14 or higher)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)
- [MongoDB](https://www.mongodb.com/) (local or cloud instance)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/Shubhashish-Chakraborty/url-shortener.git
   cd url-shortener
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   
   Create a `.env` file in the root directory by copying the sample file:
   ```bash
   cp .env.sample .env
   ```
   
   Then configure your environment variables in the `.env` file:
   ```env
   PORT=3000
   MONGODB_URI=your_mongodb_connection_string
   BASE_URL=http://localhost:3000
   ```

4. **Start the development server**
   ```bash
   npm start
   ```

5. **Open your browser**
   
   Navigate to `http://localhost:3000` to see the application running.

---

## Project Structure

```
url-shortener/
├── controllers/        # Request handlers and business logic
├── middlewares/        # Custom middleware functions
├── models/            # Database models and schemas
├── public/            # Static files (CSS, JS, images)
├── routes/            # API and page routes
├── .env.sample        # Sample environment variables
├── .gitignore         # Git ignore rules
├── index.js           # Application entry point
├── package.json       # Project dependencies
└── vercel.json        # Vercel deployment configuration
```

---

## Configuration

### Environment Variables

Create a `.env` file in the root directory with the following variables:

| Variable | Description | Example |
|----------|-------------|---------|
| `PORT` | Server port number | `3000` |
| `MONGODB_URI` | MongoDB connection string | `mongodb://localhost:27017/urlshortener` |
| `BASE_URL` | Base URL for shortened links | `http://localhost:3000` |

### MongoDB Setup

You can use either a local MongoDB instance or a cloud service like MongoDB Atlas:

**Option 1: Local MongoDB**
```bash
# Install MongoDB locally and start the service
mongod --dbpath /path/to/your/data
```

**Option 2: MongoDB Atlas (Recommended)**
1. Create a free account at [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)
2. Create a new cluster
3. Get your connection string
4. Add it to your `.env` file

---

## Usage

### Creating a Short URL

**Via Web Interface:**
1. Open the application in your browser
2. Enter your long URL in the input field
3. Click "Shorten"
4. Copy and share your shortened URL

**Via API:**
```bash
curl -X POST http://localhost:3000/api/shorten \
  -H "Content-Type: application/json" \
  -d '{"url": "https://example.com/very/long/url"}'
```

### Accessing Short URLs

Simply visit your shortened URL, and you'll be redirected to the original destination:
```
http://localhost:3000/abc123
```

---

## API Reference

### Shorten URL

**Endpoint:** `POST /api/shorten`

**Request Body:**
```json
{
  "url": "https://example.com/long-url"
}
```

**Response:**
```json
{
  "success": true,
  "shortUrl": "http://localhost:3000/abc123",
  "originalUrl": "https://example.com/long-url",
  "shortCode": "abc123"
}
```

### Redirect to Original URL

**Endpoint:** `GET /:shortCode`

Automatically redirects to the original URL.

---

## Deployment

### Deploy to Vercel

This project is configured for easy deployment to Vercel.

1. **Install Vercel CLI**
   ```bash
   npm install -g vercel
   ```

2. **Login to Vercel**
   ```bash
   vercel login
   ```

3. **Deploy**
   ```bash
   vercel
   ```

4. **Set Environment Variables**
   
   In the Vercel dashboard, add your environment variables:
   - `MONGODB_URI`
   - `BASE_URL`

### Deploy to Other Platforms

You can also deploy this application to:
- **Heroku:** Add a `Procfile` and deploy via Git
- **Railway:** Connect your GitHub repo and deploy
- **DigitalOcean App Platform:** Use the web interface to deploy
- **AWS/GCP:** Deploy as a containerized application

---

## Development

### Running in Development Mode

```bash
npm run dev
```

This will start the server with hot-reload enabled (if configured).

### Testing

```bash
npm test
```

### Linting

```bash
npm run lint
```

---

## Contributing

Contributions are welcome! Here's how you can help:

1. **Fork the repository**
2. **Create a feature branch**
   ```bash
   git checkout -b feature/amazing-feature
   ```
3. **Commit your changes**
   ```bash
   git commit -m 'Add some amazing feature'
   ```
4. **Push to the branch**
   ```bash
   git push origin feature/amazing-feature
   ```
5. **Open a Pull Request**

### Contribution Guidelines

- Follow the existing code style
- Write clear commit messages
- Add tests for new features
- Update documentation as needed
- Ensure all tests pass before submitting PR

---

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## Acknowledgments

- Built with [Express.js](https://expressjs.com/)
- Deployed on [Vercel](https://vercel.com/)
- Database powered by [MongoDB](https://www.mongodb.com/)

---

## Contact

**Shubhashish Chakraborty**

- GitHub: [@Shubhashish-Chakraborty](https://github.com/Shubhashish-Chakraborty)
- Website: [theshortlink.vercel.app](https://theshortlink.vercel.app)

---

## Issues

Found a bug or have a suggestion? Please [open an issue](https://github.com/Shubhashish-Chakraborty/url-shortener/issues) on GitHub.

---

## Show Your Support

If you found this project helpful, please give it a star on GitHub.

---

<div align="center">
  Made with care by Shubhashish Chakraborty
</div>
