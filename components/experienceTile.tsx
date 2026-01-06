import { ExperienceItem } from "@/content/experience";

type Props = {
  item: ExperienceItem;
};

export default function ExperienceTile({ item }: Props) {
  return (
    <div
      className="group/experienceTile w-full flex shadow-md hover:shadow-xl transition-shadow duration-300 p-6 rounded-lg hover:bg-white hover:border-off-pink group-hover/experience:opacity-75 hover:opacity-100"
    >
      {/* Left time */}
      <div className="w-24 flex-shrink-0 text-gray-500 font-mono text-xs mt-2">
        {item.time}
      </div>

      {/* Right content */}
      <div className="ml-6 flex-1 w-4/5">
        <h3 className="font-bold text-lg text-accentred">{item.title}</h3>
        <p className="text-sm text-gray-600 mb-2">{item.company}</p>

        {/* Details */}
        <ul className="list-disc list-inside space-y-1 text-gray-700 text-sm">
          {item.details.map((d, i) => (
            <li key={i}>{d}</li>
          ))}
        </ul>

        {/* Tech Icons */}
        <div className="flex flex-wrap space-x-2 mt-3">
          {item.techs.map((tech) => {
            const Icon = tech.icon;
            return (
              <div
                key={tech.name}
                className="flex items-center space-x-1 bg-gray-100 px-2 py-1 rounded-md  mb-1 group-hover/experienceTile:bg-off-pink"
              >
                <Icon className="w-4 h-4 text-gray-700" />
                <span className="text-xs">{tech.name}</span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
