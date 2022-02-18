import { LocationDataInterface, StateInterface } from '../interface/interface';
import { ActionTypes } from '../actions/types';
import { Actions } from '../actions/actions';

const INITIAL_STATE: StateInterface = {
  locationData: [],
  weatherData: [],
  locationError: false,
  cityNameError: false,
  displayData: false,
  showAlertPopUp: false,
  showDailyDetails: false,
  chosenDay: '',
  isLoading: true,
  isCelsius: true,
};

export const dataReducer = (
  state = INITIAL_STATE,
  action: Actions
): StateInterface => {
  switch (action.type) {
    case ActionTypes.FETCH_DATA:
      return {
        ...state,
        locationData: action.payload,
        weatherData: action.payload2,
      };
    case ActionTypes.LOCATION_ERROR:
      return {
        ...state,
        locationError: action.payload,
      };
    case ActionTypes.CITY_NAME_ERROR:
      return {
        ...state,
        cityNameError: action.payload,
      };
    case ActionTypes.DISPLAY_DATA:
      return {
        ...state,
        displayData: action.payload,
      };
    case ActionTypes.SHOW_ALERT_POPUP:
      return {
        ...state,
        showAlertPopUp: action.payload,
      };
    case ActionTypes.SHOW_DAILY_DETAILS:
      return {
        ...state,
        showDailyDetails: action.payload,
      };
    case ActionTypes.CHOSEN_DAY:
      return {
        ...state,
        chosenDay: action.payload,
      };
    case ActionTypes.LOADING:
      return {
        ...state,
        isLoading: action.payload,
      };
    case ActionTypes.CELSIUS_TEMP:
      return {
        ...state,
        isCelsius: !state.isCelsius,
      };
    default:
      return state;
  }
};
