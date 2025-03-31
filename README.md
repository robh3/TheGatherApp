# Gather App

A social event planning and activity discovery application built with React and Firebase.

## Features

- Event Planning
- Activity Browsing
- Local Guides
- Real-time Chat

## Technologies

- React
- Firebase Authentication
- Tailwind CSS

## Prerequisites

Before you begin, ensure you have the following installed:
- Node.js (v16 or later)
- npm (v8 or later)
- Git

## Development Setup

### 1. Clone the Repository

```bash
git clone https://github.com/robh3/TheGatherApp.git
cd TheGatherApp
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Set Up Firebase Configuration

1. Create a Firebase project at [Firebase Console](https://console.firebase.google.com/)
2. Go to Project Settings and copy your Firebase configuration

3. Create a `.env` file in the project root and add your Firebase configuration:

```
REACT_APP_FIREBASE_API_KEY=your_api_key
REACT_APP_FIREBASE_AUTH_DOMAIN=your_auth_domain
REACT_APP_FIREBASE_PROJECT_ID=your_project_id
REACT_APP_FIREBASE_STORAGE_BUCKET=your_storage_bucket
REACT_APP_FIREBASE_MESSAGING_SENDER_ID=your_messaging_sender_id
REACT_APP_FIREBASE_APP_ID=your_app_id
REACT_APP_FIREBASE_MEASUREMENT_ID=your_measurement_id
```

### 4. Enable Firebase Services

In the Firebase Console, enable the following services:
- Authentication (Email/Password)
- Firestore Database
- Storage

### 5. Run the Development Server

```bash
npm start
```

The application will open in your default browser at `http://localhost:3000`.

## Available Scripts

- `npm start`: Runs the app in development mode
- `npm run build`: Builds the app for production
- `npm test`: Launches the test runner
- `npm run eject`: Removes the single build dependency (use with caution)

## Environment Variables

All environment variables should be prefixed with `REACT_APP_` to be recognized by Create React App.

## Deployment

1. Build the production version:
```bash
npm run build
```

2. Deploy the contents of the `build` folder to your preferred hosting platform.

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

Distributed under the MIT License. See `LICENSE` for more information.

## Contact

Rob Howard (mr dot robhoward at gmail.com)

Project Link: [https://github.com/robh3/TheGatherApp](https://github.com/robh3/TheGatherApp)