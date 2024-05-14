 ![svgviewer-output](https://github.com/ElloTechnology/backend_takehome/assets/3518127/561bc8d4-bffc-4360-b9ea-61e876bcec93)


# Ello Fullstack Engineering Challenge

👋 Hello,
We are really excited about you potentially joining the team, so we designed this take home exercise to give you a taste of the challenges you may encounter in the role, and better understand what it would be like to work closely together.

Thanks for taking the time, and we hope to talk with you soon!

## About Ello

Ello is a forward-thinking educational technology company dedicated to revolutionizing the way children learn to read. Our mission is to empower young readers with the tools they need to become proficient and passionate readers. We believe that fostering a love for reading is essential for a child's academic and personal growth.

**Note:** Please don't fork this repository or create a pull request against it. Other applicants may take inspiration from it. You should create another repository for the challenge. Once the coding challenge is completed, email your solution to [enter email here].


## Challenge
As part of our goal to have Ello impact as many children as we can, we offer an Ello web viewer product [link].

> Remove this and a link to the webviewer if we are live before the challenge is sent out.
![Untitled (2)](https://github.com/ElloTechnology/fullstack-take-home-test/assets/3518127/bafd1004-4923-421f-a31f-87d15d788aa8)


We give this to certain schools for free to allow teachers to share our books with children. 
You are building part of the teacher-facing UI for this product,
namely the book assignment view, where teachers can assign books to students. 

The view should have the following features:-

1. A search bar that allows users to search for books by title.
2. A list of search results that displays the book title, author, and a button to add the book to the students reading list.
3. A reading list that displays all the books that the teacher has added.
4. A button to remove a book from the reading list.

You can build this view without the concept of a "student" and just have a single reading list for the teacher.

### Requirements
- Use React as the frontend framework.
- Use [material-ui](https://mui.com/material-ui/) as the component library.
- Write your code in the `src/frontend` directory.

### Data
To get access to data that you will use for this challenge you can switch into the `src/backend` folder and run

```bash
npm install
```

Then run the following command to start the server

```bash
npm start
```

This start a Graphql server at the url `http://localhost:4000/`, the server has a single query `books` that returns a list of books. 

```graphql
query Books {
  books {
    author
    coverPhotoURL
    readingLevel
    title
  }
}
```

You can use this query to get the list of books to display in your frontend. You may need to adjust the `coverPhotoURL` to be a valid URL. The photos are in the `src/frontend/assets` directory.

### Styling Guidelines
- Use the "Mulish" Google font
- You can use the following colors (You don't have to use all but you can pick and choose from here)
<img width="1251" alt="Screenshot 2024-05-14 at 16 59 28" src="https://github.com/ElloTechnology/fullstack-take-home-test/assets/3518127/032037ed-4e16-4467-b7b5-bcfe1adfbd0a">

<img width="1247" alt="Screenshot 2024-05-14 at 17 05 32" src="https://github.com/ElloTechnology/fullstack-take-home-test/assets/3518127/a8038609-9cca-405e-9a90-923197049597">



### You will be evaluated on
- Code quality and organization.
- User experience and design.
- Beautiful and responsive UI.


