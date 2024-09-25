# Xatup

 <img style="border-radius:12px" src="readme/screenshot.png" alt="Dashboard Screenshot" width="auto" height="auto">

Welcome to **Xatup**! This repository contains the code for a video conferencing web application designed to offer a seamless virtual meeting experience. With Xatup, you can easily create meeting rooms, schedule future meetings, join meetings, and view or record previous sessions for later use. Users can create accounts through a standard registration form or by using social logins via Google and GitHub.

## Authentication Features

<div style="display: flex; gap:0.5rem; align-content: center; align-items: center; justify-content: space-around; flex-wrap: wrap; }">
<img style="border-radius:12px" src="readme/screenshot-login.png" alt="Login Screenshot" width="200" height="auto">
<img style="border-radius:12px" src="readme/screenshot-register.png" alt="register Screenshot" width="200" height="auto">
<img style="border-radius:12px" src="readme/screenshot-pass.png" alt="Forgot password Screenshot" width="200" height="auto"></div>

Xatup provides a comprehensive authentication system, allowing users to:

- **Register**: Create an account using an email and password.
- **Social Login**: Use Google or GitHub to log in easily.
- **Login**: Sign in to your account with your credentials.
- **Forgot Password**: Reset your password via email in case you've forgotten it.
- **Email Notifications**: Upon registration and password reset, users will receive confirmation emails.

## Features

Xatup offers the following core features:

- **New Meeting**: Instantly start a video conference with just one click.
- **Schedule Meeting**: Plan and schedule meetings for a later time, ensuring your sessions are organized and on time.
- **View Recording**: Watch your previously recorded meetings at your convenience.
- **Join Meeting**: Enter any meeting by providing the unique link.

## Sidebar Navigation

The **Sidebar** allows users to easily navigate the platform with the following sections:

- **Home**: Overview of your dashboard.
- **Upcoming**: View a list of your upcoming meetings.
- **Previous**: Access a list of your previous meetings.
- **Recordings**: Browse and view all your recorded meetings.
- **Personal Room**: Copy a unique link to share with others so they can join your personal room.
- **Profile**: Edit your personal information and update your profile settings.

## User Interface

Xatup provides a clean and user-friendly **Dashboard** (screenshot available in the repo), where users can easily navigate between different meeting options using **cards** representing each feature.

- **New Meeting Card**: Start a new video meeting instantly.
- **Schedule Meeting Card**: Set up a meeting for a later time.
- **View Recording Card**: Access and view previously recorded meetings.
- **Join Meeting Card**: Join an ongoing meeting using a provided link.

## Main Technologies Used

Xatup is built using the following technologies, listed in order of priority:

1. **Next.js**: A React framework that enables server-side rendering and static site generation, providing optimal performance and user experience for our web application.

2. **Stream SDK**: Utilized for real-time messaging and notifications, Stream SDK helps facilitate seamless communication during meetings, allowing users to interact with each other effortlessly.

3. **Tailwind CSS**: A utility-first CSS framework that enables rapid UI development. Tailwind allows us to design responsive and visually appealing components efficiently, ensuring a consistent look and feel throughout the application.

4. **Prisma**: An ORM (Object-Relational Mapping) tool that simplifies database interactions. Prisma allows us to define and manage our data models in a type-safe manner, making it easier to work with databases and perform CRUD operations.

5. **NextAuth.js**: A powerful authentication library for Next.js applications. NextAuth.js provides secure and flexible authentication solutions, enabling users to sign in via email/password or social logins (Google and GitHub).

6. **Resend**: A service for sending emails, such as registration confirmations and password reset links. Resend streamlines our email functionality, ensuring users receive important notifications promptly.

7. **ShadCN**: A UI library that provides pre-built components, enhancing development speed and consistency in UI design. ShadCN helps maintain a cohesive user interface across different pages and features.

These technologies work together to create a robust and efficient video conferencing application, ensuring users have a seamless and engaging experience.

## Getting Started

This project is built using **Next.js**, a React framework. To get Xatup up and running locally, follow these steps:

1. Clone the repository: `bash git clone https://github.com/italodoe/lookup-app.git `
2. Navigate into the project directory: `bash cd xatup `
3. Install dependencies: `bash npm install `
4. Run the application in development mode: `bash npm run dev ` 5. Open your browser and navigate to `http://localhost:3000` to start using Xatup.

## Environment Variables

