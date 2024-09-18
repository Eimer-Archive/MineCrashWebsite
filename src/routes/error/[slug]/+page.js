/** @type {import('./$types').PageLoad} */
export async function load({ fetch, params }) {
	// get the solutions
    // const solutions = await fetch(`https://api.github.com/repos/Eimer-Archive/MineCrashSolutions/contents/solutions`)
    //     .then(res => res.json());
    // const error = JSON.parse(readFileSync(`static/errors/${params.slug}.json`, 'utf-8'));
    const error = await fetch(`/errors/${params.slug}.json`).then(res => res.json());
    // get the error
    return { error, status: 200 };

    // for (let i = 0; i < solutions.length; i++) {
    //     if (solutions[i].name === params.slug + '.json') {
    //         const error = await fetch(solutions[i].download_url)
    //             .then(res => res.json());
    //         return { error: error, status: 200 };
    //     }
    // }

    // return { status: 404 };
}