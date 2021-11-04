gsap.from('.heading', {duration: 1.5, delay: 1.5, opacity:0, x: 200})
gsap.from('.logo', {duration:1.5, delay: 1.5, opacity:0, x: -200})

gsap.from('footer', {duration:1.5, delay: 1.5, opacity:0, y: 200})

// function changeBg(){
//     const images = [
//         'url("assets/unsplash_aeNg4YA41P86th.png")',
//         'url("assets/unsplash_n5HOJGtYt4Qfirst.png")',
//         'url("assets/unsplash_mwXtmsTGlzEsecond.png")',
//         'url("assets/unsplash_iiqpxCg2GD4third.png")',
//         'url("assets/unsplash_rn-NLirHQPYfourth.png")',
//         'url("assets/unsplash_esgGaHjf3VYfifth.png")',
//     ]
//     const bg = document.querySelector('.bg')
//     const newBg = images[Math.floor(Math.random() * images.length)];
//     bg.style.backgroundImage = newBg;

// }

// setInterval(changeBg, 3000)
