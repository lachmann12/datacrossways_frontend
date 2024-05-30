

# Datacrossways frontend

The frontend is a React App that works with the Daracrossways API to form the Datacrossways microservice environment. The deployment is managed by the Datacrossways repository, which includes scripts to generate cloud infrastructure elements and databases. 

## Modifying Datacrossways frontend

To change the default look of Datacrossways follow the steps below:

1) Fork of the existing Datacrossways frontend repository to create a personal copy to modify.
 <img width="975" alt="image" src="https://github.com/MaayanLab/datacrossways_frontend/assets/32603869/20cfdb24-7e35-4445-b223-2c0296f114d3">
 
2) Clone the newly created GitHub repository to work on it.
   (There are several places that will need modification to customize the frontend. A more detailed example will be provided in the future)

3) To deploy the changes of the Datacrossways frontend use the Datacrossways deployment process and follow the step-by-step instructions until you reach the section called `Cloud deployment`. At this stage some modifications on the start scripts have to be performed. Log into the server that hosts datacrossways using ssh. Modify the Dockerwise of the frontend ```vi ~/datacrossways/frontend/Dockerfile```. Change line ```RUN git clone https://github.com/MaayanLab/datacrossways_frontend.git``` to point to the modified repository. Change all entries containing `datacrossways_frontend` to point to the correct folder. (this is in case the repository was renamed and is not needed if the repository is still called datacrossways_frontend).
4) After redirecting the Dockerfile to the new repository continue as normal with the deployment.

Instead of modifying the deployment script on the hosting server, working on a forked Datacrossways repository and modifying the Docker file directly is also possible.

### `npm install`

Run this first to install all dependencies.

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

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.
o/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
