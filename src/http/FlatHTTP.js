export  const getAllFlats = async () => {
    const response = await fetch('https://zenbittech-test-job-backend-production.up.railway.app/flats');
    if (!response.ok) {
        throw new Error('Network response was not ok');
    }

    const data = await response.json();

    return data;
}