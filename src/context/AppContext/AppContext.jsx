import React, { useContext, useEffect, useState } from 'react';
import axios from 'axios';


const AppContext = React.createContext({});



export default AppContext;


const taskOneUrl        = 'https://snetmyapp.herokuapp.com/case1';
const taskTwoUrl        = 'https://snetmyapp.herokuapp.com/case2';
const taskThreeUrl      = 'https://snetmyapp.herokuapp.com/case3';
const numberOfOffersUrl = "https://snetmyapp.herokuapp.com/get_offer_count"

export const AppContextProvider = ({children}) => {

  const [taskOneData, setTaskOneData] = useState(null);
  const [taskTwoData, setTaskTwoData] = useState(null);
  const [taskThreeData, setTaskThreeData] = useState([]);
  const [numberOfOffers, setNumberOfOffers] = useState(null);
  const [offerCount, setOfferCount] = useState();

  let taskOneFetchController = true;
  let taskTwoFetchController = true;
  let taskThreeNumberFetchController = true;

  useEffect(() => {
    if(taskOneFetchController) {
      axios.get(taskOneUrl).then((res) => {
        setTaskOneData(res?.data?.offerList)
      })
    }
    taskOneFetchController = false
  }, [])

  useEffect(() => {
    if(taskTwoFetchController) {
      axios.get(taskTwoUrl).then((res) => {
        setTaskTwoData(res?.data?.offerList)
      })
    }
    taskTwoFetchController = false
}, [])

  useEffect(() => {
    if(taskThreeNumberFetchController) {
      axios.get(numberOfOffersUrl).then((res) => {
        setNumberOfOffers(res?.data?.num_offers)
      })
    }
    taskThreeNumberFetchController = false
}, [])

useEffect(() => {
  if(numberOfOffers) {
    let promises = [];
    for (let i = 0; i < numberOfOffers; i++) {
      promises.push(axios.get(taskThreeUrl))
    }
    Promise.all(promises)
      .then(responses => {
        setTaskThreeData([...responses])
      });
  }
}, [numberOfOffers])

  return <AppContext.Provider value={{
    taskOneData,
    setTaskOneData,
    taskTwoData,
    setTaskTwoData,
    taskThreeData,
    setTaskThreeData,
    offerCount,
    setOfferCount,
    numberOfOffers,
    setNumberOfOffers
  }}>
    {children}
  </AppContext.Provider>
}




export const useAppContext = () => useContext(AppContext);