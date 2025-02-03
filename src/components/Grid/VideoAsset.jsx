export default function VideoAsset({ asset }) {
  return (
    <div className="aspect-video bg-black rounded-md">
      <iframe
        width="100%"
        height="100%"
        src={asset.asset_content}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>
  );
}