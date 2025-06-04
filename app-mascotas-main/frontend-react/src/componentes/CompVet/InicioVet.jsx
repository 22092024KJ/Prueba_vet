// InicioVet.jsx
import { useState, useEffect } from 'react';
import { Calendar, Clock, FileText, PawPrint, Plus, Activity, Pill, ChevronRight, Search } from 'lucide-react';
import { Link } from "react-router-dom";
import "../../stylos/cssVet/InicioVet.css";
import "../../stylos/cssVet/Card.css";

export default function InicioVet() {
  // Estado para las citas
  const [citas, setCitas] = useState([
    {
      id: 1,
      hora: '09:00',
      mascota: 'Max',
      raza: 'Labrador',
      tipo: 'Vacunación anual',
      propietario: 'Juan Pérez',
      estado: 'pendiente',
      tipoMascota: 'Perro'
    },
    {
      id: 2,
      hora: '11:00',
      mascota: 'Luna',
      raza: 'Siamés',
      tipo: 'Control rutinario',
      propietario: 'María González',
      estado: 'pendiente',
      tipoMascota: 'Gato'
    },
    {
      id: 3,
      hora: '15:00',
      mascota: 'Rocky',
      raza: 'Bulldog',
      tipo: 'Seguimiento dermatológico',
      propietario: 'Ana Martínez',
      estado: 'pendiente',
      tipoMascota: 'Perro'
    },
    {
      id: 4,
      hora: '17:00',
      mascota: 'Coco',
      raza: 'Poodle',
      tipo: 'Limpieza dental',
      propietario: 'Roberto Sánchez',
      estado: 'pendiente',
      tipoMascota: 'Perro'
    }
  ]);

  // Estado para pacientes recientes
  const [pacientes, setPacientes] = useState([
    {
      id: 1,
      nombre: 'Max',
      raza: 'Labrador',
      edad: 3,
      tipo: 'Perro'
    },
    {
      id: 2,
      nombre: 'Luna',
      raza: 'Siamés',
      edad: 2,
      tipo: 'Gato'
    },
    {
      id: 3,
      nombre: 'Rocky',
      raza: 'Bulldog',
      edad: 4,
      tipo: 'Perro'
    },
    {
      id: 4,
      nombre: 'Coco',
      raza: 'Poodle',
      edad: 5,
      tipo: 'Perro'
    }
  ]);

  // Estado para búsqueda
  const [busqueda, setBusqueda] = useState('');
  const [modalAbierto, setModalAbierto] = useState(false);
  const [citaSeleccionada, setCitaSeleccionada] = useState(null);

  // Filtrar pacientes según búsqueda
  const pacientesFiltrados = pacientes.filter(paciente =>
    paciente.nombre.toLowerCase().includes(busqueda.toLowerCase()) ||
    paciente.raza.toLowerCase().includes(busqueda.toLowerCase())
  );

  // Función para atender citas
  const atenderCita = (id) => {
    setCitas(citas.map(cita => 
      cita.id === id ? {...cita, estado: 'atendido'} : cita
    ));
    setModalAbierto(false);
    // Aquí podrías redirigir a la consulta o abrir un modal
    // window.location.href = `/consulta/${id}`;
  };

  // Función para confirmar atención
  const confirmarAtencion = (cita) => {
    setCitaSeleccionada(cita);
    setModalAbierto(true);
  };

  // Simular carga de datos desde API
  useEffect(() => {
    // En un caso real, aquí harías las llamadas a tu API
    /* 
    fetch('/api/citas/hoy')
      .then(res => res.json())
      .then(data => setCitas(data));

    fetch('/api/pacientes/recientes')
      .then(res => res.json())
      .then(data => setPacientes(data));
    */
  }, []);

  return (
    <>
      {/* Contenido del Dashboard */}
      <div className="max-w-7xl mx-auto">
        <div className="mb-6">
          <h1 className="text-2xl font-bold text-gray-800">Bienvenido, Dr. Carlos</h1>
          <p className="text-gray-600">Aquí tienes un resumen de tu día</p>
        </div>

        {/* Tarjetas de resumen */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
          <div className="card summary-card">
            <div className="card-content">
              <div className="flex items-center">
                <div className="summary-icon-container blue">
                  <Calendar className="h-6 w-6" />
                </div>
                <div>
                  <div className="summary-label">Citas hoy</div>
                  <div className="summary-value">{citas.length}</div>
                </div>
              </div>
            </div>
          </div>

          <div className="card summary-card">
            <div className="card-content">
              <div className="flex items-center">
                <div className="summary-icon-container green">
                  <PawPrint className="h-6 w-6" />
                </div>
                <div>
                  <div className="summary-label">Mascotas totales</div>
                  <div className="summary-value">{pacientes.length}</div>
                </div>
              </div>
            </div>
          </div>

          <div className="card summary-card">
            <div className="card-content">
              <div className="flex items-center">
                <div className="summary-icon-container purple">
                  <FileText className="h-6 w-6" />
                </div>
                <div>
                  <div className="summary-label">Consultas pendientes</div>
                  <div className="summary-value">
                    {citas.filter(c => c.estado === 'pendiente').length}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Citas de hoy */}
          <div className="lg:col-span-2">
            <div className="card">
              <div className="card-header">
                <h3 className="card-title">Citas de hoy</h3>
                <Link to="/agenda" className="link-text">
                  Ver todas <ChevronRight className="h-4 w-4" />
                </Link>
              </div>
              <div className="card-content">
                <div className="space-y-4">
                  {citas.map((cita) => (
                    <div 
                      key={cita.id} 
                      className={`appointment-card ${cita.estado === 'atendido' ? 'gray' : cita.tipoMascota === 'Perro' ? 'blue' : 'green'}`}
                    >
                      <div className="flex justify-between">
                        <div className="flex items-start">
                          <div className={`appointment-icon-container ${cita.estado === 'atendido' ? 'gray' : cita.tipoMascota === 'Perro' ? 'blue' : 'green'}`}>
                            <Clock className="h-4 w-4" />
                          </div>
                          <div>
                            <div className="appointment-title">{`${cita.hora} - ${cita.mascota} (${cita.raza})`}</div>
                            <div className="appointment-text">{cita.tipo}</div>
                            <div className="appointment-text">Propietario: {cita.propietario}</div>
                          </div>
                        </div>
                        <div className="flex space-x-2">
                          <button 
                            className={`btn btn-sm ${cita.estado === 'atendido' ? 'btn-disabled' : 'btn-success'}`}
                            onClick={() => confirmarAtencion(cita)}
                            disabled={cita.estado === 'atendido'}
                          >
                            {cita.estado === 'pendiente' ? 'Atender' : 'Atendido'}
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Pacientes recientes */}
          <div className="lg:col-span-1">
            <div className="card">
              <div className="card-header">
                <div className="flex justify-between items-center">
                  <h3 className="card-title">Mascotas recientes</h3>
                  <div className="flex items-center space-x-2">
                    <div className="relative">
                      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                      <input
                        type="text"
                        placeholder="Buscar..."
                        className="input input-sm pl-9"
                        value={busqueda}
                        onChange={(e) => setBusqueda(e.target.value)}
                      />
                    </div>
                    <Link to="/pacientes" className="link-text">
                      Ver todos <ChevronRight className="h-4 w-4" />
                    </Link>
                  </div>
                </div>
              </div>
              <div className="card-content">
                <div className="space-y-4">
                  {pacientesFiltrados.map((paciente) => (
                    <div key={paciente.id} className="patient-item">
                      <div className="patient-icon-container">
                        <PawPrint className="h-5 w-5" />
                      </div>
                      <div className="flex-1">
                        <div className="patient-name">{paciente.nombre}</div>
                        <div className="patient-info">
                          {paciente.raza}, {paciente.edad} años
                        </div>
                      </div>
                      <Link to={`/historial/${paciente.id}`} className="patient-link">
                        Historial
                      </Link>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Modal de confirmación */}
      {modalAbierto && (
        <div className="modal-overlay">
          <div className="modal">
            <div className="modal-content">
              <h3 className="modal-title">Confirmar atención</h3>
              <p className="modal-text">¿Atender a {citaSeleccionada?.mascota} ({citaSeleccionada?.raza})?</p>
              <p className="modal-text">Propietario: {citaSeleccionada?.propietario}</p>
              <p className="modal-text">Motivo: {citaSeleccionada?.tipo}</p>
              <div className="modal-actions">
                <button 
                  className="btn btn-outline" 
                  onClick={() => setModalAbierto(false)}
                >
                  Cancelar
                </button>
                <button 
                  className="btn btn-primary" 
                  onClick={() => atenderCita(citaSeleccionada.id)}
                >
                  Confirmar
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}