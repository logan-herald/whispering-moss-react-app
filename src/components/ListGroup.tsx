function ListGroup() {
  let items = ["new york", "San Francisco", "Tokyo", "London", "Paris"];

  return (
    <>
      <h1>List</h1>
      {items.length === 0 && <p>no items</p>}
      <ul className="list-group">
        {items.map((item) => (
          <li  className='list-group-item' key={item} onClick={( )=> console.log('click', item)} >{item}</li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
