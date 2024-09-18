<script>
    import Header from '../../../lib/header.svelte';

    export let data;

    const error = data.error;
    const errorName = error.error;
    const solution = error.solution;

    // console.log(errorName);
    // console.log(solution);
</script>

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