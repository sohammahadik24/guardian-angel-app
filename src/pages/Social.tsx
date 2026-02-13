import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Phone, MessageCircle, Music, Heart, Send, ArrowLeft } from "lucide-react";
import RoleNav from "@/components/RoleNav";
import { useUserRole } from "@/context/UserRoleContext";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { emergencyContacts, dailyEngagement, chatMessages as initialMessages } from "@/data/mockData";

const Social = () => {
  const navigate = useNavigate();
  const { role } = useUserRole();
  const [activeTab, setActiveTab] = useState<"contacts" | "engage" | "chat">("contacts");
  const [messages, setMessages] = useState(initialMessages);
  const [newMsg, setNewMsg] = useState("");

  const sendMessage = () => {
    if (!newMsg.trim()) return;
    setMessages([...messages, {
      id: String(messages.length + 1),
      from: "Martha",
      text: newMsg,
      time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
      isUser: true,
    }]);
    setNewMsg("");
  };

  const tabs = [
    { key: "contacts" as const, label: "Call", icon: Phone },
    { key: "engage" as const, label: "Daily Joy", icon: Heart },
    { key: "chat" as const, label: "Chat", icon: MessageCircle },
  ];

  return (
    <div className="min-h-screen bg-background pb-24">
      <div className="px-6 pt-8 pb-4">
        {role === "elderly" && (
          <button onClick={() => navigate("/")} className="flex items-center gap-2 text-primary mb-4 min-h-[48px]">
            <ArrowLeft className="w-6 h-6" />
            <span className="text-elderly-sm font-semibold">Back</span>
          </button>
        )}
        <h1 className="text-elderly-xl font-bold animate-fade-in">💛 Social & Support</h1>
      </div>

      <div className="px-6 flex gap-2 mb-6">
        {tabs.map((tab) => (
          <Button
            key={tab.key}
            variant={activeTab === tab.key ? "default" : "outline"}
            className="rounded-2xl h-14 text-elderly-sm px-5 flex-1"
            onClick={() => setActiveTab(tab.key)}
          >
            <tab.icon className="w-5 h-5 mr-2" /> {tab.label}
          </Button>
        ))}
      </div>

      <div className="px-6">
        {activeTab === "contacts" && (
          <div className="space-y-3 animate-fade-in">
            {emergencyContacts.map((contact) => (
              <Card key={contact.id} className="bg-card border-0 shadow-sm">
                <CardContent className="flex items-center gap-4 p-5">
                  <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                    <Phone className="w-7 h-7 text-primary" />
                  </div>
                  <div className="flex-1">
                    <p className="text-elderly-sm font-bold">{contact.name}</p>
                    <p className="text-sm text-muted-foreground">{contact.relation}</p>
                  </div>
                  <Button
                    className="rounded-2xl h-14 px-6 bg-primary text-primary-foreground"
                    onClick={() => window.open(`tel:${contact.phone}`)}
                  >
                    <Phone className="w-5 h-5" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        )}

        {activeTab === "engage" && (
          <div className="space-y-3 animate-fade-in">
            {dailyEngagement.map((item, i) => (
              <Card key={i} className={`border-0 shadow-sm ${
                item.type === "music" ? "bg-primary/5" : item.type === "prayer" ? "bg-accent" : "bg-card"
              }`}>
                <CardContent className="p-5">
                  <p className="text-elderly-base">{item.content}</p>
                  {item.author && <p className="text-sm text-muted-foreground mt-2">— {item.author}</p>}
                  {item.type === "music" && (
                    <Button variant="outline" className="mt-3 rounded-2xl h-12">
                      <Music className="w-5 h-5 mr-2" /> Play
                    </Button>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        )}

        {activeTab === "chat" && (
          <div className="animate-fade-in">
            <div className="bg-card rounded-2xl p-4 shadow-sm border border-border mb-4 min-h-[300px] max-h-[400px] overflow-y-auto space-y-3">
              {messages.map((msg) => (
                <div key={msg.id} className={`flex ${msg.isUser ? "justify-end" : "justify-start"}`}>
                  <div className={`max-w-[80%] rounded-2xl px-4 py-3 ${
                    msg.isUser ? "bg-primary text-primary-foreground" : "bg-muted"
                  }`}>
                    <p className="text-elderly-sm">{msg.text}</p>
                    <p className={`text-xs mt-1 ${msg.isUser ? "text-primary-foreground/70" : "text-muted-foreground"}`}>
                      {msg.time}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            <div className="flex gap-2">
              <Input
                className="h-14 text-elderly-base rounded-2xl flex-1"
                placeholder="Type a message..."
                value={newMsg}
                onChange={(e) => setNewMsg(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && sendMessage()}
              />
              <Button className="h-14 w-14 rounded-2xl shrink-0" onClick={sendMessage}>
                <Send className="w-6 h-6" />
              </Button>
            </div>
          </div>
        )}
      </div>

      <RoleNav />
    </div>
  );
};

export default Social;
