// app/book/page.tsx
"use client";

import { useState, useEffect, useMemo } from 'react';
import { CheckCircle, Loader, AlertCircle } from 'lucide-react';
import type { Service as SelectableService, Employee as SelectableEmployee } from '@/components/shared/types';

export default function BookingPage() {
    // State for managing the multi-step form flow
    const [step, setStep] = useState(1);
    
    // State for data fetched from the API
    const [services, setServices] = useState<SelectableService[]>([]);
    const [employees, setEmployees] = useState<SelectableEmployee[]>([]);
    const [availableTimes, setAvailableTimes] = useState<string[]>([]);

    // State for user selections
    const [selectedServiceIds, setSelectedServiceIds] = useState<string[]>([]);
    const [selectedEmployeeId, setSelectedEmployeeId] = useState<string | null>(null);
    const [selectedDate, setSelectedDate] = useState<Date>(new Date());
    const [selectedTime, setSelectedTime] = useState<string | null>(null);
    const [customerDetails, setCustomerDetails] = useState({ name: '', phone: '' });

    // State for UI feedback (loading, errors)
    const [isLoading, setIsLoading] = useState(false);
    const [isFetchingTimes, setIsFetchingTimes] = useState(false);
    const [error, setError] = useState<string | null>(null);
    
    // Calculate the total duration of selected services
    const totalDuration = useMemo(() => {
        return selectedServiceIds.reduce((total, serviceId) => {
            const service = services.find(s => s.id === serviceId);
            return total + (service ? service.duration : 0);
        }, 0);
    }, [selectedServiceIds, services]);

    // Effect to fetch initial data (services and employees) on component mount
    useEffect(() => {
        const fetchData = async () => {
            setIsLoading(true);
            try {
                const [servicesRes, employeesRes] = await Promise.all([
                    fetch('/api/services'),
                    fetch('/api/employees')
                ]);
                if (!servicesRes.ok || !employeesRes.ok) throw new Error("Failed to load booking information.");
                
                const servicesData = await servicesRes.json();
                const employeesData = await employeesRes.json();
                setServices(servicesData);
                setEmployees(employeesData);
            } catch (err) {
                setError('Could not load booking information. Please try again later.');
            } finally {
                setIsLoading(false);
            }
        };
        fetchData();
    }, []);

    // Effect to fetch available times whenever the date, employee, or services change
    useEffect(() => {
        const fetchAvailableTimes = async () => {
            if (!selectedDate || !selectedEmployeeId || totalDuration === 0) {
                setAvailableTimes([]);
                return;
            }

            setIsFetchingTimes(true);
            setError(null);
            try {
                const params = new URLSearchParams({
                    employeeId: selectedEmployeeId,
                    date: selectedDate.toISOString().split('T')[0], // yyyy-MM-dd
                    duration: String(totalDuration),
                });
                const response = await fetch(`/api/availability?${params.toString()}`);
                
                if (!response.ok) throw new Error("Could not fetch available times.");

                const times = await response.json();
                setAvailableTimes(times);
            } catch (err: any) {
                setError(err.message || 'An error occurred fetching times.');
                setAvailableTimes([]);
            } finally {
                setIsFetchingTimes(false);
            }
        };

        if (step === 3) {
            fetchAvailableTimes();
        }
    }, [selectedDate, selectedEmployeeId, totalDuration, step]);

    const handleServiceSelect = (serviceId: string) => {
        setSelectedServiceIds(prev =>
            prev.includes(serviceId) ? prev.filter(id => id !== serviceId) : [...prev, serviceId]
        );
    };

    const handleSubmitBooking = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!selectedTime || !selectedEmployeeId) {
            setError("Please ensure all details are selected.");
            return;
        }

        setIsLoading(true);
        setError(null);

        const [hours, minutes] = selectedTime.split(':').map(Number);
        const startTime = new Date(selectedDate);
        startTime.setUTCHours(hours, minutes, 0, 0);

        const appointmentData = {
            customerName: customerDetails.name,
            customerPhone: customerDetails.phone,
            employeeId: selectedEmployeeId,
            startTime: startTime.toISOString(),
            serviceIds: selectedServiceIds,
        };

        try {
            const res = await fetch('/api/appointments', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(appointmentData),
            });

            if (!res.ok) {
                const errorData = await res.json();
                throw new Error(errorData.error?.message || 'Failed to create appointment.');
            }
            setStep(5); // Move to confirmation step
        } catch (err: any) {
            setError(err.message);
        } finally {
            setIsLoading(false);
        }
    };
    
    const renderStep = () => {
        switch(step) {
            case 1: // Select Service
                return (
                    <div>
                        <h2 className="text-2xl font-semibold mb-4 text-charcoal">1. Select Your Service(s)</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-h-96 overflow-y-auto pr-2">
                            {services.map(s => (
                                <button key={s.id} onClick={() => handleServiceSelect(s.id)}
                                className={`p-4 border rounded-lg text-left transition-all ${selectedServiceIds.includes(s.id) ? 'border-gold bg-gold/10 ring-2 ring-gold' : 'border-stone/30 hover:border-gold'}`}>
                                    <h3 className="font-bold">{s.name}</h3>
                                    <p className="text-sm text-stone">${Number(s.price).toFixed(2)} - {s.duration} min</p>
                                </button>
                            ))}
                        </div>
                        <button onClick={() => setStep(2)} disabled={selectedServiceIds.length === 0} className="mt-6 w-full bg-charcoal text-cream py-3 rounded-lg disabled:opacity-50 disabled:cursor-not-allowed">Next</button>
                    </div>
                );
            case 2: // Select Employee
                return (
                     <div>
                        <h2 className="text-2xl font-semibold mb-4">2. Choose a Technician</h2>
                        <div className="grid grid-cols-2 gap-4">
                           {employees.map(e => (
                                <button key={e.id} onClick={() => setSelectedEmployeeId(e.id)}
                                className={`p-4 border rounded-lg text-center transition-all ${selectedEmployeeId === e.id ? 'border-gold bg-gold/10 ring-2 ring-gold' : 'border-stone/30 hover:border-gold'}`}>
                                    <h3 className="font-bold">{e.firstName} {e.lastName}</h3>
                                </button>
                            ))}
                        </div>
                        <button onClick={() => setStep(3)} disabled={!selectedEmployeeId} className="mt-6 w-full bg-charcoal text-cream py-3 rounded-lg disabled:opacity-50 disabled:cursor-not-allowed">Next</button>
                        <button type="button" onClick={() => setStep(1)} className="mt-2 w-full text-stone text-sm hover:underline">Back</button>
                    </div>
                );
            case 3: // Select Date & Time
                return (
                    <div>
                        <h2 className="text-2xl font-semibold mb-4">3. Select Date & Time</h2>
                        <input type="date" min={new Date().toISOString().split('T')[0]} value={selectedDate.toISOString().split('T')[0]} onChange={e => setSelectedDate(new Date(e.target.value))} className="w-full p-2 border rounded-lg mb-4"/>
                        {isFetchingTimes ? (
                            <div className="flex justify-center items-center h-48"><Loader className="animate-spin text-gold" /></div>
                        ) : (
                            <div className="grid grid-cols-3 md:grid-cols-4 gap-2 max-h-64 overflow-y-auto pr-2">
                               {availableTimes.length > 0 ? availableTimes.map(time => (
                                    <button key={time} onClick={() => setSelectedTime(time)} className={`p-2 border rounded-lg transition-colors ${selectedTime === time ? 'bg-gold text-white border-gold' : 'hover:bg-gold/10 hover:border-gold'}`}>{time}</button>
                               )) : <p className="col-span-full text-center text-stone py-10">No available times for this day. Please try another date.</p>}
                            </div>
                        )}
                        <button onClick={() => setStep(4)} disabled={!selectedTime} className="mt-6 w-full bg-charcoal text-cream py-3 rounded-lg disabled:opacity-50 disabled:cursor-not-allowed">Next</button>
                        <button type="button" onClick={() => setStep(2)} className="mt-2 w-full text-stone text-sm hover:underline">Back</button>
                    </div>
                );
            case 4: // Customer Details
                 return (
                    <div>
                        <h2 className="text-2xl font-semibold mb-4">4. Your Details</h2>
                        <form onSubmit={handleSubmitBooking} className="space-y-4">
                            <input type="text" placeholder="Full Name" value={customerDetails.name} onChange={e => setCustomerDetails({...customerDetails, name: e.target.value})} className="w-full p-3 border rounded-lg" required/>
                            <input type="tel" placeholder="Phone Number" value={customerDetails.phone} onChange={e => setCustomerDetails({...customerDetails, phone: e.target.value})} className="w-full p-3 border rounded-lg" required/>
                            <button type="submit" disabled={isLoading} className="mt-6 w-full bg-charcoal text-cream py-3 rounded-lg disabled:opacity-50 flex items-center justify-center">
                                {isLoading ? <Loader className="animate-spin" /> : 'Confirm Booking'}
                            </button>
                            <button type="button" onClick={() => setStep(3)} className="mt-2 w-full text-stone text-sm hover:underline">Back</button>
                        </form>
                    </div>
                );
             case 5: // Confirmation
                return (
                    <div className="text-center py-8">
                        <CheckCircle className="mx-auto h-16 w-16 text-green-500" />
                        <h2 className="mt-4 text-2xl font-semibold">Thank You!</h2>
                        <p className="mt-2 text-stone">Your appointment has been successfully booked. We look forward to seeing you!</p>
                        <a href="/" className="mt-8 inline-block bg-charcoal text-cream px-8 py-3 rounded-lg hover:bg-gold transition-colors">Back to Home</a>
                    </div>
                );
        }
    };
    
    return (
        <div className="bg-white py-16">
            <div className="max-w-2xl mx-auto px-4">
                <h1 className="text-center text-4xl font-bold text-charcoal mb-8">Book an Appointment</h1>
                <div className="bg-cream p-8 rounded-xl shadow-lg">
                    {error && (
                        <div className="mb-4 p-3 bg-red-100 text-red-700 rounded-lg flex items-center text-sm">
                            <AlertCircle className="h-5 w-5 mr-2 flex-shrink-0" />
                            <span>{error}</span>
                        </div>
                    )}
                    {/* The undefined 'showEventModal' variable was removed from this condition */}
                    {isLoading && step < 5 ? (
                         <div className="flex justify-center items-center h-96"><Loader className="animate-spin text-gold" /></div>
                    ) : (
                        renderStep()
                    )}
                </div>
            </div>
        </div>
    );
}
