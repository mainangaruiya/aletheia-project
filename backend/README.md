# Aletheia Project Backend

MongoDB backend for the Aletheia Project with contact form and admin authentication.

## Setup

1. **Install MongoDB** (if not installed):
   ```bash
   # Ubuntu/Debian
   sudo apt update
   sudo apt install -y mongodb
   sudo systemctl start mongodb
   
   # macOS
   brew tap mongodb/brew
   brew install mongodb-community
   brew services start mongodb-community