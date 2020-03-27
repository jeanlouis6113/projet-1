// mode sombre

function switchTheme(event) {
    if (event.target.checked) {
        document.documentElement.setAttribute('data-theme', 'dark');
    }
    else {
        document.documentElement.setAttribute('data-theme', 'light');
    }
}

const toggler = document.querySelector('#toggler');
toggler.addEventListener('change', switchTheme, false);

// fin du mode sombre




// changement du style

function switchChange(event) {
    console.log(event.target);
    if (event.target.checked) {


        // modification de la couleur de la classe jlp
        const jlp = document.getElementsByClassName('jlp')[0];

        //console.log(jlp);

        for (let child of jlp.children) {
            child.style.color = 'blue';
        }
        // modification de la couleur d'un paragraphe de la classe jlp1

        const jlp1 = document.getElementsByClassName('jlp1')[0];

        jlp1.children[2].style.color = 'red';

        //console.log(jlp1.children[2]);

        //modification du background du logo

        const article = document.getElementsByClassName('article')[0];

        article.children[0].style.backgroundColor = "red";

        //console.log(article);

        //console.log(article.children);

        // modification de la taille de la police 

        const bloc1 = document.getElementsByClassName('bloc1')[0];

        //console.log(bloc1);

        //modification de la taille du paragraphe + mise a en place du soulignement du titre en rouge

        bloc1.children[1].style.fontSize = '40px';
        bloc1.children[0].style.textDecoration = 'underline red';

        //console.log(bloc1.children[1]);

        const jlp2 = document.getElementsByClassName('jlp2')[0];

        //console.log(jlp2);
        jlp2.children[0].style.backgroundColor = "yellow";

    } else {
        const jlp = document.getElementsByClassName('jlp')[0];
        for (let child of jlp.children) {
            child.style.color = 'grey';

            const jlp1 = document.getElementsByClassName('jlp1')[0];

            jlp1.children[2].style.color = 'white';

            const article = document.getElementsByClassName('article')[0];

            article.children[0].style.backgroundColor = "white";

            const bloc1 = document.getElementsByClassName('bloc1')[0];
            bloc1.children[1].style.fontSize = '1.3rem';
            bloc1.children[0].style.textDecoration = 'none';

            const jlp2 = document.getElementsByClassName('jlp2')[0];
            jlp2.children[0].style.backgroundColor = "white";


        }
    }
}

const toggle = document.querySelector('#toggle');
toggle.addEventListener('change', switchChange, false);

// fin changement de style 


