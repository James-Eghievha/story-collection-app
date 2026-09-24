# React Story Collection App

A multilingual story-collection application built with React, featuring client-side routing, shared application context, reusable UI components, and Supabase integration for backend data.

The project focuses on building a structured React application where multiple pages, shared UI state, routing, and externally stored data work together as a cohesive application.

## Features

* Multilingual user interface
* Language toggle using React Context API
* Client-side routing
* Shared application layouts
* Reusable Header and Footer components
* Story collection and story detail views
* Supabase integration
* Environment variable configuration
* Dynamic story data fetching
* Custom 404 / Not Found page
* Custom CSS scrollbar styling
* Responsive, interactive UI

## Component Structure

```text
App
├── Layout
│   ├── Header
│   │   └── LanguageToggle
│   ├── Main Content
│   │   ├── StoryList
│   │   │   └── StoryCard
│   │   └── StoryDetail
│   └── Footer
│
└── NotFound
```

> The exact component hierarchy may vary depending on the final project structure.

## Application Architecture

The application combines several React concepts and supporting technologies:

```text
React Application
       │
       ├── Context API
       │      └── Language State
       │
       ├── Router
       │      ├── Story List
       │      ├── Story Detail
       │      └── Not Found
       │
       ├── Shared Layout
       │      ├── Header
       │      └── Footer
       │
       └── Supabase
              └── Story Data
```

## React Concepts Practised

* Functional components
* Component composition
* React Context API
* Shared application state
* Client-side routing
* Layout architecture
* Dynamic route handling
* Conditional rendering
* Data-driven component rendering
* Reusable components
* Project and folder organization

## Multilingual UI

A key objective of the project was implementing language switching using the **React Context API**.

Instead of passing language information through multiple component levels using props, the application provides shared language state through context.

The general flow is:

```text
Language Toggle
      ↓
Context State Update
      ↓
Application Re-render
      ↓
Translated UI
```

This provides practical experience with managing state that needs to be accessed across different parts of a React application.

## Routing

The application uses client-side routing to separate different application views.

The routing structure includes:

* Story collection/list page
* Individual story detail pages
* Not Found page
* Shared application layout

This provides experience building multi-page experiences within a single React application.

## Supabase Integration

Supabase is used as the application's backend service for storing and retrieving story data.

The project provides practical experience with:

* Supabase project configuration
* Environment variables
* Backend service integration
* Fetching external data
* Rendering backend data through React components

Sensitive configuration values are kept outside the source code using environment variables.

### Environment Variables

Create a `.env` file locally and provide the required Supabase configuration:

```env
VITE_SUPABASE_URL=your_supabase_url
VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
```

**Never commit your `.env` file or other private credentials to GitHub.**

## Data Flow

```text
Supabase
    ↓
Data Fetching
    ↓
React Application State
    ↓
StoryList
    ↓
StoryCard
    ↓
StoryDetail
```

This structure demonstrates how externally stored data can be retrieved and transformed into reusable React UI components.

## Styling

The application includes custom CSS styling, including a customized scrollbar to provide a more consistent visual experience.

The project also focuses on creating reusable and structured UI elements rather than placing all interface logic inside a single component.

## Key Learning Outcomes

This project strengthened my understanding of:

* React Context API
* Global/shared state management
* Client-side routing
* Route-based application architecture
* Shared layouts
* Component organization
* Supabase integration
* Environment configuration
* Backend data fetching
* Dynamic data rendering
* Not Found route handling
* Custom CSS and UI refinement

## Development Value

The patterns explored in this project are applicable to larger applications such as:

* Content management systems
* Learning platforms
* Documentation websites
* Publishing platforms
* Multi-language business applications
* Community platforms
* Digital libraries
* Dashboard applications

The combination of routing, shared context, reusable components, and backend integration provides a foundation for moving from isolated React interfaces toward more complete application architectures.

## Project Status

**Completed — React application architecture and Supabase integration project.**

The project demonstrates practical experience combining React's component model and Context API with routing, layouts, external backend data, and multilingual UI.

## Future Improvements

Potential extensions include:

* User authentication
* Story creation and editing
* User profiles
* Bookmarks or favourites
* Search and filtering
* Pagination
* Rich-text story content
* Story categories
* Author profiles
* Database security policies
* Admin dashboard
* Improved accessibility
* Internationalization of story content

## Author

**James Eghievha**

Frontend Developer → Full-Stack & AI Software Engineering

---

Built with **React** and **Supabase**, with a focus on application architecture, shared state, routing, backend integration, and data-driven UI.
