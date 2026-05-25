import React, { useState } from 'react';
import { Calendar, Clock, ArrowRight, ShieldCheck, Zap, Car, Truck, Bike } from 'lucide-react';
import { motion } from 'motion/react';
import { cn } from '../lib/utils';

export default function Hero() {
  const [entryDate, setEntryDate] = useState('');
  const [entryTime, setEntryTime] = useState('12:00');
  const [exitDate, setExitDate] = useState('');
  const [exitTime, setExitTime] = useState('12:00');
  const [vehicleType, setVehicleType] = useState<'auto' | 'moto' | 'van'>('auto');
  const [isExpanded, setIsExpanded] = useState(false);

  // New form fields
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [passengers, setPassengers] = useState('1');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [plate, setPlate] = useState('');
  const [destination, setDestination] = useState('');
  const [consent1, setConsent1] = useState(false);
  const [consent2, setConsent2] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!isExpanded) {
      if (!entryDate || !exitDate) {
        alert('Per favore seleziona le date di ingresso e uscita');
        return;
      }
      setIsExpanded(true);
      return;
    }
    
    if (!consent1 || !consent2) {
      alert('Per favore fornisci il consenso al trattamento dei dati');
      return;
    }

    alert(`Prenotazione: Dal ${entryDate} alle ${entryTime} al ${exitDate} alle ${exitTime} - Veicolo: ${vehicleType}\nCliente: ${firstName} ${lastName}\nTelefono: ${phone}\nEmail: ${email}\nTarga: ${plate}\nDestinazione: ${destination}`);
  };

  return (
    <section className="relative pt-40 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-slate-50">
      {/* Background decoration */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-brand-blue/5 rounded-full blur-3xl" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-brand-muted/10 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center mb-12">
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl"
          >
            <h1 className="text-5xl lg:text-7xl font-extrabold text-brand-dark leading-tight tracking-tight">
              Prenota il tuo parcheggio vicino l'Aeroporto di <span className="text-brand-blue">Palermo</span>.
            </h1>
            <p className="mt-6 text-xl text-slate-600 max-w-2xl mx-auto">
              Situato sulla SS113, a pochi minuti dall'aeroporto Falcone-Borsellino. Navetta gratuita h24 e massima sicurezza per la tua auto.
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-12 w-full bg-white rounded-3xl shadow-2xl shadow-brand-dark/10 border border-slate-100 p-8 lg:p-12"
          >
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-8">
              <h2 className="text-3xl font-bold text-brand-dark flex items-center gap-3">
                <Car className="text-brand-blue h-8 w-8" />
                Prenota il tuo posto auto
              </h2>
              <div className="flex items-center gap-4 text-slate-500 font-medium">
                <span className="flex items-center gap-2 bg-slate-50 px-3 py-1 rounded-lg border border-slate-100">
                  <ShieldCheck className="h-4 w-4 text-green-500" />
                  Cancellazione Gratuita
                </span>
              </div>
            </div>
            
            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="flex flex-col space-y-4">
                <label className="text-sm font-bold text-slate-700 ml-1">Tipo di Veicolo</label>
                <div className="grid grid-cols-3 gap-4">
                  {[
                    { id: 'auto', label: 'Auto', icon: Car },
                    { id: 'moto', label: 'Moto', icon: Bike },
                    { id: 'van', label: 'Van', icon: Truck },
                  ].map((type) => (
                    <button
                      key={type.id}
                      type="button"
                      onClick={() => setVehicleType(type.id as any)}
                      className={cn(
                        "flex flex-col items-center gap-2 p-4 rounded-2xl border-2 transition-all",
                        vehicleType === type.id 
                          ? "border-brand-blue bg-brand-blue/5 text-brand-blue" 
                          : "border-slate-100 bg-slate-50 text-slate-500 hover:border-slate-200"
                      )}
                    >
                      <type.icon className="h-6 w-6" />
                      <span className="font-bold text-sm">{type.label}</span>
                    </button>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700 ml-1">Data Entrata</label>
                  <div className="relative">
                    <Calendar className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-brand-muted" />
                    <input 
                      type="date" 
                      required
                      value={entryDate}
                      onChange={(e) => setEntryDate(e.target.value)}
                      className="w-full pl-12 pr-4 py-4 bg-slate-50 border border-slate-200 rounded-2xl focus:ring-2 focus:ring-brand-blue focus:border-transparent outline-none transition-all font-medium"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700 ml-1">Ora Entrata</label>
                  <div className="relative">
                    <Clock className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-brand-muted" />
                    <input 
                      type="time" 
                      required
                      value={entryTime}
                      onChange={(e) => setEntryTime(e.target.value)}
                      className="w-full pl-12 pr-4 py-4 bg-slate-50 border border-slate-200 rounded-2xl focus:ring-2 focus:ring-brand-blue focus:border-transparent outline-none transition-all font-medium"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700 ml-1">Data Uscita</label>
                  <div className="relative">
                    <Calendar className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-brand-muted" />
                    <input 
                      type="date" 
                      required
                      value={exitDate}
                      onChange={(e) => setExitDate(e.target.value)}
                      className="w-full pl-12 pr-4 py-4 bg-slate-50 border border-slate-200 rounded-2xl focus:ring-2 focus:ring-brand-blue focus:border-transparent outline-none transition-all font-medium"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700 ml-1">Ora Uscita</label>
                  <div className="relative">
                    <Clock className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-brand-muted" />
                    <input 
                      type="time" 
                      required
                      value={exitTime}
                      onChange={(e) => setExitTime(e.target.value)}
                      className="w-full pl-12 pr-4 py-4 bg-slate-50 border border-slate-200 rounded-2xl focus:ring-2 focus:ring-brand-blue focus:border-transparent outline-none transition-all font-medium"
                    />
                  </div>
                </div>
              </div>

              <motion.div 
                initial={false}
                animate={{ height: isExpanded ? 'auto' : 0, opacity: isExpanded ? 1 : 0 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className="overflow-hidden"
              >
                <div className="pt-8 border-t border-slate-100 space-y-8">
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-slate-700 ml-1">Nome</label>
                      <input 
                        type="text" 
                        required={isExpanded}
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                        placeholder="Nome"
                        className="w-full px-6 py-4 bg-slate-50 border border-slate-200 rounded-2xl focus:ring-2 focus:ring-brand-blue focus:border-transparent outline-none transition-all font-medium"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-slate-700 ml-1">Cognome</label>
                      <input 
                        type="text" 
                        required={isExpanded}
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                        placeholder="Cognome"
                        className="w-full px-6 py-4 bg-slate-50 border border-slate-200 rounded-2xl focus:ring-2 focus:ring-brand-blue focus:border-transparent outline-none transition-all font-medium"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-slate-700 ml-1">N. Passeggeri</label>
                      <input 
                        type="number" 
                        required={isExpanded}
                        min="1"
                        value={passengers}
                        onChange={(e) => setPassengers(e.target.value)}
                        className="w-full px-6 py-4 bg-slate-50 border border-slate-200 rounded-2xl focus:ring-2 focus:ring-brand-blue focus:border-transparent outline-none transition-all font-medium"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-slate-700 ml-1">Telefono</label>
                      <input 
                        type="tel" 
                        required={isExpanded}
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder="Telefono"
                        className="w-full px-6 py-4 bg-slate-50 border border-slate-200 rounded-2xl focus:ring-2 focus:ring-brand-blue focus:border-transparent outline-none transition-all font-medium"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-slate-700 ml-1">Email</label>
                      <input 
                        type="email" 
                        required={isExpanded}
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Email"
                        className="w-full px-6 py-4 bg-slate-50 border border-slate-200 rounded-2xl focus:ring-2 focus:ring-brand-blue focus:border-transparent outline-none transition-all font-medium"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-slate-700 ml-1">Targa Veicolo</label>
                      <input 
                        type="text" 
                        required={isExpanded}
                        value={plate}
                        onChange={(e) => setPlate(e.target.value)}
                        placeholder="Targa"
                        className="w-full px-6 py-4 bg-slate-50 border border-slate-200 rounded-2xl focus:ring-2 focus:ring-brand-blue focus:border-transparent outline-none transition-all font-medium"
                      />
                    </div>
                    <div className="space-y-2 md:col-span-2 lg:col-span-3">
                      <label className="text-sm font-bold text-slate-700 ml-1">Destinazione Volo</label>
                      <input 
                        type="text" 
                        required={isExpanded}
                        value={destination}
                        onChange={(e) => setDestination(e.target.value)}
                        placeholder="Es: Roma Fiumicino, Londra, etc."
                        className="w-full px-6 py-4 bg-slate-50 border border-slate-200 rounded-2xl focus:ring-2 focus:ring-brand-blue focus:border-transparent outline-none transition-all font-medium"
                      />
                    </div>
                  </div>

                  <div className="space-y-4 pt-4">
                    <label className="flex items-start gap-3 cursor-pointer group">
                      <input 
                        type="checkbox" 
                        required={isExpanded}
                        checked={consent1}
                        onChange={(e) => setConsent1(e.target.checked)}
                        className="mt-1 h-5 w-5 rounded border-slate-300 text-brand-blue focus:ring-brand-blue cursor-pointer" 
                      />
                      <span className="text-sm text-slate-600 group-hover:text-brand-dark transition-colors">
                        Acconsento al trattamento dei miei dati personali per l'uso esclusivo della prenotazione richiesta.
                      </span>
                    </label>
                    <label className="flex items-start gap-3 cursor-pointer group">
                      <input 
                        type="checkbox" 
                        required={isExpanded}
                        checked={consent2}
                        onChange={(e) => setConsent2(e.target.checked)}
                        className="mt-1 h-5 w-5 rounded border-slate-300 text-brand-blue focus:ring-brand-blue cursor-pointer" 
                      />
                      <span className="text-sm text-slate-600 group-hover:text-brand-dark transition-colors">
                        Accetto i termini e le condizioni del servizio di parcheggio.
                      </span>
                    </label>
                  </div>
                </div>
              </motion.div>

              <button 
                type="submit"
                className="w-full bg-brand-blue hover:opacity-90 text-white font-extrabold text-lg py-5 rounded-2xl shadow-xl shadow-brand-blue/20 transition-all flex items-center justify-center gap-3 group"
              >
                {isExpanded ? 'Conferma Prenotazione' : 'Calcola Preventivo e Prenota'}
                <ArrowRight className="h-6 w-6 group-hover:translate-x-2 transition-transform" />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
