export default async function fetchGitHubRepos() {
    try {
        const GIT_USERNAME = 'marcuscostagraciano'
        const response = await fetch(`https://api.github.com/users/${GIT_USERNAME}/repos`)

        if (!response.ok) {
            throw new Error(`Failed to fetch data. Status: ${response.status}`);
        }

        const data = await response.json();

        const parsedRepos = data.map((repo) => ({
            // Less work than renaming all repos lol
            name: repo.name.replaceAll("_", "-"),
            description: repo.description || "No description available",
            language: repo.language,
            creation_date: new Date(repo.created_at).toLocaleDateString(),
            url: repo.html_url,
            topics: repo.topics.slice(0, 5).sort((a, b) => a.length - b.length),
        }));

        const sortedRepos = parsedRepos.sort((a, b) => {
            const dateA = new Date(a.creation_date);
            const dateB = new Date(b.creation_date);

            return dateB - dateA;
        });

        return sortedRepos;
    } catch (error) {
        console.error(error)
    }
}
