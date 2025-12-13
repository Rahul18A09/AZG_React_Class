

function Hello() {

//   const isLoggedIn = true;

//   let message;

//   if (isLoggedIn) {
//     message =  <h1>Welcome User!</h1>;
//   } else {
//     message = <h2>Please Login</h2>;
//   }

//   return <h2>{message}</h2>

return (
    <div>
        {isLoggedIn ? <h1>Welcome User!</h1> : <h2>Please Login</h2>}
    </div>
)

}

export default Hello;

