# Suhuru Waga System (Smart Agriculture Platform)

A comprehensive MERN stack application designed to bridge the gap between farmers, landowners, buyers, modern technology, and government agricultural resources.

<img width="1920" height="910" alt="suhuru waga system" src="https://github.com/user-attachments/assets/fffcd300-8c91-4fa8-8710-007149de21f7" />


## 🚀 Project Overview
**Suhuru Waga** is a web-based platform that empowers farmers by providing AI-driven cultivation advice and a direct digital communication channel with government agricultural bodies.

* **Type:** University Group Project (2nd Year)
* **Role:** Full Stack Developer
* **Status:** Completed

---

## 👨‍💻 My Specific Contributions
While this was a collaborative team project, I was personally responsible for designing and developing the following core modules:

### 1. AI-Powered Crop Suggestion System 🤖
I integrated the **Google Generative AI API** to create an intelligent recommendation engine.
* **How it works:** Users input simple data (Location, Soil Type, Farming Goals, Land Size).
* **The Tech:** The system processes this input and queries the AI model to generate 3-5 tailored crop suggestions along with detailed descriptions and cultivation tips.
* **Impact:** Helps farmers make data-driven decisions without needing technical agricultural knowledge.

<img width="1344" height="3134" alt="localhost_3000_crop-suggest" src="https://github.com/user-attachments/assets/8266b9c4-e3b1-49f2-88ad-66de1f753314" />



### 2. Government Information Management System 🏛️
I built a digital portal to digitize the workflow between Agrarian Service Centers and farmers.
* **Digital Notice Board:** A real-time dashboard where officers can broadcast emergency alerts (weather/pest warnings) and advice.
* **PDF Form Handling:** A system for distributing and collecting official government forms digitally, reducing paperwork.
* **Resource Database:** A multimedia library where farmers can access educational PDFs and video tutorials.

<img width="1792" height="1080" alt="suhuru waga system (2)" src="https://github.com/user-attachments/assets/61182850-1bfe-41c0-8dc0-6e9cd785dead" />

<img width="1670" height="938" alt="suhuru waga system (1)" src="https://github.com/user-attachments/assets/dd156e52-6f2a-411b-8920-45a297df71b7" />

---

## 🛠️ Tech Stack
* **Frontend:** React.js, Tailwind CSS (or Bootstrap - change this to what you used)
* **Backend:** Node.js, Express.js
* **Database:** MongoDB
* **AI Integration:** Google Gemini API (Generative AI)
* **Version Control:** Git & GitHub

---

## ⚙️ Installation & Run Locally

**Prerequisites:** Node.js and MongoDB installed.

1.  **Clone the repository**
    ```bash
    git clone [https://github.com/RavinduGit11/Suhuru-Waga-System.git](https://github.com/RavinduGit11/Suhuru-Waga-System.git)
    cd Suhuru-Waga-System
    ```

2.  **Install Dependencies**
    ```bash
    cd backend
    npm install
    cd ../frontend
    npm install
    ```

3.  **Setup Environment Variables**
    Create a `.env` file in the backend folder and add your MongoDB URI and API Keys.

4.  **Run the App**
    ```bash
    # Run Backend (inside backend folder)
    npm start

    # Run AI (inside AIserver folder)
    node server.js

    # Run Frontend (inside frontend folder)
    npm start
    ```

---

## 🤝 Team & Acknowledgements
This project was developed as part of the 2nd Year, 2nd Semester curriculum.
* **Ravindu:** AI Features & Government Info System
* **Dulakshana:** Land Bidding System
* **Dewmina:** Resource Management System (Lorry, Tractors, farming Equipment)
* **Roshini:** Cultivation Management System
* **Dewmini:** Marketplace Management System
---
*Note: This repository represents the merged final version of the project.*
