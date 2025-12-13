import "./App.css";

function Hello1() {
  const isVisible = true;

  const visibility = isVisible ? "visible" : "unvisible";

  return (
    <div>
      <h1 className={visibility}>Conditional Rendering</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui sed aut
        voluptate iure sit dolor laudantium fuga rerum? Facilis, animi?
      </p>
    </div>
  );
}

export default Hello1;
