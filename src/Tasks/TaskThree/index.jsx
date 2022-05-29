import React, { useEffect, useState } from 'react'
import ListView from '../../components/ListView';
import Spinner from '../../components/Spinner';
import Text from '../../components/Text';
import { useAppContext } from '../../context/AppContext/AppContext'

const TaskOne = () => {

  const { 
    taskThreeData,
    numberOfOffers,
  } = useAppContext(); 

  const [currentData, setCurrentData] = useState([]);
  const [sortedData, setSortedData] = useState([]);
  const [offerCount, setOfferCount] = useState()

  useEffect(() => {
    const tempArr = [];
    if(taskThreeData?.length > 0) {
      taskThreeData.forEach((el) => {
        tempArr.push(el?.data)
      })
    }
    setCurrentData([...tempArr])
  },[taskThreeData])


  useEffect(() => {
    if(currentData.length > 0) {
      currentData?.sort((f, s) => parseFloat(f?.QuotaInfo?.HasDiscount ? f?.QuotaInfo?.PremiumWithDiscount : f?.Cash) - parseFloat(s?.QuotaInfo?.HasDiscount ? s?.QuotaInfo?.PremiumWithDiscount : s?.Cash))
      setSortedData([...currentData])
    }

  },[currentData])

  useEffect(() => {
    if(numberOfOffers) {
      setOfferCount(numberOfOffers)
    }
  },[numberOfOffers])

  return (
    <div style={{position: "relative"}}>
      {taskThreeData?.length > 0 ? 
      (
        <ListView data={sortedData} />
      ) 
      :
      (
        <div style={{display:'flex', flexDirection: 'column', justifyContent: 'center', alignItems:'center', position: 'absolute', left: '50%', top: '50%'}}>
          <Text>{`We are preaparing your ${offerCount?.toString()} insurance offers.`}</Text>
            <Spinner/>
          <Text>Please Wait</Text>
        </div>
      )

      }

    </div>
  )
}

export default TaskOne