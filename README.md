#  Fully Type-Safe E-Commerce Store

A modern, high-performance, and responsive e-commerce web application built using **React 18**, **Vite**, and **TypeScript**. The application utilizes **Redux Toolkit** for robust global state management and connects to a live mock backend.

---

##  Live Demo
 [Explore the Live Marketplace](https://infiniteatomik-droid.github.io/my-react-portfolio/)

---

##  Tech Stack & Architecture

- **Frontend Core:** React 18 & Vite (for lightning-fast compilation and optimized asset builds)
- **Language:** TypeScript (Strict Mode configured, achieving 100% compile-time type safety)
- **State Management:** Redux Toolkit (Modular slices, custom typed hooks `useAppDispatch` and `useAppSelector`)
- **Data Fetching:** AsyncThunk integration fetching diverse, real-time catalog items from [DummyJSON API](https://dummyjson.com)
- **Routing:** React Router DOM (Optimized with a dedicated `basename` wrapper for seamless GitHub Pages integration)

---

##  Core Features

- **Strict Global Typing:** Complete isolation of complex commercial data structures including automated typed interface validations for all products.
- **Dynamic Category Filtration:** Real-time client-side catalog filtering allowing customers to instantly browse across multiple categories like smartphones, beauty, and home items.
- **Comprehensive Cart Logic:** Fully reactive cart operations including granular quantity incrementing, automated real-time price totals calculations, and an instant "Clear Cart" routine.
- **Production Ready Infrastructure:** Highly optimized deployment build pipeline resulting in zero compilation errors, zero linter blocks, and clean browser runtime environments.

---

##  Getting Started & Installation

Follow these steps to spin up the store locally on your machine:

1. **Clone the repository:**
   ```bash
   git clone https://github.com
   ```

2. **Navigate into the project directory:**
   ```bash
   cd my-react-portfolio
   ```

3. **Install modern package dependencies:**
   ```bash
   npm install
   ```

4. **Launch the dynamic local development server:**
   ```bash
   npm run dev
   ```

5. **Compile a production-optimized static distribution bundle:**
   ```bash
   npm run build
   ```

