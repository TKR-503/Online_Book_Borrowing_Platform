# 📚 BookVerse — Online Book Borrowing & Digital Library Platform

[![Next.js](https://img.shields.io/badge/Next.js-16.2-000000?style=for-the-badge&logo=nextdotjs&logoColor=white)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19.0-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://react.dev/)
[![Better Auth](https://img.shields.io/badge/Better_Auth-1.2-4F46E5?style=for-the-badge&logo=auth0&logoColor=white)](https://www.better-auth.com/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.0-38BDF8?style=for-the-badge&logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)
[![DaisyUI](https://img.shields.io/badge/DaisyUI-5.7-5A0E2D?style=for-the-badge&logo=daisyui&logoColor=white)](https://daisyui.com/)

**BookVerse** is a modern, full-stack **Digital Book Borrowing & Online Library Platform**. Designed with premium aesthetics, rich dynamic animations, and seamless user experience, BookVerse enables readers to discover thousands of books across multiple categories, perform instant live searches, borrow books with real-time stock updates, and manage their personal user profile and borrowing history.

---

## 🎯 Main Purpose of the Project

The primary goal of **BookVerse** is to digitize the conventional library experience by providing:

1. **Seamless Discovery**: An intuitive catalog where readers can search by title, filter by category (*Story, Tech, Science*), and view detailed book metrics (*Available Copies, Borrow Count, Publisher, Publication Year*).
2. **Instant Book Borrowing**: A frictionless 1-click borrowing system that tracks book availability and updates borrowing status.
3. **Secure Authentication & User Accounts**: A complete authentication workflow featuring email/password credentials and **Google OAuth Single Sign-On (SSO)**.
4. **User Profile & Management**: An interactive user dashboard where members can view their membership status, track borrowed titles, and update their profile details and avatar image.
5. **Universal Accessibility**: A 100% mobile-responsive visual interface optimized for smartphones, tablets, laptops, and desktop displays.

---

## 🛠️ Technology Stack & Frameworks

| Category | Technology | Purpose |
| :--- | :--- | :--- |
| **Core Framework** | [Next.js 16 (App Router)](https://nextjs.org/) | React Server Components, App Router routing, Turbopack bundling |
| **Frontend Library** | [React 19](https://react.dev/) | Client-side reactive UI state, Hooks (`useSearchParams`, `useState`) |
| **Authentication** | [Better Auth 1.2](https://www.better-auth.com/) | Complete auth engine for Email/Password & Google OAuth SSO |
| **Styling & Theme** | Vanilla CSS3 + [Tailwind CSS 4](https://tailwindcss.com/) + [DaisyUI 5](https://daisyui.com/) | Custom design system tokens, responsive CSS grid, glassmorphism UI |
| **Notifications** | [React Hot Toast](https://react-hot-toast.com/) | Smooth toast feedback for authentication and book borrowing actions |
| **Carousel/Slider** | [Swiper 14](https://swiperjs.com/) | Touch-enabled responsive testimonial slider carousel |
| **Image Optimization** | [Next.js Image Optimization](https://nextjs.org/docs/app/building-your-application/optimizing/images) | High-performance remote image loading with Unsplash & UI-Avatars |

---

## ✨ Key Features & Highlights

### 🏠 1. Interactive Hero Banner & Marquee
- **Royal Midnight-Navy Banner**: Designed with royal indigo gradients, glowing ambient backdrops, and an interactive hero image featuring glowing blue elevation shadows.
- **Hero CTA Button**: "Browse Now" button with smooth hover scale effects and gliding arrow micro-animations.
- **Dynamic Marquee**: Infinite-scrolling marquee bar displaying active platform statistics (*Active Readers, Total Books, Instant Borrowing*).

### 📚 2. All Books Catalog Page (`/books`)
- **Instant Live Search**: Search books dynamically by title with real-time input response.
- **Category Filter Pills**: Filter books instantly across *All Books*, *Story*, *Tech*, and *Science* with active URL search parameter sync.
- **Mobile Filter Bar**: On mobile devices, the category sidebar transforms into a touch-friendly horizontal scrollbar.
- **Adaptive Grid**: 2-column mobile layout and multi-column desktop grid for clean, un-clipped card presentation.

### 📖 3. Dynamic Book Detail & Borrowing (`/books/[id]`)
- **Rich Metadata Display**: Category badges, stock availability status, total borrow count, publisher, and publication year.
- **Interactive Borrow Action**: Real-time 1-click book borrowing button with loading state feedback and instant toast confirmation.
- **Fallback Cover Engine**: Automatic placeholder image generator if a remote book cover fails to load.

### 🔐 4. Authentication Workflows (`/login` & `/register`)
- **Better Auth Integration**: Secure login and sign-up powered by Better Auth.
- **Google OAuth Sign-In**: 1-click Google authentication with official branding.
- **Password Eye Toggle**: Interactive eye icon toggle on password inputs allowing users to reveal/hide their password cleanly.
- **Smart Redirection**: Registration redirects to login with confirmation, while login seamlessly redirects to the user profile dashboard.

### 👤 5. User Profile & Edit System (`/profile` & `/profile/update`)
- **User Dashboard**: Displays member avatar, name, email, member since date, and active account status.
- **Navbar User Dropdown**: Clicking the user's name or avatar in the navbar opens a sleek dropdown menu with quick links to *My Profile*, *Edit Profile*, and *Logout*.
- **Edit Profile Form**: Crisp input border lines, focus rings, and live photo URL preview.

---

## 📁 Project Architecture & Directory Structure

```text
online_bookverse/
├── public/                     # Static public assets (Book_photo.png, icons)
├── src/
│   ├── app/                    # Next.js App Router routes & pages
│   │   ├── api/
│   │   │   └── auth/[...all]/  # Better Auth API route handler
│   │   ├── books/              # All Books catalog page
│   │   │   └── [id]/           # Dynamic book detail page
│   │   ├── login/              # Login page with Google SSO & eye toggle
│   │   ├── register/           # Create Account page with photo URL & eye toggle
│   │   ├── profile/            # User profile dashboard
│   │   │   └── update/         # Update profile edit form
│   │   ├── globals.css         # Global CSS design tokens, badge styles & theme
│   │   ├── layout.js           # Root layout with ToastProvider & Navbar
│   │   └── page.js             # Home page (Hero banner, Testimonials, Categories)
│   ├── components/             # Reusable UI components
│   │   ├── BookCard.jsx        # Individual book card component
│   │   ├── Navbar.jsx          # Header navigation bar with user dropdown
│   │   ├── TestimonialSlider.jsx # Swiper testimonial carousel component
│   │   └── ToastProvider.jsx   # React Hot Toast client provider
│   └── lib/                    # Core utilities & auth configurations
│       ├── auth.js             # Better Auth server configuration
│       ├── auth-client.js      # Better Auth client instance & hooks
│       └── books.js            # Books data store & helper functions
├── next.config.mjs             # Next.js configuration & remote image patterns
└── package.json                # Dependencies & scripts
```

---

## 🚀 Getting Started

Follow these simple steps to run **BookVerse** locally on your machine:

### Prerequisites
Make sure you have **Node.js** (v18.0 or higher) and **npm** installed on your system.

```bash
node -v
npm -v
```

### 1. Clone the Repository
```bash
git clone https://github.com/your-username/online_bookverse.git
cd online_bookverse
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Run the Development Server
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to view the application live.

### 4. Build for Production
To verify and create an optimized production build:

```bash
npm run build
npm run start
```

---

## 🎨 Design Philosophy & Aesthetics

- **Color Palette**: Deep Royal Midnight Indigo (`#0b0f19`, `#1e1b4b`), Electric Accent Blue (`#4f46e5`, `#3b82f6`), and Clean Slate White (`#ffffff`, `#f8faff`).
- **Typography**: Clean, modern system typography with strict hierarchy (`clamp()` fluid font sizing).
- **Transitions**: Smooth micro-animations (`cubic-bezier(0.34, 1.56, 0.64, 1)`) for hover lifts, button presses, and menu dropdowns.

---

## 📄 License

This project is licensed under the [MIT License](LICENSE).

---

<p center>
Made with ❤️ by <strong>Antigravity AI</strong> for <strong>BookVerse</strong>.
</p>
