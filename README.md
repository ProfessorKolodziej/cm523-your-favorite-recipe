# Your Favorite Recipe

In this assignment, you'll be creating a single page website using HTML and CSS for your favorite recipe. 
What is a recipe? Anything that involves a set of ingredients and a set of directions. It could be a recipe 
for soup, a recipe for disaster - whatever your favorite recipe is, as long as there is a set of ingredients 
and a set of directions, go wild! Here's a [very simple example](https://docs.google.com/document/d/10uYBUDpqmjEQomhREas3zqlwPIL7pT1q_1ca-_C4twc/edit?usp=sharing) I wrote up for the wireframing videos.

In part 1, your focus will be on writing valid, semantic HTML for the content of your recipe. In part 2, you 
will use the wireframes and mockup of your recipe to add images and write CSS for the recipe. Your goal is 
to keep the proper semantics of the HTML, while doing your best to acheive what you mocked up. You will have 
two weeks to write the CSS and lots of class time, so challenge yourself with a fun design!

## Requirements: Part 1

- [ ] All HTML is valid.
- [ ] You have chosen the most semantic HTML tags possible to mark up your content. *Hint: refer to the second lecture videos and ask questions in class if you're debating between two tags.*
- [ ] Your recipe includes a title, introduction paragraph, ingredients, and directions. You can include other content if you like, such as images.
- [ ] If the recipe is from a website or book, you have cited the source and marked it up appropriately.
- [ ] Don't worry about autograding for part 1.

## Requirements: Part 2

