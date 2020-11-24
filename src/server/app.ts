import Express, { Application } from 'express';
import BodyParser from 'body-parser';
import Cors from 'cors';
import Helmet from 'helmet';
import Compression from 'compression';
import Path from 'path';

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
		this.instance.use(Express.static(Path.join(__dirname, './public')));
	}

	private initializeRoutes() {
		this.instance.get('/ping', function (req, res) {
			return res.send('pong');
		});

		this.instance.get('/', function (req, res) {
			res.sendFile(Path.join(__dirname, './public', 'index.html'));
		});
	}
}

export default App;