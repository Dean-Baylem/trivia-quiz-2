import { useState, useCallback} from 'react'

export const useHttpRequest = () => {
    const [error, setError] = useState();

    const sendRequest = useCallback(
        async (category, difficulty) => {
            try {
                const response = await fetch(
                    `https://the-trivia-api.com/v2/questions?categories=${category}&limit=5&difficulties=${difficulty}`,
                    {method: "GET"},
                );

                const responseData = await response.json();

                return responseData;
            } catch (err) {
                setError(err);
                throw err;
            }
        }, []
    );

    return { error, sendRequest };
}