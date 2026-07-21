# AutoClaim RPA Engine

![Project Status](https://img.shields.io/badge/Status-Completed-success)
![RPA](https://img.shields.io/badge/Tech-UiPath-blue)
![Frontend](https://img.shields.io/badge/Tech-HTML%2FCSS%2FJS-orange)

An end-to-end Robotic Process Automation (RPA) MVP built to automate zero-touch claim status verifications. The project simulates a real-world healthcare/insurance automation pipeline by ingesting a batch of claim data, driving a custom web portal via UI automation, extracting the generated status, and writing the structured data back for downstream processing.

**🌐 Live Proxy Portal:** [AutoClaim Status Portal](https://shriram1206.github.io/AutoClaim-RPA-Engine/)

---

## 🚀 Features
* **Full UI Automation:** A UiPath Studio robot configured to mimic human web interaction, typing JSON values securely into web forms and triggering status checks.
* **Deterministic Status Generation:** The frontend features a custom JavaScript hash algorithm that generates deterministic statuses (`Approved`, `Pending`, `Rejected`) based on the claim string, ensuring repeatable bot testing.
* **Data Processing Pipeline:** Deserializes raw input (`claims_input.json`), processes each record in real-time on the frontend, and serializes the captured DOM output back into the dataset.
* **Modern Interface:** Built with a premium, minimalist design using `Inter` and `Playfair Display` fonts.

---

## 🏗️ Project Architecture

The project is divided into three distinct layers:

1. **/website:** The presentation layer. A custom HTML/Vanilla CSS frontend built to act as the target application for the bot. Includes JavaScript to simulate network latency and return deterministic statuses.
2. **/data:** The data layer. Contains the `claims_input.json` database which holds 10 mock records (Member ID, Patient Name, Claim Number) to be iterated through.
3. **/uipath-bot:** The automation layer. Contains the `Main.xaml` workflow outlining the loop, browser attachment, type-into activities, and text extraction logic.

---

## ⚙️ How It Works

1. **Ingestion:** The UiPath bot reads the local `claims_input.json` file.
2. **Execution:** It launches a Chrome browser targeted at the AutoClaim Portal.
3. **Iteration:** The bot loops through the JSON array, types the specific Member ID, Patient Name, and Claim Number into the portal, and clicks "Verify Claim".
4. **Extraction:** After a simulated processing delay, the bot uses DOM scraping to extract the `Pending`, `Approved`, or `Rejected` text.
5. **Output:** The extracted status is injected back into the bot's memory and the fully populated JSON array is written back to the file system.

---

## 👨‍💻 Developer
Developed as a Proof-of-Concept for automated claims processing workflows.
