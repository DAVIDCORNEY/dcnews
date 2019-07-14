# DC NEWS

DC News is social news aggregation website.

The website contains articles, which are divided into topics. Users can preview all of the articles or select to view articles by topic, which can be sorted by date, comment count or votes. 

Users can click on an article to view the full article and see any associated comments and votes.

If logged in, Users are able to vote up or down on an article or comment, but are only able to cast one vote in either direction before the vote button is disabled. Logged in Users are also able to add comments and delete comments that they have made. 

DC NEWS is hosted on Netlify and can be visited [here](https://dcnews.netlify.com/)

The backend API is hosted on Heroku and endpoints can be found [here](https://dc-news.herokuapp.com/api). The link to the backend GitHub repository can be found [here](https://github.com/DAVIDCORNEY/ncnews)

## Getting Started  

Please follow the steps below to run the API on your machine.

### Prerequisites  

Check if you already have node.js by typing the following command in your terminal:
```
node –v
```

If node is not already installed, please follow instructions at [Node.js](https://nodejs.org/en/) (npm will be installed with Node).

Check if git is installed on your machine by typing the following command in your terminal:
```
git –-version
```
If git is not installed, please follow instructions at [git](https://git-scm.com/downloads)

### Installing  

To run this API you will need to clone it to your local machine and install all its dependencies.

Clone this GitHub repository into the folder you want to install it in
```
git clone https://github.com/DAVIDCORNEY/dcnews.git
```
Install all the dependencies
```
npm install
```
## Dependencies
- reach/router: v1.2.1
- axios: v0.19.0
- bootstrap: v4.3.1
- jquery: v3.4.1
- moment: v2.24.0
- popper.js: v1.15.0
- react: v16.8.6
- react-dom: v16.8.6
- react-scripts: v3.0.1

### Run The Development Server
``
npm start
``
## Built With  

- [Node.js](https://nodejs.org/en/)
- [React](https://reactjs.org/)
- [Axios](https://github.com/axios/axios)
- [Bootstrap](https://getbootstrap.com/)

## Authors  

David Corney

## Acknowledgments  

Thank you to all the tutors at Northcoders Manchester.
