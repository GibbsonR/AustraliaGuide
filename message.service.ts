import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { RestaurantSearchModel } from '../../shared/models/restaurant.search.modal'

@Injectable({ providedIn: 'root' })
export class MessageService {
    private subject = new Subject<RestaurantSearchModel>();

    sendMessage(message: RestaurantSearchModel) {

        this.subject.next(message );
    }

    clearMessages() {
        this.subject = new Subject<RestaurantSearchModel>();
    }

    getMessage(): Observable<any> {
        return this.subject.asObservable();
    }
}
