export default function ArticleDisplay({ asset }) {
  return (
    <div className="space-y-4">
      <p className="text-sm text-gray-600">{asset.asset_description}</p>
      <button
        variant="link"
        className="p-0 h-auto text-blue-600 text-sm"
        onClick={() => window.open(asset.asset_content, "_blank")}
      >
        Explore More
      </button>
    </div>
  );
}
