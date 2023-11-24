const infos = [
    {
        title: 'Ränge',
        content: `Diese Ränge kannst du dir bei uns erspielen:<br>
💵-Lithium       50.000 Coins<br>
💶-Bohrium      250.000 Coins<br>
💴-Palladium    750.000 Coins<br>
💷-Thorium    2.000.000 Coins<br><br>
Diese Ränge kannst du in der Lobby erwerben!`,
        link: 'https://discord.com/channels/1041360489294352464/1041628425938550895/1167117177632063620'
    },
    {
        title: 'Bewerben',
        content: `Falls du Interesse hast uns zu helfen, Bewerbe dich jetzt bei uns!<br>
Wie du uns kontaktieren kannst und was wir von dir brauchen:<br><br>
-Schreib einer unserer Admins oder Co-Admins eine private Nachricht.<br>
-Was du für Leistungen bzw. Qualifikationen du mit dir bringst.<br>
-In welchen Bereichen du mithelfen möchtest und was du am besten kannst.<br><br>
Wir melden uns so schnell wie möglich bei dir. Danke.`,
        link: 'https://discord.com/channels/1041360489294352464/1041628425938550895/1167117177632063620'
    },
    {
        title: 'Commands',
        content: `Alle unsere aktuellen Commands:<br><br>
<strong>Main Commands:</strong><br>
/lobby<br>
/hub<br>
/spawn<br><br>
<strong>Money Commands:</strong><br>
/money<br>
/pay<br><br>
<strong>SMP:</strong><br>
/chunk help<br>
/chunk claim<br>
/chunk unclaim<br>
/chunk unclaim all<br>
/chunk addplayer<br>
/chunk removeplayer<br>
/chunk list [page]<br><br>
<strong>Team Commands</strong><br>
/team help<br>
/team create<br>
/team invite<br>
/team allychat<br>
/team color<br>
/team ally<br>
/team open<br>
/team list<br>
/team pvp<br>
/team description<br>
/team title<br>
/team ban<br>
/team top<br>
/team leave<br>
/team kick<br>
/team name<br>
/team demote<br>
/team promote`,
        link: 'https://discord.com/channels/1041360489294352464/1041628425938550895/1167121145187799040'
    },
];

function stringBuilder() {
    let result = '';

    function append(text) {
        result += text;
    }

    function toString() {
        return result;
    }

    return {
        append,
        toString
    };
}

const infosContainer = document.getElementById('infos-container');

updateInfos();

function updateInfos() {
    infosContainer.innerHTML = '';
    for (let i = 0; i < infos.length; i++) {
        const infoItem = infos[i];
        const sb = stringBuilder();

        sb.append(`<div class="container" style="margin-left: 2rem; margin-right: 2rem; width: auto; height: auto; padding-bottom: 3.5rem; cursor: pointer;" onclick="redirectToLink('${infoItem.link}')">`);
        sb.append('<div class="top-container">');

        sb.append(`<span style="font-size: 2rem;"><strong>${infoItem.title}</strong></span>`);

        sb.append(`<p style="font-size: 1.33rem; text-align: left; margin-left: 2rem; margin-right: 2rem;">${infoItem.content.replace(/{br}/g, '<br>')}</p>`);

        sb.append('</div>');
        sb.append('</div>');

        infosContainer.insertAdjacentHTML('beforeend', sb.toString());
    }
}

function redirectToLink(link) {
    window.open(link, '_blank');
}