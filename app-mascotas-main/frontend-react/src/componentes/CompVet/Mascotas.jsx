import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Mascotas = () => {
  const navigate = useNavigate();
  
  // Componentes UI básicos
  const Button = ({ children, className = '', variant = 'default', size = 'default', ...props }) => (
    <button
      className={`
        inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors
        ${variant === 'default' ? 'bg-gray-100 text-gray-900 hover:bg-gray-200' : ''}
        ${variant === 'outline' ? 'border border-gray-200 bg-white hover:bg-gray-100' : ''}
        ${variant === 'primary' ? 'bg-blue-600 text-white hover:bg-blue-700' : ''}
        ${size === 'default' ? 'h-10 px-4 py-2' : ''}
        ${size === 'sm' ? 'h-9 px-3' : ''}
        ${className}
      `}
      {...props}
    >
      {children}
    </button>
  );

  const Input = ({ className = '', type = 'text', ...props }) => (
    <input
      type={type}
      className={`
        flex h-10 w-full rounded-md border border-gray-200 bg-white px-3 py-2 text-sm
        placeholder:text-gray-500 focus-visible:outline-none focus-visible:ring-2
        focus-visible:ring-blue-500 focus-visible:ring-offset-2 ${className}
      `}
      {...props}
    />
  );

  const Label = ({ children, htmlFor, className = '' }) => (
    <label htmlFor={htmlFor} className={`text-sm font-medium leading-none ${className}`}>
      {children}
    </label>
  );

  const Card = ({ children, className = '' }) => (
    <div className={`rounded-lg border bg-white text-gray-900 shadow-sm ${className}`}>
      {children}
    </div>
  );

  const CardHeader = ({ children, className = '' }) => (
    <div className={`flex flex-col space-y-1.5 p-6 ${className}`}>{children}</div>
  );

  const CardTitle = ({ children, className = '' }) => (
    <h3 className={`text-2xl font-semibold leading-none tracking-tight ${className}`}>{children}</h3>
  );

  const CardDescription = ({ children, className = '' }) => (
    <p className={`text-sm text-gray-500 ${className}`}>{children}</p>
  );

  const CardContent = ({ children, className = '' }) => (
    <div className={`p-6 pt-0 ${className}`}>{children}</div>
  );

  const Table = ({ children, className = '' }) => (
    <div className={`w-full overflow-auto ${className}`}>
      <table className="w-full caption-bottom text-sm">{children}</table>
    </div>
  );

  const TableHeader = ({ children }) => <thead>{children}</thead>;

  const TableBody = ({ children }) => <tbody className="[&_tr:last-child]:border-0">{children}</tbody>;

  const TableRow = ({ children }) => (
    <tr className="border-b transition-colors hover:bg-gray-100/50">{children}</tr>
  );

  const TableHead = ({ children }) => (
    <th className="h-12 px-4 text-left align-middle font-medium text-gray-500">{children}</th>
  );

  const TableCell = ({ children, className = '' }) => (
    <td className={`p-4 align-middle ${className}`}>{children}</td>
  );

  const Badge = ({ children, variant = 'default', className = '' }) => (
    <span
      className={`
        inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold
        ${variant === 'default' ? 'border-transparent bg-blue-600 text-white' : ''}
        ${variant === 'secondary' ? 'border-transparent bg-gray-100 text-gray-900' : ''}
        ${variant === 'outline' ? 'border-gray-200 bg-white text-gray-900' : ''}
        ${className}
      `}
    >
      {children}
    </span>
  );

  const Avatar = ({ children, className = '' }) => (
    <div className={`relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full ${className}`}>
      {children}
    </div>
  );

  const AvatarImage = ({ src, alt }) => (
    <img src={src} alt={alt} className="aspect-square h-full w-full" />
  );

  const AvatarFallback = ({ children, className = '' }) => (
    <div className={`flex h-full w-full items-center justify-center rounded-full bg-gray-100 ${className}`}>
      {children}
    </div>
  );

  const Switch = ({ checked, onCheckedChange }) => (
    <button
      type="button"
      role="switch"
      aria-checked={checked}
      onClick={() => onCheckedChange(!checked)}
      className={`
        inline-flex h-6 w-11 items-center rounded-full border-2 border-transparent transition-colors
        focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500
        focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50
        ${checked ? 'bg-blue-600' : 'bg-gray-200'}
      `}
    >
      <span
        className={`
          block h-5 w-5 rounded-full bg-white shadow-lg transition-transform
          ${checked ? 'translate-x-5' : 'translate-x-0'}
        `}
      />
    </button>
  );

  const Textarea = ({ className = '', ...props }) => (
    <textarea
      className={`
        flex min-h-[80px] w-full rounded-md border border-gray-200 bg-white px-3 py-2 text-sm
        placeholder:text-gray-500 focus-visible:outline-none focus-visible:ring-2
        focus-visible:ring-blue-500 focus-visible:ring-offset-2 ${className}
      `}
      {...props}
    />
  );

  const Dialog = ({ open, onOpenChange, children }) => {
    if (!open) return null;
    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
        <div className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
          {children}
        </div>
      </div>
    );
  };

  const DialogTrigger = ({ children, asChild, onClick }) => (
    <div onClick={onClick}>{children}</div>
  );

  const DialogContent = ({ children, className = '' }) => (
    <div className={className}>{children}</div>
  );

  const DialogHeader = ({ children }) => (
    <div className="flex flex-col space-y-1.5 text-center sm:text-left p-6">
      {children}
    </div>
  );

  const DialogTitle = ({ children }) => (
    <h2 className="text-lg font-semibold leading-none tracking-tight">{children}</h2>
  );

  const DialogDescription = ({ children }) => (
    <p className="text-sm text-gray-500">{children}</p>
  );

  const DialogFooter = ({ children }) => (
    <div className="flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2 p-6 pt-0">
      {children}
    </div>
  );

  const Select = ({ value, onValueChange, children }) => {
    const [open, setOpen] = useState(false);
    
    return (
      <div className="relative">
        <button
          onClick={() => setOpen(!open)}
          className="flex h-10 w-full items-center justify-between rounded-md border border-gray-200 bg-white px-3 py-2 text-sm"
        >
          {value || 'Seleccionar'}
          <span>▼</span>
        </button>
        {open && (
          <div className="absolute z-50 mt-1 w-full rounded-md border bg-white shadow-lg">
            {React.Children.map(children, (child) =>
              React.cloneElement(child, {
                onSelect: (val) => {
                  onValueChange(val);
                  setOpen(false);
                }
              })
            )}
          </div>
        )}
      </div>
    );
  };

  const SelectTrigger = ({ children }) => <>{children}</>;

  const SelectContent = ({ children }) => <div>{children}</div>;

  const SelectItem = ({ value, children, onSelect }) => (
    <div
      className="cursor-pointer px-4 py-2 hover:bg-gray-100"
      onClick={() => onSelect(value)}
    >
      {children}
    </div>
  );

  const SelectValue = ({ placeholder }) => <span>{placeholder}</span>;

  const Tabs = ({ defaultValue, children }) => {
    const [activeTab, setActiveTab] = useState(defaultValue);
    
    return (
      <div>
        {React.Children.map(children, (child) => {
          if (child.type === TabsList) {
            return React.cloneElement(child, { activeTab, setActiveTab });
          } else if (child.type === TabsContent) {
            return React.cloneElement(child, { activeTab });
          }
          return child;
        })}
      </div>
    );
  };

  const TabsList = ({ children, activeTab, setActiveTab }) => (
    <div className="inline-flex h-10 items-center justify-center rounded-md bg-gray-100 p-1">
      {React.Children.map(children, (child) =>
        React.cloneElement(child, { activeTab, setActiveTab })
      )}
    </div>
  );

  const TabsTrigger = ({ value, children, activeTab, setActiveTab }) => (
    <button
      onClick={() => setActiveTab(value)}
      className={`
        inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium
        ${activeTab === value ? 'bg-white shadow-sm' : 'hover:bg-gray-200'}
      `}
    >
      {children}
    </button>
  );

  const TabsContent = ({ value, children, activeTab }) => (
    <div className="mt-2">{activeTab === value && children}</div>
  );

  // Íconos
  const SearchIcon = () => <span className="text-gray-400">🔍</span>;
  const PlusIcon = () => <span>➕</span>;
  const EditIcon = () => <span>✏️</span>;
  const BanIcon = () => <span>🚫</span>;
  const CheckCircleIcon = () => <span>✅</span>;
  const HeartIcon = () => <span>❤️</span>;
  const CalendarIcon = () => <span>📅</span>;
  const PhoneIcon = () => <span>📞</span>;
  const UserIcon = () => <span>👤</span>;
  const PawIcon = () => <span>🐾</span>;

  // Estados del componente
  const [pets, setPets] = useState([
    {
      id: "1",
      name: "Max",
      species: "Perro",
      breed: "Golden Retriever",
      age: 3,
      weight: 28.5,
      color: "Dorado",
      gender: "Macho",
      owner: "Juan Pérez",
      ownerPhone: "+57 300 123 4567",
      ownerEmail: "juan.perez@email.com",
      microchip: "123456789012345",
      status: "Activo",
      lastVisit: "2024-01-15",
      nextAppointment: "2024-02-15",
      vaccinations: ["Rabia", "Parvovirus", "Moquillo"],
      medicalNotes: "Paciente sano, control rutinario cada 6 meses",
    },
    {
      id: "2",
      name: "Luna",
      species: "Gato",
      breed: "Siamés",
      age: 2,
      weight: 4.2,
      color: "Crema y marrón",
      gender: "Hembra",
      owner: "María García",
      ownerPhone: "+57 301 987 6543",
      ownerEmail: "maria.garcia@email.com",
      status: "Activo",
      lastVisit: "2024-01-10",
      vaccinations: ["Triple felina", "Rabia"],
      medicalNotes: "Esterilizada, muy sociable",
    },
  ]);

  const [searchTerm, setSearchTerm] = useState("");
  const [selectedPet, setSelectedPet] = useState(null);
  const [isAddDialogOpen, setIsAddDialogOpen] = useState(false);
  const [isEditDialogOpen, setIsEditDialogOpen] = useState(false);
  const [isViewDialogOpen, setIsViewDialogOpen] = useState(false);
  const [newPet, setNewPet] = useState({
    name: "",
    species: "",
    breed: "",
    age: 0,
    weight: 0,
    color: "",
    gender: "Macho",
    owner: "",
    ownerPhone: "",
    ownerEmail: "",
    microchip: "",
    status: "Activo",
    lastVisit: "",
    nextAppointment: "",
    vaccinations: [],
    medicalNotes: "",
  });

  // Funciones de filtrado y manejo
  const filteredPets = pets.filter(
    (pet) =>
      pet.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      pet.owner.toLowerCase().includes(searchTerm.toLowerCase()) ||
      pet.species.toLowerCase().includes(searchTerm.toLowerCase()) ||
      pet.breed.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleAddPet = () => {
    const pet = {
      ...newPet,
      id: Date.now().toString(),
      vaccinations: newPet.vaccinations || [],
    };
    setPets([...pets, pet]);
    setNewPet({
      name: "",
      species: "",
      breed: "",
      age: 0,
      weight: 0,
      color: "",
      gender: "Macho",
      owner: "",
      ownerPhone: "",
      ownerEmail: "",
      microchip: "",
      status: "Activo",
      lastVisit: "",
      nextAppointment: "",
      vaccinations: [],
      medicalNotes: "",
    });
    setIsAddDialogOpen(false);
  };

  const handleUpdatePet = () => {
    if (selectedPet) {
      setPets(pets.map((pet) => (pet.id === selectedPet.id ? selectedPet : pet)));
      setIsEditDialogOpen(false);
      setSelectedPet(null);
    }
  };

  const handleToggleStatus = (petId) => {
    setPets(
      pets.map((pet) =>
        pet.id === petId ? { ...pet, status: pet.status === "Activo" ? "Inactivo" : "Activo" } : pet
      )
    );
  };

  const handleViewPet = (pet) => {
    setSelectedPet(pet);
    setIsViewDialogOpen(true);
  };

  const handleEditPet = (pet) => {
    setSelectedPet(pet);
    setIsEditDialogOpen(true);
  };

  return (
    <div className="container mx-auto p-6 space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <PawIcon />
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Gestión de Pacientes</h1>
            <p className="text-gray-600">Clínica Veterinaria - Sistema de Pacientes</p>
          </div>
        </div>
        <Dialog open={isAddDialogOpen} onOpenChange={setIsAddDialogOpen}>
          <DialogTrigger onClick={() => setIsAddDialogOpen(true)}>
            <Button className="bg-blue-600 hover:bg-blue-700 text-white">
              <PlusIcon /> Agregar Paciente
            </Button>
          </DialogTrigger>
          <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
            <DialogHeader>
              <DialogTitle>Registrar Nuevo Paciente</DialogTitle>
              <DialogDescription>Complete la información de la mascota y su propietario</DialogDescription>
            </DialogHeader>
            <Tabs defaultValue="pet">
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="pet">Datos del Paciente</TabsTrigger>
                <TabsTrigger value="owner">Datos del Propietario</TabsTrigger>
              </TabsList>
              <TabsContent value="pet" className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="name">Nombre *</Label>
                    <Input
                      id="name"
                      value={newPet.name}
                      onChange={(e) => setNewPet({ ...newPet, name: e.target.value })}
                      placeholder="Nombre de la mascota"
                    />
                  </div>
                  <div>
                    <Label htmlFor="species">Especie *</Label>
                    <Select
                      value={newPet.species}
                      onValueChange={(value) => setNewPet({ ...newPet, species: value })}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Seleccionar especie" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="Perro">Perro</SelectItem>
                        <SelectItem value="Gato">Gato</SelectItem>
                        <SelectItem value="Ave">Ave</SelectItem>
                        <SelectItem value="Conejo">Conejo</SelectItem>
                        <SelectItem value="Hamster">Hamster</SelectItem>
                        <SelectItem value="Otro">Otro</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label htmlFor="breed">Raza</Label>
                    <Input
                      id="breed"
                      value={newPet.breed}
                      onChange={(e) => setNewPet({ ...newPet, breed: e.target.value })}
                      placeholder="Raza de la mascota"
                    />
                  </div>
                  <div>
                    <Label htmlFor="gender">Género</Label>
                    <Select
                      value={newPet.gender}
                      onValueChange={(value) => setNewPet({ ...newPet, gender: value })}
                    >
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="Macho">Macho</SelectItem>
                        <SelectItem value="Hembra">Hembra</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label htmlFor="age">Edad (años)</Label>
                    <Input
                      id="age"
                      type="number"
                      value={newPet.age}
                      onChange={(e) => setNewPet({ ...newPet, age: Number(e.target.value) || 0 })}
                      placeholder="Edad"
                    />
                  </div>
                  <div>
                    <Label htmlFor="weight">Peso (kg)</Label>
                    <Input
                      id="weight"
                      type="number"
                      step="0.1"
                      value={newPet.weight}
                      onChange={(e) => setNewPet({ ...newPet, weight: Number(e.target.value) || 0 })}
                      placeholder="Peso"
                    />
                  </div>
                  <div>
                    <Label htmlFor="color">Color</Label>
                    <Input
                      id="color"
                      value={newPet.color}
                      onChange={(e) => setNewPet({ ...newPet, color: e.target.value })}
                      placeholder="Color del pelaje"
                    />
                  </div>
                  <div>
                    <Label htmlFor="microchip">Microchip</Label>
                    <Input
                      id="microchip"
                      value={newPet.microchip}
                      onChange={(e) => setNewPet({ ...newPet, microchip: e.target.value })}
                      placeholder="Número de microchip"
                    />
                  </div>
                </div>
                <div>
                  <Label htmlFor="medicalNotes">Notas Médicas</Label>
                  <Textarea
                    id="medicalNotes"
                    value={newPet.medicalNotes}
                    onChange={(e) => setNewPet({ ...newPet, medicalNotes: e.target.value })}
                    placeholder="Observaciones médicas, alergias, tratamientos..."
                    rows={3}
                  />
                </div>
              </TabsContent>
              <TabsContent value="owner" className="space-y-4">
                <div>
                  <Label htmlFor="owner">Nombre del Propietario *</Label>
                  <Input
                    id="owner"
                    value={newPet.owner}
                    onChange={(e) => setNewPet({ ...newPet, owner: e.target.value })}
                    placeholder="Nombre completo"
                  />
                </div>
                <div>
                  <Label htmlFor="ownerPhone">Teléfono *</Label>
                  <Input
                    id="ownerPhone"
                    value={newPet.ownerPhone}
                    onChange={(e) => setNewPet({ ...newPet, ownerPhone: e.target.value })}
                    placeholder="+57 300 123 4567"
                  />
                </div>
                <div>
                  <Label htmlFor="ownerEmail">Email</Label>
                  <Input
                    id="ownerEmail"
                    type="email"
                    value={newPet.ownerEmail}
                    onChange={(e) => setNewPet({ ...newPet, ownerEmail: e.target.value })}
                    placeholder="correo@ejemplo.com"
                  />
                </div>
                <div>
                  <Label htmlFor="lastVisit">Última Visita</Label>
                  <Input
                    id="lastVisit"
                    type="date"
                    value={newPet.lastVisit}
                    onChange={(e) => setNewPet({ ...newPet, lastVisit: e.target.value })}
                  />
                </div>
                <div>
                  <Label htmlFor="nextAppointment">Próxima Cita</Label>
                  <Input
                    id="nextAppointment"
                    type="date"
                    value={newPet.nextAppointment}
                    onChange={(e) => setNewPet({ ...newPet, nextAppointment: e.target.value })}
                  />
                </div>
              </TabsContent>
            </Tabs>
            <DialogFooter>
              <Button variant="outline" onClick={() => setIsAddDialogOpen(false)}>
                Cancelar
              </Button>
              <Button onClick={handleAddPet} className="bg-blue-600 hover:bg-blue-700 text-white">
                Registrar Paciente
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>

      {/* Search and Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card className="md:col-span-2">
          <CardContent className="p-4">
            <div className="relative">
              <div className="absolute left-3 top-3">
                <SearchIcon />
              </div>
              <Input
                placeholder="Buscar por nombre, propietario, especie o raza..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center space-x-2">
              <HeartIcon />
              <div>
                <p className="text-sm text-gray-600">Pacientes Activos</p>
                <p className="text-2xl font-bold text-green-600">
                  {pets.filter((pet) => pet.status === "Activo").length}
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center space-x-2">
              <PawIcon />
              <div>
                <p className="text-sm text-gray-600">Total Pacientes</p>
                <p className="text-2xl font-bold text-blue-600">{pets.length}</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Pets Table */}
      <Card>
        <CardHeader>
          <CardTitle>Lista de Pacientes</CardTitle>
          <CardDescription>Gestiona la información de todos los pacientes registrados</CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Paciente</TableHead>
                <TableHead>Especie/Raza</TableHead>
                <TableHead>Propietario</TableHead>
                <TableHead>Contacto</TableHead>
                <TableHead>Estado</TableHead>
                <TableHead>Última Visita</TableHead>
                <TableHead>Acciones</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredPets.map((pet) => (
                <TableRow key={pet.id}>
                  <TableCell>
                    <div className="flex items-center space-x-3">
                      <Avatar>
                        <AvatarFallback className="bg-blue-100 text-blue-600">
                          {pet.name.charAt(0)}
                        </AvatarFallback>
                      </Avatar>
                      <div>
                        <p className="font-medium">{pet.name}</p>
                        <p className="text-sm text-gray-500">
                          {pet.age} años • {pet.gender}
                        </p>
                      </div>
                    </div>
                  </TableCell>
                  <TableCell>
                    <div>
                      <p className="font-medium">{pet.species}</p>
                      <p className="text-sm text-gray-500">{pet.breed}</p>
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center space-x-2">
                      <UserIcon />
                      <span>{pet.owner}</span>
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center space-x-2">
                      <PhoneIcon />
                      <span className="text-sm">{pet.ownerPhone}</span>
                    </div>
                  </TableCell>
                  <TableCell>
                    <Badge variant={pet.status === "Activo" ? "default" : "secondary"}>
                      {pet.status === "Activo" ? <CheckCircleIcon /> : <BanIcon />}
                      {pet.status}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center space-x-2">
                      <CalendarIcon />
                      <span className="text-sm">{pet.lastVisit}</span>
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center space-x-2">
                      <Button variant="ghost" size="sm" onClick={() => handleViewPet(pet)}>
                        Ver
                      </Button>
                      <Button variant="ghost" size="sm" onClick={() => handleEditPet(pet)}>
                        <EditIcon />
                      </Button>
                      <div className="flex items-center space-x-2">
                        <Switch
                          checked={pet.status === "Activo"}
                          onCheckedChange={() => handleToggleStatus(pet.id)}
                        />
                      </div>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      {/* View Pet Dialog */}
      <Dialog open={isViewDialogOpen} onOpenChange={setIsViewDialogOpen}>
        <DialogContent className="max-w-2xl">
          {selectedPet && (
            <>
              <DialogHeader>
                <DialogTitle className="flex items-center space-x-2">
                  <Avatar className="h-8 w-8">
                    <AvatarFallback className="bg-blue-100 text-blue-600">
                      {selectedPet.name.charAt(0)}
                    </AvatarFallback>
                  </Avatar>
                  <span>Perfil de {selectedPet.name}</span>
                </DialogTitle>
              </DialogHeader>
              <Tabs defaultValue="info">
                <TabsList className="grid w-full grid-cols-3">
                  <TabsTrigger value="info">Información</TabsTrigger>
                  <TabsTrigger value="medical">Historial Médico</TabsTrigger>
                  <TabsTrigger value="owner">Propietario</TabsTrigger>
                </TabsList>
                <TabsContent value="info" className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label>Especie</Label>
                      <p className="text-sm font-medium">{selectedPet.species}</p>
                    </div>
                    <div>
                      <Label>Raza</Label>
                      <p className="text-sm font-medium">{selectedPet.breed}</p>
                    </div>
                    <div>
                      <Label>Edad</Label>
                      <p className="text-sm font-medium">{selectedPet.age} años</p>
                    </div>
                    <div>
                      <Label>Peso</Label>
                      <p className="text-sm font-medium">{selectedPet.weight} kg</p>
                    </div>
                    <div>
                      <Label>Color</Label>
                      <p className="text-sm font-medium">{selectedPet.color}</p>
                    </div>
                    <div>
                      <Label>Género</Label>
                      <p className="text-sm font-medium">{selectedPet.gender}</p>
                    </div>
                    {selectedPet.microchip && (
                      <div className="col-span-2">
                        <Label>Microchip</Label>
                        <p className="text-sm font-medium">{selectedPet.microchip}</p>
                      </div>
                    )}
                  </div>
                </TabsContent>
                <TabsContent value="medical" className="space-y-4">
                  <div>
                    <Label>Vacunas</Label>
                    <div className="flex flex-wrap gap-2 mt-2">
                      {selectedPet.vaccinations.map((vaccine, index) => (
                        <Badge key={index} variant="outline">
                          {vaccine}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  <div>
                    <Label>Notas Médicas</Label>
                    <p className="text-sm mt-1 p-3 bg-gray-50 rounded-md">
                      {selectedPet.medicalNotes || "Sin notas médicas"}
                    </p>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label>Última Visita</Label>
                      <p className="text-sm font-medium">{selectedPet.lastVisit}</p>
                    </div>
                    {selectedPet.nextAppointment && (
                      <div>
                        <Label>Próxima Cita</Label>
                        <p className="text-sm font-medium">{selectedPet.nextAppointment}</p>
                      </div>
                    )}
                  </div>
                </TabsContent>
                <TabsContent value="owner" className="space-y-4">
                  <div>
                    <Label>Nombre</Label>
                    <p className="text-sm font-medium">{selectedPet.owner}</p>
                  </div>
                  <div>
                    <Label>Teléfono</Label>
                    <p className="text-sm font-medium">{selectedPet.ownerPhone}</p>
                  </div>
                  {selectedPet.ownerEmail && (
                    <div>
                      <Label>Email</Label>
                      <p className="text-sm font-medium">{selectedPet.ownerEmail}</p>
                    </div>
                  )}
                </TabsContent>
              </Tabs>
            </>
          )}
        </DialogContent>
      </Dialog>

      {/* Edit Pet Dialog */}
      <Dialog open={isEditDialogOpen} onOpenChange={setIsEditDialogOpen}>
        <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
          {selectedPet && (
            <>
              <DialogHeader>
                <DialogTitle>Actualizar Información de {selectedPet.name}</DialogTitle>
                <DialogDescription>Modifica los datos del paciente</DialogDescription>
              </DialogHeader>
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="edit-name">Nombre</Label>
                    <Input
                      id="edit-name"
                      value={selectedPet.name}
                      onChange={(e) => setSelectedPet({ ...selectedPet, name: e.target.value })}
                    />
                  </div>
                  <div>
                    <Label htmlFor="edit-species">Especie</Label>
                    <Select
                      value={selectedPet.species}
                      onValueChange={(value) => setSelectedPet({ ...selectedPet, species: value })}
                    >
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="Perro">Perro</SelectItem>
                        <SelectItem value="Gato">Gato</SelectItem>
                        <SelectItem value="Ave">Ave</SelectItem>
                        <SelectItem value="Conejo">Conejo</SelectItem>
                        <SelectItem value="Hamster">Hamster</SelectItem>
                        <SelectItem value="Otro">Otro</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label htmlFor="edit-breed">Raza</Label>
                    <Input
                      id="edit-breed"
                      value={selectedPet.breed}
                      onChange={(e) => setSelectedPet({ ...selectedPet, breed: e.target.value })}
                    />
                  </div>
                  <div>
                    <Label htmlFor="edit-age">Edad</Label>
                    <Input
                      id="edit-age"
                      type="number"
                      value={selectedPet.age}
                      onChange={(e) =>
                        setSelectedPet({ ...selectedPet, age: Number(e.target.value) || 0 })
                      }
                    />
                  </div>
                  <div>
                    <Label htmlFor="edit-weight">Peso (kg)</Label>
                    <Input
                      id="edit-weight"
                      type="number"
                      step="0.1"
                      value={selectedPet.weight}
                      onChange={(e) =>
                        setSelectedPet({ ...selectedPet, weight: Number(e.target.value) || 0 })
                      }
                    />
                  </div>
                  <div>
                    <Label htmlFor="edit-color">Color</Label>
                    <Input
                      id="edit-color"
                      value={selectedPet.color}
                      onChange={(e) => setSelectedPet({ ...selectedPet, color: e.target.value })}
                    />
                  </div>
                </div>
                <div>
                  <Label htmlFor="edit-owner">Propietario</Label>
                  <Input
                    id="edit-owner"
                    value={selectedPet.owner}
                    onChange={(e) => setSelectedPet({ ...selectedPet, owner: e.target.value })}
                  />
                </div>
                <div>
                  <Label htmlFor="edit-phone">Teléfono</Label>
                  <Input
                    id="edit-phone"
                    value={selectedPet.ownerPhone}
                    onChange={(e) => setSelectedPet({ ...selectedPet, ownerPhone: e.target.value })}
                  />
                </div>
                <div>
                  <Label htmlFor="edit-notes">Notas Médicas</Label>
                  <Textarea
                    id="edit-notes"
                    value={selectedPet.medicalNotes}
                    onChange={(e) => setSelectedPet({ ...selectedPet, medicalNotes: e.target.value })}
                    rows={3}
                  />
                </div>
              </div>
              <DialogFooter>
                <Button variant="outline" onClick={() => setIsEditDialogOpen(false)}>
                  Cancelar
                </Button>
                <Button onClick={handleUpdatePet} className="bg-blue-600 hover:bg-blue-700 text-white">
                  Actualizar
                </Button>
              </DialogFooter>
            </>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Mascotas;