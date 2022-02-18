import { Dispatch } from 'react';
import { connect } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { setShowAlertPopUp } from '../../actions/actions';
import {
  currentDay,
  currentHour,
  currentMinutes,
  currentMonth,
  onlyCityName,
} from '../../helpers/dataFormatServices';
import {
  LocationDataInterface,
  OneCallWeatherInterface,
  AlertInterface,
} from '../../interface/interface';
import { AppDispatch, RootState } from '../../store/store';
import './Alert.scss';

interface AlertPopUpProps {
  locationData: LocationDataInterface[];
  weatherData: OneCallWeatherInterface[];
  showAlertPopUp: boolean;
  setAlertPopUp: (isAlertPopUp: boolean) => void;
}

const AlertPopUp: React.FC<AlertPopUpProps> = ({
  locationData,
  weatherData,
  showAlertPopUp,
  setAlertPopUp,
}) => {
  return (
    <div className={showAlertPopUp ? 'alert-popup-active' : 'alert-popup'}>
      <div className='alert-popup-inner'>
        <h2>
          Weather alerts: {onlyCityName(locationData[0].name)},{' '}
          {locationData[0].sys.country}
        </h2>
        <div className='alert-popup-inner-info'>
          {[weatherData[0].alerts!].map((alert: AlertInterface['alerts']) => (
            <div className='every-alert' key={uuidv4()}>
              <h4>{alert[0].event}</h4>
              <h5>
                {currentMonth(alert[0].start!)}{' '}
                {currentDay(alert[0].start, weatherData[0].timezone_offset)},{' '}
                {currentHour(alert[0].start, weatherData[0].timezone_offset)}:
                {currentMinutes(alert[0].start)} - {currentMonth(alert[0].end)}{' '}
                {currentDay(alert[0].end, weatherData[0].timezone_offset)},{' '}
                {currentHour(alert[0].end, weatherData[0].timezone_offset)}:
                {currentMinutes(alert[0].end)}
              </h5>
              <p id='alert-description'>{alert[0].description}</p>
              <h6>{alert[0].sender_name}</h6>
            </div>
          ))}
        </div>
        <button onClick={() => setAlertPopUp(false)}>✖️</button>
      </div>
    </div>
  );
};

const mapStateToProps = (state: RootState) => ({
  locationData: state.locationData,
  weatherData: state.weatherData,
  showAlertPopUp: state.showAlertPopUp,
});

const mapDispatchToProps = (dispatch: Dispatch<AppDispatch>) => ({
  setAlertPopUp: (isAlertPopUp: boolean) =>
    dispatch(setShowAlertPopUp(isAlertPopUp)),
});

export default connect(mapStateToProps, mapDispatchToProps)(AlertPopUp);
