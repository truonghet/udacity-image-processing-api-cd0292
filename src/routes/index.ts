import express from 'express';
import images from './api/images';

const routes: express.Router = express.Router();

routes.use('/api/images', images);

routes.get(
  '/',
  (request: express.Request, response: express.Response): void => {
    // This could be done by serving views ... Just quick and dirty for now :-)
    response.send(
      '<h1>HETTV - Image Processing API - UDACITY - CD0292</h1><p>Listening at <code><a href="/api/images">/api/images</a></code> for queries containing at least a valid filename. Optionally use both width and height to set the size...</p><p>Examples:<ul><li><a href="/api/images?filename=hettv">/api/images?filename=hettv</a></li><li><a href="/api/images?filename=hettv&width=100&height=100">/api/images?filename=hettv&width=100&height=100</a></li></ul></p>'
    );
  }
);

export default routes;
