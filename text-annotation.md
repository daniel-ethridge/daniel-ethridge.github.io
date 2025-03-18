# Online Qualitative Annotation and Analysis
This is an interactive web-based application that both automatically annotates documents with emotion and sentiment and addtionally offers the user tools to qualitatively analyze the data in the web. In this context, documents refers to any group of words. This could be a tweet, a YouTube comment, a book, a news article, etc.

## Success Metrics
The following lists represent required and nice-to-have tasks to perform. 

### Required
- [ ] Annotate a piece of text with a sentiment label or labels using Google's Gemini.
- [ ] Run continuously without needing to have a web page open.
- [ ] Display basic status indicators.
    - [ ] How many documents are in the database?
    - [ ] What percentage of the documents are annotated?
- [ ] Download all comments or specific comments without interfering with the annotation process.
- [ ] Perform basic manual qualitative analysis directly in the web without interfering with the annotation process.

### Nice to have
- [ ] Run text mining models in the web
    - [ ] Association rule mining
    - [ ] LDA
    - [ ] K-means
    - [ ] Supervised learning
- [ ] Give status indicators that estimate how long a model will take to fit.
- [ ] Provide user-friendly data plotting options
- [ ] Save plots to local computer

## Third Party Tools
- Netlify Serverless functions (for running database and data analysis related code)
- Google Firebase cloud storage
- Django(?) (to more easily integrate the data analysis python code into the application)

## Tasks Timeline
Project deadline: April 28th

### Required Tasks
| Task | Dealine |
|:-:|:-:|
| Design initial UI for website | March 19 |
| Connect to firebase cloud storage and run a simple script to save example data | March 21 |
| Integrate and validate fuctioning of automatic gemini calls (1 per minute) | April 1 |
| Implement status indicators for data | April 3 |
| Implement download functionality | April 4 |
| Design qualitative analysis functions and UX | April 9 |
| Implement qualitiative analysis design | April 14 |

### Optional Tasks
These tasks shall be performed granted the above timeline does not get pushed back and all functionality is validated

| Task | Dealine |
|:-:|:-:|
| Implement LDA functionality | April 16 |
| Implement K-Means functionality | April 18 |
| Implement Supervised learning functionality | April 23 |
| Implement Plotting functionality | April 25 |