To run this project, you'll need to set up a `.env` file in the root of your project. This file will store all the necessary environment variables for the application to function properly.

### Creating the `.env` file

1. In the root directory of your project, create a new file named `.env`.
2. Add the following environment variables to the file, replacing the placeholder values with your actual data:

```plaintext
NEXT_PUBLIC_BASE_URL=https://yourdomain.com
NEXT_PUBLIC_PROTOCOL=https

# Prisma
DATABASE_URL=postgresql://user:password@localhost:5432/database

# Random string for session management
AUTH_SECRET=your_random_string_here

# GitHub OAuth credentials
GITHUB_CLIENT_ID=your_github_client_id
GITHUB_CLIENT_SECRET=your_github_client_secret

# Google OAuth credentials
GOOGLE_CLIENT_ID=your_google_client_id
GOOGLE_CLIENT_SECRET=your_google_client_secret

# Time for email link expiration (in seconds)
DEFAULT_EXPIRE_TIME=3600

# Resend API key for sending emails
RESEND_API_KEY=your_resend_api_key

# Default email address for sending emails
MAILER_DEFAULT_FROM="example@example.com"

# Stream API credentials
NEXT_PUBLIC_STREAM_API_KEY=your_stream_api_key
STREAM_SECRET_KEY=your_stream_secret_key

# Toggle for sending emails
RESEND_ACTIVE="true"  # Set to "false" to disable email sending
```

### Explanation of Each Variable

- **NEXT_PUBLIC_BASE_URL**: The base URL of your application (e.g., `https://yourdomain.com`). This will be used to construct links for your application.

- **NEXT_PUBLIC_PROTOCOL**: The protocol used by your application (e.g., `http` or `https`). This helps in generating absolute URLs.

- **DATABASE_URL**: The connection string for your database (e.g., PostgreSQL). It contains the username, password, host, and database name required to connect to your database. For more information, visit [PostgreSQL](https://www.postgresql.org/).

- **AUTH_SECRET**: A random string used for signing authentication tokens and managing sessions. This should be a secure and unique value.

- **GITHUB_CLIENT_ID**: Your application's client ID for [GitHub OAuth authentication](https://docs.github.com/en/developers/apps/building-oauth-apps/creating-an-oauth-app).

- **GITHUB_CLIENT_SECRET**: Your application's client secret for [GitHub OAuth authentication](https://docs.github.com/en/developers/apps/building-oauth-apps/creating-an-oauth-app).

- **GOOGLE_CLIENT_ID**: Your application's client ID for [Google OAuth authentication](https://developers.google.com/identity/protocols/oauth2/web-server#creatingcred).

- **GOOGLE_CLIENT_SECRET**: Your application's client secret for [Google OAuth authentication](https://developers.google.com/identity/protocols/oauth2/web-server#creatingcred).

- **DEFAULT_EXPIRE_TIME**: The default time (in seconds) that email links will remain valid. For example, `3600` means links will expire after one hour.

- **RESEND_API_KEY**: The API key used to authenticate with [Resend](https://resend.com/) service for sending emails.

- **MAILER_DEFAULT_FROM**: The default email address that will appear as the sender for outgoing emails.

- **NEXT_PUBLIC_STREAM_API_KEY**: The public API key used to connect to [Stream](https://getstream.io/) services.

- **STREAM_SECRET_KEY**: The secret key used for server-side operations with [Stream](https://getstream.io/).

- **RESEND_ACTIVE**: A toggle to enable or disable the email-sending feature. Set to `"true"` to enable email sending or `"false"` to disable it.

Make sure to keep your `.env` file secure and not share it publicly, as it contains sensitive information.

## License

This project is licensed under the MIT License. See the [LICENSE](./LICENSE) file for details.

## Acknowledgments

I would like to express my gratitude to the following resources that greatly contributed to the development of this project:

- **[Build and Deploy a Full Stack Video Conferencing App with Next.js](https://www.youtube.com/watch?v=R8CIO1DZ2b8)**: This comprehensive tutorial guided me in developing a professional, enterprise-ready video conferencing app using Next.js 14, Stream, and Tailwind CSS.

- **[Next Auth V5 - Advanced Guide](https://www.youtube.com/watch?v=1MTyCvS05V4)**: This advanced guide was instrumental in adding robust authentication features to my Next.js app. I highly recommend checking it out for a deeper understanding of NextAuth.

Thank you for providing such valuable content that made this project possible!
