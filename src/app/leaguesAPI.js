export const fetchLeagues = async (game=1) =>
{
    const response = await fetch(
        process.env.REACT_APP_API+'videogames/'+game+'/leagues',
        {
            method : 'GET',
            headers : {
                'Content-Type' : 'application/json',
                'Authorization' : 'Bearer ' + process.env.REACT_APP_TOKEN
            }
        }
    )

    const json = await response.json();
    return { json:json, headers : response.headers };
}

export const fetchLeaguesWithPages = async (game=1,page=1,size=5) =>
{
    console.log('page : ' + page);
    //get total number of elements 
    // number of pages are : 566 / 5 = 114
    // ?page[number] : pour spécifier le nombre de la page par exmple page 5
    // ?page[size] : pour spécifier le nombre d'éléments par page : exemple 5 éléments par page.
    const response = await fetch(
        process.env.REACT_APP_API+'videogames/'+game+'/leagues/?sort=id&page[number]='+page+'&page[size]='+size,
        {
            method : 'GET',
            headers : {
                'Content-Type' : 'application/json',
                'Authorization' : 'Bearer ' + process.env.REACT_APP_TOKEN
            }
        }
    )

    const json = await response.json();
    return {json: json, xtotal:response.headers.get('x-total')};
}

export const fetchLeaguebyId = async (id) =>
{
    const response = await fetch(
        process.env.REACT_APP_API+'leagues/'+id,
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