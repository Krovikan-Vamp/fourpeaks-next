# Four Peaks Surgery Center with Next.js

This is a repository containing the Next.js version of the Four Peaks Surgery Center Website. The original version can be found [here](https://github.com/krovikan-vamp/fourpeaks-sc). This will also be the version that is used in production via Firebase hosting. The website administrator would need to access hosting information/analytics from the [Firebase Console](https://console.firebase.google.com/).

## Key Differences

Because this project uses Next.js, almost all components needed to be remade. I chose to create this project using Typescript for my functional components, and ES6 JavaScript for the `/pages` directory. Not only does this version use `React v18.0`, it also has 60% fewer dependencies. 

### Dependencies

<img width="920" alt="package json" src="https://user-images.githubusercontent.com/97307321/176968593-b553d19e-c956-44ce-9554-7e0fc523c514.png">

## Styling

The original Four Peaks React App made heavy use of the component library [React-Bootstrap](https://react-bootstrap.github.io/) and *custom* styling for it's components. All I can say about this project is that I was still getting used to all of the features Firebase had to offer, and I am **not** a designer. It had a [single css file](https://github.com/Krovikan-Vamp/fourpeaks-sc/blob/master/public/index.css) that contains 776 (unminified) lines of styles for the app.

The new Next.js project rests its styling-responsibility on [Tailwind CSS](https://tailwindcss.com/). Many components are hand-made with the help of some specific, undocumented Codepens. The setup for Tailwind is grossly easy and makes things much easier for fresh component styling and development.

### React Spring

Having a nicely-styled webpage is nice to have on it's own, although current web standards are closer to classifying webpages as webapps on a performance and UX standpoint. To live up to this, the Next.js project has the option for dark-mode, along with heavy use of "[react-spring](https://react-spring.dev/)" to provide a much more, app-like experience. Instead of things flashing on-screen the instant they load, they flow onto the screen with the `useSpring` hook to provide a natural experience, as compared to normal, linear animation timing.

For example:

<img width="920" alt="components_surgeonList tsx (4)" src="https://user-images.githubusercontent.com/97307321/176968275-2075f970-d35f-41e2-947e-2fe946825909.png">


Then, to integrate these springs into action, is as simple as adding `animated.` to the JSX inheriting element:

<img width="920" alt="components_surgeonList tsx (2)" src="https://user-images.githubusercontent.com/97307321/176967400-0220ce1a-883d-4078-9367-befd961fb6f4.png">


> There is a better way to solve this as of the newest version of React Spring

<img width="920" alt="components_surgeonList tsx (1)" src="https://user-images.githubusercontent.com/97307321/176967306-dcc47049-3cba-4ffb-b7ae-954f84f4529b.png">

### Tailwind CSS

Using Tailwind has been such a time and life saver. As someone who despises the look of a CSS file, it made my life much easier after learning for a few days. It provides so much readability into the component files, instead of seeing a classname I see exactly what the syntax says. (pb-4 is padding-bottom: 4em) and so on. [Setup for Tailwind CSS in Next.js](https://tailwindcss.com/docs/guides/nextjs) is less than 10 steps and solves too many issues to count. Thanks to the devs @tailwindcss!

The best part is my [CSS file](https://github.com/Krovikan-Vamp/fourpeaks-next/blob/main/styles/globals.css) looks like this:

<img width="920" alt="styles_globals css" src="https://user-images.githubusercontent.com/97307321/176968408-84304ec3-da01-4a22-a034-6d0e76ca6634.png">

## Rendering Strategies

Though Next.js provides simple solutions for SSR (server side rendering), it is not needed for this project and wouldn't work without using Firebase Functions, which are not a free service; although static hosting is from Firebase Hosting.

Contrary to the strategies used in the [previous project](https://github.com/Krovikan-Vamp/fourpeaks-sc), this project makes heavy use of the [Firebase Firestore REST API](https://firebase.google.com/docs/firestore/use-rest-api) for data retrieval. Although insecure from a certain perspective, things that need to be stored and encrypted (names, numbers, contact info, etc...) are so using different strategies like RSA and custom.

Following the collection of the data, most of it is stored in the `localStorage` environment. The following pages store component rendering data in the `localStorage` environment: `/users, /users/physicians, /services, /paperwork, /surgeons`. There is one exception that is the `/testimonials` page, which stores data in the `sessionStorage` environment.

### Reasoning

Given the current standards of having PWAs replace webpages, apps prefer to store userdata and other things in their own storage rather than asking an API for it every time it's needed. This makes switches between apps MUCH faster, saving up to 2s of loading on each page. Page changes feel smooth and natural without waiting for data to load and React Spring's styling.

### Examples

<img width="920" alt="utils_auth ts" src="https://user-images.githubusercontent.com/97307321/176976272-7050bd6d-f3f9-4f5d-8cf6-fbcea834f36a.png">
<img width="920" alt="components_physicianStats tsx (1)" src="https://user-images.githubusercontent.com/97307321/176976594-604767bb-2fdc-4fa9-9adb-c3ab0fa8d53e.png">


## Problem Solving

Coming from the original vanilla React standpoint, there were a lot of things that, I hate to say it, *they just worked*. A lot of the problems come from the `users` functions. This would be anything after a user logged it. Not only was it lacking style-wise, it was not working correctly for the user roles. If a user was supposed to be an admin to have permissions to change info, everyone would get that option. Alongside a plethra of other bugs, new stuff needs to be usable, not a broken button.

### Testimonial Sorting

The simplest way to put this in my opinion, is to blame it on Javascript's [inability to sort further than 1 character of a string or number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort). I find a solution to this by creating a new [set](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set) of unique `values`. The `values` are [dates](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) that are parsed out by converting the `date` to a `number` and then evaluating size. To make more sense of this, please see below.

<img width="920" alt="components_testimonialDisplay tsx" src="https://user-images.githubusercontent.com/97307321/176971375-623f10b5-de8d-4f15-8e97-161c530fa1fc.png">

### Asset Load Times

A fundamental issue of web development is the time it takes to "paint" the webpage. This includes everything from caching HTTP requests, to storing custom API data inside the browser using its API, and customizing API responses with specific Firebase queries.

Below are examples of techniques used to save page-load time as well as differences between first `page` visit, and future:

Here is the result of the old request to the API (left) compared to the optimized time (right):

![image](https://user-images.githubusercontent.com/97307321/176969788-818c08c5-8533-4364-9f76-dc4db96c79a8.png)
![image](https://user-images.githubusercontent.com/97307321/176975638-4d66def9-82f2-4e26-9ef0-8888b9610aff.png)