- [ ] All CSS is valid.
- [ ] Your HTML is still semantic and additional HTML tags required for styling, if any, are used sparingly.
- [ ] Your CSS selectors use classes, not IDs.
- [ ] Your CSS classes are named in a way that's easy for another developer to read and understand.
- [ ] Your specificity is minimal, so other developers can easily override your CSS if needed later on.
- [ ] Your design renders consistently in the most recent version of Safari, Firefox, Google Chrome, and Microsoft Edge. (You can use https://www.browserstack.com/test-on-microsoft-edge-browser to test this if you don't have them installed.)
- [ ] The finished product looks roughly like your mockup, minus any interactivity, animation, or functionality that might require JavaScript.
- [ ] Autograding should pass.

## Finished Assignment Example

Hint: Use Inspect Element to double check your HTML and CSS.

- Part 1 Finished Example: [https://your-favorite-recipe-pt1-example.glitch.me](https://your-favorite-recipe-pt1-example.glitch.me)
- Part 2 Finished Example: [https://your-favorite-recipe-pt2-example.glitch.me](https://your-favorite-recipe-pt2-example.glitch.me)

## What's new in this lesson?

In our last lesson, we learned how to preview and test our work using `npm`. As a reminder, you'll be using `npm run start` to start all your assignment work, and then `npm run test` to make sure it meets assignment requirements. Today, we'll learn a new GitHub skill: how to create a branch and open a pull request in GitHub.

A **branch** is a set of code changes (commits!) that all go together. Just like in the Test Your Connections assignment, today, you'll work on the `main` branch. Today, you'll learn how to create an `assignment` branch. 

Branches are required to make a **pull request**. Pull Requests are the heart of collaboration on GitHub. When you open a pull request, you’re proposing a set of changes, and asking that someone review them. In our previous assignments, GitHub Classroom automatically opened a branch for you that contained your changes to the assignment, and that was what allowed me to review your work as your professor. Today, you're going to learn how to do that yourself.

### New terms

- **Branch:** A set of [commits](https://github.com/ProfessorKolodziej/cm523-test-your-connections#new-terms) that are all related to one another.
- **Pull Request:** A way to propose your changes and ask for a review of your code. Pull requests help developers collaborate and review each other's code!

## Instructions

These instructions will build on your knowledge by having you practice the same set of skills you learned in Test Your Connections and Hello World, but without the step by step screenshots. See if you can remember how to do each step without the help of the screenshots. If you are having trouble or getting stuck, head over to the Hello World assignment instructions for a reminder.

### 1. Clone this repository and find it on your computer

1. Use the "Open with Github Desktop" button to open this repository in Tower.
2. When the window opens in Tower, choose Clone.
3. In Tower, click Repositories, then select your repository, then click "Open".

### 2. New: Create a branch in Tower

| Step | Screenshot |
| --- | --- |
| Open Tower, and make sure you are in your Repository view, and that you've clicked "Working Copy". Then, right click the **main** branch and select "Create new branch from main...". | <img width="1843" alt="Screen Shot 2021-09-06 at 11 47 01 AM" src="https://user-images.githubusercontent.com/1828613/132241164-77318d57-996f-40bd-a162-d0cf6b754e97.png"> | 
| Name your new branch `part-1`. The starting point should be main. Make sure “track branch main” is unchecked, and “check out branch” is checked. When you've verified the settings are correct, click "Create branch". | <img width="1838" alt="Screen Shot 2021-09-06 at 11 47 23 AM" src="https://user-images.githubusercontent.com/1828613/132241506-0d47b71f-4418-47f7-b147-589709fdb2e3.png"> | 
| You will now be on the `part-1` branch. Look for the `head` tag to confirm. | <img width="1845" alt="Screen Shot 2021-09-06 at 11 53 42 AM" src="https://user-images.githubusercontent.com/1828613/132241752-95f499d1-f1f0-4676-9d45-e69c8792ed9b.png"> | 
| Finally, right click the Working Copy and select Reveal in Finder to open up the location of your assignment in Finder. | <img width="1735" alt="Screen Shot 2021-09-06 at 11 56 04 AM" src="https://user-images.githubusercontent.com/1828613/132241974-323068a7-4493-48ce-a477-5563c0e936a0.png"> | 

### 3. Install development dependencies
You only need to install development dependencies when you first start the assignment. Once you've run `npm install` on an assignment, you don't need to do it again. 

1. Drag the folder onto the Terminal icon. A new window will appear with the folder name in it.
2. Run the `npm install` command. 
3. Wait for the command to finish, and then continue.

### 4. Start the assignment

1. Clear the screen using the Command + K keyboard shortcut if you are on a Mac, or `cls` and hit enter if you are on Windows. 
2. Type `npm run start`, and hit enter.
3. A new browser window will open with a preview of your assignment, and your terminal will run the start script. 
4. From now on, until you stop the script using the Control + C keyboard shortcut, your browser will show any change you make in VSCode instantly.

### 6. New: Open a pull request on GitHub for feedback

You'll be working on this assignment in two parts: one for the HTML, and one for the CSS. But wait - how can you turn in _just_ the code for part 1, and _just_ the code for part two on Blackboard? You're going to do this using pull requests. Pull requests group related code together to make it easier for someone reviewing your code to understand what's being changed. So in this assignment, your first pull request will be for HTML. As your professor, I will review it, grade it, and approve it. 

In the second week of working on this, you'll **merge** your changes, spend the next two weeks working to style your site, and then create a **new** pull request for your CSS.

| Step | Screenshot |
| --- | --- |
| Open Tower, and make sure you are in your Repository view, and that you've clicked "Working Copy". <ol><li>Click “Stage All”</li><li>Write a commit message in the Commit Subject area. Keep it short and descriptive of the changes you made.</li><li>Hit “Commit”. This creates a commit, and your changes will “disappear”.</li></ol> | ![image9](https://user-images.githubusercontent.com/1828613/130551912-d3ffbeca-089d-4311-a2de-d82258eb9676.png) | 
| This is what that "disappearing" will look like. Don't panic, your changes are still there! You can see they are because now there will be a small arrow with a number. This is how many changes you will be pushing. It's time to **push** your changes. Click the small up arrow to push your changes to GitHub. | ![image6](https://user-images.githubusercontent.com/1828613/130552156-9fd93037-8f3d-479f-a314-40e1d18ee5f8.png) | 
| This is where the new process comes in! Go back to the assignment in GitHub. Now, you'll see a small yellow banner with a green button to open a pull request. Click it! | <img width="1678" alt="Screen Shot 2021-09-14 at 8 20 24 PM" src="https://user-images.githubusercontent.com/1828613/133350984-396374a8-76fd-432b-93a9-fcee7660e1d6.png"> | 
| This is what it looks like to open a pull request. Give it a title, and a description of what I should expect from your changes. In this case, it's pretty easy - just Part 1, and that you updated the HTML and content. Click the green "Open pull request" button at the bottom when you're done. | <img width="1690" alt="Screen Shot 2021-09-14 at 8 21 52 PM" src="https://user-images.githubusercontent.com/1828613/133351098-f65a0ff5-52a7-43f7-82fa-19c565bae083.png"> | 
| This is the URL you'll send me in Blackboard! **Don't click the green merge button yet! I can't give you feedback if you click it! If you do click it, and you see an option to undo it, do that.** Please don't click it until I say you can in your review. | <img width="1692" alt="Screen Shot 2021-09-14 at 8 23 02 PM" src="https://user-images.githubusercontent.com/1828613/133351306-54e338f0-f726-4001-9f22-0d9668aa0512.png"> | 

### 7. Check Autograding

Just like before, at this point, you can check Autograding. It'll give you the same results as `npm run test`. Don't worry if all your tests aren't passing for Part 1. They will need to test for Part 2, though.

### 8. Repeat the above steps for Part 2

Rinse and repeat! We'll talk about how to **pull** changes and what to do to keep working on part 2 in class.
