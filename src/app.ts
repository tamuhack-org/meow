import * as bodyParser from 'body-parser';
import * as ejs from 'ejs';
import * as express from 'express';
import * as hbs from 'hbs';
import {join} from 'path';

import {demoRoute} from './routes/demo';
import {emailRoute} from './routes/email';
import {facebookRoute} from './routes/facebook';
import {howdyHackRouter} from './routes/hh';
import {hubRoute} from './routes/home';
import {judgeRoute} from './routes/judge';
import {mentorRoute} from './routes/mentor';
import {slackRoute} from './routes/slack';
import {tamuHackRouter} from './routes/th';
import {volunteerRoute} from './routes/volunteer';
import {workshopRoute} from './routes/workshop';

const PORT = process.env.PORT || 3000;
const app = express();

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.set('views', join(__dirname, 'views'));
app.use('/static', express.static(join(__dirname, '/static')));
app.set('view engine', 'hbs');
app.engine('html', ejs.renderFile);

app.get('/', hubRoute);
app.use('/hh', howdyHackRouter);
app.use('/th', tamuHackRouter);
app.get('/workshops', workshopRoute);
app.get('/judge', judgeRoute);
app.get('/slack', slackRoute);
app.get('/demo', demoRoute);
app.get('/facebook', facebookRoute);
app.post('/email', emailRoute);

app.get('/mentor', mentorRoute);
app.get('/volunteer', volunteerRoute);

app.listen(PORT, () => {
  console.log(`Listening on ${PORT}`);
});
