/*
 *  TEAM MEMBERS, CAN BE EDITED
 */

const teamMembers = [
    {
        type: 'owners',
        data: [
            {
                name: 'Flolingo',
                ign: 'Flolingo',
                role: 'Owner',
                photo: 'assets/images/teamHeads/flolingo.png'
            }, {
                name: 'Welerien',
                ign: 'Welerien_',
                role: 'Owner',
                photo: 'assets/images/teamHeads/welerien_.png'
            }
        ]
    },
    {
        type: 'developers',
        data: [
            {
                name: 'Kili',
                ign: 'G4L_Kili',
                role: 'Developer',
                photo: 'assets/images/teamHeads/g4l_kili.png'
            }, {
                name: 'Bluey',
                ign: 'Bluebull0',
                role: 'Developer',
                photo: 'assets/images/teamHeads/bluebull0.png'
            }, {
                name: 'NotFabi',
                ign: 'IGoByEveryName',
                role: 'Developer',
                photo: 'assets/images/teamHeads/igobyeveryname.png'
            }
        ]
    },
    {
        type: 'builders',
        data: [
            {
                name: 'LucScorp',
                ign: 'LucScorp',
                role: 'Builder',
                photo: 'assets/images/teamHeads/lucscorp.png'
            }, {
                name: 'AffeLustig',
                ign: 'AffeLustig',
                role: 'Builder',
                photo: 'assets/images/teamHeads/affelustig.png'
            }, {
                name: 'Denea',
                ign: 'Denea',
                role: 'Builder',
                photo: 'assets/images/teamHeads/denea.png'
            }
        ]
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

let isScrollingDown = true;
let lastScrollTime = Date.now();

let scrollCounter = 0;
let teamRankIndex = 0;

const determineScrollDirection = (event) => {
    scrollCounter++;
    const timeDiff = Date.now() - lastScrollTime;

    if (timeDiff >= 500 || (scrollCounter >= 10 && timeDiff >= 400)) {
        scrollCounter = 0;
        lastScrollTime = Date.now();
        const deltaY = event.deltaY;

        if (deltaY > 0) {
            isScrollingDown = true;
        } else if (deltaY < 0) {
            isScrollingDown = false;
        }

        let previousTeamRankIndex = teamRankIndex;

        if (isScrollingDown) {
            if (teamRankIndex < teamMembers.length - 1) {
                teamRankIndex++;
            }
        } else {
            if (teamRankIndex > 0) {
                teamRankIndex--;
            }
        }

        if (previousTeamRankIndex !== teamRankIndex) {
            updateTeamRanks();
        }
    }
};

updateTeamRanks();

function updateTeamRanks() {
    let keys = teamMembers[teamRankIndex];

    const finalReplacement = stringBuilder();

    for(let i = 0; i < keys.data.length; i++) {
        let member = keys.data[i];
        
        const sb = stringBuilder();
        sb.append('<div class="container">');
        sb.append('<div class="top-container">');
        sb.append('<div class="my-photo">');
        sb.append(`<img src="${member.photo}">`);
        sb.append('</div>');
        sb.append('<br>');
        sb.append(`<span style="font-size: 3rem;"><strong>${member.name}</strong></span>`); 
        sb.append(`<p style="font-size: 1.75rem">IGN: ${member.ign}</p>`);
        sb.append(`<p style="font-size: 1.75rem">${member.role}</p>`);
        sb.append('</div>');
        sb.append('</div>');

        finalReplacement.append(sb.toString());
    }

    replaceContentWithAnimation(finalReplacement.toString());
}

function replaceContentWithAnimation(newContent) {
    $('#member-container').fadeOut('fast', function() {
        $(this).html(newContent).fadeIn('fast');
    });
}

window.addEventListener('wheel', determineScrollDirection);

window.addEventListener('keydown', function(event) {
    const timeDiff = Date.now() - lastScrollTime;

    if (timeDiff >= 150) {
        lastScrollTime = Date.now();

        let previousTeamRankIndex = teamRankIndex;

        if (event.code === 'ArrowDown' || event.code === 'ArrowRight') {
            if (teamRankIndex < teamMembers.length - 1) {
                teamRankIndex++;
            }
        } else if (event.code === 'ArrowUp' || event.code === 'ArrowLeft') {
            if (teamRankIndex > 0) {
                teamRankIndex--;
            }
        }

        if (previousTeamRankIndex !== teamRankIndex) {
            console.log(teamMembers[teamRankIndex].type);
            updateTeamRanks();
        }
    }
});