'use client';
import dynamic from 'next/dynamic';
import { useCallback, useState } from 'react';
import { Activity } from 'react-github-calendar';

const GitHubCalendar = dynamic(() => import('react-github-calendar').then(mod => mod.default) as Promise<React.ComponentType<Record<string, unknown>>>, {
  ssr: false,
  loading: () => <div className="h-[159px] w-full" />,
});

function GithubCalender() {
  const [totalCount, setTotalCount] = useState(0);

  const processContributions = useCallback((contributions: Activity[]) => {
    setTimeout(() => {
      const total = contributions
        .map((el) => el.count)
        .reduce((acc, curr) => acc + curr, 0);

      setTotalCount(total);
    }, 0);

    return contributions.slice(91, 365);
  }, []);

  // Monochrome theme: dark greys and white
  const theme = {
    light: ["#23272a", "#636363", "#a3a3a3", "#d4d4d4", "#f4f4f5"],
    dark: ["#161616", "#23272a", "#636363", "#a3a3a3", "#f4f4f5"],
  };

  return (
    <GitHubCalendar
      username="banerjeesoumya"
      transformData={processContributions}
      totalCount={totalCount}
      theme={theme}
    />
  );
}

export default GithubCalender;