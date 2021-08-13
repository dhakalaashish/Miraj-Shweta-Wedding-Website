var menu = document.getElementById("menu");

function showMenu() {
    menu.style.right = "0";
}

function hideMenu() {
    menu.style.right = "-40vw";
}

// Comments section --------------------------------------------------
//comments with all the data
const comments = [
    {
        id: 1,
        name: 'chaitanya dhungana',
        relation: "Bride's Cousin brother",
        img: 'images/comments/attendee1a.jpg',
        comment: "I looked very handsome in the engagement, and did my best to sing very good! I love my sister and I wanted to do my best to make her wedding successful.",
    },
    {
        id: 2,
        name: 'Krishna chandra dhakal',
        relation: "Bride's father",
        img: 'images/comments/attendee2a.jpg',
        comment: "As a dad of the bride, I had a lot of resposibilities, and I was mostly busy with them. I felt like a part of me was being taken away when I did 'Kanya Dan' for my daughter. It felt like losing my daughter. I wish all my best for her happy married life.",
    },
    {
        id: 3,
        name: 'kayara adhikari',
        relation: "Bride's Cousin sister",
        img: 'images/comments/attendee3a.jpg',
        comment: "I was 2 years old during her wedding. It was fun as I could see so many people. I love Shweta Dd.",
    },
    {
        id: 4,
        name: 'sagun pandey',
        relation: "Bride's Cousin sister",
        img: 'images/comments/attendee4a.jpg',
        comment: "I managed all the things in the wedding and it worked out wonderfully! I have not ever attended a more beautiful wedding!",
    },
    {
        id: 5,
        name: 'prajiv bhattrai',
        relation: "Groom's Cousin brother",
        img: 'images/comments/attendee5a.jpg',
        comment: "I am happy that my little brother got married to such a wonderful wife and that she is a part of our family now!",
    },
]

//selecting elements
const img = document.getElementById('attendee-img');
const name = document.getElementById('name');
const relation = document.getElementById('relation');
const comment = document.getElementById('comment');

const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');
const randomBtn = document.querySelector('.random-btn');

//setting current attendee
let currentAttendee = 0;

//when loaded, display one of the comment!
window.addEventListener('DOMContentLoaded', function () {
    let attendee = comments[currentAttendee];
    img.src = attendee.img;
    name.innerText = attendee.name;
    relation.innerText = attendee.relation;
    comment.innerText = attendee.comment;
})

// declaring function of showing comment!
function showComment(person) {
    let attendee = comments[person];
    img.src = attendee.img;
    name.innerText = attendee.name;
    relation.innerText = attendee.relation;
    comment.innerText = attendee.comment;
}

// setting eventlistener to prevBtn
prevBtn.addEventListener('click', () => {
    currentAttendee--;
    if (currentAttendee < 0) {
        currentAttendee = comments.length - 1;
    }
    showComment(currentAttendee);
})

// setting eventListener to nextBtn
nextBtn.addEventListener('click', () => {
    currentAttendee++;
    if (currentAttendee > comments.length - 1) {
        currentAttendee = 0;
    }
    showComment(currentAttendee);
})

//setting eventlistener to random btn

randomBtn.addEventListener('click', () => {
    currentAttendee = Math.floor(Math.random() * comments.length);
    showComment(currentAttendee);
})


