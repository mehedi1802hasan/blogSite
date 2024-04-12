# Blog Site Documentation

## Table of Contents

- [Introduction](#introduction)
- [Getting Started](#getting-started)
  - [Dependencies](#dependencies)
  - [Installation](#installation)

- [Routes](#routes)
  - [Login](#login)
  - [Register](#register)
  - [Home](#home)
- [Navigation](#navigation)
- [Styling](#styling)
- [Firebase Configuration](#firebase-configuration)
- [Running the Project](#running-the-project)
- [Contributing](#contributing)


## Introduction

This documentation provides an overview of a blog site created using React, Vite, Tailwind CSS, and Firebase for user authentication. The site includes three main routes: Login, Register, and Home. Users can register for an account, log in, and access the Home page. The Home page features a navigation bar for easy access to different sections.

## Getting Started

### Dependencies

Before you begin, ensure you have the following dependencies installed on your local machine:

- [Node.js](https://nodejs.org/): Make sure you have Node.js installed.

### Installation

To set up the project locally, follow these steps:

1. Clone the repository to your local machine:

   ```bash
   git clone https://github.com/mehedi1802hasan/blogSite_client.git
   ```

2. Change into the project directory:

   ```bash
   cd your-project-directory
   ```

3. Install project dependencies:

   ```bash
   npm install
   ```



- The `src` directory contains your React components and application code.
- `Pages` folder contains the Login and Register components.
- `Home` folder contains the Navbar and Home components.



Firebase is used for user authentication. Firebase configuration details can be found in the `firebase-config.js` file.

## Routes
- `src/Routes/` folder contains the routing details.
### Login

The Login route (`/login`) allows users with registered accounts to log in to the blog site.

### Register

The Register route (`/register`) enables new users to create an account by providing necessary details.

### Home

The Home route (`/home`) serves as the main page of the blog site. It includes a navigation bar for easy access to Home, Feature, and Author sections. Users can find the necessary content and details based on their preferences.

## Navigation

The navigation bar on the Home page allows users to switch between different sections:

- **Home**: Navigate to the main page.
- **Features**: Explore featured content.
- **Authors**: Discover information about the authors.

## Styling

[Tailwind CSS](https://tailwindcss.com/) is used for styling the website. You can customize the styling by modifying the Tailwind CSS configuration in the `tailwind.config.js` file.

## Firebase Configuration

Firebase is used for user authentication. To configure Firebase, you need to create a Firebase project and obtain the configuration details (API keys, etc.). Update the `firebase-config.js` file with your Firebase configuration.

## Running the Project

To run the project locally, use the following command:

```bash
npm run dev
```

This will start the development server, and you can access the blog site at `http://localhost:5173/`.

## Contributing

If you would like to contribute to this project, please follow the standard practices for contributing to open-source projects. Fork the repository, make your changes, and create a pull request.

