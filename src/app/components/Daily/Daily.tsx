import React, { Dispatch, Fragment, useState } from 'react';
import { connect } from 'react-redux';
import { setChosenDay, setShowDailyDetails } from '../../actions/actions';
import {
  currentDay,
  currentDayName,
  currentHour,
  currentMinutes,
  currentMonthNumber,
  tempCtoF,
  windDirection,
  windSpeedToKm,
  windSpeedToMph,
} from '../../helpers/dataFormatServices';
import {
  OneCallWeatherInterface,
  DailyDetailsInterface,
} from '../../interface/interface';
import { AppDispatch, RootState } from '../../store/store';
import './Daily.scss';

interface DailyProps {
  weatherData: Array<OneCallWeatherInterface | any>;
  displayData: boolean;
  showDailyDetails: boolean;
  setShowDailyDetails: (isShowDailyDetails: boolean) => void;
  chosenDay: string;
  setChosenDay: (chosenDay: string) => void;
  isCelsius: boolean;
}

const Daily: React.FC<DailyProps> = ({
  weatherData,
  displayData,
  showDailyDetails,
  setShowDailyDetails,
  chosenDay,
  setChosenDay,
  isCelsius,
}) => {
  const [dailyDetailsState, setDailyDetailsState] = useState<
    DailyDetailsInterface['daily']
  >({
    dt: 0,
    sunrise: 0,
    sunset: 0,
    moonrise: 0,
    moonset: 0,
    moon_phase: 0,
    temp: { day: 0, min: 0, max: 0, night: 0, eve: 0, morn: 0 },
    feels_like: { day: 0, night: 0, eve: 0, morn: 0 },
    pressure: 0,
    humidity: 0,
    dew_point: 0,
    wind_speed: 0,
    wind_deg: 0,
    wind_gust: 0,
    weather: [{ id: 0, main: '', description: '', icon: '' }],
    clouds: 0,
    pop: 0,
    snow: 0,
    uvi: 0,
  });

  const handleOnClick = (dailyDetails: DailyDetailsInterface['daily']) => {
    return function () {
      setShowDailyDetails(true);
      setChosenDay(currentDayName(dailyDetails.dt));
      setDailyDetailsState(dailyDetails);
    };
  };
  return (
    <Fragment>
      {displayData && (
        <Fragment>
          <div className='daily-weather'>
            <h2>Daily</h2>
            <div className='scroll-div'>
              {weatherData[0].daily
                .slice(1)
                .map((daily: DailyDetailsInterface['daily']) => (
                  <div
                    className={
                      chosenDay === currentDayName(daily.dt)
                        ? 'scroll-box-clicked'
                        : 'scroll-box'
                    }
                    key={daily.dt}
                    onClick={handleOnClick(daily)}
                  >
                    <h5>
                      {currentDay(daily.dt, weatherData[0].timezone_offset)}.
                      {currentMonthNumber(daily.dt)}
                    </h5>
                    <h6>{currentDayName(daily.dt)}</h6>
                    <img
                      src={`https://openweathermap.org/img/wn/${daily.weather[0].icon}.png`}
                      alt='weather icon'
                    />
                    <h3>
                      {isCelsius
                        ? Math.round(daily.temp.day)
                        : Math.round(tempCtoF(daily.temp.day))}
                      °
                    </h3>
                  </div>
                ))}
            </div>
          </div>
          <div
            className={
              showDailyDetails ? 'daily-details-visible' : 'daily-details'
            }
          >
            <div>
              <h4>
                {isCelsius
                  ? Math.round(dailyDetailsState.temp.max)
                  : Math.round(tempCtoF(dailyDetailsState.temp.max))}
                °
              </h4>
              <p>Max temp</p>
              <h4>
                {isCelsius
                  ? Math.round(dailyDetailsState.temp.min)
                  : Math.round(tempCtoF(dailyDetailsState.temp.min))}
                °
              </h4>
              <span>Min temp</span>
            </div>
            <div>
              <h4>
                {isCelsius
                  ? `${Math.round(
                      windSpeedToKm(dailyDetailsState.wind_speed)
                    )} km/h`
                  : `${Math.round(
                      windSpeedToMph(dailyDetailsState.wind_speed)
                    )} mph`}
              </h4>
              <p>Wind</p>
              <h4>{windDirection(dailyDetailsState.wind_deg)}</h4>
              <span>Direction</span>
            </div>
            <div>
              <h4>
                {currentHour(
                  dailyDetailsState.sunrise,
                  weatherData[0].timezone_offset
                )}
                :{currentMinutes(dailyDetailsState.sunrise)}
              </h4>
              <p>Sunrise</p>
              <h4>
                {currentHour(
                  dailyDetailsState.sunset,
                  weatherData[0].timezone_offset
                )}
                :{currentMinutes(dailyDetailsState.sunset)}
              </h4>
              <span>Sunset</span>
            </div>
          </div>
        </Fragment>
      )}
    </Fragment>
  );
};

const mapStateToProps = (state: RootState) => ({
  weatherData: state.weatherData,
  displayData: state.displayData,
  showDailyDetails: state.showDailyDetails,
  chosenDay: state.chosenDay,
  isCelsius: state.isCelsius,
});

const mapDispatchToProps = (dispatch: Dispatch<AppDispatch>) => ({
  setShowDailyDetails: (isShowDailyDetails: boolean) =>
    dispatch(setShowDailyDetails(isShowDailyDetails)),
  setChosenDay: (chosenDay: string) => dispatch(setChosenDay(chosenDay)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Daily);
