# General Overview

This is a React Single Page Application with TypeScript that handles a mortgage calculator.

Project intended structure:
```
src/
|-- diagrams/
|   |-- first_overview.jpg
|-- components/
|   |-- InputForm/
|   |   |-- InputForm.tsx
|   |-- MortgageGraph/
|   |   |-- MortgageGraph.tsx
|   |-- PaymentTable/
|   |   |-- PaymentTable.tsx
|-- types/
|   |-- MortgageTypes.ts
|-- utils/
|   |-- mortgageCalculator.ts
|-- App.tsx
|-- index.tsx
|-- styles/
|   |-- App.css
|   |-- InputForm.css
|   |-- MortgageGraph.css
|   |-- PaymentTable.css
|-- tsconfig.json
```

Explanation of each directory/file:

`diagrams`: Folder for storing screenshots, diagrams and any other brainstorm products.

`components`: Each major part of your UI is a separate component.

`InputForm`: Component for user input.
`MortgageGraph`: Component for displaying the mortgage graph.
`PaymentTable`: Component for displaying the payment table.
`types`: TypeScript type definitions.

`MortgageTypes.ts`: Define types for your mortgage-related data.
`utils`: Utility functions.

`mortgageCalculator.ts`: Functions for mortgage calculations.
`App.tsx`: The main component where you combine your UI components and manage state.

`index.tsx`: Entry point of the application where React is rendered.

`styles`: CSS files for styling your components.

`tsconfig.json`: TypeScript configuration file.

The `InputForm`, `MortgageGraph`, and `PaymentTable` components are stateful functional components that will manage their state through React hooks. The App component will handle the overall state, including passing data and functions as props to child components.


## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!
