async function getOnlinePlayers() {
    try {
        /*
         *  Updates only every 60 seconds because content is cached for 60 seconds.
         */
        const response = await fetch(`https://api.mcsrvstat.us/2/37.221.197.1:25565`);
        
        if (!response.ok) {
            throw new Error('Network response was not ok.');
        }
        
        const serverData = await response.json();
        const serverDataObject = JSON.parse(JSON.stringify(serverData));
        const players = serverDataObject.players.online;
        if (players === 1) {
            return players + " Player online.";
        }
        return players + " Players online.";
    } catch (error) {
        console.error('Error fetching online players: ', error);
        return 0;
    }
}

async function updateOnlinePlayers() {
    const playersElement = document.getElementById("players");
    if (playersElement) {
        try {
            const onlinePlayers = await getOnlinePlayers();
            playersElement.innerText = onlinePlayers;
        } catch (error) {
            playersElement.innerText = "Error fetching online players";
            console.error('Error updating online players: ', error);
        }
    }
}