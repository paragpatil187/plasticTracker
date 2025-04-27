# plasticTracker
# Next.js 14 Authentication System

This project implements a modern authentication system using **NextAuth.js** with **Next.js App Router** (`/app` directory structure).

It supports:
- Google OAuth login
- Credentials-based login (test credentials)
- MongoDB integration to store user information
- JWT session management
- Full TypeScript support
- TailwindCSS for the login page design

---

## ✅ Completed Features

- [x] **Google Authentication** (via NextAuth.js provider)
- [x] **Credentials Authentication** (test email/password)
- [x] **Custom Login Page** (`/login`)
- [x] **MongoDB Database** connection and User storage
- [x] **JWT Sessions** with custom fields (user points, level)
- [x] **Error Handling** during sign in/session
- [x] **Secure** environment variables (`.env.local`)
- [x] **TypeScript** typing for better developer experience
- [x] **API Route Setup** (`app/api/auth/[...nextauth]/route.ts`)
- [x] **Ready folder structure** for future scaling

---

## 🔐 Test Credentials

| Email              | Password     |
|--------------------|--------------|
| test@example.com   | password123  |

✅ You can use these to sign in with the credentials form.

---

## 🛠 How to Run

1. **Clone the project**  
   ```bash
   git clone https://github.com/your-repo/nextjs-auth-project.git
   cd nextjs-auth-project
Install dependencies

bash
Copy
Edit
npm install
# or
yarn install
Set environment variables
Create .env.local in the root folder:

bash
Copy
Edit
GOOGLE_CLIENT_ID=your_google_client_id
GOOGLE_CLIENT_SECRET=your_google_client_secret
NEXTAUTH_SECRET=your_random_secret
MONGO_URI=your_mongodb_connection_string
Run the project

bash
Copy
Edit
npm run dev
# or
yarn dev
Visit

Login page: http://localhost:3000/login

Hosted on Vercel: https://plastic-tracker-mwel.vercel.app/

🧱 Project Structure
bash
Copy
Edit
/app
  /api/auth/[...nextauth]/route.ts  # NextAuth API Route
  /login/page.tsx                   # Login page
/lib/mongodb.ts                     # MongoDB connection
/models/User.ts                     # User mongoose model
/public                             # Public assets
/styles                             # TailwindCSS config
🚀 Future Scope
🔥 Protect routes based on user authentication

🔥 Role-based authorization (Admin / User)

🔥 Add Email/Password registration flow

🔥 Forgot password/reset password functionality

🔥 Add GitHub or Facebook login providers

🔥 Connect user points/level to a real feature (example: gamification or rewards)

🔥 Refresh tokens handling for better OAuth management

🔥 Full mobile responsiveness and animations

🔥 Improve user profile page (Edit profile, upload avatar)
