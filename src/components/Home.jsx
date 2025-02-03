import React from "react";
// import { ChevronDown, Info, Lightbulb, MessageSquare, MonitorPlay, MoveDown } from "lucide-react"
// import { Card, CardContent, CardHeader, CardTitle } from "./ui/card"
// import { Input } from "./ui/input"
// import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select"
// import { Textarea } from "./ui/textarea.jsx"
import Grid from "./main";


export default function Home() {
  return (
    
    <div className="px-20 mb-20">
      
      <div className="px-10 py-2">
        <div className="flex justify-between py-5 px-1">
          <h2 className="text-blue-700 text-3xl font-bold">
            Technical Project Management
          </h2>
          <button className="bg-blue-700 text-white text-lg text-500 rounded-xl px-2">
            Submit Task
          </button>
        </div>
        <div className="py-1 px-1">
          <div className="bg-slate-200 p-4 rounded-lg mb-6">
            <h2 className="font-bold mb-2">Explore the world of management</h2>
            <p className="text-sm text-muted-foreground">
              As a project manager, you play an important role in leading a
              project through initiation, planning, execution, monitoring,
              controlling and completion. How? Do you want to manage each and
              every step of your life?
            </p>
          </div>
        </div>
        
        <div className="px-10">
          <Grid />
        </div>
      </div>
    </div>
  );
}
