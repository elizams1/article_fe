import { Post } from "@/types/post";

const dummyPosts: Post[] = [
  {
    id: 1,
    title: "Understanding Advanced React Hooks and Their Use Cases",
    content:
      "React Hooks have revolutionized how we write components in React. The useState and useEffect hooks are just the beginning. In this comprehensive guide, we'll explore useReducer, useCallback, useMemo, useContext, and useRef with practical examples. Each hook serves a specific purpose and can significantly optimize your application's performance when used correctly. We'll also discuss common pitfalls and best practices for hook usage in large-scale applications.",
    category: "Web Development",
    status: "published",
    created_date: "2023-05-15T09:30:00Z",
    updated_date: "2023-05-16T14:45:00Z"
  },
  {
    id: 2,
    title: "The Complete Guide to TypeScript Configuration in 2023",
    content:
      "TypeScript configuration can be overwhelming with its numerous compiler options. This guide walks through every important tsconfig.json option, explaining what it does and when you should use it. We'll cover module resolution strategies, type checking strictness levels, and how to configure paths for cleaner imports. By the end, you'll be able to optimize your TypeScript setup for both development and production environments, with specific recommendations for different project sizes and team setups.",
    category: "Programming",
    status: "draft",
    created_date: "2023-06-02T11:20:00Z",
    updated_date: "2023-06-05T16:10:00Z"
  },
  {
    id: 3,
    title: "Building Scalable Microservices Architecture with Node.js",
    content:
      "Microservices architecture offers numerous benefits but comes with its own set of challenges. In this article, we'll design a complete microservices system using Node.js, Docker, and Kubernetes. We'll cover service discovery, API gateways, inter-service communication patterns, and distributed transaction handling. The guide includes practical examples for implementing resilience patterns like circuit breakers and retries, as well as strategies for maintaining consistency across services while keeping them loosely coupled.",
    category: "Backend Development",
    status: "published",
    created_date: "2023-04-10T08:15:00Z",
    updated_date: "2023-04-12T13:30:00Z"
  },
  {
    id: 4,
    title: "Modern CSS Techniques Every Developer Should Know in 2023",
    content:
      "CSS has evolved significantly in recent years. This guide covers modern techniques including CSS Grid and Flexbox layouts, CSS custom properties (variables), container queries, cascade layers, and the new :has() selector. We'll also explore upcoming features in CSS and how to use them today with appropriate fallbacks. Each section includes practical examples and real-world use cases to help you write more maintainable and efficient CSS in your projects.",
    category: "Frontend Development",
    status: "thrashed",
    created_date: "2023-03-22T14:50:00Z",
    updated_date: "2023-03-25T10:20:00Z"
  },
  {
    id: 5,
    title: "Deep Dive into JavaScript Performance Optimization",
    content:
      "JavaScript performance optimization is crucial for delivering smooth user experiences. This article examines common performance bottlenecks and how to identify them using browser dev tools. We'll cover optimization techniques like debouncing, throttling, memoization, virtual scrolling, and web workers. The guide includes before-and-after performance metrics for each optimization, along with practical implementation examples that you can apply to your projects immediately.",
    category: "JavaScript",
    status: "published",
    created_date: "2023-07-01T10:00:00Z",
    updated_date: "2023-07-03T15:30:00Z"
  },
  {
    id: 6,
    title: "Comprehensive Guide to Database Indexing Strategies",
    content:
      "Proper database indexing can make or break your application's performance. This comprehensive guide explains different types of indexes (B-tree, Hash, GiST, SP-GiST, GIN, and BRIN) and when to use each. We'll cover index-only scans, partial indexes, and multi-column indexes with practical examples in PostgreSQL. The article also discusses how to analyze query performance using EXPLAIN ANALYZE and how to identify when indexes are being used effectively or when they might actually hurt performance.",
    category: "Database",
    status: "draft",
    created_date: "2023-06-18T13:45:00Z",
    updated_date: "2023-06-20T09:15:00Z"
  },
  {
    id: 7,
    title: "Implementing Authentication in Modern Web Applications",
    content:
      "Authentication is a critical component of most web applications. This guide compares session-based and token-based authentication, with detailed implementations for both. We'll cover OAuth 2.0 flows, JWT best practices, refresh token strategies, and security considerations like CSRF protection. The article includes code samples for implementing authentication in popular frameworks like React, Next.js, and Express, with special attention to common security pitfalls and how to avoid them.",
    category: "Security",
    status: "published",
    created_date: "2023-05-30T16:20:00Z",
    updated_date: "2023-06-02T11:40:00Z"
  },
  {
    id: 8,
    title: "The Future of Web Development: WASM and Beyond",
    content:
      "WebAssembly (WASM) is changing what's possible on the web. This article explores current WASM use cases, from high-performance applications to running legacy code in browsers. We'll examine the WebAssembly System Interface (WASI) and how it enables WASM to run outside browsers. The guide includes benchmarks comparing WASM to JavaScript for different workloads, along with practical examples of compiling C/Rust code to WASM and integrating it with JavaScript applications.",
    category: "Web Development",
    status: "thrashed",
    created_date: "2023-04-05T12:10:00Z",
    updated_date: "2023-04-08T14:25:00Z"
  },
  {
    id: 9,
    title: "Building Accessible Web Applications: A Complete Guide",
    content:
      "Web accessibility is not just a legal requirement but a moral obligation. This comprehensive guide covers WCAG 2.1 guidelines with practical implementation examples. We'll explore semantic HTML, ARIA attributes, keyboard navigation, focus management, and screen reader testing. The article includes checklists for different disability categories (visual, motor, cognitive) and tools for automated and manual accessibility testing. Real-world examples demonstrate common accessibility mistakes and how to fix them.",
    category: "Frontend Development",
    status: "draft",
    created_date: "2023-06-25T09:50:00Z",
    updated_date: "2023-06-28T16:05:00Z"
  },
  {
    id: 10,
    title: "DevOps Best Practices for Small Development Teams",
    content:
      "Implementing DevOps doesn't require a large team or complex infrastructure. This guide shows small teams how to implement CI/CD pipelines, infrastructure as code, and monitoring solutions with minimal overhead. We'll cover GitHub Actions workflows, Terraform configurations for small projects, and lightweight monitoring with Prometheus and Grafana. The article includes cost estimates for different approaches and recommendations for when to invest in more sophisticated tooling as your team grows.",
    category: "DevOps",
    status: "published",
    created_date: "2023-07-10T14:30:00Z",
    updated_date: "2023-07-12T10:15:00Z"
  }
];

export default dummyPosts;
