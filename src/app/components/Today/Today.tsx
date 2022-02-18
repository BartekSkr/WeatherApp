import { Fragment } from 'react';
import { connect } from 'react-redux';
import {
  currentDay,
  currentDayName,
  currentHour,
  currentMinutes,
  currentMonth,
  onlyCityName,
  tempCtoF,
  windDirection,
  windSpeedToKm,
  windSpeedToMph,
} from '../../helpers/dataFormatServices';
import {
  LocationDataInterface,
  OneCallWeatherInterface,
} from '../../interface/interface';
import { RootState } from '../../store/store';
import Alert from '../Alerts/Alert';
import './Today.scss';

interface TodayProps {
  locationError: boolean;
  displayData: boolean;
  cityNameError: boolean;
  locationData: LocationDataInterface[];
  weatherData: OneCallWeatherInterface[];
  isCelsius: boolean;
}

const Today: React.FC<TodayProps> = ({
  locationError,
  displayData,
  cityNameError,
  locationData,
  weatherData,
  isCelsius,
}) => {
  return (
    <Fragment>
      {locationError && (
        <div className='error-info'>
          <p>Please enable geolocation or enter a city name.</p>
        </div>
      )}
      {cityNameError && (
        <div className='error-info'>
          <p>Sorry, the specified city was not found.</p>
        </div>
      )}
      {displayData && (
        <div className='today-weather'>
          <div className='location'>
            <h2>
              {onlyCityName(locationData[0].name)},{' '}
              {locationData[0].sys.country}
            </h2>
            <p>
              {currentDayName(weatherData[0].current.dt)},{' '}
              {currentMonth(weatherData[0].current.dt)}{' '}
              {currentDay(
                weatherData[0].current.dt,
                weatherData[0].timezone_offset
              )}
              ,{' '}
              {currentHour(
                weatherData[0].current.dt,
                weatherData[0].timezone_offset
              )}
              :{currentMinutes(weatherData[0].current.dt)}
            </p>
          </div>
          <div className='main-data'>
            <div className='today-container'>
              <div className='today-temp'>
                <img
                  src={`https://openweathermap.org/img/wn/${weatherData[0].current.weather[0].icon}@2x.png`}
                  className='today-icon'
                  alt='weather icon'
                />
                <span className='today-temp-desc'>
                  <span id='todayTemp'>
                    {isCelsius
                      ? Math.round(weatherData[0].current.temp)
                      : Math.round(tempCtoF(weatherData[0].current.temp))}
                    °
                  </span>
                  <span>{weatherData[0].current.weather[0].description}</span>
                </span>
              </div>
              {/* alert info (if there are any alerts) */}
              {weatherData[0].alerts && <Alert />}
            </div>
            <div className='today-data'>
              <div>
                <h4>
                  {isCelsius
                    ? Math.round(weatherData[0].current.feels_like)
                    : Math.round(tempCtoF(weatherData[0].current.feels_like))}
                  °
                </h4>
                <p>Feels like</p>
                <h4>{weatherData[0].current.humidity}%</h4>
                <span>Humidity</span>
              </div>
              <div>
                <h4>
                  {isCelsius
                    ? `${Math.round(
                        windSpeedToKm(weatherData[0].current.wind_speed)
                      )} km/h`
                    : `${Math.round(
                        windSpeedToMph(weatherData[0].current.wind_speed)
                      )} mph`}
                </h4>
                <p>Wind</p>
                <h4>{windDirection(weatherData[0].current.wind_deg)}</h4>
                <span>Direction</span>
              </div>
              <div>
                <h4>
                  {currentHour(
                    weatherData[0].current.sunrise,
                    weatherData[0].timezone_offset
                  )}
                  :{currentMinutes(weatherData[0].current.sunrise)}
                </h4>
                <p>Sunrise</p>
                <h4>
                  {currentHour(
                    weatherData[0].current.sunset,
                    weatherData[0].timezone_offset
                  )}
                  :{currentMinutes(weatherData[0].current.sunset)}
                </h4>
                <p>Sunset</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </Fragment>
  );
};

const mapStateToProps = (state: RootState) => ({
  locationData: state.locationData,
  weatherData: state.weatherData,
  locationError: state.locationError,
  displayData: state.displayData,
  cityNameError: state.cityNameError,
  isCelsius: state.isCelsius,
});

export default connect(mapStateToProps, {})(Today);
