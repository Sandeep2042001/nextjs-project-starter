# Web WhatsApp Clone

This is a Next.js web application that replicates core WhatsApp features including phone number authentication, real-time chat, media sharing, and profiles.

## Setup Instructions

1. Install Node.js and npm from https://nodejs.org/
2. Clone this repository or copy the project files.
3. Navigate to the project directory:
   ```
   cd web-whatsapp-clone
   ```
4. Install dependencies:
   ```
   npm install
   ```
5. Set up Firebase project and add your Firebase config in `firebaseConfig.ts`.
6. Run the development server:
   ```
   npm run dev
   ```
7. Open http://localhost:3000 in your browser.

## Features Implemented

- Phone number authentication with Firebase
- Real-time chat using Firebase Firestore
- User profiles
- Encrypted messaging (client-side encryption)
- Media sharing (photos and videos) - planned
- Stickers and animations - planned
- Voice messages - planned
- Live video calls and screen sharing - planned

## Notes

- This app requires a Firebase project with Authentication, Firestore, and Storage enabled.
- Some features are planned for future phases.
