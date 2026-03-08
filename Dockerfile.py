# Dockerfile
FROM python:3.11-slim

# Set working directory
WORKDIR /app

# Copy code
COPY main.py main.py
COPY books/ books/

# Optional: install dependencies if you have a requirements.txt
# COPY requirements.txt requirements.txt
# RUN pip install -r requirements.txt

# Set default command
CMD ["python", "main.py", "books/frankenstein.txt"]
