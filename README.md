🤖 AI Agent – Retrieval Augmented Generation (RAG)

An intelligent AI Agent built with Node.js, RAG architecture, and LLM models that answers user questions based on custom knowledge stored in a vector database.

Instead of relying only on the LLM’s general knowledge, the system retrieves relevant context from stored data using embeddings and semantic search, then generates an accurate response.

🚀 Overview

This project implements a production-style Retrieval Augmented Generation (RAG) pipeline where:

Custom knowledge is converted into vector embeddings

Stored inside a vector database

User questions are converted into query embeddings

Relevant data is retrieved using vector similarity search

The retrieved context is passed to an LLM model

The LLM generates a context-aware answer

This enables the AI agent to respond using domain-specific knowledge provided by the system.

🏗 Architecture
User Question
      │
      ▼
Frontend (React AI Chat UI)
      │
      ▼
Node.js API Server
      │
      ▼
RAG Pipeline
 ├── Create Query Embedding
 ├── Search Vector Database
 └── Retrieve Relevant Documents
      │
      ▼
LLM Model
      │
      ▼
Context + Prompt
      │
      ▼
AI Generated Response
      │
      ▼
Return Response to Frontend
⚙️ Tech Stack
Frontend

React

TailwindCSS

Framer Motion

Axios

Backend

Node.js

Express.js

LangChain

AI Infrastructure

LLM Model (Groq / OpenAI / Llama)

Embedding Model

Vector Database

Storage

MongoDB (application data)

Vector DB (semantic search)

🧠 How the RAG Pipeline Works
1️⃣ Data Ingestion

Knowledge data (documents, FAQs, or information) is processed and stored in the vector database.

Steps:

Text is split into smaller chunks

Each chunk is converted into an embedding vector

The embedding is stored in the vector database

Example:

Document:
"Our restaurant provides Italian and Indian cuisine."

Embedding Vector:
[0.235, -0.482, 0.118, ...]

Stored as:

{
  pageContent: "Our restaurant provides Italian and Indian cuisine.",
  metadata: {
    source: "restaurant_info"
  },
  embedding: [vector values]
}
🔎 2️⃣ User Query Processing

When a user asks a question:

"What cuisine do you serve?"

The system:

Converts the question into an embedding

Searches the vector database

Finds the most similar stored knowledge

Example:

Query Vector → similarity search → Top 3 matching documents
📦 3️⃣ Retrieval from Vector Database

The system retrieves the most relevant documents.

Example retrieved context:

1. "Our restaurant provides Italian and Indian cuisine."
2. "We offer dine-in and takeaway services."

This context is passed to the LLM.

🤖 4️⃣ LLM Response Generation

The LLM receives a structured prompt containing:

User Question
+
Retrieved Context
+
System Instructions

Example prompt:

Answer the user question using the context below.

Context:
Our restaurant provides Italian and Indian cuisine.

Question:
What cuisine do you serve?

The model generates:

We serve both Italian and Indian cuisine.
💬 5️⃣ AI Response

The generated response is returned to the frontend chat interface.

User sees:

AI Assistant:
We serve both Italian and Indian cuisine.
📡 API Endpoint
Ask AI Agent
POST /api/v1/ai/ask

Request:

{
  "question": "What services does the restaurant provide?"
}

Response:

{
  "success": true,
  "data": "We provide dine-in and takeaway services."
}
🧾 Example Flow
User: What cuisine do you serve?

Backend:
1. Convert question → embedding
2. Search vector DB
3. Retrieve relevant knowledge
4. Send context to LLM

LLM:
Generate answer using retrieved data

Response:
We serve Italian and Indian cuisine.
📂 Project Structure
src
 ├── controllers
 │    └── ai.controller.js
 │
 ├── services
 │    └── rag.service.js
 │
 ├── utils
 │    ├── embeddings.js
 │    ├── vectorStore.js
 │    └── llm.js
 │
 ├── routes
 │    └── ai.route.js
 │
 ├── app.js
 └── server.js
🔐 Why RAG is Powerful

Traditional LLM:

Question → Model → Answer

RAG Architecture:

Question
   ↓
Retrieve Knowledge
   ↓
Context + Model
   ↓
Accurate Answer

Benefits:

Uses your own knowledge

Reduces hallucinations

Answers domain-specific questions

Works with real-time updated data

✨ Features

✔ Retrieval Augmented Generation (RAG)
✔ Vector similarity search
✔ Custom knowledge base
✔ AI chat interface
✔ Real-time AI responses
✔ Scalable architecture

📌 Use Cases

This architecture can power:

AI Customer Support

AI Knowledge Base

AI SaaS Assistants

AI Chatbots for Businesses

AI Documentation Assistants

🧑‍💻 Author

Dipanshu Kale

Full Stack Developer & GenAI Enthusiast
Passionate about building production-level AI systems and intelligent backend architectures.
