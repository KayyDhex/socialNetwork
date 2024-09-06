import { View, Text } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Link } from 'expo-router';

type Pokemon = {
    url: string,
    name: string
}

export default function Page() {

    const [listPokemons, setListPokemons] = useState([] as Pokemon[]);

    useEffect(() => {
        callApi();
    }, []);

    useEffect(() => {
        console.log({ listPokemons })
    }, [listPokemons])

    const callApi = async () => {
        try {
            const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=10')

            const data = await response.json()

            console.log({
                response,
                data
            })
            setListPokemons(data.results);
        } catch (error) {
            console.log("Hay un error: ", error)
        }
    }

    return (
        <View
            style={{ flex: 1, paddingHorizontal: 10, gap: 10 }}
        >
            {
                listPokemons.map((pokemon, index) => (
                    <View
                        key={index}
                        style={{
                            borderWidth: 1,
                            borderColor: 'black',
                            padding: 10,
                            borderRadius: 10,
                        }}
                    >
                        <Text >{pokemon.name}</Text>
                    </View>
                ))
            }
            <Link href="/home">Inicio</Link>
        </View>
    )
}