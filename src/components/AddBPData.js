import { useState } from "react";
import Button from "./Button";

const AddBPData = ({ onAdd }) => {
  const [day, setDay] = useState("");
  const [systolic, setSys] = useState("");
  const [diastolic, setDias] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();

    onAdd({ day, systolic, diastolic });

    //Clear Form
    setDay("");
    setSys("");
    setDias("");
  };

  return (
    <form className="container-fluid" onSubmit={onSubmit}>
      <div className="row mt-2">
        <label className="col-sm-2 col-form-label display-6">
          Enter Day of Record:
        </label>
        <div className="col-sm-4">
          <input
            type="text"
            className="shadow form-control"
            placeholder="1st Jan"
            value={day}
            onChange={(e) => setDay(e.target.value)}
            required
          />
        </div>
      </div>

      <div className="row mt-2">
        <label className="col-sm-2 col-form-label display-6">
          Enter Blood Pressure Readings:{" "}
        </label>
        <div className="col-sm-2">
          <input
            type="number"
            className="shadow form-control"
            placeholder="Systolic"
            value={systolic}
            onChange={(e) => setSys(e.target.value)}
            required
          />
        </div>
        <div className="col-sm-2">
          <input
            type="number"
            className="shadow form-control"
            placeholder="Diastolic"
            value={diastolic}
            onChange={(e) => setDias(e.target.value)}
            required
          />
        </div>
      </div>

      <Button
        btntype="submit"
        btnclass="shadow btn btn-outline-success btn-lg mt-3"
        text="Submit"
      />
    </form>
  );
};

export default AddBPData;
