const projects = [
  {
    slug: 'golf-scorecard',
    title: 'Circle it! Scorecard App',
    date: 'October 07, 2024',
    summary:
      'I have a golf scorecard app that I built using Flutter. It allows users to track their score at many courses in Vancouver, Victoria and beyond.',
    content:
      'I have a golf scorecard app that I built using Flutter. It allows users to track their score at many courses in Vancouver, Victoria and beyond. I chose to use Flutter because of its strong performance, abundance of 3rd party widgets, and I was also using it to develop CanPlan at the same time, so it was very fresh to me. \n\nGolf is not a cheap sport - and this continues to scorecard apps. This was my motivation for creating Circle it! - I wanted a fast, simple and free way to track scores while playing at all the courses I typically go to. It started as a simple app that tracked scores per hole, fairways and greens made, and putts per hole. Since then, I have added support for game formats such as skins and team match play, both of which are not easy to track when using a paper scorecard. All of these game formats have handicap adjustments, so user’s don’t need to calculate which holes some players get additional strokes on. \n\nSince I released the first version of the app in June 2024, I have made significant improvements to the app. I added an SQL database that is updated as soon as a user inputs a score, so scores are never lost when the app is closed, which was an early issue. I’ve also made significant improvements to the UI.',
    image: '/src/assets/circleit.webp',
  },
  {
    slug: 'canplan',
    title: 'CanPlan App',
    date: 'October 07, 2024',
    summary:
      'During my final co-op at CanAssist, I rebuilt their accessibility app, CanPlan, in Flutter for the University of Victoria.',
    content:
      'As the sole developer, I rebuilt the CanPlan app from scratch using Flutter. This involved designing accessible UI components, integrating SQLite for data persistence, and collaborating with stakeholders to meet accessibility needs.',
    image: '/src/assets/canplanappicon.webp',
  },
];

export default projects;
