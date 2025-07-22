# AI-Based Legal Document Simplifier

### 🚀 Objective:
Simplify complex legal documents into plain, understandable language for the general public, **without using pre-trained models**.

---

## 🧠 Features:
- Upload and parse legal documents (TXT)
- Detect complex sentences
- Rule-based simplification using spaCy
- Show simplified output in browser

---

## ⚙️ Tech Stack:

**Frontend:** React.js, TailwindCSS  
**Backend:** Node.js, Express.js  
**NLP Engine:** Python (spaCy)  
**Database (optional):** MongoDB  
**Other Tools:** PDF.js, Diff-match-patch

---

## 📁 Project Setup

### Backend

```bash
cd server
npm install
pip install -r requirements.txt
python -m spacy download en_core_web_sm
node index.js
```

### Frontend

```bash
cd client
npm install
npm start
```

### Upload a TXT file and get simplified output.

---

## 📚 Dataset Sources
- SEC Filings (EDGAR)
- Harvard Law Review Plain-English Guides
