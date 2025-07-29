// Welcome to Cursor Tutorial - Let's build something amazing!

// Try This: Hover over any function and ask Cursor to explain it
// Press Ctrl+K on any line to modify it with AI

class PersonalDashboard {
    constructor() {
        this.initializeApp();
        this.activities = this.initializeActivities();
    }

    // Type a comment here describing a new method you want
    // Let Cursor generate the entire function for you
    
    initializeApp() {
        console.log('Dashboard starting...');
        
        // Immediately restore last known background to prevent flash
        this.restoreLastBackground();
        
        // Call the weather function to test it
        this.getWeatherData();
    }
    
    initializeActivities() {
        return {
            // Hot weather activities (85°F+)
            hot: [
                {
                    title: "Visit Santa Monica Pier",
                    description: "Enjoy the ocean breeze, iconic rides, and street performers at this world-famous pier. Perfect for beating the heat!",
                    icon: "🎡",
                    type: "Outdoor",
                    duration: "2-4 hours",
                    link: "https://www.santamonicapier.org/"
                },
                {
                    title: "Venice Beach Boardwalk",
                    description: "Stroll along the famous boardwalk, watch street performers, and cool off with ocean views.",
                    icon: "🏖️",
                    type: "Outdoor",
                    duration: "1-3 hours",
                    link: "https://www.visitvenice.com/"
                },
                {
                    title: "Getty Center",
                    description: "Explore world-class art collections in air-conditioned galleries with stunning city views.",
                    icon: "🎨",
                    type: "Indoor",
                    duration: "2-4 hours",
                    link: "https://www.getty.edu/visit/center/"
                },
                {
                    title: "California Science Center",
                    description: "Interactive exhibits and IMAX movies in a cool, indoor environment perfect for hot days.",
                    icon: "🔬",
                    type: "Indoor",
                    duration: "3-5 hours",
                    link: "https://californiasciencecenter.org/"
                },
                {
                    title: "Third Street Promenade",
                    description: "Shop, dine, and people-watch at this outdoor pedestrian mall with plenty of shade.",
                    icon: "🛍️",
                    type: "Mixed",
                    duration: "2-4 hours",
                    link: "https://www.downtownsm.com/third-street-promenade"
                }
            ],
            // Warm weather activities (75-84°F)
            warm: [
                {
                    title: "Griffith Observatory",
                    description: "Explore the cosmos and enjoy panoramic views of LA from this iconic observatory.",
                    icon: "🔭",
                    type: "Mixed",
                    duration: "2-3 hours",
                    link: "https://griffithobservatory.org/"
                },
                {
                    title: "Hollywood Walk of Fame",
                    description: "Find your favorite stars on the sidewalk and visit the famous TCL Chinese Theatre.",
                    icon: "⭐",
                    type: "Outdoor",
                    duration: "1-2 hours",
                    link: "https://walkoffame.com/"
                },
                {
                    title: "Los Angeles County Museum of Art",
                    description: "Discover incredible art collections and the famous Urban Light installation.",
                    icon: "🏛️",
                    type: "Indoor",
                    duration: "2-4 hours",
                    link: "https://www.lacma.org/"
                },
                {
                    title: "Beverly Hills & Rodeo Drive",
                    description: "Window shop on the most famous shopping street and explore luxurious Beverly Hills.",
                    icon: "💎",
                    type: "Outdoor",
                    duration: "2-3 hours",
                    link: "https://www.beverlyhills.org/"
                },
                {
                    title: "Runyon Canyon Hike",
                    description: "Popular hiking trail with great views of the Hollywood Sign and downtown LA.",
                    icon: "🥾",
                    type: "Outdoor",
                    duration: "1-2 hours",
                    link: "https://www.laparks.org/griffithpark/runyon-canyon"
                }
            ],
            // Cool weather activities (60-74°F)
            cool: [
                {
                    title: "Explore Downtown LA",
                    description: "Visit Grand Central Market, Walt Disney Concert Hall, and the Arts District.",
                    icon: "🏙️",
                    type: "Mixed",
                    duration: "4-6 hours",
                    link: "https://www.discoverlosangeles.com/neighborhoods/downtown-la"
                },
                {
                    title: "Los Angeles Zoo",
                    description: "Perfect weather for walking around and seeing animals from around the world.",
                    icon: "🦁",
                    type: "Outdoor",
                    duration: "3-4 hours",
                    link: "https://www.lazoo.org/"
                },
                {
                    title: "Melrose Avenue Shopping",
                    description: "Browse unique boutiques, vintage stores, and trendy cafes on this famous street.",
                    icon: "👗",
                    type: "Outdoor",
                    duration: "2-4 hours",
                    link: "https://melroseavenue.com/"
                },
                {
                    title: "Exposition Park",
                    description: "Visit multiple museums including Natural History Museum and California African American Museum.",
                    icon: "🌳",
                    type: "Mixed",
                    duration: "3-5 hours",
                    link: "https://www.expositionpark.ca.gov/"
                },
                {
                    title: "Venice Canals",
                    description: "Take a peaceful walk through the historic Venice Canal District.",
                    icon: "🚤",
                    type: "Outdoor",
                    duration: "1-2 hours",
                    link: "https://www.discoverlosangeles.com/neighborhood/venice"
                }
            ],
            // Chilly weather activities (under 60°F)
            chilly: [
                {
                    title: "Universal Studios Hollywood",
                    description: "Indoor shows, warm theaters, and exciting rides to keep you comfortable.",
                    icon: "🎬",
                    type: "Mixed",
                    duration: "Full day",
                    link: "https://www.universalstudioshollywood.com/"
                },
                {
                    title: "Museum Row on Miracle Mile",
                    description: "Explore multiple world-class museums along Wilshire Boulevard.",
                    icon: "🏛️",
                    type: "Indoor",
                    duration: "4-6 hours",
                    link: "https://www.miraclemile360.com/"
                },
                {
                    title: "The Original Farmers Market",
                    description: "Browse local vendors and enjoy warm comfort food at this historic market.",
                    icon: "🥗",
                    type: "Indoor",
                    duration: "1-3 hours",
                    link: "https://www.farmersmarketla.com/"
                },
                {
                    title: "Warner Bros. Studio Tour",
                    description: "Go behind the scenes of your favorite movies and TV shows in comfortable indoor settings.",
                    icon: "🎭",
                    type: "Indoor",
                    duration: "2-3 hours",
                    link: "https://www.wbstudiotour.com/"
                },
                {
                    title: "The Broad Museum",
                    description: "Enjoy contemporary art in a beautiful, climate-controlled environment.",
                    icon: "🎨",
                    type: "Indoor",
                    duration: "2-3 hours",
                    link: "https://www.thebroad.org/"
                }
            ]
        };
    }
    
