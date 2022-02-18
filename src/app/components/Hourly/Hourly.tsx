import { Fragment } from 'react';
import { connect } from 'react-redux';
import { RootState } from '../../store/store';
import {
  currentDay,
  currentHour,
  currentMonthNumber,
  tempCtoF,
  windDirection,
  windSpeedToKm,
  windSpeedToMph,
} from '../../helpers/dataFormatServices';
import './Hourly.scss';
import {
  OneCallWeatherInterface,
  HourlyInterface,
} from '../../interface/interface';

interface HourlyProps {
  weatherData?: OneCallWeatherInterface[];
  displayData?: boolean;
  isCelsius?: boolean;
}

const Hourly: React.FC<HourlyProps> = ({
  weatherData,
  displayData,
  isCelsius,
}) => {
  return (
    <Fragment>
      {displayData && (
        <div className='hourly-weather'>
          <h2>Hourly</h2>
          <div className='scroll-div'>
            {weatherData![0].hourly
              .slice(1, 26)
              .map((hourly: HourlyInterface['hourly']) => (
                <div className='scroll-box' key={hourly.dt}>
                  <h5>
                    {currentDay(hourly.dt, weatherData![0].timezone_offset)}.
                    {currentMonthNumber(hourly.dt)}
                  </h5>
                  <h4>
                    {currentHour(hourly.dt, weatherData![0].timezone_offset)}:00
                  </h4>
                  <img
                    src={`https://openweathermap.org/img/wn/${hourly.weather[0].icon}.png`}
                    alt='weather icon'
                  />
                  <h5>
                    {isCelsius
                      ? `${Math.round(windSpeedToKm(hourly.wind_speed))} km/h`
                      : `${Math.round(windSpeedToMph(hourly.wind_speed))} mph`}
                  </h5>
                  <h5>{windDirection(hourly.wind_deg)}</h5>
                  <h3>
                    {isCelsius
                      ? Math.round(hourly.temp)
                      : Math.round(tempCtoF(hourly.temp))}
                    °
                  </h3>
                </div>
              ))}
          </div>
        </div>
      )}
    </Fragment>
  );
};

const mapStateToProps = (state: RootState) => ({
  weatherData: state.weatherData,
  displayData: state.displayData,
  isCelsius: state.isCelsius,
});

export default connect(mapStateToProps, null)(Hourly);
