# Shareme: A social media app

Social media app that allows users to upload image, save image, download image and comment on images uploaded by other users built with sanity, react, tailwindcss

## Table of contents

- [Links](#links)
- [Image](#image)
- [Steps completed](#steps-completed)
- [Built with](#built-with)
- [Resources](#resources)
- [Acknowledgement](#acknowledgement)
- [Author](#author)

## Links

- [Solution](https://github.com/nkp1111/shareme)
- [Live app](https://nkp1111-social-media-shareme.netlify.app/)

## Image

![image](./app_frontend/src/assets/Screenshot%202023-03-25%20183519.png)

## Steps completed

- app backend
  - install sanity
  - create schemas - user, pin, save, comment and postedBy for user reference
- app fronted
  - install react and tailwind css
  - install react-icons, react-router-dom, react-masonry, react-loader-spinner, uuid, react-google-login, @sanity/client and @sanity/image-url packages
  - create routes for login page and home page using *react-router-dom*
  - Add google-login component using *@react-oauth/google* library
  - login user and create sanity client to add user into the database and
  - add home page
  - add sidebar
  - add pin component and navbar
  - add *Circles* spinner from *react-loader-spinner* package for loading
  - show pins/image uploaded with *react-masonry-css* package
  - add createPin component for inputs of all pin detail and saving pin
  - sanity query for pin detail from pin id
  - add pinDetail page with additional info and make comment
  - add sanity query to get created pin and saved pin
  - add userProfile component for showing saved and created pin by user
  - add search component

## Built with

- [Sanity](https://www.sanity.io/)
- [React](https://react.dev/)
- [TailwindCSS](https://tailwindcss.com/)

## Resources

- react-icons
- react-router-dom
- @react-oauth/google
- @sanity/client
- @sanity/image-url
- react-loader-spinner
- react-masonry-css
- jwt-decode
- uuid

## Acknowledgement

- This project is done following the video tutorial of
*JavaScript Mastery* - [Modern React Web Development Full Course](https://www.youtube.com/watch?v=XxXyfkrP298)

## Author

- Name - Neeraj Parmar
- Twitter - @nkp11111507
