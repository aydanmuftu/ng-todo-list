import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
/**
 * App config.
 *
 * @type {ApplicationConfig}
 */
export const appConfig: ApplicationConfig = {
    providers: [provideRouter(routes)],
};
