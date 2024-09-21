

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

  const handleMouse = (e, action) => {
    alert(`Has ${action} la caja`);
  }

  const handleInsideInput = (e) => {
    console.log("Estas dentro del input, escribe tu nombre!!");
  }

  const handleOutsideInput = (e)=> {
    console.log("Estás fuera del input, Adiós!!")
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
        className="mt-4"
        onMouseEnter={ e => handleMouseEnter(e)}
        onMouseLeave={ e => handleMouseLeave(e)}
      >
        <p>Pasa el mouse por encima!!</p>
      </div>
      <div id="box2" className="mt-4"
        onMouseEnter={ e => handleMouse(e, "entrado a")}
        onMouseLeave={ e => handleMouse(e, "salido de") }
      >
      </div>
      <div className="mt-4">
        <input type="text"
          onFocus={ e => handleInsideInput(e)}
          onBlur={ e => handleOutsideInput(e)}
        />
      </div>
    </div>
  )
}
