import React from 'react';
import './CurrentWeather.css';

const CurrentWeather = ({ data }) => {
  if (!data) return null;

  const { location, current } = data;

  return (
    <div className="current-weather">
      <div className="weather-header">
        <div className="location-info">
          <h1 className="city-name">{location.name}</h1>
          <p className="region">{location.region}, {location.country}</p>
          <p className="local-time">{new Date(location.localtime).toLocaleString()}</p>
        </div>
      </div>

      <div className="weather-main">
        <div className="temperature-section">
          <img 
            src={current.condition.icon} 
            alt={current.condition.text}
            className="weather-icon-large"
          />
          <div className="temperature-display">
            <span className="temperature">{Math.round(current.temp_c)}°</span>
            <span className="temp-unit">C</span>
          </div>
        </div>
        <p className="condition-text">{current.condition.text}</p>
        <p className="feels-like">Ощущается как {Math.round(current.feelslike_c)}°C</p>
      </div>

      <div className="weather-details">
        <div className="detail-card">
          <svg className="detail-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z"></path>
          </svg>
          <div className="detail-info">
            <p className="detail-label">Влажность</p>
            <p className="detail-value">{current.humidity}%</p>
          </div>
        </div>

        <div className="detail-card">
          <svg className="detail-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M9.59 4.59A2 2 0 1 1 11 8H2m10.59 11.41A2 2 0 1 0 14 16H2m15.73-8.27A2.5 2.5 0 1 1 19.5 12H2"></path>
          </svg>
          <div className="detail-info">
            <p className="detail-label">Скорость ветра</p>
            <p className="detail-value">{current.wind_kph} км/ч</p>
          </div>
        </div>

        <div className="detail-card">
          <svg className="detail-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <circle cx="12" cy="12" r="10"></circle>
            <path d="M12 6v6l4 2"></path>
          </svg>
          <div className="detail-info">
            <p className="detail-label">Давление</p>
            <p className="detail-value">{current.pressure_mb} мб</p>
          </div>
        </div>

        <div className="detail-card">
          <svg className="detail-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M12 2v10"></path>
            <path d="m4.93 10.93 1.41 1.41"></path>
            <path d="M2 18h2"></path>
            <path d="M20 18h2"></path>
            <path d="m19.07 10.93-1.41 1.41"></path>
            <path d="M22 22H2"></path>
            <path d="m16 6-4 4-4-4"></path>
          </svg>
          <div className="detail-info">
            <p className="detail-label">УФ-индекс</p>
            <p className="detail-value">{current.uv}</p>
          </div>
        </div>

        <div className="detail-card">
          <svg className="detail-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"></path>
            <circle cx="12" cy="12" r="3"></circle>
          </svg>
          <div className="detail-info">
            <p className="detail-label">Видимость</p>
            <p className="detail-value">{current.vis_km} км</p>
          </div>
        </div>

        <div className="detail-card">
          <svg className="detail-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M12 2v10m0 0L8 8m4 4 4-4"></path>
            <path d="M3 9a9 9 0 0 0 9 9 9 9 0 0 0 9-9"></path>
          </svg>
          <div className="detail-info">
            <p className="detail-label">Осадки</p>
            <p className="detail-value">{current.precip_mm} мм</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CurrentWeather;
