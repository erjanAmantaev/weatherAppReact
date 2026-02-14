import React, { useState, useEffect } from 'react';
import SearchBar from './components/SearchBar';
import CurrentWeather from './components/CurrentWeather';
import Forecast from './components/Forecast';
import { weatherApi } from './services/weatherApi';
import './App.css';

function App() {
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Load default city on mount
  useEffect(() => {
    handleSearch('London');
  }, []);

  const handleSearch = async (location) => {
    setLoading(true);
    setError(null);
    
    try {
      const data = await weatherApi.getForecast(location, 7);
      setWeatherData(data);
    } catch (err) {
      setError('Не удалось найти местоположение. Попробуйте другой запрос.');
      setWeatherData(null);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="app">
      <div className="background-gradient"></div>
      <div className="container">
        <header className="app-header">
          <h1 className="app-title">
            <svg className="title-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M12 2v10"></path>
              <path d="m4.93 10.93 1.41 1.41"></path>
              <path d="M2 18h2"></path>
              <path d="M20 18h2"></path>
              <path d="m19.07 10.93-1.41 1.41"></path>
              <path d="M22 22H2"></path>
              <path d="m8 6 4-4 4 4"></path>
              <path d="M16 18a4 4 0 0 0-8 0"></path>
            </svg>
            Прогноз погоды
          </h1>
          <p className="app-subtitle">Ваш ежедневный помощник погоды</p>
        </header>

        <SearchBar onSearch={handleSearch} />

        {loading && (
          <div className="loading-container">
            <div className="loading-spinner"></div>
            <p className="loading-text">Загрузка данных о погоде...</p>
          </div>
        )}

        {error && (
          <div className="error-message">
            <svg className="error-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="12" cy="12" r="10"></circle>
              <line x1="12" y1="8" x2="12" y2="12"></line>
              <line x1="12" y1="16" x2="12.01" y2="16"></line>
            </svg>
            <p>{error}</p>
          </div>
        )}

        {!loading && !error && weatherData && (
          <>
            <CurrentWeather data={weatherData} />
            <Forecast data={weatherData} />
          </>
        )}

        <footer className="app-footer">
          <p>Powered by WeatherAPI.com | © 2026</p>
        </footer>
      </div>
    </div>
  );
}

export default App;
