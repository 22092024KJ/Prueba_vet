import React, { useState } from 'react';
import { Button, Table, Card, Badge, Form, Row, Col } from 'react-bootstrap';
import { Plus, Check, X, Trash2, Clock } from 'react-feather';
import '../../stylos/cssVet/GestionCitas.css';

const GestionCitas = () => {
  const [citas, setCitas] = useState([
    {
      id: "1",
      mascota: "Max",
      propietario: "María González",
      fecha: "2024-01-15",
      hora: "09:00",
      tipo: "Consulta General",
      estado: "pendiente",
      prioridad: "media",
      motivo: "Revisión anual y vacunas",
      tipoMascota: "perro • Golden Retriever",
      telefono: "+34 666 123 456"
    },
    {
      id: "2",
      mascota: "Luna",
      propietario: "Carlos Rodríguez",
      fecha: "2024-01-15",
      hora: "10:30",
      tipo: "Emergencia",
      estado: "confirmada",
      prioridad: "urgente",
      motivo: "Vómitos y diarrea desde ayer",
      tipoMascota: "gato • Siamés",
      telefono: "+34 677 987 654"
    },
    {
      id: "3",
      mascota: "Coco",
      propietario: "Laura Martínez",
      fecha: "2024-01-16",
      hora: "14:00",
      tipo: "Control",
      estado: "completada",
      prioridad: "alta",
      motivo: "Control post-operatorio",
      tipoMascota: "ave • Canario",
      telefono: "+34 688 555 777"
    }
  ]);

  const [searchTerm, setSearchTerm] = useState('');
  const [filterEstado, setFilterEstado] = useState('Todos los estados');
  const [filterTipo, setFilterTipo] = useState('Todos los tipos');
  const [filterPrioridad, setFilterPrioridad] = useState('Todas las prioridades');

  // Estadísticas
  const citasHoy = citas.filter(c => c.fecha === new Date().toISOString().split('T')[0]).length;
  const tiposConsulta = {
    "Consulta General": citas.filter(c => c.tipo === "Consulta General").length,
    "Emergencia": citas.filter(c => c.tipo === "Emergencia").length,
    "Control": citas.filter(c => c.tipo === "Control").length
  };

  const filteredCitas = citas.filter(cita => {
    return (
      (cita.mascota.toLowerCase().includes(searchTerm.toLowerCase()) ||
       cita.propietario.toLowerCase().includes(searchTerm.toLowerCase()) ||
       cita.motivo.toLowerCase().includes(searchTerm.toLowerCase())) &&
      (filterEstado === 'Todos los estados' || cita.estado === filterEstado.toLowerCase()) &&
      (filterTipo === 'Todos los tipos' || cita.tipo === filterTipo) &&
      (filterPrioridad === 'Todas las prioridades' || cita.prioridad === filterPrioridad.toLowerCase())
    );
  });

  const handleStatusChange = (id, newStatus) => {
    setCitas(prev => prev.map(cita => 
      cita.id === id ? { ...cita, estado: newStatus } : cita
    ));
  };

  const handleDelete = (id) => {
    setCitas(prev => prev.filter(cita => cita.id !== id));
  };

  const getEstadoIcon = (estado) => {
    switch(estado) {
      case 'pendiente': return '☐';
      case 'confirmada': return '✓';
      case 'completada': return '✓';
      case 'cancelada': return '✗';
      default: return '';
    }
  };

  const getPrioridadIcon = (prioridad) => {
    return prioridad === 'urgente' ? '☐' : '';
  };

  return (
    <div className="agenda-vet-container">
      <h1 className="agenda-title">Panel Veterinario</h1>
      
      <div className="stats-section">
        <div className="stat-card">
          <h3>Citas Hoy</h3>
          <p>O esta semana</p>
        </div>
        <div className="stat-card">
          <h3>Pendientes</h3>
          <p>Por confirmar</p>
        </div>
        <div className="stat-card">
          <h3>Completadas</h3>
          <p>Este mes</p>
        </div>
        <div className="stat-card">
          <h3>Urgentes</h3>
          <p>Requieren atención</p>
        </div>
      </div>

      <div className="consult-types">
        <h3>Distribución por Tipo de Consulta</h3>
        <div className="types-grid">
          <div className="type-item">
            <span className="type-count">{tiposConsulta["Consulta General"]}</span>
            <span className="type-label">Consulta General</span>
          </div>
          <div className="type-item">
            <span className="type-count">{tiposConsulta["Emergencia"]}</span>
            <span className="type-label">Emergencia</span>
          </div>
          <div className="type-item">
            <span className="type-count">{tiposConsulta["Control"]}</span>
            <span className="type-label">Control</span>
          </div>
        </div>
      </div>

      <Card className="management-card">
        <Card.Header className="management-header">
          <h3>Gestión de Citas Veterinarias</h3>
          <Button variant="primary" className="new-appointment-btn">
            <Plus size={16} className="me-1" />
            Nueva Cita
          </Button>
        </Card.Header>
        <Card.Body>
          <Row className="filters-row">
            <Col md={6}>
              <Form.Control
                type="text"
                placeholder="Buscar por mascota, dueño o motivo..."
                className="search-input"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </Col>
            <Col md={2}>
              <Form.Select 
                value={filterEstado}
                onChange={(e) => setFilterEstado(e.target.value)}
                className="filter-select"
              >
                <option>Todos los estados</option>
                <option>Pendiente</option>
                <option>Confirmada</option>
                <option>Completada</option>
                <option>Cancelada</option>
              </Form.Select>
            </Col>
            <Col md={2}>
              <Form.Select
                value={filterTipo}
                onChange={(e) => setFilterTipo(e.target.value)}
                className="filter-select"
              >
                <option>Todos los tipos</option>
                <option>Consulta General</option>
                <option>Emergencia</option>
                <option>Control</option>
              </Form.Select>
            </Col>
            <Col md={2}>
              <Form.Select
                value={filterPrioridad}
                onChange={(e) => setFilterPrioridad(e.target.value)}
                className="filter-select"
              >
                <option>Todas las prioridades</option>
                <option>Urgente</option>
                <option>Alta</option>
                <option>Media</option>
                <option>Baja</option>
              </Form.Select>
            </Col>
          </Row>

          <div className="appointments-table-container">
            <Table className="appointments-table">
              <thead>
                <tr>
                  <th>Mascota</th>
                  <th>Propietario</th>
                  <th>Fecha/Hora</th>
                  <th>Tipo</th>
                  <th>Estado</th>
                  <th>Prioridad</th>
                  <th>Motivo</th>
                  <th>Acciones</th>
                </tr>
              </thead>
              <tbody>
                {filteredCitas.length > 0 ? (
                  filteredCitas.map(cita => (
                    <React.Fragment key={cita.id}>
                      <tr className="appointment-row">
                        <td><strong>{cita.mascota}</strong></td>
                        <td>{cita.propietario}</td>
                        <td className="date-cell">
                          <span className="date-icon">☐</span>
                          {cita.fecha}
                          <div className="time-cell">
                            <span className="time-icon">ⓒ</span>
                            {cita.hora}
                          </div>
                        </td>
                        <td>{cita.tipo}</td>
                        <td>
                          <span className="status-icon">{getEstadoIcon(cita.estado)}</span>
                          {cita.estado}
                        </td>
                        <td>
                          <span className="priority-icon">{getPrioridadIcon(cita.prioridad)}</span>
                          {cita.prioridad}
                        </td>
                        <td>{cita.motivo}</td>
                        <td className="actions-cell">
                          <span className="action-icon">💶</span>
                          <span className="action-icon">💷</span>
                          <span className="action-icon">💸</span>
                        </td>
                      </tr>
                      <tr className="pet-details-row">
                        <td colSpan="8">
                          {cita.tipoMascota} | {cita.telefono}
                        </td>
                      </tr>
                    </React.Fragment>
                  ))
                ) : (
                  <tr>
                    <td colSpan="8" className="no-appointments">No se encontraron citas</td>
                  </tr>
                )}
              </tbody>
            </Table>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
};

export default GestionCitas;