import { faMapMarkerAlt, faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { Dispatch, useEffect } from 'react';
import { connect } from 'react-redux';
import {
  fetchData,
  setLocationError,
  setCityNameError,
  setDisplayData,
  setShowDailyDetails,
  setChosenDay,
  setIsLoading,
  setTempUnit,
} from '../../actions/actions';
import {
  handleCitySearch,
  handleUserLocation,
} from '../../helpers/apiServices';
import {
  LocationDataInterface,
  OneCallWeatherInterface,
} from '../../interface/interface';
import { AppDispatch, RootState } from '../../store/store';
import { Spinner } from '../Spinner/Spinner';
import './Search.scss';

interface SearchProps {
  fetchData: (
    data1: LocationDataInterface[],
    data2: OneCallWeatherInterface[]
  ) => void;
  setLocationError: (isLocationError: boolean) => void;
  setCityNameError: (isCityNameError: boolean) => void;
  setDisplayData: (isDisplayData: boolean) => void;
  setShowDailyDetails: (isShowDailyDetails: boolean) => void;
  setChosenDay: (chosenDay: string) => void;
  setLoading: (loading: boolean) => void;
  isLoading: boolean;
  setTempUnit: () => void;
  cityNameError: boolean;
  locationError: boolean;
}

const Search: React.FC<SearchProps> = ({
  fetchData,
  setLocationError,
  setCityNameError,
  setDisplayData,
  setShowDailyDetails,
  setChosenDay,
  setLoading,
  isLoading,
  setTempUnit,
  cityNameError,
  locationError,
}) => {
  useEffect(() => {
    handleUserLocation(
      setLoading,
      fetchData,
      setLocationError,
      setCityNameError,
      setDisplayData,
      setShowDailyDetails,
      setChosenDay
    );
  }, []);

  return (
    <div className='search-container'>
      <Spinner loading={isLoading} />
      <div className='search-icon'>
        <FontAwesomeIcon icon={faSearch} />
      </div>
      <input
        type='text'
        name='text'
        className='search-input'
        placeholder='Search for a city...'
        onClick={(e: React.MouseEvent<HTMLInputElement, MouseEvent>) =>
          (e.currentTarget.value = '')
        }
        onKeyUp={(e) => {
          handleCitySearch(
            e,
            setLoading,
            fetchData,
            setLocationError,
            setCityNameError,
            setDisplayData,
            setShowDailyDetails,
            setChosenDay
          );
        }}
      />
      <button
        data-tip
        data-for='locationBtn'
        className='location-button'
        onClick={() => {
          setLoading(true);
          handleUserLocation(
            setLoading,
            fetchData,
            setLocationError,
            setCityNameError,
            setDisplayData,
            setShowDailyDetails,
            setChosenDay
          );
        }}
      >
        <FontAwesomeIcon icon={faMapMarkerAlt} id='locationIcon' />
      </button>
      <label className='switch'>
        <input type='checkbox' disabled={cityNameError || locationError} />
        <div
          className={
            cityNameError || locationError ? 'slider-inactive' : 'slider'
          }
          onClick={setTempUnit}
        ></div>
      </label>
    </div>
  );
};

const mapStateToProps = (state: RootState) => ({
  isLoading: state.isLoading,
  cityNameError: state.cityNameError,
  locationError: state.locationError,
});

const mapDispatchToProps = (dispatch: Dispatch<AppDispatch>) => ({
  fetchData: (
    data1: LocationDataInterface[],
    data2: OneCallWeatherInterface[]
  ) => dispatch(fetchData(data1, data2)),
  setLocationError: (isLocationError: boolean) =>
    dispatch(setLocationError(isLocationError)),
  setCityNameError: (isCityNameError: boolean) =>
    dispatch(setCityNameError(isCityNameError)),
  setDisplayData: (isDisplayData: boolean) =>
    dispatch(setDisplayData(isDisplayData)),
  setShowDailyDetails: (isShowDailyDetails: boolean) =>
    dispatch(setShowDailyDetails(isShowDailyDetails)),
  setChosenDay: (chosenDay: string) => dispatch(setChosenDay(chosenDay)),
  setLoading: (isLoading: boolean) => dispatch(setIsLoading(isLoading)),
  setTempUnit: () => dispatch(setTempUnit()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Search);
