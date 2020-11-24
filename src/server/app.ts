import Express, { Application } from 'express';
import BodyParser from 'body-parser';
import Cors from 'cors';
import Helmet from 'helmet';
import Compression from 'compression';
import Path from 'path';
import stories from '../../stories.json'

class App {
	public instance: Application;
	public port: string | number;
	public env: boolean;

	constructor() {
		this.instance = Express();

		this.port = process.env.PORT || 3000;
		this.env = process.env.NODE_ENV === 'production' ? true : false;

		this.initializeMiddleware();
		this.initializeStaticFileHosting();
		this.initializeRoutes();
	}

	public listen(): void {
		this.instance.listen(this.port, () => {
			console.log(`🚀 App listening on the port ${this.port}`);
		});
	}

	private initializeMiddleware() {
		// Add middleware here
		this.instance.use(BodyParser.urlencoded({
			extended: false,
		}));
		this.instance.use(BodyParser.json());

		this.instance.use(Cors());
		this.instance.use(Helmet());
		this.instance.use(Compression());
	}

	private initializeStaticFileHosting(): void {
		this.instance.use(Express.static(Path.join(__dirname, '../app')));
		// this.instance.use(Express.static(Path.join(__dirname, './public')));
		this.instance.use(Express.static(Path.join(__dirname, './public')));
	}

	private initializeRoutes() {
		this.instance.get('/ping', function (req, res) {
			return res.send('pong');
		});
		this.instance.get('/', function (req, res) {
			res.sendFile(Path.join(__dirname, './public', 'index.html'));
		});
		this.instance.get('/main', function (req, res) {
			res.sendFile(Path.join(__dirname, '../app/Main', 'main.html'));
		});
		this.instance.get('/json', function (req, res) {
			res.sendFile(Path.join(__dirname, '../../', 'stories.json'));
		});
		this.instance.get('/json/:id', function (req, res) {
			console
			res.json(stories.find((story) => {
				return +req.params.id === story.id

			}));
		})
		this.instance.get('/joinsession', function (req, res) {
			res.sendFile(Path.join(__dirname, '../app/JoinSession', 'join.html'));
		});
		this.instance.get('/hostsession', function (req, res) {
			res.sendFile(Path.join(__dirname, '../app/HostSession', 'host.html'));
		});
	}
}

export default App;