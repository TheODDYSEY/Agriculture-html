
# Mkulima Expert - Precision Farming Platform
![Mkulima Expert Banner](./data%20farmers.png)

**Mkulima Expert** is a comprehensive web-based system developed to help agricultural professionals, particularly farmers, make informed decisions through real-time farm data analysis. This project was developed as part of the **NASA Space Apps Challenge**, leveraging cutting-edge data sources like satellite imagery and AI-driven technologies to empower farmers.

## Project Overview

This platform addresses the challenge of optimizing farm management by providing personalized, actionable data that enhances decision-making. By integrating data from satellite imagery, Google Earth, and meteorological sources, combined with AI-driven insights, our system helps farmers:

- Improve crop yields
- Reduce resource wastage
- Make data-driven decisions in real-time

The system is designed to offer **meteorological and agronomical insights** by leveraging data such as:

- **Precipitation**
- **Temperature**
- **NDVI** (Normalized Difference Vegetation Index for crop maturity)
- **NVRE** (Normalized Vegetation Ratio for crop health)

Additionally, the integration of an AI-driven chatbot simplifies the interaction with the system, enabling users to receive recommendations and make decisions efficiently.

The importance of this solution lies in its ability to simplify complex data and provide actionable recommendations that can directly enhance **productivity** and **sustainability** for farmers.

## Key Features

- **Crop Health Monitoring**: Real-time assessments using NVRE (crop health) data.
- **Weather Insights**: Precipitation and temperature data analysis for farm management.
- **Crop Maturity Tracking**: NDVI-based insights on crop growth stages.
- **AI-Driven Chatbot**: An AI-powered assistant that provides personalized recommendations and simplifies data interpretation.
- **Satellite Imagery Integration**: Data from satellite and Google Earth for precise mapping and analysis.
- **Interactive Map**: Choose your farm's exact location for accurate and personalized data.

## Project Components

This project consists of the following components:

- **Frontend (HTML/CSS)**: The main website interface, developed using HTML, CSS, and JavaScript, which provides an intuitive and responsive experience for users. The frontend repository can be found [here](https://github.com/TheODDYSEY/Agriculture-html).
- **Streamlit Backend**: A dashboard developed using Streamlit that processes the real-time data and displays farm insights, weather patterns, and crop health analysis. The backend repository is located [here](https://github.com/TheODDYSEY/Nasa-App).
- **AI Chatbot**: An AI-powered chatbot that interacts with farmers to provide recommendations based on analyzed data, helping them make informed decisions. The chatbot repository is [here](https://github.com/AllenWachio/nasa-spaceapps-recommendation-chatbot).

### GitHub Repositories

1. **Frontend (HTML)**: [Mkulima Expert Frontend](https://github.com/TheODDYSEY/Agriculture-html)
2. **Backend (Streamlit Dashboard)**: [Mkulima Expert Backend](https://github.com/TheODDYSEY/Nasa-App)
3. **AI Chatbot**: [NASA Space Apps Recommendation Chatbot](https://github.com/AllenWachio/nasa-spaceapps-recommendation-chatbot)

## Demo

Try the app live: [Mkulima Expert](https://theoddysey-nasa-app-streamlit-app-yhn3rf.streamlit.app/)

## Technologies Used

- **HTML5 & CSS3**: For the frontend structure and styling.
- **JavaScript (jQuery, Bootstrap)**: For interactivity and responsiveness.
- **OwlCarousel**: To create the responsive slider on the homepage.
- **Font Awesome**: For iconography.
- **Streamlit**: For backend data processing and displaying results.
- **OpenWeather API & NASA Data**: Used for weather and crop analysis.
- **Google Earth API**: For precise geospatial mapping.
- **Satellite Imagery**: For NDVI and NVRE data analysis.

## Installation & Setup

### Frontend Setup

1. Clone the frontend repository:
   ```bash
   git clone https://github.com/TheODDYSEY/Agriculture-html.git
   ```
2. Navigate to the project directory:
   ```bash
   cd Agriculture-html
   ```
3. Open the `index.html` file in your browser to view the frontend.

### Backend Setup

1. Clone the backend repository:
   ```bash
   git clone https://github.com/TheODDYSEY/Nasa-App.git
   ```
2. Navigate to the project directory:
   ```bash
   cd Nasa-App
   ```
3. Install the required dependencies:
   ```bash
   pip install -r requirements.txt
   ```
4. Run the Streamlit app:
   ```bash
   streamlit run streamlit_app.py
   ```

### AI Chatbot Setup

1. Clone the chatbot repository:
   ```bash
   git clone https://github.com/AllenWachio/nasa-spaceapps-recommendation-chatbot.git
   ```
2. Navigate to the project directory:
   ```bash
   cd nasa-spaceapps-recommendation-chatbot
   ```
3. Follow the setup instructions in the chatbot repository to run the chatbot.




## Contributing

We welcome contributions! If you're interested in improving the platform or adding features, feel free to submit issues and pull requests.

1. Fork the repository.
2. Create a new branch for your feature:
   ```bash
   git checkout -b feature-name
   ```
3. Commit your changes:
   ```bash
   git commit -m "Add new feature"
   ```
4. Push to the branch:
   ```bash
   git push origin feature-name
   ```
5. Open a pull request.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more details.

