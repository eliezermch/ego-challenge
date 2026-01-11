# Ego Challenge - Car Dealership App

An elegant and responsive web application for browsing and exploring car models, built with modern web technologies.

![App Screenshot](/public/assets/images/capture_ec_062036PM_260111.png)

> _Note: If you have a screenshot of the app, place it in public/ and update the path above, otherwise this placeholder assumes the OG image exists or you can remove this line._

## 🚀 Features

- **Model Browsing**: View a comprehensive list of car models with images.
- **Filtering**: Easily filter models by category (Autos, Pickups, SUVs, etc.).
- **Sorting**: Sort models by price or release year.
- **Model Details**: Dive deep into specific model details, viewing features, specifications, and image galleries.
- **Responsive Design**: optimized for seamless experience on Desktop, Tablet, and Mobile.
- **Animations**: Smooth transitions and interactive elements using standard CSS and modern techniques.
- **SEO Optimized**: Complete metadata configuration for better search engine visibility.

## 🛠️ Tech Stack

- **Framework**: [Next.js 16](https://nextjs.org/) (App Router)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS 4](https://tailwindcss.com/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Carousel**: [Embla Carousel](https://www.embla-carousel.com/)

## ⚙️ Installation

1.  **Clone the repository:**

    ```bash
    git clone <repository-url>
    cd ego-challenge
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    # or
    yarn install
    # or
    pnpm install
    # or
    bun install
    ```

## 🔧 Environment Setup

1.  Create a `.env` file in the root directory by copying the example file:

    ```bash
    cp .env.example .env
    ```

    _(Or manually create `.env` and copy the content from `.env.example`)_

2.  Open `.env` and verify the API URL:
    ```env
    EGO_API_URL=https://challenge.egodesign.dev
    ```
    _Adjust this if your backend API is hosted elsewhere._

## 🏃‍♂️ Running the Project

Start the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## 🏗️ Building for Production

To create an optimized production build:

```bash
npm run build
# or
yarn build
```

To start the production server:

```bash
npm run start
# or
yarn start
```