    restoreLastBackground() {
        const lastBackground = localStorage.getItem('weatherBackground');
        if (lastBackground) {
            document.body.style.background = lastBackground;
            console.log('Restored cached background:', lastBackground);
        }
    }
    
    cacheBackground(gradient) {
        localStorage.setItem('weatherBackground', gradient);
        console.log('Cached background:', gradient);
    }
    
    getWeatherData() {
        const CITY_LAT = 34.0522; // Los Angeles latitude
        const CITY_LON = -118.2437; // Los Angeles longitude
        
        // Fetch both current weather and 7-day forecast
        const currentWeatherPromise = fetch(`https://api.open-meteo.com/v1/forecast?latitude=${CITY_LAT}&longitude=${CITY_LON}&current_weather=true&temperature_unit=fahrenheit`)
            .then(response => response.json());
            
        const forecastPromise = fetch(`https://api.open-meteo.com/v1/forecast?latitude=${CITY_LAT}&longitude=${CITY_LON}&daily=temperature_2m_max,temperature_2m_min,weather_code,precipitation_sum,wind_speed_10m_max&temperature_unit=fahrenheit&wind_speed_unit=mph&precipitation_unit=inch&forecast_days=7&timezone=America/Los_Angeles`)
            .then(response => response.json());
        
        return Promise.all([currentWeatherPromise, forecastPromise])
            .then(([currentData, forecastData]) => {
                console.log('Current Weather API Response:', currentData);
                console.log('Forecast API Response:', forecastData);
                
                // Get current time and actual current weather data
                const now = new Date();
                const currentHour = now.getHours();
                
                // Use current_weather data (actual current conditions)
                const temp = currentData.current_weather.temperature;
                const isDaytime = currentData.current_weather.is_day === 1;
                
                // Debug logging
                console.log('Local hour:', currentHour);
                console.log('Temperature:', temp);
                console.log('Is daytime:', isDaytime);
                console.log('Current weather data:', currentData.current_weather);
                
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
                
                // Cache the new background for next page load
                this.cacheBackground(backgroundGradient);
                
                // Update DOM elements with weather data
                this.updateWeatherDisplay(temp, isDaytime, currentHour, currentData.current_weather);
                
                // Update 7-day forecast
                this.updateForecastDisplay(forecastData);
                
                // Update activity recommendations based on weather
                this.updateActivityRecommendations(temp, isDaytime, currentData.current_weather);
                
                return {
                    temperature: temp,
                    isDaytime: isDaytime,
                    gradient: backgroundGradient,
                    forecast: forecastData
                };
            })
            .catch(error => {
                console.error('Error fetching weather:', error);
                // Fallback to default dark theme
                const fallbackGradient = 'linear-gradient(135deg, #0f172a 0%, #1e293b 100%)';
                document.body.style.background = fallbackGradient;
                this.cacheBackground(fallbackGradient);
                
                // Show error message for activities
                this.showActivityError();
            });
        // Type: "fetch weather data from API"
        // Watch Cursor build the entire function
    }
    
