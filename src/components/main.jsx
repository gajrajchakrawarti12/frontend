import React, { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { courseData } from "./data/courseData.jsx";
import VideoAsset from "./Grid/VideoAsset";
import ThreadBuilder from "./Grid/ThreadBuilder";
import ArticleInput from "./Grid/ArticleInput";
import ArticleDisplay from "./Grid/ArticleDisplay";
import { Info } from "lucide-react";

export default function Grid() {
  const [currentTaskIndex] = useState(0);
  const task = courseData.tasks[currentTaskIndex];

  return (
    
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        
      {task.assets.map((asset) => (
        <AssetCard key={asset.asset_id} asset={asset} />
      ))}
    </div>
  );
}

const AssetCard = ({ asset }) => {
  const [openDropdown, setOpenDropdown] = useState(false);

  const toggleDropdown = () => {
    setOpenDropdown(!openDropdown);
  };

  return (
    <Card className="bg-white shadow-sm shadow-xl">
      <CardHeader className="flex flex-row items-center justify-around bg-black text-white">
        <div></div>
        <CardTitle className="flex items-center">{asset.asset_title}</CardTitle>
        <button variant="ghost" size="icon" onClick={toggleDropdown}>
          <Info className="h-4 w-4" />
        </button>
      </CardHeader>
      {openDropdown && (
        <div className="px-4 py-2 bg-gray-100 text-sm text-gray-700">
          <span className="font-bold">Description: </span>
          {asset.asset_description}
        </div>
      )}
      <CardContent>
        {asset.asset_content_type === "video" && <VideoAsset asset={asset} />}
        {asset.asset_content_type === "threadbuilder" && <ThreadBuilder />}
        {asset.asset_content_type === "article" && asset.asset_type === "input_asset" && (
          <ArticleInput />
        )}
        {asset.asset_content_type === "article" && asset.asset_type === "display_asset" && (
          <ArticleDisplay asset={asset} />
        )}
      </CardContent>
    </Card>
  );
};