import { capitalize } from "./PokemonCard";
const normalize = str => str.split('-').map(segment => capitalize(segment)).join(' ');

const PokemonCardSection = ({ title, data }) => {
  return (
    <div className="text-left flex flex-col gap-y-0.5">
        <h3 className="text-sm text-gray-400 font-medium">{title}</h3>
        <div className="overflow-clip h-max-2">
            {data.slice(0, 3).map((attribute, index) => (
                <p
                    key={index}
                    className="text-xs text-gray-300 mt-0.5"
                >{normalize(attribute.name)}</p>
            ))}
        </div>
    </div>
  )
}

export default PokemonCardSection