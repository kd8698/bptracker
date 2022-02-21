import Header from "./components/Header";
import BPRecord from "./components/BPRecord";
import AddBPData from "./components/AddBPData";
import BarChart from "./components/BarChart";
import Button from "./components/Button";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { useState, useEffect } from 'react';

function App() {

  const [showAddData, setShowAddData] = useState(false)
  const [showChartData, setShowChartData] = useState(false)
  const [BPData, setBPData] = useState([])

  useEffect(() => {

    const getBPData = async () => {
      const fromServer = await fetchBPData()
      setBPData(fromServer)
    }

    getBPData()
  }, [])


  const fetchBPData = async () => {
    const res = await fetch('http://localhost:5000/BPData')
    const BP = await res.json()
    return BP
  }

  const addBPData = async (data) => {

    const res = await fetch('http://localhost:5000/BPData', {
      method:'POST',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(data)
    })

    const newData = await res.json()
    setBPData([...BPData, newData ])

    // const id = Math.floor(Math.random() * 1000) + 1
    // const newData = { id, ...data }
    // setBPData([ ...BPData, newData ])
  }

  const deleteBPData = async (id) => {

    await fetch(`http://localhost:5000/BPData/${id}`, {
    method:'DELETE'
    })

    setBPData(BPData.filter((data) => data.id !== id))
  }

  return (
    <div className="container-fluid">
      <Header onPress={() => setShowAddData(!showAddData)} showAdd={showAddData} />

      {showAddData && <AddBPData onAdd={addBPData} />}

      <BPRecord BPData={BPData} onDelete={deleteBPData}/>

      <div className="text-center" onClick={() => setShowChartData(!showChartData)}>
        {showChartData ? <Button 
          type="button"
          btnclass="shadow btn btn-outline-warning btn-lg mt-2 mb-3" 
          text="HIDE GRAPH"
        /> :
        <Button 
          type="button"
          btnclass="shadow btn btn-outline-info btn-lg mt-2 mb-3" 
          text="SHOW GRAPH"
        />
        
        }
      </div>
      {showChartData && <BarChart />}
    </div>
  );
}

export default App;
