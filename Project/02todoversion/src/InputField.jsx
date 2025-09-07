function Input() {
  return (
    <div className="container">
      <div className="row kg-row">
        <div className="col-6">
          <input type="text" placeholder="Enter to do here" />
        </div>
        <div className="col-4">
          <input type="date" />
        </div>
        <div className="col-2">
          <button type="butto " className="btn btn-success kg-button">
            Success
          </button>
        </div>
      </div>
    </div>
  );
}

export default Input;
