# 💻 Nextjs Boilerplate

The following project is a NextJs application boilerplate developed to start new projects, with the aim of creating a scalable and easy-to-maintain application based on good practices in the React library and the Nextjs framework.

## 🚀 Get Started

Pre-requisites:

- Node 18+
- Yarn 1.22+

To set up the app you need to execute the following commands.

```bash
git clone https://github.com/victormarques98/web-template
cd test
yarn install
```

##### `yarn dev`

Runs the app in the development mode.\
Then, open [http://localhost:3000](http://localhost:3000) to view it in the browser.

#### `live preview`

This project was deployed in vercel, you can check [here]("insert-link")

## 📂 Project Structure

In order to scale my application in the easiest and most maintainable way, I prefer to keep most of my code inside the "features" folder. Inside this folder, I categorize code based on different features according each route. Each feature folder contains code that's specific to that feature's domain. This helps me keep functionality scoped to a feature and prevents me from mixing its declarations with shared elements. I find this approach much easier to maintain than using a flat folder structure with many files.

```sh
app
|
+-- _assets            # assets folder can contain all the static files such as images, fonts, etc.
|
+-- _components        # shared components used across the entire application
|
+-- _config            # all the global configuration, env variables etc.
|
+-- (features)         # feature based modules
|
+-- _hooks             # shared hooks used across the entire application
|
+-- _lib               # re-exporting different libraries preconfigured for the application
|
+-- _providers         # all of the application providers
|
+-- _styles            # all global styles and theme used across the entire application
|
+-- _types             # base types used across the application
|
+-- _utils             # shared utility functions
```

A feature have the following structure:

```sh
app/(features)/someFeature
|
+-- _api         # exported API request declarations and api hooks related to a specific feature
|
+-- _assets      # assets folder can contain all the static files for a specific feature
|
+-- _components  # components scoped to a specific feature
|
+-- _hooks       # hooks scoped to a specific feature
|
+-- _(routes)    # route components for a specific feature pages
|
+-- _stores      # state stores for a specific feature
|
+-- _types       # typescript types for TS specific feature domain
|
+-- _utils       # utility functions for a specific feature
```

## 🗄 Component Structure

To ensure clean and performant code, all components follow a project structure to ensure that business rules are not in the same file as the component's UI. However, all files related to that component are grouped in the same folder because they share similar behavior.

```sh
MyComponent
|
+-- index.tsx           # Folder that contains all the UI
|
+-- styles.module.scss  # Styles of the component
|
+-- index.stories.tsx   # Stories to use in Storybook
|
+-- index.test.tsx      # Component unit tests

```

## 🎨 Styling Approach

In the development and styling of the components, I chose to use Sass Modules for several reasons, including:

- [Sass Modules](https://sass-lang.com/documentation/at-rules/use)

  - Organization and Encapsulation;

  - Style Reusability;

  - Easy to create a theme or design system;

  - Simplified Maintenance;

  - Lightweight Library.

## 🚧 UI Development

I integrated Storybook for its ability to showcase React components individually, fostering efficient development and collaboration. It serves as interactive documentation, aids onboarding, and streamlines testing.


## 📍 State Management


#### Server State
- [React Query](https://tanstack.com/query/v5):
React Query is the best current alternative for dealing with server state within React, since it is easy to maintain and install, as well as having various features such as caching, queries and mutations.

#### Global State
- [Zustand](https://github.com/pmndrs/zustand):
Zustand is one of the best libraries to take control of global states in React applications, your implementation is less verbose and easier than redux.

#### Form State
- [React Hook Form](https://react-hook-form.com/):
React Hook Form is a good choice when I need to handle forms in react, it has a good features that reduce the amount of bugs in forms.


### Contribuitors
This project is a fork from [next-enterprise](https://github.com/Blazity/next-enterprise) with some modifications
