import { Component } from 'angular2/angular2';
import * as moment from 'moment';

@Component({
	selector: 'date-time',
	template: `
		<span>{{ dateTimeVal }}</span>
	`
})
export class DateTimeCmp {
	public dateTimeVal: any;
	
	constructor() {
		this.dateTimeVal = moment().fromNow();	
	}
	
}