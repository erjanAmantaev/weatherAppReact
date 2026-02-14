import React from 'react';
import './Forecast.css';

const Forecast = ({ data }) => {
  if (!data || !data.forecast) return null;

  const getDayName = (dateStr) => {
    const date = new Date(dateStr);
    const days = ['Вс', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб'];
    return days[date.getDay()];
  };

  return (
    <div className="forecast-container">
      <h2 className="forecast-title">Прогноз на 7 дней</h2>
      <div className="forecast-grid">
        {data.forecast.forecastday.map((day, index) => (
          <div key={index} className="forecast-card">
            <p className="forecast-day">
              {index === 0 ? 'Сегодня' : getDayName(day.date)}
            </p>
            <img 
              src={day.day.condition.icon} 
              alt={day.day.condition.text}
              className="forecast-icon"
            />
            <p className="forecast-condition">{day.day.condition.text}</p>
            <div className="forecast-temps">
              <span className="temp-max">{Math.round(day.day.maxtemp_c)}°</span>
              <span className="temp-divider">/</span>
              <span className="temp-min">{Math.round(day.day.mintemp_c)}°</span>
            </div>
            <div className="forecast-extra">
              <div className="extra-item">
                <svg className="extra-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z"></path>
                </svg>
                <span>{day.day.avghumidity}%</span>
              </div>
              <div className="extra-item">
                <svg className="extra-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M19 16.9A5 5 0 0 0 18 7h-1.26a8 8 0 1 0-11.62 9"></path>
                  <polyline points="13 11 9 17 15 17 11 23"></polyline>
                </svg>
                <span>{day.day.daily_chance_of_rain}%</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Forecast;
