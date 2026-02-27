import { GENERAL_INFO } from '@/lib/data';
import { GitFork, Star } from 'lucide-react';

interface RepoStats {
    stargazers_count: number;
    forks_count: number;
}

const Footer = async () => {
    let stargazers_count = 0;
    let forks_count = 0;

    try {
        const repoStats = await fetch(
            'https://api.github.com/repos/tajmirul/portfolio-2.0',
            {
                next: {
                    revalidate: 60 * 60, // 1 hour
                },
            },
        );

        if (repoStats.ok) {
            const data = (await repoStats.json()) as RepoStats;
            stargazers_count = data.stargazers_count;
            forks_count = data.forks_count;
        }
    } catch (error) {
        console.error('Failed to fetch repo stats:', error);
    }

    return (
        <footer className="text-center py-20 border-t border-white/5" id="footer">
            <div className="container">
                <div className="">
                    {/* Empty container or you can add your own content here */}
                </div>
            </div>
        </footer>
    );
};

export default Footer;
