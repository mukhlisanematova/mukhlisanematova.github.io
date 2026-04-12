export const News = () => {
    const newsItems = [
        { date: "March 2026", dateTime: "2025-09", text: "Paper 'Datum Fieldnotes: Easing the Data-Work Burden on Civic and Non-Profit Organizations.' accepted at the ACM CHI Conference on Human Factors in Computing Systems (CHIWORK ‘26), San Francisco, CA, 2026' "},
        { date: "February 2026", dateTime: "2026-02", text: "Paper 'We’re in This Together (WIT): Interaction and Data Representation in Collaborative Mixed Reality Agent-Based Participatory Simulations of Complex Phenomena.' accepted at the ACM International Conference of the Learning Sciences (ISLS ‘26), Singapore, 2026" },
        { date: "January 2026", dateTime: "2026-01", text: "Graduated with my Bachelors of Arts in Computer Science from Wellesley College." },        
        { date: "June 2025", dateTime: "2025-07", text: "Joined the MIT Scheller Teacher Education Lab as an XR engineer!" },
        { date: "April 2025", dateTime: "2025-04", text: "Presented REU and paper on Datum Fieldnotes at Wellesley's 29th Ruhlman Conference."},
        { date: "March 2025", dateTime: "2025-03", text: "Paper 'Datum Fieldnotes: Easing the Data-Work Burden on Civic and Non-Profit Organizations.' accepted at the ACM CHI Conference on Human Factors in Computing Systems (CHI ‘25), Yokohama, Japan, 2025' "},
        { date: "June 2024", dateTime: "2024-06", text: "Started REU at Georgia Tech's Data Works, under mentorship of Professor Betsy DiSalvo and Annabel Rothschild!" },
        { date: "August 2023", dateTime: "2023-08", text: "Transferred and started first semester as a Junior at Wellesley College." },
        { date: "June 2023", dateTime: "2023-06", text: "Graduated with my Associate of Science (A.S) in Computer Science from Borough of Manhattan Community College." },
    ];

    return (
        <section id="news" className="py-12" aria-labelledby="news-heading">
            <div className="max-w-2xl mx-auto px-6 py-8 glass rounded-2xl">
                <h2 id="news-heading" className="text-2xl font-bold mb-8">News</h2>
                <ul className="space-y-3 list-none max-h-72 overflow-y-auto overscroll-y-contain pr-2">
                    {newsItems.map((item, i) => (
                        <li key={i} className="border-l-2 border-primary/30 pl-4 py-1">
                            <time dateTime={item.dateTime} className="text-[10px] text-primary font-mono uppercase tracking-widest block mb-1">
                                {item.date}
                            </time>
                            <p className="text-sm text-foreground/80">{item.text}</p>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    );
};
