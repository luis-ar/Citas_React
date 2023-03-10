import Header from "./components/Header";
import Formulario from "./components/Formulario";
import ListadoPacintes from "./components/ListadoPacintes";
import { useState, useEffect } from "react";

function App() {
  const inicial=JSON.parse(localStorage.getItem('pacientes')) ?? []
  const [pacientes, setPacientes] = useState(inicial);
  const [paciente, setPaciente] = useState([]);


  
  useEffect(() => {
    localStorage.setItem("pacientes", JSON.stringify(pacientes));
  }, [pacientes]);

  const eliminarPaciente = (id) => {
    const pacientesActualizados = pacientes.filter(
      (paciente) => paciente.id !== id
    );
    setPacientes(pacientesActualizados);
  };
  return (
    <div className="container mx-auto mt-20">
      <Header />
      <div className="mt-12 md:flex">
        <Formulario
          setPaciente={setPaciente}
          paciente={paciente}
          pacientes={pacientes}
          setPacientes={setPacientes} //props
        />
        <ListadoPacintes
          pacientes={pacientes}
          setPaciente={setPaciente}
          eliminarPaciente={eliminarPaciente}
        />
      </div>
    </div>
  );
}

export default App;
