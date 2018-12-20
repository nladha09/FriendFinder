# FriendFinder
Compatibility-based "FriendFinder" application

1. Answer a survey of 10 questions - Each response is based on a scale of 1 to 5 based on how much the user agrees or disagrees with a question.

2. The `server.js` file utilizes the following npm packages: `express` and `path`.

3. The `htmlRoutes.js` file contains two routes:

   * A GET Route to `/survey` which displays the survey page.
   * A default, catch-all route that leads to `home.html` which displays the home page.

4. The `apiRoutes.js` file contains two routes:

   * A GET route with the url `/api/friends`. This is used to display a JSON of all possible friends.
   * A POST routes `/api/friends`. This is used to handle incoming survey results. This route is also used to handle the compatibility logic.

5. Application data is saved inside of `app/data/friends.js` as an array of objects. 

6. Determine the user's most compatible friend - The closest match will be the user with the least amount of difference.


### Heroku Link

* [FriendFinder](https://friend-finder-55327.herokuapp.com/)

