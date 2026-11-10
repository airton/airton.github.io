/*
  GitHub contribution calendar, fetched once at build time.

  The site is static, so the graph is as fresh as the last deploy — fine for a
  year-long heatmap. GitHub serves the calendar as an HTML fragment at
  /users/<login>/contributions (the same one the profile page loads); there is
  no public JSON endpoint without a token. If the markup changes or the fetch
  fails, this returns null and the home simply leaves the section out rather
  than failing the build.
*/

export interface ContributionDay {
  date: string; // YYYY-MM-DD
  level: 0 | 1 | 2 | 3 | 4;
}

export interface GithubActivity {
  /** Columns of 7 days (Sunday first), oldest week first. */
  weeks: (ContributionDay | null)[][];
  total: number;
  activeDays: number;
  /** Consecutive active days ending today (or yesterday, if today is still empty). */
  streak: number;
}

export async function getGithubActivity(login: string): Promise<GithubActivity | null> {
  try {
    const res = await fetch(`https://github.com/users/${login}/contributions`);
    if (!res.ok) return null;
    const html = await res.text();

    const days: ContributionDay[] = [];
    for (const m of html.matchAll(/data-date="(\d{4}-\d{2}-\d{2})"[^>]*?data-level="([0-4])"/g)) {
      days.push({ date: m[1], level: Number(m[2]) as ContributionDay["level"] });
    }
    if (days.length < 300) return null;
    days.sort((a, b) => a.date.localeCompare(b.date));

    const totalMatch = html.match(/([\d,]+)\s+contributions?\s/);
    const total = totalMatch ? Number(totalMatch[1].replace(/,/g, "")) : 0;

    // Lay the days out as week columns, padding the first week so rows line up
    // with weekdays.
    const weeks: (ContributionDay | null)[][] = [];
    let week: (ContributionDay | null)[] = Array(new Date(`${days[0].date}T00:00:00Z`).getUTCDay()).fill(null);
    for (const day of days) {
      week.push(day);
      if (week.length === 7) {
        weeks.push(week);
        week = [];
      }
    }
    if (week.length) weeks.push([...week, ...Array(7 - week.length).fill(null)]);

    const activeDays = days.filter((d) => d.level > 0).length;

    let streak = 0;
    let i = days.length - 1;
    if (days[i]?.level === 0) i--; // today may simply not have started yet
    for (; i >= 0 && days[i].level > 0; i--) streak++;

    return { weeks, total, activeDays, streak };
  } catch {
    return null;
  }
}
