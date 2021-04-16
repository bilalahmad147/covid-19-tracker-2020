const url2 = "https://covid19.mathdro.id/api";

export const getDailyStatus = async () => {
  try {
    const res = await fetch(`${url2}/daily`);
    const data = await res.json();
    const mydaily = data.map(({ confirmed, deaths, reportDate: date }) => ({
      confirmed: confirmed.total,
      deaths: deaths.total,
      date,
    }));
    return mydaily;
  } catch (error) {
    console.log(error);
  }
};

export const getCountries = async () => {
  try {
    const res = await fetch(`${url2}/countries`);
    return res;
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
    const res = await fetch(changeableUrl);
    const { confirmed, recovered, deaths, lastUpdate } = await res.json();
    const data = { confirmed, recovered, deaths, lastUpdate };
    return data;
  } catch (error) {
    return error;
  }
};
