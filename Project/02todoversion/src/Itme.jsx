function Item({itemname,itemDate}) {
  return (
    <div className="container ">
      <div className="row kg-row">
        <div className="col-6">{itemname}</div>
        <div className="col-4">{itemDate}</div>
        <div className="col-2">
          <button type="button" className="btn btn-success kg-button">
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}

export default Item;
 