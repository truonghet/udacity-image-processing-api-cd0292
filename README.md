### Nodejs 
- Version: ```12.22.12```

### Scripts
- Install: ```npm install```
- Build: ```npm run build```
- Lint: ```npm run lint```
- Prettify: ```npm run prettify```
- Run unit tests: ```npm run test```
- Start server: ```npm run start```

### Usage
Listening Port: 3000

#### Brief instructions
http://localhost:3000/

#### Endpoint to resize images
http://localhost:3000/api/images

Query parameters:
- _filename_: Available filenames are:
  - encenadaport
  - hettv
  - icelandwaterfall
  - palmtunnel
  - santamonica
- _width_: numerical pixel value > 0
- _height_: numerical pixel value > 0

#### Scenario 1
http://localhost:3000/api/images
Will display a hint and list available image names

#### Scenario 2
http://localhost:3000/api/images?filename=hettv
Will display the original hettv image.

#### Scenario 3
http://localhost:3000/api/images?filename=hettv&width=100&height=100
Will scale the hettv image to 100 by 100 pixels and store the resulting image.
On subsequent calls will serve the resized image instead of resizing the
original again.

#### Scenario 4
http://localhost:3000/api/images?filename=hettv&width=-100&height=100
Invalid width parameter that will be hinted to.

#### Scenario 5
http://localhost:3000/api/images?filename=hettv&width=100
Missing height parameter that will be hinted to.

### Notes
- Images are served from `assets/images/full`.
- Image thumbs will be stored in `assets/images/thumb`.
