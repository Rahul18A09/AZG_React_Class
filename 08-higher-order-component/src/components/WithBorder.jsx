

const WithBorder = (Profile) => {

    return function WrappedComponent() {

  return (
    <div style={{border: "2px solid blue", padding:"10px" , margin:"10px", fontFamily:"fantasy"}}>
      <Profile/>
    </div>
  )
}
}

export default WithBorder;
