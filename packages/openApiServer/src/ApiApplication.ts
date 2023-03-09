/**
 * NOTE: This file is generated, do not make changes to it.
 */
import * as dotenv from 'dotenv'
import express, { Request, Response } from 'express'
import helmet from 'helmet'
import https = require('https')
import fs = require('fs')
import { Logging } from '@tverstraten/log-annotations'
const cors = require('cors') // eslint-disable-line @typescript-eslint/no-var-requires
import {BillingPeriodApi} from './BillingPeriodApi'
import {EmailApi} from './EmailApi'
import {IdentityApi} from './IdentityApi'
import {BuildApi} from './BuildApi'
import {InvitationApi} from './InvitationApi'
import {NotificationApi} from './NotificationApi'
import {OrganizationApi} from './OrganizationApi'
import {OrganizationalRoleApi} from './OrganizationalRoleApi'
import {PersistentBuilderApi} from './PersistentBuilderApi'
import {PersistentBuilderDependencyApi} from './PersistentBuilderDependencyApi'
import {PersistentBuilderVersionApi} from './PersistentBuilderVersionApi'
import {RepositoryDefinitionApi} from './RepositoryDefinitionApi'
import {RoleApi} from './RoleApi'
import {SubscriptionTypeMetricsApi} from './SubscriptionTypeMetricsApi'
import {SystemDescriptionApi} from './SystemDescriptionApi'
import {TagApi} from './TagApi'
import {TransactionApi} from './TransactionApi'
import {UserApi} from './UserApi'
import {UserRoleApi} from './UserRoleApi'


dotenv.config()

/**
 * A simple express application that binds all the generated api routes.
 * NOTE: This class is generated, do not make changes to it.
 */
export class ApiApplication {
	protected logger = Logging.newLogger('ApiApplication')

	express: express.Application

	httpsServer: any

	server?: any

	// eslint-disable-next-line max-lines-per-function
	constructor() {
		dotenv.config()
		this.express = express()
		const httpsOptions = {
			key: fs.readFileSync('secrets/server.key'),
			cert: fs.readFileSync('secrets/server.pem'),
			ciphers: 'AES128-GCM-SHA256:RC4:HIGH:!MD5:!aNULL:!EDH',
		}
		this.httpsServer = https.createServer(httpsOptions, this.express)

		// security
		this.express.use(
			cors({
				origin: function (__origin: any, callback: any) {
					// allow requests with no origin
					// (like mobile apps or curl requests)
					return callback(null, true)
				},
			})
		)

		this.express.all('*', function (__req, res, next) {
			res.header('Access-Control-Allow-Origin', '*')
			res.header('Access-Control-Allow-Methods', 'GET, POST, PATCH, DELETE, OPTIONS')
			res.header('Access-Control-Allow-Headers', 'Origin, Accept, Content-Type Access-Control-Allow-Headers, Authorization, X-Requested-With')
			next()
		})

		this.express.use(helmet())
		this.express.use(express.json())

		// routes		
		new BillingPeriodApi(this.express)
        new EmailApi(this.express)
        new IdentityApi(this.express)
        new BuildApi(this.express)
        new InvitationApi(this.express)
        new NotificationApi(this.express)
        new OrganizationApi(this.express)
        new OrganizationalRoleApi(this.express)
        new PersistentBuilderApi(this.express)
        new PersistentBuilderDependencyApi(this.express)
        new PersistentBuilderVersionApi(this.express)
        new RepositoryDefinitionApi(this.express)
        new RoleApi(this.express)
        new SubscriptionTypeMetricsApi(this.express)
        new SystemDescriptionApi(this.express)
        new TagApi(this.express)
        new TransactionApi(this.express)
        new UserApi(this.express)
        new UserRoleApi(this.express)
        
        this.express.use((error: any, __req: Request, res: Response, next: any) => {
		    this.logger.error(error.stack)
			res.status(500).send('Something broke!')
			next(error)
		})
	}

	start(port?: number): void {
		this.logger.info(`start`)
		const portToUse = port ? port : parseInt(process.env.PORT as string, 10)
		this.server = this.httpsServer.listen(portToUse, () => {
			this.logger.info(`Listening on port ${JSON.stringify(this.server?.address())}`)
		})
	}

	stop(): void {
		this.logger.info(`stop`)
		this.server?.close()
	}
}
