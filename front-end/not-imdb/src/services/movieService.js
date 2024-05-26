const BASE_URL = `${import.meta.env.VITE_BACK_END_SERVER_URL}/movies`;

//Index route
const index = async () => {
    try {
    const res = await fetch(BASE_URL);
    return res.json();
    } catch (error) {
        console.log(error);
    }
};

//Create route
const create = async (FormData) => {
    try {
        const res = await fetch(BASE_URL, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(FormData)
        });
        return res.JSON();
    } catch (error) {
        console.log(error);
    }
}

export { index, create };