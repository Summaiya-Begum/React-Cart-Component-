export default function CartItem({
  id,
  foodname,
  url,
  amount,
  quantity,
  handleAdd,
}) {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-evenly",
        // border: "2px solid red",
        width: "90%",
        margin: "auto",
        padding: "1rem",
        color: "red",
        fontSize: "20px",
        marginBottom: "20px",
        alignItems: "center",
        boxShadow:"rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px"
      }}
    >
      <div><img src={url} alt="items" style={{height:'100px',width:"100px"}}/><h3 style={{color:"black"}}>{foodname}</h3></div>
      
      <p>₹ {amount}</p>
      <div style={{ display: "flex" }}>
        <button
          style={{
            padding: "0.5rem 2rem 0.5rem 2rem",

            background: "white",
            margin: "auto",
            fontWeight: "bold"
          }}
          onClick={() => handleAdd(id, 1)}
        >
          +
        </button>
        <p style={{ padding: "1rem" }}>{quantity}</p>
        <button
          style={{
            // border: "none",
            padding: "0.5rem 2rem 0.5rem 2rem",
            background: "white",
            margin: "auto",
            fontWeight: "bold"
          }}
          disabled={quantity === 0}
          onClick={() => handleAdd(id, -1)}
        >
          -
        </button>
      </div>
    </div>
  );
}
