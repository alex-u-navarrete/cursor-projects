// Welcome to Cursor Tutorial - Let's build something amazing!

// Try This: Hover over any function and ask Cursor to explain it
// Press Ctrl+K on any line to modify it with AI

class PersonalDashboard {
    constructor() {
        this.initializeApp();
    }

    // Type a comment here describing a new method you want
    // Let Cursor generate the entire function for you
    
    initializeApp() {
        console.log('Dashboard starting...');
        // Call the weather function to test it
        this.getWeatherData();
    }
    
    getWeatherData() {
        const CITY_LAT = 34.0522; // Los Angeles latitude
        const CITY_LON = -118.2437; // Los Angeles longitude
        
        return fetch(`https://api.open-meteo.com/v1/forecast?latitude=${CITY_LAT}&longitude=${CITY_LON}&current_weather=true&temperature_unit=fahrenheit`)
            .then(response => response.json())
            .then(data => {
                console.log('Weather API Response:', data);
                
                // Get current time and actual current weather data
                const now = new Date();
                const currentHour = now.getHours();
                
                // Use current_weather data (actual current conditions)
                const temp = data.current_weather.temperature;
                const isDaytime = data.current_weather.is_day === 1;
                
                // Debug logging
                console.log('Local hour:', currentHour);
                console.log('Temperature:', temp);
                console.log('Is daytime:', isDaytime);
                console.log('Current weather data:', data.current_weather);
                
                let backgroundGradient;
                
                // Combine temperature AND time for precise mood matching
                if (isDaytime && temp >= 85) {
                    // Blazing hot day - desert sunset vibes
                    backgroundGradient = 'linear-gradient(135deg, #ff7b00 0%, #ff3d00 50%, #d32f2f 100%)';
                } else if (isDaytime && temp >= 75) {
                    // Perfect sunny day - golden hour
                    backgroundGradient = 'linear-gradient(135deg, #ffd54f 0%, #ff9800 50%, #f57c00 100%)';
                } else if (isDaytime && temp >= 60) {
                    // Pleasant cool day - fresh morning sky
                    backgroundGradient = 'linear-gradient(135deg, #81c784 0%, #4fc3f7 50%, #29b6f6 100%)';
                } else if (isDaytime && temp < 60) {
                    // Chilly day - winter sky
                    backgroundGradient = 'linear-gradient(135deg, #b0bec5 0%, #78909c 50%, #546e7a 100%)';
                } else if (!isDaytime && (currentHour >= 22 || currentHour <= 3) && temp >= 75) {
                    // Deep night + hot - sultry midnight
                    backgroundGradient = 'linear-gradient(135deg, #4a148c 0%, #6a1b9a 50%, #1a237e 100%)';
                } else if (!isDaytime && (currentHour >= 22 || currentHour <= 3) && temp >= 60) {
                    // Deep night + pleasant - cool midnight (current: 12 AM, 62°F)
                    backgroundGradient = 'linear-gradient(135deg, #1a237e 0%, #0d47a1 50%, #01579b 100%)';
                } else if (!isDaytime && (currentHour >= 22 || currentHour <= 3) && temp < 60) {
                    // Deep night + cold - frigid midnight
                    backgroundGradient = 'linear-gradient(135deg, #000051 0%, #1a237e 50%, #0d47a1 100%)';
                } else if (!isDaytime && (currentHour >= 4 && currentHour <= 7) && temp >= 70) {
                    // Dawn + warm - sunrise warmth
                    backgroundGradient = 'linear-gradient(135deg, #ff6f00 0%, #e91e63 50%, #673ab7 100%)';
                } else if (!isDaytime && (currentHour >= 4 && currentHour <= 7) && temp < 70) {
                    // Dawn + cool - early morning chill
                    backgroundGradient = 'linear-gradient(135deg, #3f51b5 0%, #5c6bc0 50%, #7986cb 100%)';
                } else if (!isDaytime && (currentHour >= 19 && currentHour <= 21) && temp >= 70) {
                    // Evening + warm - golden dusk
                    backgroundGradient = 'linear-gradient(135deg, #ff6f00 0%, #e91e63 50%, #673ab7 100%)';
                } else if (!isDaytime && (currentHour >= 19 && currentHour <= 21) && temp < 70) {
                    // Evening + cool - twilight blue
                    backgroundGradient = 'linear-gradient(135deg, #3f51b5 0%, #5c6bc0 50%, #7986cb 100%)';
                } else {
                    // Fallback for any edge cases
                    backgroundGradient = 'linear-gradient(135deg, #0f172a 0%, #1e293b 100%)';
                }
                
                document.body.style.background = backgroundGradient;
                
                // Update DOM elements with weather data
                this.updateWeatherDisplay(temp, isDaytime, currentHour, data.current_weather);
                
                return {
                    temperature: temp,
                    isDaytime: isDaytime,
                    gradient: backgroundGradient
                };
            })
            .catch(error => {
                console.error('Error fetching weather:', error);
                // Fallback to default dark theme
                document.body.style.background = 'linear-gradient(135deg, #0f172a 0%, #1e293b 100%)';
            });
        // Type: "fetch weather data from API"
        // Watch Cursor build the entire function
    }
    
    updateWeatherDisplay(temp, isDaytime, currentHour, weatherData) {
        // Update temperature display
        const tempElement = document.getElementById('temp-value');
        if (tempElement) {
            tempElement.textContent = `${Math.round(temp)}°F`;
        }
        
        // Update conditions display
        const conditionsElement = document.getElementById('conditions-value');
        if (conditionsElement) {
            const timeOfDay = isDaytime ? 'Day' : 'Night';
            const tempDescription = this.getTemperatureDescription(temp);
            conditionsElement.textContent = `${tempDescription} ${timeOfDay}time in Los Angeles`;
        }
        
        // Update local time display
        const timeElement = document.getElementById('time-value');
        if (timeElement) {
            const now = new Date();
            const timeString = now.toLocaleString('en-US', {
                timeZone: 'America/Los_Angeles',
                hour: 'numeric',
                minute: '2-digit',
                hour12: true,
                weekday: 'long'
            });
            timeElement.textContent = timeString;
        }
    }
    
    getTemperatureDescription(temp) {
        if (temp >= 85) return 'Blazing Hot';
        if (temp >= 75) return 'Warm & Pleasant';
        if (temp >= 60) return 'Cool & Comfortable';
        return 'Chilly';
    }
}

const dashboard = new PersonalDashboard();
// Pro tip: Highlight this entire file and ask Cursor to:
// "Add JSDoc comments to all functions" 