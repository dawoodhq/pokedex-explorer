import { useState } from 'react';
import PokemonCardSection from './PokemonCardSection';

import { MoonLoader } from "react-spinners";

export const capitalize = str => str.charAt(0).toUpperCase() + str.slice(1);

const PokemonCard = ({ data: { name, image, abilities, moves } }) => {
    const [loading, setLoading] = useState(true);

    return (
        <div className="2xl:w-1/4 lg:w-1/3 w-1/2 p-2 flex justify-center">
            <div className="bg-gray-800 rounded outline-2 ring-2 ring-gray-800/30 outline-gray-800/30 p-4 w-full text-white flex flex-row gap-x-2 hover:bg-gray-800/75 hover:scale-[102.5%] transform ease-in duration-100">
                <div className="flex justify-center items-center min-h-[100px]">
                    {loading && (
                        <MoonLoader
                            color={'oklch(50% 0.028 261.692)'}
                            loading={loading}
                            className="my-8 ml-2 mr-6"
                            size={36}
                        />
                    )}
                    <img
                        src={image}
                        className={`object-cover ${loading ? 'hidden ': ''}pr-2`}
                        onLoad={() => setLoading(false)}
                        alt={name}
                    />
                </div>
                <div name="pokemon-card-data" className="flex flex-col gap-y-1 w-full">
                    <h1 className="text-xl text-left font-semibold">{capitalize(name)}</h1>
                    <div className="flex flex-row gap-x-6">
                        <PokemonCardSection title="Top Abilities" data={abilities} />
                        <PokemonCardSection title="Top Moves" data={moves} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PokemonCard;