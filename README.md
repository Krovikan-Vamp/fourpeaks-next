# Four Peaks Surgery Center with Next.js

This is a repository containing the Next.js version of the Four Peaks Surgery Center Website. The original version can be found [here](https://github.com/krovikan-vamp/fourpeaks-sc). This will also be the version that is used in production via Firebase hosting. The website administrator would need to access hosting information/analytics from the [Firebase Console](https://console.firebase.google.com/).

## Key Differences

Because this project uses Next.js, almost all components needed to be remade. I chose to create this project using Typescript for my functional components, and ES6 JavaScript for the /pages directory. Not only does this version use Reactv18.0, it also has 60% fewer dependencies. 

### Dependencies
```JSON
  // package.json

  // Next.js Project
  "dependencies": {
    "@firebase/firestore": "^3.4.11",
    "@react-spring/parallax": "^9.4.5",
    "axios": "^0.27.2",
    "firebase": "^9.8.3",
    "firebase-admin": "^11.0.0",
    "next": "12.1.6",
    "next-image-export-optimizer": "^0.10.1",
    "react": "18.1.0",
    "react-dom": "18.1.0",
    "react-firebase-hooks": "^5.0.3",
    "react-spring": "^9.4.5",
    "react-strap": "^0.0.1",
    "reactstrap": "^9.1.1"
  }
  
  // create-react-app
  "dependencies": {
    "@emotion/react": "^11.7.1",
    "@emotion/styled": "^11.6.0",
    "@firebase/analytics": "^0.7.7",
    "@material-ui/icons": "^4.11.2",
    "@mui/material": "^5.6.4",
    "@mui/styled-engine-sc": "^5.1.0",
    "@mui/x-data-grid": "^5.7.0",
    "@testing-library/jest-dom": "^5.16.1",
    "@testing-library/react": "^12.1.2",
    "@testing-library/user-event": "^13.5.0",
    "bootstrap": "^5.1.3",
    "crypto": "^1.0.1",
    "crypto-js": "^4.1.1",
    "encrypt-rsa": "^2.0.1",
    "firebase": "^9.6.6",
    "firebase-admin": "^10.0.1",
    "firebase-cli": "^1.2.0",
    "material-ui-icons": "^1.0.0-beta.36",
    "mdbreact": "^5.2.0",
    "nodemailer": "^6.7.3",
    "prompt-sync": "^4.2.0",
    "react": "^17.0.2",
    "react-bootstrap": "^2.0.4",
    "react-dom": "^17.0.2",
    "react-router-dom": "^6.2.1",
    "react-scripts": "^5.0.1",
    "react-simple-star-rating": "^4.0.5",
    "schema-object": "^4.0.11",
    "styled-components": "^5.3.3",
    "uuid": "^8.3.2",
    "web-vitals": "^2.1.2"
  }
```

## Styling

The original Four Peaks React App made heavy use of the component library [React-Bootstrap](https://react-bootstrap.github.io/) and *custom* styling for it's components. All I can say about this project is that I was still getting used to all of the features Firebase had to offer, and I am **not** a designer. It had a [single css file](https://github.com/Krovikan-Vamp/fourpeaks-sc/blob/master/public/index.css) that contains 776 (unminified) lines of styles for the app.

The new Next.js project rests its styling-responsibility on [Tailwind CSS](https://tailwindcss.com/). Many components are hand-made with the help of some specific, undocumented Codepens. The setup for Tailwind is grossly easy and makes things much easier for fresh component styling and development.

### React Spring

Having a nicely-styled webpage is nice to have on it's own, although current web standards are closer to classifying webpages as webapps on a performance and UX standpoint. To live up to this, the Next.js project has the option for dark-mode, along with heavy use of "[react-spring](https://react-spring.dev/)" to provide a much more, app-like experience. Instead of things flashing on-screen the instant they load, they flow onto the screen with the `useSpring` hook to provide a natural experience, as compared to normal, linear animation timing.

For example:
``` TSX
  // After getting the information and setting it to `surgeons`
  const surgeons: never[] = [...{}]; // List of `surgeon` Objects from Firestore
  
  // Here we define the amount of springs with a delay between each so they can animate onto the screen at different times
  const springs = useSprings(
        surgeons.length, // The amount of springs to create
        surgeons.map((item, index) => ({ 
          from: { opacity: 0, translateY: 100 },
          to: { opacity: 1, translateY: 0 }, 
          delay: index * 55
         }))
    );
```

Then, to integrate these springs into action, is as simple as adding `animated.` to the JSX inheriting element:
``` TSX
  // In the return section of your functional component
  {surgeons.map((surgeon, index) => {
    return (
        <animated.div style={springs[index]} className="p-4 lg:w-1/2 md:w-full rounded-md" key={index}>
             ... {/* Children or other JSX props */}
        </animated.div>
      )
    })
  }
```

> There is a better way to solve this as of the newest version of React Spring

``` TSX
  // Create with a delay using `useTrail`
  
  const trails = useTrail(
    surgeons.length, // The amount of Trails you want to return
    {
      to: {...props},
      from: {...props},
      config: props[, ...props]
    })
    
   // Inside the return statement
   {surgeons.map((surgeon, index) => {
    return (
        <animated.div style={trails[index]} className="p-4 lg:w-1/2 md:w-full rounded-md" key={index}>
             ... {/* Children or other JSX props */}
        </animated.div>
      )
    })
  }
```

### Tailwind CSS

Using Tailwind has been such a time and life saver. As someone who despises the look of a CSS file, it made my life much easier after learning for a few days. It provides so much readability into the component files, instead of seeing a classname I see exactly what the syntax says. (pb-4 is padding-bottom: 4em) and so on. [Setup for Tailwind CSS in Next.js](https://tailwindcss.com/docs/guides/nextjs) is less than 10 steps and solves too many issues to count. Thanks to the devs @tailwindcss!

The best part is my [CSS file](https://github.com/Krovikan-Vamp/fourpeaks-next/blob/main/styles/globals.css) looks like this:
```CSS

@tailwind base;
@tailwind components;
@tailwind utilities;
```

## Rendering Strategies

Though Next.js provides simple solutions for SSR (server side rendering), it is not needed for this project and wouldn't work without using Firebase Functions, which are not a free service; although static hosting is from Firebase Hosting.

Contrary to the strategies used in the [previous project](https://github.com/Krovikan-Vamp/fourpeaks-sc), this project makes heavy use of the [Firebase Firestore REST API](https://firebase.google.com/docs/firestore/use-rest-api) for data retrieval. Although insecure from a certain perspective, things that need to be stored and encrypted (names, numbers, contact info, etc...) are so using different strategies like RSA and custom.

Following the collection of the data, most of it is stored in the `localStorage` environment. The following pages store component rendering data in the `localStorage` environment: `/users, /users/physicians, /services, /paperwork, /surgeons`. There is one exception that is the `/testimonials` page, which stores data in the `sessionStorage` environment.

### Reasoning

Given the current standards of having PWAs replace webpages, apps prefer to store userdata and other things in their own storage rather than asking an API for it every time it's needed. This makes switches between apps MUCH faster, saving up to 2s of loading on each page. Page changes feel smooth and natural without waiting for data to load and React Spring's styling.
