const projects = [
  {
    slug: 'golf-scorecard',
    title: 'Circle it! Scorecard App',
    date: 'March 24th, 2025',
    summary:
      'I have a golf scorecard app that I built using Flutter. It allows users to track their score at many courses in Vancouver, Victoria and beyond.',
    content:
      `I have a golf scorecard app that I built using Flutter. It allows users to track their score at many courses in Vancouver, Victoria and beyond. I chose to use Flutter because of its strong performance, abundance of 3rd party widgets, and I was also using it to develop CanPlan at the same time, so it was very fresh to me. \n\nGolf is not a cheap sport - and this continues to scorecard apps. This was my motivation for creating Circle it! - I wanted a fast, simple and free way to track scores while playing at all the courses I typically go to. It started as a simple app that tracked scores per hole, fairways and greens made, and putts per hole. Since then, I have added support for game formats such as skins and team match play, both of which are not easy to track when using a paper scorecard. All of these game formats have handicap adjustments, so user’s don’t need to calculate which holes some players get additional strokes on. \n\nSince I released the first version of the app in June 2024, I have made significant improvements to the app. I added an SQL database that is updated as soon as a user inputs a score, so scores are never lost when the app is closed, which was an early issue. I’ve also made significant improvements to the UI. Recently, I added the ability to request courses and save your rounds so you can compare your scores over time.`,
    image: '/assets/circleit.webp',
    link: 'https://github.com/joe-mcdonald/scorecard_app',
  },
  {
    slug: 'pga-tour-chatbot',
    title: 'PGA Tour Chatbot',
    date: 'September 18th, 2025',
    summary:
      `Right now, I am working on a chatbot that can answer questions about the PGA Tour.`,
    content:
      `Right now, I am working on a chatbot that can answer questions about the PGA Tour. Since I wanted the chatbot to contain the most up-to-date information, I created a data pipeline to scrape data. I used Python with Pandas and the Requests library to send GraphQL queries to the PGA Tour's website to extract about the active players, tournaments, and current stats leaders. I use Pandas to create polished CSVs that contain all of the data, which makes it easier to process when creating the ChromaDB  vector database. The chroma_setup.py file creates the vector database using a sentence-transformers model to create the embeddings. Afterwards, I run the oss-gpt:latest model from within Ollama and I use gradio to create a simple web interface to interact with the chatbot.\n\n So far, I am able to ask the chatbot questions about current players, tournaments, and stats leaders. I am currently working on improving the chatbot's ability to answer more complex questions, such as "Who has the most top 10 finishes this season?" or "What is the average driving distance on the PGA Tour this year?" I am also working on improving the chatbot's ability to answer questions about comparing players, such as "How does Scottie Scheffler's driving distance compare to Rory McIlroy's?"\n\nOverall, this project has been a great way to learn more about data scraping, data processing, and working with LLMs. I am excited to continue working on this project and see how far I can take it.`,
    image: '/assets/chatbot_demo.png',
  },
  {
    slug: 'canplan',
    title: 'CanPlan App',
    date: 'August 31st, 2024',
    summary:
      'During my final co-op at CanAssist, I rebuilt their accessibility app, CanPlan, in Flutter for the University of Victoria.',
    content:
      'As the sole developer, I rebuilt the CanPlan app from scratch using Flutter. This involved designing accessible UI components, integrating SQLite for data persistence, and collaborating with stakeholders to meet accessibility needs.',
    image: '/assets/canplanappicon.webp',
  },
  
];

export default projects;
