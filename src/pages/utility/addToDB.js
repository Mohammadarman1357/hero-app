const getStoredApp = () => {

    const storedAppSTR = localStorage.getItem("installList");

    if (storedAppSTR) {
        const storedAppData = JSON.parse(storedAppSTR);
        return storedAppData;
    }
    else {
        return [];
    }
}

const addToStoredDB = (id) => {
    const storedAppData = getStoredApp();

    if (storedAppData.includes(id)) {
        // alert('bhai ei id already exist');
    }
    else {
        storedAppData.push(id);

        const data = JSON.stringify(storedAppData);
        localStorage.setItem("installList", data);

    }
}

const removeFromStoredDB = (id) => {
    const storedAppData = getStoredApp();

    if (storedAppData.includes(id)) {

        const updatedData = storedAppData.filter(appId => appId !== id);
        const data = JSON.stringify(updatedData);
        localStorage.setItem("installList", data);
    }
    else {
        //alert("lagbe na kiccu e");
    }




}

export { addToStoredDB, getStoredApp, removeFromStoredDB };