# Next.js Shopping Bag 🛍️

A modern e-commerce shopping application built with Next.js 15, showcasing the latest Next.js features including the App Router, React Server Components, and modern React patterns.

## 📋 Overview

This is a full-featured e-commerce application demonstrating how to build modern web applications with Next.js. The project showcases product listings, categories, hero sections, and implements best practices for performance, SEO, and user experience.

## 🚀 Features

- **Modern Next.js Architecture**: Built with Next.js 15 and App Router
- **Hero Section**: Engaging landing page with promotional content
- **Product Categories**: Organized product browsing experience  
- **Product Showcase**: Display products with modern card layouts
- **Server Components**: Leverage React Server Components for performance
- **Responsive Design**: Mobile-first approach with responsive layouts
- **SEO Optimized**: Built-in SEO features and metadata management
- **Performance Optimized**: Fast loading with automatic optimizations

## 🛠️ Technologies Used

- **Framework**: Next.js 15.5.3
- **Frontend**: React 19.1.0
- **Styling**: CSS Modules
- **Build Tool**: Turbopack (Next.js's new bundler)
- **Code Quality**: ESLint with Next.js configuration

## 🎓 React & Next.js Concepts You Can Learn

This project is perfect for learning modern React and Next.js development patterns and serves as a comprehensive reference for building e-commerce applications:

### 🔥 Next.js 15 Features
- **App Router**: Modern file-based routing system with nested layouts (`app/layout.js`)
- **React Server Components**: Server-side rendering and data fetching in `page.js` files
- **Client Components**: Interactive components with 'use client' directive (`BasketContext.js`, `AddToBag.js`)
- **Dynamic Routing**: 
  - Single parameter routes: `product/[id]/page.js` for individual products
  - Catch-all routes: `products/[[...slug]]/page.js` for category filtering
- **Layout System**: Shared layouts and nested routing with `layout.js`
- **Image Optimization**: Built-in `next/image` component for performance
- **Turbopack**: Next.js's new bundler for faster builds and development

### ⚛️ Modern React Patterns
- **React 19**: Latest React features and concurrent rendering
- **Context API**: Global state management with `BasketContext` for shopping cart
- **Custom Hooks**: State management patterns in functional components
- **Error Boundaries**: Class-based error handling with `ErrorBoundary.js`
- **Suspense & Loading**: Loading states and progressive rendering
- **Local Storage Integration**: Persisting cart data between sessions
- **Component Composition**: Modular component architecture

### 🛒 E-commerce Specific Patterns
- **Shopping Cart Logic**: Add/remove items, quantity management, cart persistence
- **Product Display**: Card layouts, image galleries, pricing formatting
- **Category Filtering**: Dynamic product filtering and navigation
- **Pagination**: Handling large product catalogs with `PaginatedList.js`
- **Basket Management**: Real-time cart updates and item counting with `BasketCount.js`

### 🏗️ Project Architecture
- **File-Based Routing**: App directory structure following Next.js 13+ conventions
- **Component Organization**: 
  - Feature-based folders (`homepage/`, `basket/`, `product/`)
  - Shared components in `components/`
  - Context providers in `context/`
  - Utility functions in `util/`
- **CSS Modules**: Component-scoped styling with `.module.css` files
- **Asset Optimization**: Static assets in `public/` folder with optimized loading

### 🔄 State Management Patterns
- **React Context**: Global state for shopping cart functionality
- **Local Storage**: Client-side data persistence
- **Server State**: Fetching and caching product data from APIs
- **Component State**: Local UI state management with `useState`
- **Effect Hooks**: Side effects and lifecycle management with `useEffect`

### 🌐 Full-Stack Concepts
- **SSR vs CSR**: Understanding when components render on server vs client
- **Data Fetching**: 
  - Server-side fetch in async components
  - Client-side data loading patterns
  - API integration with external services (DummyJSON API)
- **SEO Optimization**: Server-rendered content for better search visibility
- **Performance**: Automatic code splitting and lazy loading

### 🎨 Modern Web Development
- **Responsive Design**: Mobile-first CSS with flexible layouts
- **CSS Grid & Flexbox**: Modern layout techniques in component styles
- **Loading States**: User experience patterns with loading indicators
- **Error Handling**: Graceful error boundaries and fallback UI
- **Accessibility**: Semantic HTML and ARIA patterns
- **Performance Optimization**: Image optimization, code splitting, and caching

## 📦 Dependencies

```json
{
  "next": "15.5.3",
  "react": "19.1.0",
  "react-dom": "19.1.0"
}
```

## 🗂️ Project Structure

```
app/
├── page.js                    # Homepage (Server Component)
├── layout.js                  # Root layout with navigation
├── not-found.js              # Custom 404 page
├── globals.css               # Global styles and CSS variables
├── favicon.ico               # App icon
│
├── homepage/                 # Homepage feature components
│   ├── Hero.js              # Hero section with promotional content
│   ├── Categories.js        # Category display logic
│   ├── CategoriesList.js    # Category grid layout
│   ├── Products.js          # Featured products logic
│   └── ProductsList.js      # Products grid layout
│
├── product/[id]/            # Dynamic product pages
│   ├── page.js             # Product detail page (Server Component)
│   ├── AddToBag.js         # Add to cart functionality (Client)
│   ├── loading.js          # Loading state for product page
│   └── error.js            # Error boundary for product page
│
├── products/[[...slug]]/    # Category and search pages
│   ├── page.js             # Products listing page
│   ├── Products.js         # Products display logic
│   ├── CategoryFilter.js   # Category filtering component
│   └── PaginatedList.js    # Pagination implementation
│
├── basket/                  # Shopping cart feature
│   ├── page.js             # Cart page layout
│   └── BasketItems.js      # Cart items display and management
│
├── components/              # Shared UI components
│   ├── Header.js           # Navigation header with cart count
│   ├── Footer.js           # Site footer
│   ├── ProductCard.js      # Reusable product card component
│   ├── BasketCount.js      # Cart item counter (Client Component)
│   ├── ErrorBoundary.js    # Global error handling (Class Component)
│   └── Loader.js           # Loading spinner component
│
├── context/                 # React Context providers
│   └── BasketContext.js    # Shopping cart state management
│
└── util/                    # Utility functions
    └── index.js            # Helper functions (price formatting, etc.)

public/
├── hero.jpg                # Homepage hero image
├── logo.png               # Site logo
├── 404.png               # Custom 404 illustration
└── error.png             # Error page illustration
```

## ⚙️ Getting Started

1. **Clone the repository**
   ```bash
   git clone [repository-url]
   cd next-js-shopping-bag
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🔧 Available Scripts

- `npm run dev` - Start development server with Turbopack
- `npm run build` - Build for production with Turbopack
- `npm start` - Start production server
- `npm run lint` - Run ESLint for code quality

## � Key Code Patterns to Study

### 1. Server vs Client Components
```javascript
// Server Component (app/product/[id]/page.js)
export default async function ProductPage({params}) {
  const data = await fetch(`https://dummyjson.com/products/${id}`);
  // Direct data fetching in server component
}

// Client Component (app/product/[id]/AddToBag.js)
"use client";
export default function AddToBag({ product }) {
  // Interactive functionality with hooks
}
```

### 2. Dynamic Routing Patterns
- **Single Dynamic Route**: `/product/[id]/page.js` - Individual product pages
- **Optional Catch-All**: `/products/[[...slug]]/page.js` - Category filtering with optional segments

### 3. Context + localStorage Pattern
```javascript
// app/context/BasketContext.js
const BasketContext = createContext();
// Combines React Context with localStorage for cart persistence
```

### 4. Error Boundaries with Suspense
```javascript
// Modern error handling with fallback UI
<ErrorBoundary fallback="Could not load products">
  <Suspense fallback={<Loader />}>
    <Products />
  </Suspense>
</ErrorBoundary>
```

### 5. CSS Modules Architecture
- Component-scoped styles with `.module.css`
- Global styles in `globals.css`
- Responsive design patterns

## �💡 Learning Path

This project is ideal for developers who want to:

1. **Master Next.js**: Learn the latest Next.js 15 features and App Router architecture
2. **Modern React**: Work with React 19, Server Components, and Context API
3. **E-commerce Patterns**: Understand shopping cart, product catalog, and user experience patterns
4. **Performance**: Learn optimization techniques including image optimization and code splitting
5. **Full-Stack Development**: Bridge frontend and backend concepts with server-side rendering

## 🎯 Key Learning Outcomes

After studying this project, you'll understand:

### 📂 File-by-File Learning Guide

**Core Architecture:**
- `app/layout.js` - Root layout patterns, global providers, and navigation structure
- `app/page.js` - Homepage composition with server components
- `app/globals.css` - Global CSS variables, reset styles, and utility classes

**Routing & Navigation:**
- `app/product/[id]/page.js` - Dynamic routing, async server components, data fetching
- `app/products/[[...slug]]/page.js` - Catch-all routing for category filtering
- `app/not-found.js` - Custom 404 pages and error handling

**State Management:**
- `app/context/BasketContext.js` - React Context API, localStorage integration, cart logic
- `app/components/BasketCount.js` - Context consumption in client components

**Component Patterns:**
- `app/components/ProductCard.js` - Reusable component design, props handling
- `app/components/ErrorBoundary.js` - Class components, error boundaries, fallback UI
- `app/product/[id]/AddToBag.js` - Client-side interactivity, form handling

**Data & Performance:**
- `app/homepage/Products.js` - Server-side data fetching, API integration
- `app/products/[[...slug]]/PaginatedList.js` - Pagination patterns, performance optimization
- `app/util/index.js` - Utility functions, data transformation

**Styling & UI:**
- CSS Modules pattern across all `.module.css` files
- Responsive design in `app/homepage/hero.module.css`
- Component-scoped styling strategies

### 🎓 Concepts Mastered
- **Next.js App Router**: File-based routing, layouts, and page organization
- **Server vs Client Components**: When and how to use each type effectively
- **React Context**: Global state management for shopping cart functionality
- **Dynamic Routing**: URL parameters, catch-all routes, and navigation patterns
- **Error Handling**: Boundaries, loading states, and graceful degradation
- **Performance**: Image optimization, code splitting, and caching strategies
- **Modern CSS**: Modules, responsive design, and component styling
- **E-commerce UX**: Cart management, product display, and user interactions

## 🚀 Next Steps & Extended Learning

### 🛠️ Enhance Your Skills by Adding:

**Backend Integration:**
- **Database**: Replace API calls with Prisma + PostgreSQL/MongoDB
- **Authentication**: Implement NextAuth.js for user login/signup
- **API Routes**: Create custom API endpoints in `app/api/`
- **Server Actions**: Add form handling with Next.js Server Actions

**Advanced Features:**
- **Search**: Full-text product search with filters
- **Reviews**: User reviews and ratings system  
- **Wishlist**: Save products for later functionality
- **Payment**: Stripe integration for checkout process
- **Admin Panel**: Product management dashboard

**Performance & Production:**
- **Caching**: Implement Redis for data caching
- **Testing**: Add Jest + Testing Library for component tests
- **Monitoring**: Error tracking with Sentry
- **Analytics**: Google Analytics integration
- **PWA**: Service workers and offline functionality

### 📚 Advanced Concepts to Explore:
- **Middleware**: Route protection and redirects
- **Internationalization**: Multi-language support with next-intl
- **SEO**: Advanced metadata and structured data
- **Accessibility**: Screen reader support and keyboard navigation
- **TypeScript**: Type safety for larger applications

## 📚 Learn More

To learn more about the technologies used:

- [Next.js Documentation](https://nextjs.org/docs) - Learn about Next.js features and API
- [React Documentation](https://react.dev) - Learn about React 19 features
- [Turbopack](https://turbo.build/pack) - Next.js's new build tool

## 🚀 Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out the [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
