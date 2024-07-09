<script>
    import coffecard from "../assets/ffcoffecard.webp"
    let cards = []
    for (let i = 0; i < 5;i++) {
        cards.push(`card ${i}`)
    }
</script>

<div class="w-screen"> 
    <section class="p-4 overflow-x-scroll">
        <ul class="carousel">
            {#each cards as card}
                <li class="carousel-card">
                    <img src={coffecard} alt="" width="100px" height="300px">
                </li>
            {/each}
        </ul>
    </section>
</div>
<svelte:head>
    <title>
        Starbucks Gift Cards
    </title>
</svelte:head>

<style>
    .carousel {
        @apply flex gap-4;
    }
    .carousel-card {
        @apply rounded-md shadow hover:shadow-lg bg-green-300;
    }
</style>