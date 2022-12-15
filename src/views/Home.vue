<script setup>
// import components footr
import Footr from '../components/Footr.vue'
import Button from '../components/Button.vue'

</script>

<template>
    <div class="homepage__bgimg">
        <div class="textHomepage">
            <h1 class="header header--home">
                Speciaal moment op de planning?
            </h1>
            <p>
                Verse vlaamse donuts in de stijl van jouw bedrijf als onvergetelijke attentie of heerlijk dessert?
            </p>
            <p>
                Maak ze zelf met onze donutmaker of laat ze maken door onze bakkers.
            </p>
            <!-- <p>
                Donuttello is het Vlaamse antwoord op de Amerikaanse Donut hype; Compleet anders dan je gewoon bent, want zoals je weet is alles net iets beter met een Vlaamse Touch.
                Zo zijn ze niet zwaar en vettig maar licht en smeuïg, niet overgoten met te zoete glazuur maar afgewerkt met echte Belgische Chocolade.
                Met een gemiddelde reviewscore van 4,7 sterren op Facebook en Google zijn we dan ook het beste beoordeelde Vlaamse Donut merk.
            </p> -->
            <p>
                Plaats nu je bestelling en wordt verrast door onze smaken.
            </p>
        </div>
        <div class="buttons">
            <a href="/configurator">
                <Button text="Maak je eigen donut" class="btn btn--yellow" textclass="btn__text" />
            </a>
            <a href="https://donuttello.com/menu">
                <Button text="Bekijk ons menu" class="btn btn--yellow" textclass="btn__text" />
            </a>
        </div>
    </div>
    <section class="faq">
        <div class="faq__text">
            <h1 class="header header--faq">Vaak gestelde vragen</h1>
            <div class="textfaq">
                <h2 class="header header--faq">Hoe lang zijn Donuttello Donuts houdbaar?</h2>
                <p class="text text--faq">Hoe verser, hoe beter! We maken al onze donuts dagvers en raden aan om ze de
                    dag zelf of de dag erna op te eten voor de beste smaak. Na twee dagen zullen de donuts beginnen
                    uitdrogen.</p>

                <h2 class="header header--faq">Hoe snel kan er geleverd worden?</h2>
                <p class="text text--faq">We leveren snel. Natuurlijk hangt dit af van het soort aanvraag, maar we
                    hebben geen probleem met het werken tegen een deadline.</p>

            </div>
        </div>
        <img class="faq__img" src="../../imgs/faq.png" alt="Donuttello_FAQ">
    </section>

    <!-- <div class="app">
        Dit is de vuejs home
    </div> -->

    <Footr />
</template>

<style scoped>
h1,
p {
    color: white;
    margin: 0;
}

h1 {
    padding-bottom: .5em;
    padding-top: 1em;
}

a {
    text-decoration: none;
}

.textHomepage p {
    padding-bottom: 0.5em;
    width: 85%;
}

.homepage__bgimg {
    margin: 0%;
    padding: 8.5%;
    background-image: linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.6)), url("../../imgs/backgroundHome.jpg");
    background-repeat: no-repeat;
    display: flex;
    flex-direction: column;
    align-items: center;
}

.textHomepage {
    width: 95%;
}

.header--home {
    font-size: 3.1em;
}

.header--faq {
    color: var(--strawberry-pink);
}

.textfaq {
    max-width: 30rem;
}

.buttons {
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding-top: 2em;
}

.faq__text {
    padding: 8%;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 2em;
    padding-bottom: 2em;
}

.faq {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
}

.text--faq {
    color: var(--black);
}

.faq__img {
    width: 25%;
}

@media screen and (max-width: 1000px) {
    .faq {
        flex-direction: column;
    }

    .faq__img {
        width: 40%;
    }
}

@media screen and (min-width: 910px) {
    .buttons {
        padding-right: 40%;
    }

    .faq__img {
        max-width: 16rem;
    }
}
</style>
