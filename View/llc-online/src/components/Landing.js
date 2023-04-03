import React, { useEffect } from 'react';
import useData from '../components/UseData';
import Table from '../sections/Table';

export default function Landing() {
   const { data, getData } = useData();
   useEffect(() => {
      async function onPageLoad () {
          await getData();
       }
     onPageLoad();
   }, []);
return(
  <div className="page">
     <h3>Airtable data</h3>
       {data && <Table data={data}/>}
     </div>
    )
}