import { useState } from "react";
import { Mic, MicOff, Volume2 } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import RoleNav from "@/components/RoleNav";
import { ArrowLeft } from "lucide-react";

const voiceCommands = [
  { text: "Help me", response: "🚨 Sending SOS alert to your family..." },
  { text: "Call my family", response: "📞 Calling Ravi (Son)..." },
  { text: "I need a doctor", response: "🏥 Finding nearest doctor and calling..." },
  { text: "What time is my medicine?", response: "💊 Your next medicine is Aspirin at 1:00 PM" },
];

const Voice = () => {
  const navigate = useNavigate();
  const [isListening, setIsListening] = useState(false);
  const [selectedCommand, setSelectedCommand] = useState<string | null>(null);
  const [response, setResponse] = useState<string | null>(null);

  const handleCommand = (command: typeof voiceCommands[0]) => {
    setSelectedCommand(command.text);
    setIsListening(true);
    setTimeout(() => {
      setIsListening(false);
      setResponse(command.response);
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-background pb-24">
      <div className="px-6 pt-8 pb-4">
        <button onClick={() => navigate("/")} className="flex items-center gap-2 text-primary mb-4 min-h-[48px]">
          <ArrowLeft className="w-6 h-6" />
          <span className="text-elderly-sm font-semibold">Back</span>
        </button>
        <h1 className="text-elderly-xl font-bold">🎤 Voice Help</h1>
        <p className="text-muted-foreground text-elderly-sm mt-1">Tap a command or the microphone</p>
      </div>

      {/* Mic button */}
      <div className="flex justify-center py-8">
        <button
          onClick={() => {
            setIsListening(!isListening);
            if (!isListening) {
              setResponse(null);
              setSelectedCommand(null);
            }
          }}
          className={`w-32 h-32 rounded-full flex items-center justify-center transition-all ${
            isListening
              ? "bg-primary text-primary-foreground mic-pulse"
              : "bg-primary/10 text-primary hover:bg-primary/20"
          }`}
          aria-label={isListening ? "Stop listening" : "Start listening"}
        >
          {isListening ? <Mic className="w-14 h-14" /> : <MicOff className="w-14 h-14" />}
        </button>
      </div>

      <p className="text-center text-muted-foreground text-elderly-sm mb-6">
        {isListening ? "Listening..." : "Tap microphone or choose below"}
      </p>

      {/* Response */}
      {response && (
        <div className="mx-6 mb-6 animate-fade-in">
          <Card className="bg-calm-green border-0 p-5">
            <div className="flex items-start gap-3">
              <Volume2 className="w-6 h-6 shrink-0 mt-1 text-secondary-foreground" />
              <div>
                <p className="text-sm text-muted-foreground mb-1">You said: "{selectedCommand}"</p>
                <p className="text-elderly-base font-bold text-foreground">{response}</p>
              </div>
            </div>
          </Card>
        </div>
      )}

      {/* Quick commands */}
      <div className="px-6">
        <h2 className="text-elderly-lg font-bold mb-3">Say something like...</h2>
        <div className="flex flex-col gap-3">
          {voiceCommands.map((cmd) => (
            <Button
              key={cmd.text}
              variant="outline"
              className={`w-full h-16 text-elderly-sm rounded-2xl justify-start px-6 ${
                selectedCommand === cmd.text ? "border-primary bg-primary/5" : ""
              }`}
              onClick={() => handleCommand(cmd)}
            >
              "{cmd.text}"
            </Button>
          ))}
        </div>
      </div>

      <RoleNav />
    </div>
  );
};

export default Voice;
