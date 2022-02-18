import {
  LocationDataInterface,
  OneCallWeatherInterface,
} from '../interface/interface';
import { ActionTypes } from './types';

interface FetchDataInterface {
  type: typeof ActionTypes.FETCH_DATA;
  payload: LocationDataInterface[];
  payload2: OneCallWeatherInterface[];
}

interface LocationErrorInterface {
  type: typeof ActionTypes.LOCATION_ERROR;
  payload: boolean;
}

interface CityNameErrorInterface {
  type: typeof ActionTypes.CITY_NAME_ERROR;
  payload: boolean;
}

interface DisplayDataInterface {
  type: typeof ActionTypes.DISPLAY_DATA;
  payload: boolean;
}

interface ShowAlertPopUpInterface {
  type: typeof ActionTypes.SHOW_ALERT_POPUP;
  payload: boolean;
}

interface ShowDailyDetailsInterface {
  type: typeof ActionTypes.SHOW_DAILY_DETAILS;
  payload: boolean;
}

interface ChosenDayFunctionInterface {
  type: typeof ActionTypes.CHOSEN_DAY;
  payload: string;
}

interface LoadingInterface {
  type: typeof ActionTypes.LOADING;
  payload: boolean;
}

interface TempConversionInterface {
  type: typeof ActionTypes.CELSIUS_TEMP;
}

export type Actions =
  | FetchDataInterface
  | LocationErrorInterface
  | CityNameErrorInterface
  | DisplayDataInterface
  | ShowAlertPopUpInterface
  | ShowDailyDetailsInterface
  | ChosenDayFunctionInterface
  | LoadingInterface
  | TempConversionInterface;

export const fetchData = (
  locationData: LocationDataInterface[],
  weatherData: OneCallWeatherInterface[]
): FetchDataInterface => ({
  type: ActionTypes.FETCH_DATA,
  payload: locationData,
  payload2: weatherData,
});

export const setLocationError = (
  isLocationError: boolean
): LocationErrorInterface => ({
  type: ActionTypes.LOCATION_ERROR,
  payload: isLocationError,
});

export const setCityNameError = (
  isCityNameError: boolean
): CityNameErrorInterface => ({
  type: ActionTypes.CITY_NAME_ERROR,
  payload: isCityNameError,
});

export const setDisplayData = (
  isDisplayData: boolean
): DisplayDataInterface => ({
  type: ActionTypes.DISPLAY_DATA,
  payload: isDisplayData,
});

export const setShowAlertPopUp = (
  isAlertPopUp: boolean
): ShowAlertPopUpInterface => ({
  type: ActionTypes.SHOW_ALERT_POPUP,
  payload: isAlertPopUp,
});

export const setShowDailyDetails = (
  isDailyDetails: boolean
): ShowDailyDetailsInterface => ({
  type: ActionTypes.SHOW_DAILY_DETAILS,
  payload: isDailyDetails,
});

export const setChosenDay = (
  chosenDay: string
): ChosenDayFunctionInterface => ({
  type: ActionTypes.CHOSEN_DAY,
  payload: chosenDay,
});

export const setIsLoading = (isLoading: boolean): LoadingInterface => ({
  type: ActionTypes.LOADING,
  payload: isLoading,
});

export const setTempUnit = (): TempConversionInterface => ({
  type: ActionTypes.CELSIUS_TEMP,
});
