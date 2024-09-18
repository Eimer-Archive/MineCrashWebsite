<script>
    import Header from "../lib/header.svelte";
</script>

<Header />

<main>
    <h1>Welcome to MineCrash</h1>
    <p>This is the webpage for the discord bot MineCrash which solves minecraft server errors.</p>
    <a href="https://discord.com/oauth2/authorize?client_id=990855990897418270&scope=bot&permissions=52288">Invite Bot</a>
</main>

<style>
    main {
        margin: 0 auto;
        text-align: center;
        padding: 1em;
        width: 50%;
    }
    h1 {
        color: white;
    }
    p {
        color: white;
    }
    a {
        display: block;
        background: url('/grass.png');
        color: white;
        font-weight: bold;
        padding: 0.7em 2em;
        margin: 0 auto;
        width: max-content;
        border-radius: 1em;
        text-decoration: none;
    }
</style>