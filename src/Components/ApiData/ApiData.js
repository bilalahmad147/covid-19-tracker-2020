const url = "https://api.covid19api.com";
const url2 = "https://covid19.mathdro.id/api";

export const getData = async () => {
  try {
    const res = await fetch(`${url}/summary`);
    return res;
  } catch (error) {
    console.log(error);
  }
};
export const getCountry = async () => {
  try {
    const res = await fetch(`${url}/countries`);
    return res;
  } catch (error) {
    console.log(error);
  }
};

export const getDailyStatus = async () => {
  try {
    const { data } = await fetch(`${url2}/daily`);
    const mydaily = data.map(({ confirmed, deaths, reportDate: date }) => ({
      confirmed: confirmed.total,
      deaths: deaths.total,
      date,
    }));
    console.log(mydaily);
    return mydaily;
  } catch (error) {
    console.log(error);
  }
};

export const getCountries = async () => {
  try {
    const {
      data: { countries },
    } = await fetch(`${url2}/countries`);

    return countries.map((country) => country.name);
  } catch (error) {
    return error;
  }
};

export const getAllData = async (country) => {
  let changeableUrl = url2;

  if (country) {
    changeableUrl = `${url2}/countries/${country}`;
  }
  try {
    const {
      data: { confirmed, recovered, deaths, lastUpdate },
    } = await fetch(changeableUrl);
    return { confirmed, recovered, deaths, lastUpdate };
  } catch (error) {
    return error;
  }
};