    updateActivityRecommendations(temp, isDaytime, weatherData) {
        const container = document.getElementById('activity-recommendations');
        if (!container) return;
        
        // Create weather context message
        const weatherContext = document.createElement('div');
        weatherContext.className = 'weather-context';
        
        const tempDescription = this.getTemperatureDescription(temp);
        const timeOfDay = isDaytime ? 'day' : 'night';
        
        weatherContext.innerHTML = `
            <h3>🌡️ ${Math.round(temp)}°F - ${tempDescription} ${timeOfDay}time</h3>
            <p>Here are some perfect activities for today's weather in Los Angeles:</p>
        `;
        
        // Get recommended activities based on temperature
        let recommendedActivities;
        if (temp >= 85) {
            recommendedActivities = this.activities.hot;
        } else if (temp >= 75) {
            recommendedActivities = this.activities.warm;
        } else if (temp >= 60) {
            recommendedActivities = this.activities.cool;
        } else {
            recommendedActivities = this.activities.chilly;
        }
        
        // Shuffle and take 3 random activities
        const shuffled = [...recommendedActivities].sort(() => 0.5 - Math.random());
        const selectedActivities = shuffled.slice(0, 3);
        
        // Create activity grid
        const activityGrid = document.createElement('div');
        activityGrid.className = 'activity-grid';
        
        selectedActivities.forEach(activity => {
            const activityCard = document.createElement('div');
            activityCard.className = 'activity-card';
            
            activityCard.innerHTML = `
                <div class="activity-icon">${activity.icon}</div>
                <h3 class="activity-title">${activity.title}</h3>
                <p class="activity-description">${activity.description}</p>
                <div class="activity-details">
                    <span class="activity-type">${activity.type}</span>
                    <span class="activity-duration">⏱️ ${activity.duration}</span>
                </div>
                <div style="margin-top: 1rem; text-align: center;">
                    <a href="${activity.link}" target="_blank" class="activity-action-btn">Learn More</a>
                </div>
            `;
            
            activityGrid.appendChild(activityCard);
        });
        
        // Clear container and add new content
        container.innerHTML = '';
        container.appendChild(weatherContext);
        container.appendChild(activityGrid);
    }
    
