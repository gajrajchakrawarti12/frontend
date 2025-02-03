import { useState } from "react";
import { Input } from "../ui/input";
import { Textarea } from '../ui/textarea'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../ui/select";
import { ArrowLeft, ArrowRight, Maximize2, ImageIcon, MoreHorizontal } from "lucide-react";

export default function ArticleInput() {
  const [articleTitle, setArticleTitle] = useState("");
  const [articleContent, setArticleContent] = useState("");

  return (
    <div className="space-y-4">
      <div>
        <label className="text-sm font-medium mb-2 block">Title</label>
        <Input
          placeholder="Enter title"
          value={articleTitle}
          onChange={(e) => setArticleTitle(e.target.value)}
          className="w-full"
        />
      </div>

      <div>
        <label className="text-sm font-medium mb-2 block">Content</label>
        <div className="border rounded-lg">
          <div className="flex items-center gap-4 p-2 border-b overflow-x-auto">
            {["File", "Edit", "View", "Insert", "Format", "Tools", "Table", "Help"].map((item) => (
              <button key={item} variant="ghost" size="sm" className="text-gray-600">
                {item}
              </button>
            ))}
          </div>

          <div className="flex items-center gap-2 p-2 border-b">
            <div className="flex items-center gap-1">
              <button variant="ghost" size="icon" className="h-8 w-8">
                <ArrowLeft className="h-4 w-4" />
              </button>
              <button variant="ghost" size="icon" className="h-8 w-8">
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>
            <div className="flex items-center gap-1">
              <button variant="ghost" size="icon" className="h-8 w-8">
                <Maximize2 className="h-4 w-4" />
              </button>
              <button variant="ghost" size="icon" className="h-8 w-8">
                <ImageIcon className="h-4 w-4" />
              </button>
            </div>
            <Select defaultValue="paragraph">
              <SelectTrigger className="w-[130px] h-8">
                <SelectValue placeholder="Paragraph" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="paragraph">Paragraph</SelectItem>
                <SelectItem value="heading1">Heading 1</SelectItem>
                <SelectItem value="heading2">Heading 2</SelectItem>
                <SelectItem value="heading3">Heading 3</SelectItem>
              </SelectContent>
            </Select>
            <button variant="ghost" size="icon" className="h-8 w-8">
              <MoreHorizontal className="h-4 w-4" />
            </button>
          </div>

          <Textarea
            placeholder="Start writing your article..."
            value={articleContent}
            onChange={(e) => setArticleContent(e.target.value)}
            className="min-h-[300px] border-0 rounded-none focus-visible:ring-0 resize-none"
          />
        </div>
      </div>
    </div>
  );
}