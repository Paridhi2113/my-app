"use client";
import { useState } from "react";
import Navbar from "../components/NavBar";
import Footer from "../components/Footer";
import { Check, Phone, Mail, MapPin, Clock, ChevronRight } from "lucide-react";

const timeSlots = [
  "5:00 PM", "5:30 PM", "6:00 PM", "6:30 PM",
  "7:00 PM", "7:30 PM", "8:00 PM", "8:30 PM",
  "9:00 PM", "9:30 PM",
];

const occasions = [
  "None", "Birthday", "Anniversary", "Proposal",
  "Business Dinner", "Date Night", "Celebration", "Other",
];

type FormData = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  date: string;
  time: string;
  guests: string;
  occasion: string;
  notes: string;
  tastingMenu: boolean;
  winepairing: boolean;
};

export default function ReservationsPage() {
  const [step, setStep] = useState(1);
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState<FormData>({
    firstName: "", lastName: "", email: "", phone: "",
    date: "", time: "", guests: "2", occasion: "None",
    notes: "", tastingMenu: false, winepairing: false,
  });

  const update = (field: keyof FormData, value: string | boolean) =>
    setForm((f) => ({ ...f, [field]: value }));

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const inputClass =
    "w-full border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-800 placeholder-gray-300 outline-none focus:border-[#39DB4A] focus:ring-2 focus:ring-green-100 transition-all";
  const labelClass = "block text-xs font-bold text-gray-600 uppercase tracking-widest mb-2";

  if (submitted) {
    return (
      <>
        <Navbar />
        <main className="min-h-screen bg-gray-50 flex items-center justify-center px-4 py-24">
          <div className="bg-white rounded-3xl shadow-xl p-10 max-w-md w-full text-center">
            <div className="w-20 h-20 bg-green-50 rounded-full flex items-center justify-center mx-auto mb-6">
              <Check size={36} className="text-[#39DB4A]" />
            </div>
            <h2
              className="text-2xl font-extrabold text-gray-900 mb-3"
              style={{ fontFamily: "'Nunito', sans-serif" }}
            >
              Reservation Confirmed! 🎉
            </h2>
            <p className="text-gray-500 text-sm mb-2" style={{ fontFamily: "'Nunito', sans-serif" }}>
              Thank you, <span className="font-bold text-gray-800">{form.firstName}</span>! We look
              forward to welcoming you on{" "}
              <span className="text-[#39DB4A] font-bold">{form.date}</span> at{" "}
              <span className="text-[#39DB4A] font-bold">{form.time}</span>.
            </p>
            <p className="text-xs text-gray-400 mb-8" style={{ fontFamily: "'Nunito', sans-serif" }}>
              A confirmation has been sent to <span className="font-semibold">{form.email}</span>.
            </p>
            <a
              href="/"
              className="inline-block bg-[#39DB4A] hover:bg-[#2ecc40] text-white font-bold px-8 py-3 rounded-full transition-colors shadow-lg shadow-green-200"
              style={{ fontFamily: "'Nunito', sans-serif" }}
            >
              Return Home
            </a>
          </div>
        </main>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Navbar />

      {/* Page Hero */}
      <section className="bg-white pt-12 pb-10 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p
            className="text-[#39DB4A] text-sm font-bold tracking-widest uppercase mb-2"
            style={{ fontFamily: "'Nunito', sans-serif" }}
          >
            RESERVATIONS
          </p>
          <h1
            className="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-3"
            style={{ fontFamily: "'Nunito', sans-serif" }}
          >
            Reserve Your <span className="text-[#39DB4A]">Table</span>
          </h1>
          <p className="text-gray-400 text-sm max-w-md mx-auto" style={{ fontFamily: "'Nunito', sans-serif" }}>
            We look forward to welcoming you. Bookings can be made up to 60 days in advance.
          </p>
        </div>
      </section>

      <main className="bg-gray-50 py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

            {/* Sidebar */}
            <aside className="lg:col-span-1">
              <div className="bg-white rounded-3xl border border-gray-100 shadow-sm p-7 sticky top-24">
                <h3
                  className="text-lg font-extrabold text-gray-900 mb-6"
                  style={{ fontFamily: "'Nunito', sans-serif" }}
                >
                  Contact & Hours
                </h3>

                <div className="space-y-5">
                  {[
                    { Icon: MapPin, label: "Address", content: "42 Rue de la Gastronomie\nParis, France 75008" },
                    { Icon: Phone, label: "Phone", content: "+33 1 42 60 00 00" },
                    { Icon: Mail, label: "Email", content: "reservations@foodi.com" },
                  ].map(({ Icon, label, content }) => (
                    <div key={label} className="flex gap-3">
                      <div className="w-9 h-9 bg-green-50 rounded-xl flex items-center justify-center shrink-0">
                        <Icon size={15} className="text-[#39DB4A]" />
                      </div>
                      <div>
                        <p className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-0.5" style={{ fontFamily: "'Nunito', sans-serif" }}>
                          {label}
                        </p>
                        <p className="text-sm text-gray-700 whitespace-pre-line" style={{ fontFamily: "'Nunito', sans-serif" }}>
                          {content}
                        </p>
                      </div>
                    </div>
                  ))}

                  <div className="flex gap-3">
                    <div className="w-9 h-9 bg-green-50 rounded-xl flex items-center justify-center shrink-0">
                      <Clock size={15} className="text-[#39DB4A]" />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-1" style={{ fontFamily: "'Nunito', sans-serif" }}>
                        Hours
                      </p>
                      <div className="space-y-1 text-sm text-gray-600" style={{ fontFamily: "'Nunito', sans-serif" }}>
                        {[
                          ["Mon – Thu", "5:00 – 10:00 PM"],
                          ["Fri – Sat", "5:00 – 11:30 PM"],
                          ["Sunday", "4:00 – 9:00 PM"],
                        ].map(([day, time]) => (
                          <div key={day} className="flex justify-between gap-4">
                            <span className="text-gray-400">{day}</span>
                            <span className="font-semibold text-gray-800">{time}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-6 pt-6 border-t border-gray-100">
                  <p className="text-xs text-gray-400 leading-relaxed" style={{ fontFamily: "'Nunito', sans-serif" }}>
                    For parties of 8 or more, private dining or special events, please contact us directly.
                  </p>
                </div>
              </div>
            </aside>

            {/* Form Card */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-3xl border border-gray-100 shadow-sm p-7 sm:p-10">

                {/* Step indicator */}
                <div className="flex items-center gap-2 mb-8">
                  {[1, 2, 3].map((s, idx) => (
                    <div key={s} className="flex items-center gap-2">
                      <div
                        className="w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold transition-all duration-300"
                        style={{
                          background: step >= s ? "#39DB4A" : "#f3f4f6",
                          color: step >= s ? "white" : "#9ca3af",
                          fontFamily: "'Nunito', sans-serif",
                        }}
                      >
                        {step > s ? <Check size={14} /> : s}
                      </div>
                      <span
                        className="text-xs font-semibold hidden sm:block"
                        style={{
                          color: step >= s ? "#39DB4A" : "#9ca3af",
                          fontFamily: "'Nunito', sans-serif",
                        }}
                      >
                        {["Date & Party", "Your Details", "Preferences"][idx]}
                      </span>
                      {s < 3 && (
                        <div
                          className="h-px w-8 sm:w-12 mx-1"
                          style={{ background: step > s ? "#39DB4A" : "#e5e7eb" }}
                        />
                      )}
                    </div>
                  ))}
                </div>

                <form onSubmit={handleSubmit}>

                  {/* ── Step 1 ── */}
                  {step === 1 && (
                    <div className="space-y-6">
                      <h3 className="text-xl font-extrabold text-gray-900" style={{ fontFamily: "'Nunito', sans-serif" }}>
                        Choose Your Date & Party
                      </h3>

                      <div>
                        <label className={labelClass} style={{ fontFamily: "'Nunito', sans-serif" }}>Preferred Date</label>
                        <input
                          type="date"
                          required
                          value={form.date}
                          onChange={(e) => update("date", e.target.value)}
                          className={inputClass}
                          style={{ fontFamily: "'Nunito', sans-serif" }}
                        />
                      </div>

                      <div>
                        <label className={labelClass} style={{ fontFamily: "'Nunito', sans-serif" }}>Preferred Time</label>
                        <div className="grid grid-cols-5 gap-2">
                          {timeSlots.map((slot) => (
                            <button
                              key={slot}
                              type="button"
                              onClick={() => update("time", slot)}
                              className="py-2.5 rounded-xl text-xs font-semibold border transition-all duration-200"
                              style={{
                                fontFamily: "'Nunito', sans-serif",
                                background: form.time === slot ? "#39DB4A" : "white",
                                borderColor: form.time === slot ? "#39DB4A" : "#e5e7eb",
                                color: form.time === slot ? "white" : "#6b7280",
                              }}
                            >
                              {slot}
                            </button>
                          ))}
                        </div>
                      </div>

                      <div>
                        <label className={labelClass} style={{ fontFamily: "'Nunito', sans-serif" }}>Number of Guests</label>
                        <div className="flex flex-wrap gap-2">
                          {["1", "2", "3", "4", "5", "6", "7", "8+"].map((n) => (
                            <button
                              key={n}
                              type="button"
                              onClick={() => update("guests", n)}
                              className="w-12 h-12 rounded-xl text-sm font-bold border transition-all duration-200"
                              style={{
                                fontFamily: "'Nunito', sans-serif",
                                background: form.guests === n ? "#39DB4A" : "white",
                                borderColor: form.guests === n ? "#39DB4A" : "#e5e7eb",
                                color: form.guests === n ? "white" : "#6b7280",
                              }}
                            >
                              {n}
                            </button>
                          ))}
                        </div>
                      </div>

                      <button
                        type="button"
                        onClick={() => setStep(2)}
                        disabled={!form.date || !form.time}
                        className="flex items-center gap-2 bg-[#39DB4A] hover:bg-[#2ecc40] disabled:opacity-40 disabled:cursor-not-allowed text-white font-bold px-8 py-3.5 rounded-full shadow-lg shadow-green-200 transition-all"
                        style={{ fontFamily: "'Nunito', sans-serif" }}
                      >
                        Continue <ChevronRight size={16} />
                      </button>
                    </div>
                  )}

                  {/* ── Step 2 ── */}
                  {step === 2 && (
                    <div className="space-y-5">
                      <h3 className="text-xl font-extrabold text-gray-900" style={{ fontFamily: "'Nunito', sans-serif" }}>
                        Your Details
                      </h3>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label className={labelClass} style={{ fontFamily: "'Nunito', sans-serif" }}>First Name</label>
                          <input type="text" required placeholder="Jean" value={form.firstName}
                            onChange={(e) => update("firstName", e.target.value)}
                            className={inputClass} style={{ fontFamily: "'Nunito', sans-serif" }} />
                        </div>
                        <div>
                          <label className={labelClass} style={{ fontFamily: "'Nunito', sans-serif" }}>Last Name</label>
                          <input type="text" required placeholder="Dupont" value={form.lastName}
                            onChange={(e) => update("lastName", e.target.value)}
                            className={inputClass} style={{ fontFamily: "'Nunito', sans-serif" }} />
                        </div>
                      </div>

                      <div>
                        <label className={labelClass} style={{ fontFamily: "'Nunito', sans-serif" }}>Email Address</label>
                        <input type="email" required placeholder="jean@example.com" value={form.email}
                          onChange={(e) => update("email", e.target.value)}
                          className={inputClass} style={{ fontFamily: "'Nunito', sans-serif" }} />
                      </div>

                      <div>
                        <label className={labelClass} style={{ fontFamily: "'Nunito', sans-serif" }}>Phone Number</label>
                        <input type="tel" required placeholder="+33 6 00 00 00 00" value={form.phone}
                          onChange={(e) => update("phone", e.target.value)}
                          className={inputClass} style={{ fontFamily: "'Nunito', sans-serif" }} />
                      </div>

                      <div className="flex gap-3 pt-2">
                        <button type="button" onClick={() => setStep(1)}
                          className="px-6 py-3 rounded-full border border-gray-200 text-sm font-bold text-gray-500 hover:border-[#39DB4A] hover:text-[#39DB4A] transition-all"
                          style={{ fontFamily: "'Nunito', sans-serif" }}>
                          Back
                        </button>
                        <button type="button" onClick={() => setStep(3)}
                          disabled={!form.firstName || !form.email || !form.phone}
                          className="flex items-center gap-2 bg-[#39DB4A] hover:bg-[#2ecc40] disabled:opacity-40 disabled:cursor-not-allowed text-white font-bold px-8 py-3 rounded-full shadow-lg shadow-green-200 transition-all"
                          style={{ fontFamily: "'Nunito', sans-serif" }}>
                          Continue <ChevronRight size={16} />
                        </button>
                      </div>
                    </div>
                  )}

                  {/* ── Step 3 ── */}
                  {step === 3 && (
                    <div className="space-y-6">
                      <h3 className="text-xl font-extrabold text-gray-900" style={{ fontFamily: "'Nunito', sans-serif" }}>
                        Preferences & Special Requests
                      </h3>

                      {/* Occasion */}
                      <div>
                        <label className={labelClass} style={{ fontFamily: "'Nunito', sans-serif" }}>Occasion (optional)</label>
                        <div className="flex flex-wrap gap-2">
                          {occasions.map((occ) => (
                            <button key={occ} type="button" onClick={() => update("occasion", occ)}
                              className="px-4 py-2 rounded-full text-xs font-bold border transition-all duration-200"
                              style={{
                                fontFamily: "'Nunito', sans-serif",
                                background: form.occasion === occ ? "#39DB4A" : "white",
                                borderColor: form.occasion === occ ? "#39DB4A" : "#e5e7eb",
                                color: form.occasion === occ ? "white" : "#6b7280",
                              }}>
                              {occ}
                            </button>
                          ))}
                        </div>
                      </div>

                      {/* Checkboxes */}
                      <div className="space-y-3">
                        {[
                          { key: "tastingMenu", label: "7-Course Tasting Menu (€185 pp)", sub: "A journey through the season's finest" },
                          { key: "winepairing", label: "Sommelier Wine Pairing (€95 pp)", sub: "Available with the tasting menu" },
                        ].map(({ key, label, sub }) => (
                          <label key={key}
                            className="flex items-start gap-4 p-4 rounded-2xl border cursor-pointer transition-all duration-200"
                            style={{
                              borderColor: form[key as keyof FormData] ? "#39DB4A" : "#e5e7eb",
                              background: form[key as keyof FormData] ? "#f0fdf4" : "white",
                            }}>
                            <div className="mt-0.5">
                              <input type="checkbox"
                                checked={!!form[key as keyof FormData]}
                                onChange={(e) => update(key as keyof FormData, e.target.checked)}
                                className="sr-only" />
                              <div
                                className="w-5 h-5 rounded-md border-2 flex items-center justify-center transition-all"
                                style={{
                                  borderColor: form[key as keyof FormData] ? "#39DB4A" : "#d1d5db",
                                  background: form[key as keyof FormData] ? "#39DB4A" : "white",
                                }}>
                                {form[key as keyof FormData] && <Check size={12} className="text-white" />}
                              </div>
                            </div>
                            <div>
                              <p className="text-sm font-bold text-gray-800" style={{ fontFamily: "'Nunito', sans-serif" }}>{label}</p>
                              <p className="text-xs text-gray-400" style={{ fontFamily: "'Nunito', sans-serif" }}>{sub}</p>
                            </div>
                          </label>
                        ))}
                      </div>

                      {/* Notes */}
                      <div>
                        <label className={labelClass} style={{ fontFamily: "'Nunito', sans-serif" }}>Special Requests / Dietary Notes</label>
                        <textarea rows={4} value={form.notes}
                          onChange={(e) => update("notes", e.target.value)}
                          placeholder="Allergies, dietary requirements, special arrangements..."
                          className={inputClass + " resize-none"}
                          style={{ fontFamily: "'Nunito', sans-serif" }} />
                      </div>

                      {/* Summary */}
                      <div className="bg-green-50 border border-green-100 rounded-2xl p-5">
                        <p className="text-xs font-bold text-[#39DB4A] uppercase tracking-widest mb-3" style={{ fontFamily: "'Nunito', sans-serif" }}>
                          Booking Summary
                        </p>
                        <div className="grid grid-cols-2 gap-2 text-sm" style={{ fontFamily: "'Nunito', sans-serif" }}>
                          {[
                            ["Date", form.date],
                            ["Time", form.time],
                            ["Guests", form.guests],
                            ["Name", `${form.firstName} ${form.lastName}`],
                          ].map(([k, v]) => (
                            <div key={k}>
                              <span className="text-gray-400">{k}: </span>
                              <span className="font-bold text-gray-800">{v}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className="flex gap-3">
                        <button type="button" onClick={() => setStep(2)}
                          className="px-6 py-3 rounded-full border border-gray-200 text-sm font-bold text-gray-500 hover:border-[#39DB4A] hover:text-[#39DB4A] transition-all"
                          style={{ fontFamily: "'Nunito', sans-serif" }}>
                          Back
                        </button>
                        <button type="submit"
                          className="flex items-center gap-2 bg-[#39DB4A] hover:bg-[#2ecc40] text-white font-bold px-8 py-3 rounded-full shadow-lg shadow-green-200 transition-all"
                          style={{ fontFamily: "'Nunito', sans-serif" }}>
                          Confirm Reservation <Check size={16} />
                        </button>
                      </div>
                    </div>
                  )}
                </form>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}