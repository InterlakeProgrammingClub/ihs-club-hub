<svelte:head>
    <title>Clubs - IHS Club Hub</title>
	<meta name="description" content='The one and only official site to find clubs at Interlake High School!' />
</svelte:head>

<script>
    import { clubs } from '$lib/clubs.js';
    import IconStar from 'phosphor-svelte/lib/StarFour';
</script>

<div class="main">
    <div class="content">
        <h1>Register a Club</h1>
        <p>Want your club on this site? Contact us here. Once we verify that you are a club, we will request more information from you, and your club will be available here shortly afterward.</p>
        <br/>
        <h1>Want a club website?</h1>
        <p>We got you! Just hit us up and we'll assign members to work on your club website.</p>
        <p>Notice: We are currently booked with numerous websites and are facing delays. If you have requested a website, expect completion no sooner than 2 weeks.</p>
        <br />
        <h1>Want your club to be sponsored?</h1>
        <p>No problem. Just contact us and we can make your club sponsored to increase visibility upon an agreed price.</p>
    </div>
</div>

<style>
    .content {
        padding: 0rem 1rem;
        text-align: center;
        align-items: center;
        place-items: center;
    }
    
</style>
