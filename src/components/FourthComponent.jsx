

export const FourthComponent = () => {

  const handleClicked = (e, name) => {
    alert("Has hecho click en el botón " + name);
  }

  const handleDoubleClicked = () => {
    alert("Has hecho doble click");
  }

  const handleMouseEnter = (e) => {
    alert("Has ENTRADO a la caja");
  }

  const handleMouseLeave = (e) => {
    alert("Has SALIDO de la caja");
  }

  return (
    <div>
      <h1>FourComponent</h1>
      {/* Evento Click */}
      <div>
        <button
          className="btn btn-danger"
          onClick={ () => {
            alert("Hola, soy un evento click");
          }}
        >Haz clic!!
        </button>
      </div>
      <div>
        <button className="btn btn-success"
          onClick={ e => handleClicked(e, "Inés") }>
          ¡Aquí también haz click!
        </button>
      </div>
      <button className="btn btn-info"
        onDoubleClick={ handleDoubleClicked }
      >
        Haz Doble Click!!
      </button>
      <div id="box1"
        onMouseEnter={ e => handleMouseEnter(e)}
        onMouseLeave={ e => handleMouseLeave(e)}
      >
        <p>Pasa el mouse por encima!!</p>
      </div>
    </div>
  )
}
