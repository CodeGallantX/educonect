import communities from "../data/communities.json";

const CommunityCard = () => {
  if (!communities || communities.length === 0) {
    return <div className="text-white text-sm">No communities available.</div>;
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 gap-4 border-b border-gray-500 py-4">
      {communities.map((community, index) => (
        <div key={index}>
          <a
            href={community.url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center justify-start w-full space-x-2"
          >
            <div className="relative">
              <img
                src={community.img}
                alt={community.name || "Community"}
                className="min-w-12 min-h-12 max-w-36 max-h-36 lg:max-w-52 lg:max-h-52 rounded-lg object-cover"
              />
              <span className="absolute w-2 h-2 -top-0.5 -right-0.5 rounded-full bg-red-500"></span>
            </div>
            <h4 className="text-gray-300 text-sm mt-2 font-semibold">{community.name}</h4>
          </a>
        </div>
      ))}
    </div>
  );
};

export default CommunityCard;
