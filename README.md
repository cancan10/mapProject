# Google Maps TypeScript Project

This project demonstrates the integration of Google Maps into a TypeScript-based application. The project generates random user and company data, places markers on the map, and displays detailed information in a pop-up window when the markers are clicked.

## Features

1. **User Class**:
    - Generates random latitude and longitude coordinates.
    - Creates a random user name.

2. **Company Class**:
    - Generates random latitude and longitude coordinates.
    - Creates a random company name and catchphrase.

3. **Map Class**:
    - Integrates Google Maps.
    - Adds markers for users and companies on the map.
    - Displays a pop-up window with user and company information when a marker is clicked.

## Installation

1. Clone the repository:
 

2. Navigate to the project directory:
 

3. Install dependencies:
   ```bash
   npm install
   ```
4. . Replace your Google Maps API key in index.html file :
    

## Usage

1. Run the development server:
   ```bash
    npx parcel index.html
   ```

2. Open the application in your browser at `http://localhost:1234`.

3. Interact with the map to view user and company markers.
    - Click on a marker to see detailed information in a pop-up window.


### TypeScript Features
This project leverages TypeScript's strong typing to ensure robust and error-free code. Examples include:
- Type annotations for method parameters and return values.
- Interfaces for defining structure and behavior.

## Dependencies

- `typescript`: TypeScript compiler and utilities.
- `dotenv`: For managing environment variables.
- `@types/googlemaps`: TypeScript definitions for Google Maps.


## License

This project is licensed under the MIT License. See the `LICENSE` file for details.

## Acknowledgements

- Google Maps API for powering the map features.
- Faker.js (or any library used) for generating random data.

