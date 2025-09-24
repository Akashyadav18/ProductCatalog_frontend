
# 🛍️ E-Commerce Product Catalog

An **E-commerce Product Catalog** application built with **Spring Boot, PostgreSQL, and React.js**.  
This project demonstrates a real-world setup with **REST APIs, category-based filtering, product search, sorting, and full deployment** (backend on Render with Docker, frontend on Vercel, and PostgreSQL database on NeonDB).

---

## 🚀 Features
- Category-based filtering of products
- Product search functionality
- Price sorting (ascending/descending)
- Spring Boot REST APIs integrated with React frontend
- Responsive UI with **Tailwind CSS**
- Backend and frontend fully deployed with **CORS** handling

---

## 🛠️ Tech Stack
- **Backend:** Spring Boot, Spring Web, JPA, Lombok  
- **Database:** PostgreSQL (NeonDB Cloud)  
- **Frontend:** React.js, Tailwind CSS  
- **Deployment:** Render (Backend), Vercel (Frontend), Docker (Backend Containerization)  

---

## 🌐 Deployment
- **Backend:** Deployed on [Render] using **Docker image** and JAR build.  
- **Database:** Hosted on [NeonDB] (PostgreSQL cloud DB).  
- **Frontend:** Deployed on [Vercel].  

Environment variables (`.env`) were configured both on backend and frontend to securely manage API URLs, DB credentials, and CORS origins.

---

## ⚡ Challenges Faced & Solutions

1. **CORS Issues**  
   - **Problem:** API calls from React to Spring Boot were blocked.  
   - **Solution:** Configured CORS at backend level and updated environment variables (Render ↔ Vercel URLs).

2. **Maintaining `.env` files**  
   - **Problem:** Frontend and backend required different environment configurations.  
   - **Solution:** Used `.env` files locally, and configured environment variables separately in Render and Vercel.

3. **Database Setup (NeonDB)**  
   - **Problem:** Remote PostgreSQL connection setup with SSL.  
   - **Solution:** Updated `application.properties` with Neon connection string and verified SSL configurations.

4. **Building & Deploying Backend**  
   - **Problem:** Packaging Spring Boot JAR and creating a Docker image.  
   - **Solution:** Wrote a proper `Dockerfile`, built and pushed the image, then configured Render to pull it.

5. **Cross-Service URL Management**  
   - **Problem:** Backend URL needed to be set in frontend `.env` and vice versa for CORS.  
   - **Solution:** Managed proper environment variable setup across both deployments.

---

## 💡 Why These Choices?

- **Render (Backend):**  
  - Easy integration with Docker.  
  - Free tier available for hobby projects.  
  - Good CI/CD for Spring Boot applications.  

- **NeonDB (Database):**  
  - PostgreSQL cloud service with auto-scaling.  
  - Serverless and optimized for modern applications.  
  - Free tier for developers.  

- **Vercel (Frontend):**  
  - Optimized for React/Next.js.  
  - Simple deployment pipeline (GitHub → Vercel).  
  - Handles environment variables and builds automatically.  

- **Docker:**  
  - Ensures the backend runs in the same environment locally and in production.  
  - Easy to ship and deploy.  

---

## 📌 Key Takeaways for Interview
- Full-stack project with **production-like deployment** setup.  
- Hands-on experience solving **real deployment challenges** (CORS, env files, Docker, neon DB).  
- Clear reasoning behind choosing **Render, NeonDB, and Vercel**.  
- Demonstrates ability to **design, build, deploy, and troubleshoot** an end-to-end project.  

---

## 🔗 Project Links
-[https://productcatalog-teal.vercel.app/]

