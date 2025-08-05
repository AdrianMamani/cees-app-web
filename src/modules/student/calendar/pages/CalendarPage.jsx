// src/components/CalendarPage.jsx
import React from 'react';
import { Calendar, Views } from 'react-big-calendar';
import { useNavigate } from 'react-router-dom';
import { localizer } from '../../../../localizer';

const initialEvents = [
  {
    id: 1,
    title: 'Evento de pruebad sdsadasdsads ad',
    start: new Date(2025, 6, 3, 10, 0, 0),
    end: new Date(2025, 6, 1, 12, 0, 0),
    color: '#f00', 
  },
  {
    id: 4,
    title: 'Evento de prueba',
    start: new Date(2025, 6, 3, 10, 0, 0),
    end: new Date(2025, 6, 1, 12, 0, 0),
    color: '#f00', 
  },
  {
    id: 3,
    title: 'Evento de prueba',
    start: new Date(2025, 6, 3, 10, 0, 0),
    end: new Date(2025, 6, 1, 12, 0, 0),
    color: '#f00', 
  },
  {
    id: 1,
    title: 'Evento de prueba',
    start: new Date(2025, 6, 3, 10, 0, 0),
    end: new Date(2025, 6, 1, 12, 0, 0),
    color: '#f00', 
  },
  {
    id: 1,
    title: 'Evento de prueba',
    start: new Date(2025, 6, 3, 10, 0, 0),
    end: new Date(2025, 6, 1, 12, 0, 0),
    color: '#f00', 
  },
  {
    id: 2,
    title: 'Otro evento',
    start: new Date(2025, 7, 3, 14, 0, 0),
    end: new Date(2025, 7, 2, 16, 0, 0),
    color: '#00f', 
  },
];

export default function CalendarPage() {
  const navigate = useNavigate();

  const messages = {
    allDay: 'Todo el día',
    previous: '<',
    next: '>',
    today: 'Hoy',
    month: 'Mes',
    week: 'Semana',
    day: 'Día',
    agenda: 'Agenda',
    date: 'Fecha',
    time: 'Hora',
    event: 'Evento',
    noEventsInRange: 'Sin eventos',
    showMore: total => `+${total} más`,
  };

  const eventStyleGetter = (event) => ({
    style: {
      backgroundColor: event.color || '#3174ad',
      color: 'white',
      borderRadius: '4px',
      padding: '2px 4px',
    },
  });

  return (
    <div className="h-[700px] p-5">
      <Calendar
        localizer={localizer}
        culture="es"
        messages={messages}
        events={initialEvents}    
        startAccessor="start"
        endAccessor="end"
        views={[Views.MONTH, Views.WEEK, Views.DAY, Views.AGENDA]}
        defaultView={Views.MONTH}
        selectable={false}            
        onSelectEvent={(event) => {
          
          navigate(`/evento/${event.id}`);
        }}
        eventPropGetter={eventStyleGetter}
        style={{ padding: '10px' }}
      />
    </div>
  );
}
