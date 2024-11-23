from flask import Flask, request, jsonify
import google.generativeai as genai
import json
import os
import logging
from flask_cors import CORS

# Initialize Flask app
app = Flask(__name__)

# Enable CORS for the app
CORS(app)

# Configure the Google Generative AI model
genai.configure(api_key='AIzaSyBESeqew534m_5I_rX-zJqPR4Wei1pttZ8')

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

# Dictionary to store chat history for each user
user_chat_histories = {}

# Check if the data.json file exists
if os.path.exists("data.json"):
    with open("data.json", "r", encoding='utf-8') as f:
        default_history = json.load(f)
else:
    # Handle the case where the file does not exist
    print("data.json file not found. Using an empty history as default.")
    default_history = []  # Or use any default history you'd like

# Define logging
logging.basicConfig(format='%(asctime)s - %(name)s - %(levelname)s - %(message)s', level=logging.INFO)

@app.route('/start', methods=['GET'])
def start():
    return jsonify({'message': 'Hello! I am your bot. Ask me anything.'})

@app.route('/message', methods=['POST'])
def handle_message():
    data = request.json
    user_id = data.get('user_id')
    user_message = data.get('message')

    if not user_id or not user_message:
        return jsonify({'error': 'Missing user_id or message'}), 400

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

    # Send AI response back as JSON
    return jsonify({'response': ai_response})

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000)
