
# Elderly Care & Support App

A mobile-first web app designed for elderly individuals and their caregivers, featuring a warm, calming design with large buttons, simple navigation, and accessibility-first UI.

## Design System
- **Colors**: Soft blues, gentle greens, warm whites — calming and easy on the eyes
- **Typography**: Extra-large fonts throughout (20px+ body, 28px+ headings)
- **Buttons**: Large, rounded, high-contrast with clear icons
- **Navigation**: Bottom tab bar with 4-5 main sections, minimal depth

---

## Screens & Features

### 1. Home Screen (Elderly User)
- **Giant SOS button** (center of screen, red, pulsing) — one tap to trigger emergency alert
- Quick-action cards: "Call Family", "Call Doctor", "Medication Reminder"
- Greeting with user's name and current time
- Simple bottom navigation bar

### 2. SOS Alert Screen
- Confirmation animation ("Alert Sent!")
- Shows who is being notified (family, caregiver, medical services)
- Simulated live location sharing display
- "Cancel" and "Call Emergency" buttons
- Countdown timer before alert is sent (3 seconds to cancel)

### 3. Voice Interaction Panel
- Large microphone button with visual feedback
- Pre-set voice command suggestions: "Help me", "Call my family", "I need a doctor"
- Simulated text-to-speech responses displayed on screen
- Visual confirmation of recognized commands

### 4. Health & Medication
- **Medication Reminders**: List of medications with times, large checkboxes to mark as taken
- **Daily Health Tips**: Simple cards with health reminders
- **Health Records**: Basic info display (blood type, allergies, conditions, emergency notes)
- Add/edit medication form with large inputs

### 5. Medical Assistance Locator
- List/card view of nearby hospitals, clinics, pharmacies, ambulances (mock data)
- Distance and "Call Now" button for each
- Simple category filters (Hospital, Clinic, Pharmacy, Ambulance)

### 6. Emotional & Social Support
- **Quick Call**: Large contact cards for family/volunteers with one-tap call
- **Daily Engagement**: Rotating cards with motivational quotes, prayers, calming music links
- **Simple Chat**: Basic chat interface with large text for messaging family

### 7. Caregiver/Family Dashboard (separate view)
- **Emergency Contacts Management**: Add, edit, remove contacts
- **Alert History**: Timeline of past SOS alerts with timestamps
- **Health Overview**: View elderly user's medications, health records
- **Location Tracking**: Simulated map showing elderly user's last known location
- Switch between managing multiple elderly users

### 8. Settings
- Language selection (English, Hindi, and other options displayed)
- Font size adjustment (Large / Extra Large)
- Emergency contact quick setup
- Profile information

---

## User Flows

### Elderly User Flow
Home → Tap SOS → Alert sent → Family notified
Home → Tap "Call Family" → Contact list → One-tap call
Home → Health tab → View/take medications
Home → Nearby Help → See hospitals → Call

### Caregiver Flow
Dashboard → View alerts → See details
Dashboard → Manage contacts → Add/edit
Dashboard → Health tab → View medications & records
Dashboard → Location → See last known position

---

## Additional Details
- **Offline indicator**: Banner showing "You're offline — SOS will send when connected"
- **Background mode notice**: Info card explaining the app works in background (simulated)
- **Multi-language**: UI labels support language switching
- **Accessibility**: All interactive elements have clear labels, high contrast ratios, and touch targets of 48px+
- **Future Scope section**: A simple page listing planned features (wearable integration, fall detection, AI health alerts) — great for college project presentation
