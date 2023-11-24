/*
 *  Abstimmungen:
 *  Das <Plugin> wurde hinzugefügt. Stimmen: 👍0 ❌0
 */

/*
 *  NEWS, CAN BE EDITED
 */

const news = [
    {
        title: "Trade & Shop System",
        date: "26.10.2023",
        content: "Das Trade & Shop System wurde hinzugefügt. {br}Stimmen: 👍15 ❌6",
        author: "Welerien",
        authorIgn: "Welerien_",
        link: "https://discord.com/channels/1041360489294352464/1167113456021938296/1167127567057301574"
    }, {
        title: "KeepInventory",
        date: "26.10.2023",
        content: "Das KeepInventory feature wurde nicht aktiviert. {br}Stimmen: 👍3 ❌22",
        author: "Welerien",
        authorIgn: "Welerien_",
        link: "https://discord.com/channels/1041360489294352464/1167113456021938296/1167131377637003306"
    }, {
        title: "Money System",
        date: "18.10.2023",
        content: "We are happy to announce that you can now use a new addition to the money system. We added a bank to the lobby in which you can put your money. The best thing about this addition is that when you now die you don't loose any money as long as it is in the bank.",
        author: "Bluey",
        authorIgn: "bluebull0",
        link: "https://discord.com/channels/1041360489294352464/1167113456021938296/1167817895162679368"
    }, {
        title: "Respawn Bug",
        date: "28.10.2023",
        content: "Hello @everyone {br}Just so you know we worked tirelessly on the respawn bug, which made you respawn on the roof of the nether, happening to some players. @Flolingo found a way to fix this problem but it requires a restart.{br}{br}restart time 29.10.2023 4 a.m{br}{br}Thanks to everyone reporting this bug to us. ",
        author: "Bluey",
        authorIgn: "bluebull0",
        link: "https://discord.com/channels/1041360489294352464/1167113456021938296/1167840326338216027"
    }, {
        title: "Tower Defense Release",
        date: "28.10.2023",
        content: "Tower Defense is releases! Note that bugs may occour",
        author: "Flolingo",
        authorIgn: "Flolingo",
        link: "https://discord.com/channels/1041360489294352464/1167113456021938296/1168217898381234227"
    }, {
        title: "Grabstein Plugin",
        date: "01.11.2023",
        content: "Das Grabstein feature wurde hinzugefügt. {br}Stimmen: 👍19 ❌8",
        author: "Flolingo",
        authorIgn: "Flolingo",
        link: "https://discord.com/channels/1041360489294352464/1167113456021938296/1168934466148909146"
    }, {
        title: "Money Drops nerf",
        date: "12.11.2023",
        content: "Warden und Wither droppen ab jetzt kein Geld mehr",
        author: "Flolingo",
        authorIgn: "Flolingo",
        link: "https://discord.com/channels/1041360489294352464/1167113456021938296/1173330867226148914"
    }
];

/*
 *  DO NOT EDIT!
 */

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

const newsContainer = document.getElementById("news-container");
updateNews();

function updateNews() {
    newsContainer.innerHTML = "";
    for (let i = news.length - 1; i >= 0; i--) {
        const newsItem = news[i];
        const sb = stringBuilder();

        sb.append(`<div class="container" style="margin-left: 2rem; margin-right: 2rem; width: auto; height: auto; padding-bottom: 2rem; cursor: pointer;" onclick="redirectToLink('${newsItem.link}')">`);
        sb.append('<div class="top-container">');

        sb.append(`<span style="font-size: 2rem;"><strong>${newsItem.title}</strong></span>`);
        sb.append(`<span style="font-size: 1.33rem; text-align: right; float: right;">${newsItem.date}</span>`);

        sb.append(`<p style="font-size: 1.33rem; text-align: left; margin-left: 2rem; margin-right: 2rem;">${newsItem.content.replace(/{br}/g, "<br>")}</p>`);

        sb.append(`<span style="font-size: 1.33rem; text-align: left; float: left;">Author: ${newsItem.author} (${newsItem.authorIgn})</span>`);

        sb.append('</div>');
        sb.append('</div>');

        newsContainer.insertAdjacentHTML('beforeend', sb.toString());
    }
}

function redirectToLink(link) {
    window.open(link, '_blank');
}