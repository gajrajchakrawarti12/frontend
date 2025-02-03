import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";
import {courseData} from './data/courseData'

const tasks = courseData.tasks;
export default function JourneyBoard() {
  const [isExpanded, setIsExpanded] = useState(true);

  return (
    <div className={`bg-white border-r transition-all ${isExpanded ? "w-80" : "w-16"}`}>
      <div className="p-4 border-b">
        <div className="flex items-center justify-between">
          <h2 className={`font-semibold ${isExpanded ? "block" : "hidden"}`}>Journey Board</h2>
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="p-1 hover:bg-gray-100 rounded"
          >
            {isExpanded ? <ChevronLeft className="w-5 h-5" /> : <ChevronRight className="w-5 h-5" />}
          </button>
        </div>
      </div>
      <div className="p-4">
        {tasks.map((task) => (
          <div key={task.task_id} className="mb-4">
            {isExpanded ? (
              <>
                <h3 className="font-medium mb-2">{task.task_title}</h3>
                <ul className="space-y-2">
                  {task.assets.map((asset) => (
                    <li key={asset.asset_id} className="text-sm text-gray-600">
                      • {asset.asset_title}
                    </li>
                  ))}
                </ul>
              </>
            ) : (
              <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                {task.task_id}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}