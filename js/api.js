export async function getmovies() {
    try {
    const response = await fetch('http://localhost:3000/movies');
    if (!response.ok)  throw new Error('Server not found');
    
    return await response.json();
} catch (error) {
    return [
        { "id" : 1, "name": "The Spider Man", "price": 120 },
        { "id" : 2, "name": "The Batman", "price": 100 },
        { "id" : 3, "name": "The Matrix", "price": 160 },
    ];
}

}