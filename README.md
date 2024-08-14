# UV Ray Index and Sunscreen Recommendation Web Application

## Overview
This web application provides users with real-time UV ray index information based on their location and suggests appropriate sunscreen protection accordingly. The application leverages the OpenUV API to retrieve accurate UV index data.

## Features
- **Location-Based UV Index**: Users can input their location coordinates (latitude and longitude) to get the current UV ray index.
- **Sunscreen Recommendation**: Based on the UV index, the application suggests the suitable level of sunscreen protection.
- **User-Friendly Interface**: The application offers a simple and intuitive interface for easy use.

## Tech Stack
- **Frontend**: HTML, CSS, JavaScript
- **Backend**: Node.js, Express.js
- **API**: OpenUV API
- **Template Engine**: EJS

## Installation and Setup

1. **Clone the repository**:
   ```bash
   git clone https://github.com/yourusername/uv-ray-index-app.git
   cd uv-ray-index-app
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Set up the API key**:
   - Replace the `yourBearerToken` variable in `app.js` with your actual OpenUV API key.

4. **Run the application**:
   ```bash
   node app.js
   ```
   The application will start on `http://localhost:3000`.

a## Usage

- Open your browser and go to `http://localhost:3000`.
- Enter the latitude and longitude of the location you want to check the UV index for.
- The application will display the current UV index and recommend sunscreen protection accordingly.

## API Reference
- **OpenUV API**: [OpenUV API Documentation](https://www.openuv.io/)

## License
This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more details.

## Acknowledgments
- Special thanks to the [OpenUV API](https://www.openuv.io/) for providing UV index data.

 