    showActivityError() {
        const container = document.getElementById('activity-recommendations');
        if (!container) return;
        
        container.innerHTML = `
            <div class="loading-activities">
                ⚠️ Unable to load activity recommendations. Please try refreshing the page.
            </div>
        `;
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
            // Use a function to get the most current time when the element is updated
            const updateTime = () => {
                const now = new Date();
                const timeString = now.toLocaleString('en-US', {
                    timeZone: 'America/Los_Angeles',
                    hour: 'numeric',
                    minute: '2-digit',
                    hour12: true,
                    weekday: 'long'
                });
                timeElement.textContent = timeString;
            };
            
            // Update immediately
            updateTime();
            
            // Update every 30 seconds to keep time current
            setInterval(updateTime, 30000);
        }
    }
    
    getTemperatureDescription(temp) {
        if (temp >= 85) return 'Blazing Hot';
        if (temp >= 75) return 'Warm & Pleasant';
        if (temp >= 60) return 'Cool & Comfortable';
        return 'Chilly';
    }
    
    updateForecastDisplay(forecastData) {
        const forecastContainer = document.getElementById('forecast-container');
        if (!forecastContainer || !forecastData.daily) {
            console.error('Forecast container not found or invalid forecast data');
            return;
        }
        
        // Clear existing forecast
        forecastContainer.innerHTML = '';
        
        // Create forecast cards for each day
        for (let i = 0; i < Math.min(7, forecastData.daily.time.length); i++) {
            // Parse the date string from the API (YYYY-MM-DD format)
            const dateString = forecastData.daily.time[i];
            const date = new Date(dateString + 'T12:00:00'); // Add noon time to avoid timezone issues
            
            // Get today's date in Los Angeles timezone
            const today = new Date();
            const todayLA = new Date(today.toLocaleString('en-US', { timeZone: 'America/Los_Angeles' }));
            const todayDateString = todayLA.getFullYear() + '-' + 
                                    String(todayLA.getMonth() + 1).padStart(2, '0') + '-' + 
                                    String(todayLA.getDate()).padStart(2, '0');
            
            // Check if this forecast date is today by comparing date strings
            const isToday = dateString === todayDateString;
            
            const dayName = isToday ? 'Today' : date.toLocaleDateString('en-US', { weekday: 'short' });
            const monthDay = date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
            
            const maxTemp = Math.round(forecastData.daily.temperature_2m_max[i]);
            const minTemp = Math.round(forecastData.daily.temperature_2m_min[i]);
            const weatherCode = forecastData.daily.weather_code[i];
            const precipitation = forecastData.daily.precipitation_sum[i] || 0;
            const windSpeed = Math.round(forecastData.daily.wind_speed_10m_max[i] || 0);
            
            const weatherInfo = this.getWeatherCodeInfo(weatherCode);
            
            const forecastCard = document.createElement('div');
            forecastCard.className = 'forecast-day';
            
            forecastCard.innerHTML = `
                <div class="forecast-date">${dayName}<br><span style="font-size: 0.8em; opacity: 0.9; color: var(--text-muted);">${monthDay}</span></div>
                <div class="forecast-icon">${weatherInfo.icon}</div>
                <div class="forecast-temps">
                    <span class="forecast-high">High ${maxTemp}°</span>
                    <span class="forecast-low">Low ${minTemp}°</span>
                </div>
                <div class="forecast-desc">${weatherInfo.description}</div>
                <div class="forecast-details">
                    <span>🌧 ${precipitation.toFixed(1)}"</span>
                    <span>💨 ${windSpeed}mph</span>
                </div>
            `;
            
            forecastContainer.appendChild(forecastCard);
        }
    }
    
    getWeatherCodeInfo(code) {
        // WMO Weather interpretation codes
        const weatherCodes = {
            0: { icon: '☀️', description: 'Clear sky' },
            1: { icon: '🌤️', description: 'Mainly clear' },
            2: { icon: '⛅', description: 'Partly cloudy' },
            3: { icon: '☁️', description: 'Overcast' },
            45: { icon: '🌫️', description: 'Fog' },
            48: { icon: '🌫️', description: 'Depositing rime fog' },
            51: { icon: '🌦️', description: 'Light drizzle' },
            53: { icon: '🌦️', description: 'Moderate drizzle' },
            55: { icon: '🌧️', description: 'Dense drizzle' },
            56: { icon: '🌧️', description: 'Light freezing drizzle' },
            57: { icon: '🌧️', description: 'Dense freezing drizzle' },
            61: { icon: '🌧️', description: 'Slight rain' },
            63: { icon: '🌧️', description: 'Moderate rain' },
            65: { icon: '🌧️', description: 'Heavy rain' },
            66: { icon: '🌧️', description: 'Light freezing rain' },
            67: { icon: '🌧️', description: 'Heavy freezing rain' },
            71: { icon: '🌨️', description: 'Slight snow' },
            73: { icon: '🌨️', description: 'Moderate snow' },
            75: { icon: '❄️', description: 'Heavy snow' },
            77: { icon: '🌨️', description: 'Snow grains' },
            80: { icon: '🌦️', description: 'Slight rain showers' },
            81: { icon: '🌧️', description: 'Moderate rain showers' },
            82: { icon: '🌧️', description: 'Violent rain showers' },
            85: { icon: '🌨️', description: 'Slight snow showers' },
            86: { icon: '❄️', description: 'Heavy snow showers' },
            95: { icon: '⛈️', description: 'Thunderstorm' },
            96: { icon: '⛈️', description: 'Thunderstorm with hail' },
            99: { icon: '⛈️', description: 'Heavy thunderstorm with hail' }
        };
        
        return weatherCodes[code] || { icon: '🌤️', description: 'Unknown' };
    }
}

const dashboard = new PersonalDashboard();
// Pro tip: Highlight this entire file and ask Cursor to:
// "Add JSDoc comments to all functions" 