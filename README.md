# AutoClaim RPA Engine 🚀

![UiPath](https://img.shields.io/badge/UiPath-RPA-blue?style=for-the-badge&logo=uipath)
![Google Gemini](https://img.shields.io/badge/Google-Gemini_2.5_Flash-orange?style=for-the-badge&logo=google)
![Status](https://img.shields.io/badge/Status-Completed-success?style=for-the-badge)

An advanced, autonomous **Robotic Process Automation (RPA)** pipeline that merges UI interaction with deep **Agentic Generative AI**. This project automates the manual extraction of medical claim Explanation of Benefits (EOB) data and utilizes **Google's Gemini 2.5 Flash LLM** to semantically verify, structure, and adjudicate unstructured text into a highly structured JSON database.

## 🌟 The Problem
Traditional deterministic RPA bots struggle with unstructured or dynamically changing HTML data blocks. Medical portals frequently shift their layouts, causing standard UI scraping tools (like Regex or rigid CSS Selectors) to constantly crash when looking for specific `status` or `summary` text nodes.

## 🛠️ The Solution
Instead of forcing the UiPath robot to deterministically split and sanitize HTML, the bot acts as an **Agent** that collects all raw data and delegates the complex structuring to an LLM.
1. **Extraction Pipeline:** UiPath systematically loops through a set of patient profiles in `claims_input.json`. 
2. **Dynamic UI Automation:** The bot simulates human entry and seamlessly traverses the 'Claim Status Portal' to fetch raw EOB blocks.
3. **AI Summarization:** The unstructured text is securely fed via HTTP Protocol directly to the `gemini-2.5-flash` API endpoint, bypassing brittle logic.
4. **Data Aggregation:** The AI returns a perfectly sanitized JSON string containing an adjudicated `status` (paid/denied/pending) and a human-readable 1-sentence `summary`, which is injected back into the master array.

## 🚀 Key Technologies & Concepts
*   **UiPath Studio:** Core anchor architecture, Flow Control, and HTTP Data transmission.
*   **Google Gemini 2.5 Flash API:** Semantic parsing and intelligent data isolation.
*   **Newtonsoft JSON:** Complex multidimensional JToken desalinization and updates.
*   **HTML/CSS/JS:** Built a functional local frontend to simulate a production-grade external claim API.

## 📁 Repository Structure
```
📂 AutoClaim-RPA-Engine/
 ├── 📄 README.md                        # Project documentation
 ├── 📄 Claim_Status_RPA_MVP_PRD.md      # Official Project Requirements Document
 ├── 📄 Conversation_Context.md          # Architectural history and logic migration
 ├── 📂 website/                         # Local HTML/JS Mock Portal
 │    ├── index.html                     # Visual medical EOB claim interface
 │    ├── style.css                      # Modern glassmorphism UI styles
 │    └── script.js                      # Dynamically generates complex data
 ├── 📂 data/
 │    └── claims_input.json              # Master AI-Processed Data pipeline
 └── 📂 uipath-bot/
      ├── project.json                   # UiPath dependencies 
      └── Main.xaml                      # The core LLM-Loop architecture
```

## 🎥 Running the Bot
1. Open the internal `uipath-bot/project.json` file inside UiPath Studio.
2. Initialize `website/index.html` in an active Google Chrome window.
3. Click **Run File** in UiPath.
4. Watch as the bot autonomously inputs member keys, pulls the unstructured EOBs, validates them via standard HTTP requests to Google's LLM, and formats your backend JSON!

---
*Developed by Shriram*
