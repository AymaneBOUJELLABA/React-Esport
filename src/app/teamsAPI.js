export const fetchTeamsWithPages = async (game=1,page=1,size=5) =>
{
    //get total number of elements 
    // number of pages are : 566 / 5 = 570
    // ?page[number] : pour spécifier le nombre de la page par exmple page 5
    // ?page[size] : pour spécifier le nombre d'éléments par page : exemple 5 éléments par page.
    const response = await fetch(
        process.env.REACT_APP_API+'teams?filter[videogame_id]='+game+'&sort=id&page[number]='+page+'&page[size]='+size,
        {
            mode :'no-cors',
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

export const fetchTeambyId = async (id) =>
{
    const response = await fetch(
        process.env.REACT_APP_API+'teams/'+id,
        {
            mode :'no-cors',
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
