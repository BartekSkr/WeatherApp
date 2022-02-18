import { faInfoCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Dispatch, Fragment } from 'react';
import { connect } from 'react-redux';
import { setShowAlertPopUp } from '../../actions/actions';
import { alertsNumber } from '../../helpers/dataFormatServices';
import { OneCallWeatherInterface } from '../../interface/interface';
import { AppDispatch, RootState } from '../../store/store';
import './Alert.scss';
import AlertPopUp from './AlertPopUp';

interface AlertProps {
  weatherData: OneCallWeatherInterface[];
  setAlertPopUp: (isAlertPopUp: boolean) => void;
}

const Alert: React.FC<AlertProps> = ({ weatherData, setAlertPopUp }) => {
  return (
    <Fragment>
      <div className='alert-info' onClick={() => setAlertPopUp(true)}>
        <FontAwesomeIcon icon={faInfoCircle} className='alert-info-icon' />
        <span>
          {weatherData[0].alerts[0].event}
          {alertsNumber([weatherData[0].alerts].length!)}
        </span>
      </div>
      <AlertPopUp />
    </Fragment>
  );
};

const mapStateToProps = (state: RootState) => ({
  weatherData: state.weatherData,
});

const mapDispatchToProps = (dispatch: Dispatch<AppDispatch>) => ({
  setAlertPopUp: (isAlertPopUp: boolean) =>
    dispatch(setShowAlertPopUp(isAlertPopUp)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Alert);
