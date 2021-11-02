export const fetchVideoGames = async() =>
{
    const response = await fetch(
        process.env.REACT_APP_API+'videogames?sort=id',
        {
            method : 'GET',
            headers : {
                'Content-Type' : 'application/json',
                'Authorization' : 'Bearer ' + process.env.REACT_APP_TOKEN
            }
        }
    )

    const json = await response.json();

    return json;
}