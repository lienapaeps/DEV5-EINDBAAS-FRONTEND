<script setup>// logica
// import components footr
import Footr from '../components/Footr.vue'
import Nav from '../components/Nav.vue'

</script>

<template>
    <div class="container">
        <div class="homepage">
            <div class="textHomepage">
            <h1 class="header header--home">
                Speciaal moment op de planning?
            </h1>
            <p>
                Verse vlaamse donuts in de stijl van jouw bedrijf als onvergetelijke attentie of heerlijk dessert? 
            </p>
            <p>
                Maak het compleet met een uniek geschenk waar iedereen van kan genieten. Als originele attentie of dessert op een grote dag... 
                Iedereen wordt blij van Donuttello Donuts.
            </p>
            <p>
                Donuttello is het Vlaamse antwoord op de Amerikaanse Donut hype; Compleet anders dan je gewoon bent, want zoals je weet is alles net iets beter met een Vlaamse Touch.
                Zo zijn ze niet zwaar en vettig maar licht en smeuïg, niet overgoten met te zoete glazuur maar afgewerkt met echte Belgische Chocolade.
                Met een gemiddelde reviewscore van 4,7 sterren op Facebook en Google zijn we dan ook het beste beoordeelde Vlaamse Donut merk.
            </p>
            <p>
                Plaats nu je bestelling en wordt verrast door onze smaken.
            </p>
            </div>
        
        <div>
            <a href="#">Maak donut</a>
        </div>
        </div>

        <div class="faq">
            <h1 class="header header--faq">Vaak gestelde vragen</h1>
            <h2 class="header header--faq">Hoe lang zijn Donuttello Donuts houdbaar?</h2>
            <p class="text text--faq">Hoe verser, hoe beter! We maken al onze donuts dagvers en raden aan om ze de dag zelf of de dag erna op te eten voor de beste smaak. Na twee dagen zullen de donuts beginnen uitdrogen.</p>

            <h2 class="header header--faq">Hoe snel kan er geleverd worden?</h2>
            <p class="text text--faq">We leveren snel. Natuurlijk hangt dit af van het soort aanvraag, maar we hebben geen probleem met het werken tegen een deadline.</p>

            <img src="../../imgs/faq.png" alt="Donuttello_FAQ">
        </div>
    </div>

    <!-- <div class="app">
        Dit is de vuejs home
    </div> -->

    <Footr />
</template>

<style scoped>

h1, p{
    color: white;
    margin: 0;
}

h1{
    padding-bottom: 1em;
    padding-top: 1em;
}

p{
    padding-bottom: 0.5em;
    width: 70%;
}

.homepage{
    margin: 0%;
    padding: 0%;
    /* background-color: var(--pink); */
    background-image: url("../../imgs/backgroundHome.jpg");
    background-repeat: no-repeat;
    height: 90vh;
}

.header--home{
    font-size: 4em;
}

.header--faq{
    color: var(--strawberry-pink);
}

.text--faq{
    color: var(--black);
}


</style>
