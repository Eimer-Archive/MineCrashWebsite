import fs from 'fs';
import path from 'path';

async function init() {
    const solutions = await fetch(`https://api.github.com/repos/Eimer-Archive/MineCrashSolutions/contents/solutions`)
        .then(res => res.json())
        .catch(err => {
            console.error('Failed to fetch solutions:', err);
            process.exit(1);
        });
    
    if (solutions.message) {
        console.error('Failed to fetch solutions:', solutions.message);
    }else{
        const errors = solutions.map(solution => {
            return {
                slug: solution.name.replace('.json', '')
            };
        });
    
        const errorDir = path.join(process.cwd(), 'static', 'error');
        if (!fs.existsSync(errorDir)) {
            fs.mkdirSync(errorDir, { recursive: true });
        }
    
        // if the file already exists, delete it
        if (fs.existsSync(path.join(errorDir, 'slugs.json'))) {
            fs.unlinkSync(path.join(errorDir, 'slugs.json'));
        }
    
        // save all the slugs in one file
        fs.writeFileSync(path.join(errorDir, 'slugs.json'), JSON.stringify(errors, null, 4));
    }
}

init();