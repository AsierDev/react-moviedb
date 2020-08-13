import React, { useEffect, useState } from 'react';

const useSearch = () => {
	const [movies, setMovies] = useState([]); // useState para las movies
	const [page, setPage] = useState(1); // useState para la paginación

	// useEffect para hacer la primera llamada a la API y mostrar las primeras pelis
	useEffect(() => {
		fetch(
			'https://api.themoviedb.org/3/movie/popular?api_key=7cdd6813e009397c594758fe7bce7b47&language=en-US&page=1'
		)
			.then((res) => res.json())
			// Añadimos a la variable de estado el resultado de las primeras pelis
			.then((res) => setMovies(res.results))
			.catch((e) => console.error(e));
	}, []);

	// Función para filter las películas por título
	const searchByTitle = (event) => {
		// Obtenemos el value del search
		const { value } = event.target;

		// Si la longitud del texto de búsqueda es más largo de dos caracteres hacer un nuevo fetch a la API
		if (value && value.length > 2) {
			fetch(
				`https://api.themoviedb.org/3/search/movie?api_key=7cdd6813e009397c594758fe7bce7b47&language=en-US&query=${value}&page=1&include_adult=false`
			)
				.then((res) => res.json())
				// Cambiamos el valor de la variable de estado con el array de las películas filtradas
				.then((res) => setMovies(res.results))
				.catch((e) => console.error(e));
		}
	};

	// Función para cargas más Movies cuando pulsamos en el botón de 'Load More'
	const loadMoreMovies = (event) => {
		// Actualizamos la variable de estado 'page' para que po cada click sume 1
		setPage(page + 1);

		/*
			Hacemos una nueva petición a la API colocando la variable de estado page en la parámetro de page
			para que al hacer click aumente en uno y muestre las pelis de cada page
		*/
		fetch(
			`https://api.themoviedb.org/3/search/movie?api_key=7cdd6813e009397c594758fe7bce7b47&language=en-US&query=movie&page=${page}&include_adult=false`
		)
			.then((res) => res.json())
			/*
				Actualizamos la variable de estado movies con las peliculas iniciales y 
				les concatenamos las nuevas que se añaden con la petición de esta función
			*/
			.then((res) => setMovies([...movies, ...res.results]))
			.catch((e) => console.error(e));
	};

	// Retornamos variables de estado y funciones para poder utilizarlas en cualquier parte de la APP
	return { movies, page, setMovies, searchByTitle, loadMoreMovies, setPage };
};

export default useSearch;
