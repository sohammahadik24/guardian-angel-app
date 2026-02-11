export const userData = {
  name: "Martha",
  bloodType: "O+",
  allergies: ["Penicillin", "Peanuts"],
  conditions: ["Hypertension", "Diabetes Type 2"],
  emergencyNotes: "Takes insulin twice daily. Prefers right arm for BP.",
};

export const medications = [
  { id: "1", name: "Metformin", dosage: "500mg", time: "8:00 AM", taken: false },
  { id: "2", name: "Lisinopril", dosage: "10mg", time: "8:00 AM", taken: true },
  { id: "3", name: "Aspirin", dosage: "75mg", time: "1:00 PM", taken: false },
  { id: "4", name: "Insulin", dosage: "10 units", time: "7:00 PM", taken: false },
];

export const healthTips = [
  "💧 Drink at least 8 glasses of water today",
  "🚶 Take a 15-minute walk after lunch",
  "😴 Try to sleep by 9:30 PM tonight",
  "🍎 Eat a fruit with your breakfast",
  "🧘 Practice deep breathing for 5 minutes",
];

export const emergencyContacts = [
  { id: "1", name: "Ravi (Son)", phone: "+91 98765 43210", relation: "Son", isPrimary: true },
  { id: "2", name: "Dr. Sharma", phone: "+91 99887 76655", relation: "Doctor", isPrimary: false },
  { id: "3", name: "Priya (Daughter)", phone: "+91 91234 56789", relation: "Daughter", isPrimary: false },
  { id: "4", name: "Neighbor - Mrs. Gupta", phone: "+91 88776 65544", relation: "Neighbor", isPrimary: false },
];

export const nearbyFacilities = [
  { id: "1", name: "City General Hospital", type: "Hospital", distance: "1.2 km", phone: "+91 11 2345 6789", address: "MG Road, Sector 5" },
  { id: "2", name: "LifeCare Clinic", type: "Clinic", distance: "0.5 km", phone: "+91 11 9876 5432", address: "Green Park, Block B" },
  { id: "3", name: "MedPlus Pharmacy", type: "Pharmacy", distance: "0.3 km", phone: "+91 11 5566 7788", address: "Main Street, Shop 12" },
  { id: "4", name: "Apollo Hospital", type: "Hospital", distance: "3.8 km", phone: "+91 11 4455 6677", address: "Ring Road, Plot 45" },
  { id: "5", name: "Red Cross Ambulance", type: "Ambulance", distance: "2.1 km", phone: "108", address: "Central Station" },
  { id: "6", name: "Wellness Pharmacy", type: "Pharmacy", distance: "1.0 km", phone: "+91 11 3344 5566", address: "Market Road" },
];

export const alertHistory = [
  { id: "1", date: "2026-02-10", time: "3:45 PM", type: "SOS", status: "Resolved", respondedBy: "Ravi (Son)", notes: "Feeling dizzy. Son arrived in 15 min." },
  { id: "2", date: "2026-02-08", time: "10:20 AM", type: "Medical", status: "Resolved", respondedBy: "Dr. Sharma", notes: "Missed medication, reminder sent." },
  { id: "3", date: "2026-02-05", time: "8:00 PM", type: "SOS", status: "Cancelled", respondedBy: "—", notes: "Accidental press, cancelled within 3 sec." },
];

export const dailyEngagement = [
  { type: "quote", content: "You are loved and you matter. 💛", author: "Daily Reminder" },
  { type: "prayer", content: "May peace and good health be with you today. 🙏" },
  { type: "music", content: "🎵 Relaxing Morning Raaga", link: "#" },
  { type: "quote", content: "Every day is a gift. Enjoy the little things. 🌸", author: "Wisdom" },
];

export const chatMessages = [
  { id: "1", from: "Martha", text: "Good morning, Ravi!", time: "9:00 AM", isUser: true },
  { id: "2", from: "Ravi", text: "Good morning Ma! Did you take your medicine?", time: "9:02 AM", isUser: false },
  { id: "3", from: "Martha", text: "Yes, I took it after breakfast.", time: "9:05 AM", isUser: true },
  { id: "4", from: "Ravi", text: "Great! I'll come visit this evening. 😊", time: "9:06 AM", isUser: false },
];
