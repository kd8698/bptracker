const BPValue = ({ data }) => {

  return (
  <div className="container-fluid mt-3 text-center font-monospace">    
    <table className="table">
    <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Day</th>
          <th scope="col">Systolic</th>
          <th scope="col">Diastolic</th>
        </tr>
      </thead>

    <tbody>
    <tr>
      <th scope="row">{data.id}</th>
      <td>{data.day}</td>
      <td>{data.systolic}</td>
      <td>{data.diastolic}</td>
    </tr>
    </tbody>

    </table>
  </div>  
  )
};

export default BPValue;
