// turning pages 
const pageturnbtn = document.querySelectorAll('.nextprev-btn');

pageturnbtn.forEach((el, index)=> {
    el.onclick = () => {
        const pageTurnId = el.getAttribute('data-page');
        const pagesTurn = document.getElementById(pageTurnId);

        if (pagesTurn.classList.contains('turn')) {
            pagesTurn.classList.remove('turn');
            setTimeout(() => {
                pagesTurn.style.zIndex = 20 -index ;
            }, 500)
        }
        else {
            pagesTurn.classList.add('turn');
            setTimeout(() => {
                pagesTurn.style.zIndex = 20 + index ;
            }, 500)
        }

    }
})

// contact me button

const pages = document.querySelectorAll('.book-page.page-right');
const contactmebtn = document.querySelector('.btn.contactme');

contactmebtn.onclick = () => {
    pages.forEach((page, index) => {
        setTimeout(() => {
            page.classList.add ('turn');

            setTimeout(() => {
                page.style.zIndex =20 + index;
            }, 500)

        }, (index + 1) * 200 + 100)
    })
}

// createing reverse index func

let totalPages = pages.length;
let pageNumber = 0;

function reverseIndex(){
    pageNumber--;
    if (pageNumber <0) {
        pageNumber = totalPages -1;
    }
}

// back profile button click 
const backProfileBtn = document.querySelector('.back-profile');

backProfileBtn.onclick = () => {
    pages.forEach((_,index) => {
        setTimeout(() => {
            reverseIndex();
            pages[pageNumber].classList.remove('turn');

            setTimeout(() => {
                reverseIndex();
                pages[pageNumber].style.zIndex = 10 + index;
            }, 500)
        }, (index + 1) * 200 + 100)
    })
}


// opening Animation

// const coverRight = document.querySelector('.cover.cover-right');


// setTimeout(() => {
//     coverRight.classList.add('turn');
// }, 2100)

// setTimeout(() => {
//     coverRight.style.zIndex= -1;
// }, 2800)

// const pageLeft = document.querySelector('.book-page.page-left');
// setTimeout(() => {
//     pageLeft.style.zIndex= 20;
// }, 3200)

// pages.forEach((_,index) => {
//     setTimeout(() => {
//         reverseIndex();
//         pages[pageNumber].classList.remove('turn');

//         setTimeout(() => {
//             reverseIndex();
//             pages[pageNumber].style.zIndex = 10 + index;
//         }, 500)
//     }, (index + 1) * 200 + 2100)
// })