<script>
    import Header from '../../../lib/header.svelte';

    export let data;

    const error = data.error;
    const errorName = error.error;
    const solution = error.solution;

    // console.log(errorName);
    // console.log(solution);
</script>

<svelte:head>
    <title>MineCrash | {errorName}</title>
    <meta property="og:title" content="{errorName}" />
    <meta property="og:description" content="{solution}" />
    <meta name="description" content="{solution}" />
    <meta name="theme-color" content="#000000" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <link rel="icon" type="image/png" href="/favicon.png" />
</svelte:head>

<Header />

<main>
    <h1>{errorName}</h1>
    <p>{solution}</p>
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
</style>