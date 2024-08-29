from fastapi import FastAPI, HTTPException
from pydantic import BaseModel
import google.generativeai as genai
import json

# Configure the Google Generative AI model
genai.configure(api_key='AIzaSyDD73jiDr5XFQAKkhqVz7Dc_3mUkW54V1c')

generation_config = {
    "temperature": 1,
    "top_p": 0.95,
    "top_k": 64,
    "max_output_tokens": 8192,
    "response_mime_type": "text/plain",
}

model = genai.GenerativeModel(
    model_name="gemini-1.5-flash",
    generation_config=generation_config,
)

# Load initial history from file
with open("data.json", "r", encoding='utf-8') as f:
    default_history = json.load(f)

# Dictionary to store chat history for each user
user_chat_histories = {}

# FastAPI instance
app = FastAPI()

class Message(BaseModel):
    user_id: str
    message: str

@app.post("/chat")
async def chat(message: Message):
    user_id = message.user_id
    user_message = message.message

    # Check if the user already has a chat history
    if user_id not in user_chat_histories:
        # If not, create a new chat session for the user with the default history
        chat_session = model.start_chat(
            history=default_history.copy()
        )
        user_chat_histories[user_id] = {
            "session": chat_session,
            "history": default_history.copy(),
        }
    else:
        # Use the existing chat session for the user
        chat_session = user_chat_histories[user_id]["session"]

    # Send user message to the AI model
    response = chat_session.send_message(user_message)
    ai_response = response.text

    print(f"User: {user_message} | AI: {ai_response}")

    # Update user's chat history
    user_chat_histories[user_id]["history"].extend([
        {"role": "user", "parts": [user_message]},
        {"role": "model", "parts": [ai_response]},
    ])

    return {"response": ai_response}
