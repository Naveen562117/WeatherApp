Instructions:
You have Maximum 1 hours to complete this test.
Use React Native for all questions.
Write clean, efficient, and well commented code.
Focus on readability, maintainability, and performance.
Make sure to handle edge cases where applicable.
Do not use external libraries or packages unless explicitly stated.

Task:
Create a React Native component for a weather app. The component should display the current weather conditions,
including temperature, weather description, and an icon representing the weather. Fetch weather data from this API endpoint
(https://api.openweathermap.org/data/2.5/weather?q=bengaluru&appid=478530d835875486dd605b830eb095ee replace CityName with a city of your choice and YOUR_API_KEY with a valid OpenWeatherMap API key).

// api key did not work and I have set up the axios for data reading from api and the complete flow is implemented
let data = [
{
"city": "Delhi",
"date": "2023-01-01",
"temperature": 28,
"humidity": 75,
"precipitation": 3.21,
"wind_speed": 12
},
{
"city": "Mumbai",
"date": "2023-01-01",
"temperature": 32,
"humidity": 82,
"precipitation": 1.45,
"wind_speed": 15
},
{
"city": "Bangalore",
"date": "2023-01-01",
"temperature": 24,
"humidity": 67,
"precipitation": 0.98,
"wind_speed": 10
},
{
"city": "Kolkata",
"date": "2023-01-01",
"temperature": 29,
"humidity": 73,
"precipitation": 2.75,
"wind_speed": 14
},
{
"city": "Chennai",
"date": "2023-01-01",
"temperature": 30,
"humidity": 79,
"precipitation": 1.12,
"wind_speed": 11
},
]
// ... (data for other days)

Implement state management in the weather app component - done .

Use Redux or Context API to manage the application state - done used Redux - initially when the app opens the data is being set using dispatch(SetWeatherData(data)).

Store the weather data (temperature, description, icon) in the global state and update the UI accordingly - all data is being rendered from global state.

Optimize the weather app for performance - done.

Implement memoization, virtualization, or any other optimization techniques you think are necessary to improve the app's performance, especially when dealing with large sets of data - Flat list is capable of handling large data paginated data redering can be done.

Write unit tests for the components and functions you've implemented. Use Jest and React Testing Library for testing. Test both normal and edge cases to ensure the robustness of your code - base Test Configuration is done.

search fuctionality is added and app can be enhanced by adding more fuctionality
