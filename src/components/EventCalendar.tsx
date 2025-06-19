"use client"

import { useState } from "react";
import Calendar from "react-calendar";
import 'react-calendar/dist/Calendar.css';
import Image from "next/image";


type ValuePiece = Date | null;
type Value = ValuePiece |  [ValuePiece, ValuePiece]

const events = [
    {
        id: 1,
        title: "Welcome Home",
        time: "15.00 - 16:00",
        description: "This is the FIRST hardcoded event",
    },
    {
        id: 2,
        title: "Welcome to Work",
        time: "17.00 - 18:00",
        description: "This is the SECOND hardcoded event",
    },

    {
        id: 1,
        title: "Time To Rest",
        time: "18.00 - 20:00",
        description: "This is the THIRD hardcoded event",
    },

];



const EventCalendar = () => {
    const [value, onChange] = useState<Value>(new Date());
    return (
        <div className="bg-white rounded-md p-4">
            <Calendar onChange={onChange} value={value}/>
            <div className="flex items-center justify-between">
                <h1 className="text-xl font-semibold my-4">Events</h1>
                <Image src="/moreDark.png" alt="" width={20} height={20} />
            </div>
            <div className="flex flex-col gap-4">
                {events.map(event=>(
                    <div className="p-5 rounded-md border-2 border-gray-100 border-t-4 odd:border-t-lamaSky even:border-t-lamaPurple" key={event.id}>
                        <div className="flex items-center justify-between">
                            <h1 className="font-semibold text-gray-600">{event.title}</h1>
                            <span className="text-gray-400">{event.time}</span>
                        </div>
                        <p className="mt-2 text-gray-500 text-xs">{event.description}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default EventCalendar