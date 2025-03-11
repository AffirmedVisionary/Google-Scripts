# Google-Scripts
Things to make life easier

# 🚀 Google Apps Script for Automating Etsy Listing Preparation

## 📌 Overview
This script automates the process of **creating structured Google Drive folders**, **generating description documents**, and **saving links to Google Sheets** for seamless Etsy listing preparation. It is designed to work with **Make.com** for further automation.

---

## 🔹 What This Script Does (Logical Order)

### **1️⃣ Reads Data from Google Sheets**
- Fetches **Mini Collection Name, Collection Name, Tagline, Pieces, Bundle, Listing Price**, and **Title** from each row.
- Skips rows that **already have a generated document link** (prevents duplicates).

### **2️⃣ Creates a Google Drive Folder for Each Mini Collection**
- Inside the **Output Folder**, a new folder is created per **Mini Collection Name**:
📂 Output Folder ├── 📂 [Mini Collection Name] ├── 📂 Deliverables (For uploading finished PDFs) ├── 📂 Description (For auto-generated description doc)

### **3️⃣ Generates a Product Title**
- The title format is:
[Mini Collection Name] | Luxury Abstract Digital Art | Fine Art Print | High-End Wall Decor | [Collection Name] Aesthetic | Ethereal Home Decor | Statement Wall Art

- Inserts this **Title into Google Sheets** for Make.com to use in Etsy drafts.

### **4️⃣ Copies a Template Google Docs File**
- Creates a **new Google Docs file** inside the `Description` folder.
- Uses `[Mini Collection Name]` as the **file name** (e.g., `Auric Drift.doc`).

### **5️⃣ Replaces Placeholders in the Document**
- `[PRODUCT_TITLE]` → Replaced with **Title (without brackets)**
- `[TAGLINE]` → Replaced with **Tagline from Google Sheets**
- `[PIECES]` → Replaced with **Number of Pieces**
- `[BUNDLE]` → Replaced with **Bundle Information**
- `[LISTING_PRICE]` → Replaced with **Listing Price**

### **6️⃣ Updates Google Sheets with Folder & File Links**
- **Deliverables Folder Link** → Saves a **clickable link** to the **Deliverables** folder.
- **Description Folder Link** → Saves a **clickable link** to the **Description** folder.
- **Generated Document Link** → Inserts a **clickable link** to the new **Google Docs description file**.

### **7️⃣ Automates Workflow for Make.com**
- Make.com can now **use Google Sheets data** to:
- Retrieve **Title** for Etsy listing.
- Attach the **PDF from Deliverables folder**.
- Use the **Description document** as the Etsy product description.

---

## 🚀 How to Use This Script

### **📌 1. Set Up Google Sheets**
- Add these columns:  
`Mini Collection Name | Bundle | Collection Name | Tagline | Pieces | Listing Price | Title | Deliverables Folder | Description Folder | Generated Doc Link`

### **📌 2. Set Up Google Drive**
- Create a main **"Output Folder"** in Google Drive.
- Copy the folder **ID** (from the URL) and update it in the script.

### **📌 3. Set Up Google Docs Template**
- Create a **template document** with placeholders (`[PRODUCT_TITLE]`, `[TAGLINE]`, etc.).
- Copy the **Google Docs Template ID** and update it in the script.

### **📌 4. Run the Script**
- Open **Google Apps Script** in Google Sheets.
- Click **Run** (`▶`).
- The script will **automatically create folders, generate descriptions, and save links**.

### **📌 5. Connect to Make.com**
- In Make.com, set up an automation to:
- Read **Google Sheets data**.
- Attach the **Deliverables PDF** to an Etsy draft.
- Use the **Generated Description Document** for product details.

---

## ⚡ Future Enhancements
🔹 **Add Automated Timestamping** to prevent duplicate file names.  
🔹 **Trigger the script automatically when a new row is added.**  
🔹 **Include AI-generated description variations.**  

---

## ✨ Credits & Acknowledgments
Built to streamline Etsy listing creation for **digital art sellers** using **Google Sheets, Google Drive, and Make.com**. 🚀✨  
