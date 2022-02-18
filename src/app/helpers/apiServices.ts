import {
  LocationDataInterface,
  OneCallWeatherInterface,
} from '../interface/interface';

interface LocationErrorInterface {
  code: number;
  message: string;
}

export const handleUserLocation = (
  setLoading: (isLOading: boolean) => void,
  fetchData: (
    data: LocationDataInterface[],
    weatherData: OneCallWeatherInterface[]
  ) => void,
  setLocationError: (isLocationError: boolean) => void,
  setCityNameError: (isCityNameError: boolean) => void,
  setDisplayData: (isDisplayData: boolean) => void,
  setShowDailyDetails: (isShowDailyDetails: boolean) => void,
  setChosenDay: (chosenDay: string) => void
) => {
  //  user's location success
  const userLocationSuccess = (position: GeolocationPosition) => {
    setLoading(true);
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&units=metric&appid=${process.env.REACT_APP_API_KEY}`
    )
      .then((res) => res.json())
      .then((data: LocationDataInterface) => {
        fetch(
          `https://api.openweathermap.org/data/2.5/onecall?lat=${data.coord.lat}&lon=${data.coord.lon}&units=metric&exclude=minutely&appid=${process.env.REACT_APP_API_KEY}`
        )
          .then((res: Response) => res.json())
          .then((weatherData: OneCallWeatherInterface) => {
            fetchData([data], [weatherData]);
            setLocationError(false);
            setCityNameError(false);
            setDisplayData(true);
            setShowDailyDetails(false);
            setChosenDay('');
            setLoading(false);
          })
          .catch((weatherDataError) => console.error(weatherDataError));
      })
      .catch((dataError) => console.error(dataError));
  };

  // user's location error
  const userLocationError = (error: LocationErrorInterface) => {
    if (error.code === 1) {
      setLocationError(true);
      setCityNameError(false);
      setDisplayData(false);
      setLoading(false);
    }
  };

  navigator.geolocation.getCurrentPosition(
    userLocationSuccess,
    userLocationError,
    { enableHighAccuracy: true }
  );
};

//  city search by name
export const handleCitySearch = (
  e: React.KeyboardEvent,
  setLoading: (isLOading: boolean) => void,
  fetchData: (
    data: LocationDataInterface[],
    weatherData: OneCallWeatherInterface[]
  ) => void,
  setLocationError: (isLocationError: boolean) => void,
  setCityNameError: (isCityNameError: boolean) => void,
  setDisplayData: (isDisplayData: boolean) => void,
  setShowDailyDetails: (isShowDailyDetails: boolean) => void,
  setChosenDay: (chosenDay: string) => void
) => {
  if (e.key === 'Enter') {
    e.preventDefault();
    setLoading(true);
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${
        (e.currentTarget as HTMLInputElement).value
      }&units=metric&appid=${process.env.REACT_APP_API_KEY}`
    )
      .then((res: Response) => res.json())
      .then((data: LocationDataInterface) => {
        fetch(
          `https://api.openweathermap.org/data/2.5/onecall?lat=${data.coord.lat}&lon=${data.coord.lon}&units=metric&exclude=minutely&appid=${process.env.REACT_APP_API_KEY}`
        )
          .then((res) => res.json())
          .then((weatherData: OneCallWeatherInterface) => {
            fetchData([data], [weatherData]);
            setLocationError(false);
            setCityNameError(false);
            setDisplayData(true);
            setShowDailyDetails(false);
            setChosenDay('');
            setLoading(false);
          })
          .catch((weatherDataError) => console.error(weatherDataError));
      })
      .catch((dataError: string) => {
        console.error(dataError);
        setCityNameError(true);
        setLocationError(false);
        setDisplayData(false);
        setLoading(false);
      });
  }
};
