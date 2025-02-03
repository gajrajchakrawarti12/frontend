import { useState } from "react";
import { Textarea } from "../ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../ui/select";
import { ChevronDown, ChevronUp, Lightbulb, MessageSquare, HelpCircle, Download } from "lucide-react";

export default function ThreadBuilder() {
  const [isThreadExpanded, setIsThreadExpanded] = useState(true);
  const [currentThread, setCurrentThread] = useState({
    subThread: "",
    subInterpretation: "",
    category: "",
    process: "",
  });
  const [summary, setSummary] = useState("");

  const handleThreadChange = (e) => {
    setCurrentThread({ ...currentThread, [e.target.name]: e.target.value });
  };

  return (
    <div className="border rounded-lg">
      <button
        className="w-full flex items-center justify-between p-4 bg-amber-50 hover:bg-amber-100 rounded-lg"
        onClick={() => setIsThreadExpanded(!isThreadExpanded)}
      >
        {isThreadExpanded ? <ChevronUp className="h-5 w-5" /> : <ChevronDown className="h-5 w-5" />}
        <span className="font-medium">Thread A</span>
        <div></div>
      </button>

      {isThreadExpanded && (
        <div className="p-4 space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-gray-200 rounded-xl">
              <label className="text-sm px-4">Sub Thread 1</label>
              <Textarea
                placeholder="Enter Text Here"
                className="resize-none h-25"
                name="subThread"
                value={currentThread.subThread}
                onChange={handleThreadChange}
              />
            </div>
            <div className="bg-gray-200 rounded-xl">
              <label className="text-sm px-4">Sub Interpretation 1</label>
              <Textarea
                placeholder="Enter Text Here"
                className="resize-none h-25"
                name="subInterpretation"
                value={currentThread.subInterpretation}
                onChange={handleThreadChange}
              />
            </div>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex gap-4">
              <button variant="ghost" size="icon">
                <Lightbulb className="h-5 w-5" />
              </button>
              <button variant="ghost" size="icon">
                <MessageSquare className="h-5 w-5" />
              </button>
              <button variant="ghost" size="icon">
                <HelpCircle className="h-5 w-5" />
              </button>
              <button variant="ghost" size="icon">
                <Download className="h-5 w-5" />
              </button>
            </div>
            <div className="flex gap-4">
              <Select
                value={currentThread.category}
                onValueChange={(value) => setCurrentThread({ ...currentThread, category: value })}
              >
                <SelectTrigger className="w-[140px]">
                  <SelectValue placeholder="Select Category" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="category1">Category 1</SelectItem>
                  <SelectItem value="category2">Category 2</SelectItem>
                  <SelectItem value="category3">Category 3</SelectItem>
                </SelectContent>
              </Select>
              <Select
                value={currentThread.process}
                onValueChange={(value) => setCurrentThread({ ...currentThread, process: value })}
              >
                <SelectTrigger className="w-[140px]">
                  <SelectValue placeholder="Select Process" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="process1">Process 1</SelectItem>
                  <SelectItem value="process2">Process 2</SelectItem>
                  <SelectItem value="process3">Process 3</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <button className="bg-blue-600 hover:bg-blue-700 p-2 rounded-full text-white">
            + Sub thread
          </button>

          <div className="bg-gray-200 rounded-xl">
            <label className="text-sm text-gray-600 px-4">Summary for Thread A</label>
            <Textarea
              placeholder="Enter Text Here"
              className="resize-none h-32"
              value={summary}
              onChange={(e) => setSummary(e.target.value)}
            />
          </div>
        </div>
      )}
    </div>
  );
}