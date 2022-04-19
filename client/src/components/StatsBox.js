import React from 'react'

const StatsBox = ({title, fistItem, secondItem}) => {
    
    const total = fistItem + secondItem


    const result = Math.round(( fistItem/ total) * 100)

    const resultAgain = (result + '%')
     
    const Secondresult = Math.round(( secondItem/ total) * 100)
    const SecongresultAgain = (Secondresult + '%')

    





  return (

    <div className="py-2">


    <div className="flex flex-row justify-between items-center  px-3 py-1   justify-start">  
        <span className="text-xs font-bold text-gray-500 "> {fistItem} </span>
        <span className="text-xs font-bold text-gray-500 " > {title}</span>
        <span className="text-xs font-bold text-gray-500 "> {secondItem}</span>
    
    </div>
    <div className="flex flex-row justify-between items-center  px-3 py-1   justify-start">
        <div className="w-full bg-gray-900  h-2 rounded-l-lg flex mr-2 items-end justify-end  ">
            <div style={{width:resultAgain }} className={`h-[100%]   bg-blue-500 `} >  </div>
        </div>  
        <div className="w-full  h-2 flex rounded-r-lg bg-gray-900   items-start justify-start  ">
            <div style={{width:SecongresultAgain }} className={`h-[100%]   bg-[#FF6900] `} >  </div>

        </div>
    
    </div>
    </div>



    )
}

export default StatsBox