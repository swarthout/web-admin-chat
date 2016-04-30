import { provide, enableProdMode} from 'angular2/core';

import {AppComponent} from './app';

import {bootstrap} from 'angular2-meteor-auto-bootstrap';

enableProdMode();


bootstrap(AppComponent);